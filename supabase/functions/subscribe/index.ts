import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const BREVO_API_KEY = Deno.env.get("BREVO_API_KEY")!;
const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("MY_SUPABASE_SERVICE_KEY")!;
const SITE_URL = "https://sitarchive.github.io";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return new Response(JSON.stringify({ error: "Invalid email" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Insert into Supabase using service role (bypasses RLS)
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
    const { data, error } = await supabase
      .from("subscribers")
      .insert({ email })
      .select("unsubscribe_token")
      .single();

    if (error) {
      // Duplicate email
      if (error.code === "23505") {
        return new Response(JSON.stringify({ status: "already_subscribed" }), {
          status: 200,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      throw error;
    }

    const unsubscribeUrl = `${SITE_URL}/unsubscribe.html?token=${data.unsubscribe_token}`;

    // Send welcome email via Brevo
    const emailRes = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": BREVO_API_KEY,
        "accept": "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify({
        sender: { name: "SIT Archive", email: "lakshman.r3ddy@gmail.com" },
        to: [{ email: email }],
        subject: "Welcome to SIT Archive Updates!",
        htmlContent: `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body style="margin:0;padding:0;background-color:#F3F4F6;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;"><table width="100%" cellpadding="0" cellspacing="0" style="background-color:#F3F4F6;padding:32px 16px;"><tr><td align="center"><table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background-color:#FFFFFF;border-radius:16px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1);"><tr><td style="background-color:#C8102E;padding:28px 32px;text-align:center;"><div style="font-size:22px;font-weight:700;color:#FFFFFF;letter-spacing:-0.5px;">📚 SIT Archive</div><div style="font-size:13px;color:rgba(255,255,255,0.8);margin-top:4px;">Welcome Aboard!</div></td></tr><tr><td style="padding:32px;"><p style="color:#374151;font-size:15px;line-height:1.6;margin:0 0 16px;">Hi there,</p><p style="color:#374151;font-size:15px;line-height:1.6;margin:0 0 16px;">Thank you for subscribing to SIT Archive. You are now officially on the list to receive our weekly digest.</p><p style="color:#374151;font-size:15px;line-height:1.6;margin:0 0 16px;">Once a week, we will send you a brief update covering any new question papers uploaded, new site features, or bug fixes. If it is a quiet week with no updates, we will just drop by to say hello and remind you to upload any old papers you might have lying around!</p><p style="color:#374151;font-size:15px;line-height:1.6;margin:0 0 24px;">Our goal is to make sure every student has access to the resources they need.</p><table cellpadding="0" cellspacing="0" style="margin:0 auto 24px;"><tr><td style="background-color:#C8102E;border-radius:10px;"><a href="${SITE_URL}" style="display:inline-block;padding:12px 28px;color:#FFFFFF;text-decoration:none;font-weight:700;font-size:15px;">Visit SIT Archive →</a></td></tr></table><p style="color:#6B7280;font-size:14px;line-height:1.6;margin:0;">Welcome to the community,<br/>— The SIT Archive Team</p></td></tr><tr><td style="padding:20px 32px;border-top:1px solid #E5E7EB;text-align:center;"><p style="color:#9CA3AF;font-size:12px;margin:0 0 8px;">You are receiving this because you subscribed to SIT Archive updates.</p><a href="${unsubscribeUrl}" style="color:#C8102E;font-size:12px;text-decoration:underline;">Do not want these emails anymore? Click here to unsubscribe.</a></td></tr></table></td></tr></table></body></html>`
      })
    });

    return new Response(JSON.stringify({ status: "subscribed" }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
