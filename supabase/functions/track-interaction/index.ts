import { serve } from 'https://deno.land/std@0.177.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.7.1';

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
    // Handle CORS preflight requests
    if (req.method === 'OPTIONS') {
        return new Response('ok', { headers: corsHeaders });
    }

    try {
        const supabaseClient = createClient(
            Deno.env.get('SUPABASE_URL') ?? '',
            Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '' // Need service role to bypass RLS for writing stats
        );

        const { file_path, action } = await req.json();

        if (!file_path || !['download', 'upvote', 'downvote', 'undo_upvote', 'undo_downvote'].includes(action)) {
            return new Response(JSON.stringify({ error: 'Invalid parameters' }), {
                status: 400,
                headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            });
        }

        // Get IP address for rate limiting
        const ip = req.headers.get('x-forwarded-for') || 'unknown';

        // --- ANTI SPAM LOGIC ---
        if (action === 'download') {
            // Check if IP has downloaded more than 20 papers in the last 1 minute
            const oneMinuteAgo = new Date(Date.now() - 60000).toISOString();
            const { count } = await supabaseClient
                .from('action_logs')
                .select('*', { count: 'exact', head: true })
                .eq('ip_address', ip)
                .eq('action_type', 'download')
                .gte('created_at', oneMinuteAgo);

            if (count && count >= 20) {
                return new Response(JSON.stringify({ error: 'Rate limit exceeded for downloads' }), {
                    status: 429,
                    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
                });
            }
        } else if (action === 'undo_upvote' || action === 'undo_downvote') {
            const targetAction = action === 'undo_upvote' ? 'upvote' : 'downvote';
            
            // Delete the previous vote from action_logs
            const { data: deleted, error: deleteError } = await supabaseClient
                .from('action_logs')
                .delete()
                .eq('ip_address', ip)
                .eq('action_type', targetAction)
                .eq('file_path', file_path)
                .select();
                
            if (deleteError) throw deleteError;
            
            if (deleted && deleted.length > 0) {
                // Decrement stat
                const { error } = await supabaseClient.rpc('decrement_paper_stat', {
                    p_file_path: file_path,
                    p_stat_column: targetAction === 'upvote' ? 'upvotes' : 'downvotes'
                });
                if (error) throw error;
            }
            
            return new Response(JSON.stringify({ success: true, undo: true }), {
                headers: { ...corsHeaders, 'Content-Type': 'application/json' },
                status: 200,
            });
            
        } else {
            // Check if IP has already voted on THIS paper
            const { data: existingVotes } = await supabaseClient
                .from('action_logs')
                .select('id')
                .eq('ip_address', ip)
                .in('action_type', ['upvote', 'downvote'])
                .eq('file_path', file_path)
                .limit(1);

            if (existingVotes && existingVotes.length > 0) {
                return new Response(JSON.stringify({ error: 'Already voted on this paper' }), {
                    status: 429,
                    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
                });
            }
        }

        // --- LOG ACTION ---
        await supabaseClient.from('action_logs').insert({
            ip_address: ip,
            action_type: action,
            file_path: file_path
        });

        // --- UPSERT STATS ---
        const { error } = await supabaseClient.rpc('increment_paper_stat', {
            p_file_path: file_path,
            p_stat_column: action === 'download' ? 'downloads' : (action === 'upvote' ? 'upvotes' : 'downvotes')
        });

        if (error) throw error;

        return new Response(JSON.stringify({ success: true }), {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            status: 200,
        });

    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            status: 400,
        });
    }
});
