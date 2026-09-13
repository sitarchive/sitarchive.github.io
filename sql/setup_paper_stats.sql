-- Create table for tracking user actions (Anti-Spam)
CREATE TABLE IF NOT EXISTS public.action_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    ip_address TEXT NOT NULL,
    action_type TEXT NOT NULL, -- 'download', 'upvote', 'downvote'
    file_path TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on action_logs
ALTER TABLE public.action_logs ENABLE ROW LEVEL SECURITY;

-- Create an index to quickly count recent actions by IP
CREATE INDEX IF NOT EXISTS idx_action_logs_ip_created ON public.action_logs(ip_address, action_type, created_at);
CREATE INDEX IF NOT EXISTS idx_action_logs_ip_file ON public.action_logs(ip_address, action_type, file_path);

-- Create an RPC to atomically increment stats
CREATE OR REPLACE FUNCTION increment_paper_stat(p_file_path TEXT, p_stat_column TEXT)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER 
AS $$
BEGIN
    IF p_stat_column = 'downloads' THEN
        INSERT INTO public.paper_stats (file_path, downloads)
        VALUES (p_file_path, 1)
        ON CONFLICT (file_path) DO UPDATE
        SET downloads = public.paper_stats.downloads + 1;
    ELSIF p_stat_column = 'upvotes' THEN
        INSERT INTO public.paper_stats (file_path, upvotes)
        VALUES (p_file_path, 1)
        ON CONFLICT (file_path) DO UPDATE
        SET upvotes = public.paper_stats.upvotes + 1;
    ELSIF p_stat_column = 'downvotes' THEN
        INSERT INTO public.paper_stats (file_path, downvotes)
        VALUES (p_file_path, 1)
        ON CONFLICT (file_path) DO UPDATE
        SET downvotes = public.paper_stats.downvotes + 1;
    END IF;
END;
$$;

-- Create an RPC to atomically decrement stats (for Undo Vote feature)
CREATE OR REPLACE FUNCTION decrement_paper_stat(p_file_path TEXT, p_stat_column TEXT)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER 
AS $$
BEGIN
    IF p_stat_column = 'upvotes' THEN
        UPDATE public.paper_stats
        SET upvotes = GREATEST(0, public.paper_stats.upvotes - 1)
        WHERE file_path = p_file_path;
    ELSIF p_stat_column = 'downvotes' THEN
        UPDATE public.paper_stats
        SET downvotes = GREATEST(0, public.paper_stats.downvotes - 1)
        WHERE file_path = p_file_path;
    END IF;
END;
$$;
