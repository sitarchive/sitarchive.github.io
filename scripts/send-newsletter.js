/**
 * SIT Archive — Weekly Newsletter Script
 * Reads changelog-data.js, checks for updates from the past 7 days,
 * fetches active subscribers from Supabase, and sends a styled HTML email via Resend.
 */

const fs = require('fs');
const path = require('path');

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;
const BREVO_API_KEY = process.env.BREVO_API_KEY;
const SITE_URL = 'https://sitarchive.github.io';

// ── 1. Parse changelog-data.js for recent updates ──
function getRecentUpdates() {
    const filePath = path.join(__dirname, '..', 'js', 'changelog-data.js');
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Extract just the array by finding 'const CHANGELOG_DATA ='
    content = content.replace(/^.*?const CHANGELOG_DATA\s*=\s*/s, '').replace(/;\s*$/, '');
    
    let data;
    try {
        data = eval(content); // Safe here — we control the file
    } catch (e) {
        console.error('Failed to parse changelog-data.js:', e.message);
        return [];
    }
    
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    
    const recent = [];
    for (const month of data) {
        for (const entry of month.entries) {
            const entryDate = new Date(entry.date);
            if (entryDate >= sevenDaysAgo) {
                recent.push(entry);
            }
        }
    }
    
    return recent;
}

// ── 2. Fetch active subscribers from Supabase ──
async function getSubscribers() {
    const res = await fetch(
        `${SUPABASE_URL}/rest/v1/subscribers?is_active=eq.true&select=email,unsubscribe_token`,
        {
            headers: {
                'apikey': SUPABASE_SERVICE_KEY,
                'Authorization': `Bearer ${SUPABASE_SERVICE_KEY}`,
            }
        }
    );
    
    if (!res.ok) {
        throw new Error(`Supabase error: ${res.status} ${await res.text()}`);
    }
    
    return res.json();
}

// ── 3. Build the HTML email ──
function buildEmail(updates, unsubscribeToken) {
    const unsubscribeUrl = `${SITE_URL}/unsubscribe.html?token=${unsubscribeToken}`;
    const hasUpdates = updates.length > 0;
    
    const updatesList = updates.map(u => `
        <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #E5E7EB;">
                <div style="font-size: 12px; color: #6B7280; margin-bottom: 4px;">${u.date}</div>
                <div style="font-weight: 600; color: #111827; margin-bottom: 4px;">${u.title}</div>
            </td>
        </tr>
    `).join('');
    
    const updatesSection = hasUpdates ? `
        <p style="color: #374151; font-size: 15px; line-height: 1.6; margin: 0 0 20px;">
            We've made some fresh updates to the SIT Archive this week! Here's a quick summary:
        </p>
        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 24px;">
            ${updatesList}
        </table>
        <p style="color: #374151; font-size: 15px; line-height: 1.6; margin: 0 0 24px;">
            To see the full details of each update, check out the changelog:
        </p>
        <table cellpadding="0" cellspacing="0" style="margin: 0 auto 24px;">
            <tr>
                <td style="background-color: #C8102E; border-radius: 10px;">
                    <a href="${SITE_URL}/changelog.html" style="display: inline-block; padding: 12px 28px; color: #FFFFFF; text-decoration: none; font-weight: 700; font-size: 15px;">
                        View Full Changelog →
                    </a>
                </td>
            </tr>
        </table>
    ` : `
        <p style="color: #374151; font-size: 15px; line-height: 1.6; margin: 0 0 20px;">
            It's been a quiet week over here at the SIT Archive — no new site updates or papers were added over the last 7 days.
        </p>
        <p style="color: #374151; font-size: 15px; line-height: 1.6; margin: 0 0 20px;">
            As always, this project is community-driven. If you've just finished your exams and have papers sitting on your desk, or if you have ideas for new site features, your contributions are what keep this archive alive!
        </p>
        <table cellpadding="0" cellspacing="0" style="margin: 0 auto 24px;">
            <tr>
                <td style="background-color: #C8102E; border-radius: 10px;">
                    <a href="${SITE_URL}/submit.html" style="display: inline-block; padding: 12px 28px; color: #FFFFFF; text-decoration: none; font-weight: 700; font-size: 15px;">
                        Contribute Papers or Feedback →
                    </a>
                </td>
            </tr>
        </table>
    `;
    
    return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin: 0; padding: 0; background-color: #F3F4F6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #F3F4F6; padding: 32px 16px;">
        <tr>
            <td align="center">
                <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 560px; background-color: #FFFFFF; border-radius: 16px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                    
                    <!-- Header -->
                    <tr>
                        <td style="background-color: #C8102E; padding: 28px 32px; text-align: center;">
                            <div style="font-size: 22px; font-weight: 700; color: #FFFFFF; letter-spacing: -0.5px;">
                                📚 SIT Archive
                            </div>
                            <div style="font-size: 13px; color: rgba(255,255,255,0.8); margin-top: 4px;">
                                Weekly Update
                            </div>
                        </td>
                    </tr>
                    
                    <!-- Body -->
                    <tr>
                        <td style="padding: 32px;">
                            <p style="color: #374151; font-size: 15px; line-height: 1.6; margin: 0 0 16px;">
                                Hi there,
                            </p>
                            ${updatesSection}
                            <p style="color: #6B7280; font-size: 14px; line-height: 1.6; margin: 0;">
                                — The SIT Archive Team
                            </p>
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td style="padding: 20px 32px; border-top: 1px solid #E5E7EB; text-align: center;">
                            <p style="color: #9CA3AF; font-size: 12px; margin: 0 0 8px;">
                                You're receiving this because you subscribed to SIT Archive updates.
                            </p>
                            <a href="${unsubscribeUrl}" style="color: #C8102E; font-size: 12px; text-decoration: underline;">
                                Don't want these emails anymore? Click here to unsubscribe.
                            </a>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`;
}

// ── 4. Send email via Brevo ──
async function sendEmail(to, subject, html) {
    const res = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
            'api-key': BREVO_API_KEY,
            'accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            sender: { name: "SIT Archive", email: "lakshman.r3ddy@gmail.com" },
            to: [{ email: to }],
            subject: subject,
            htmlContent: html
        })
    });
    
    if (!res.ok) {
        const err = await res.text();
        console.error(`Failed to send to ${to}: ${err}`);
        return false;
    }
    
    return true;
}

// ── 5. Main ──
async function main() {
    console.log('📬 SIT Archive Weekly Newsletter');
    console.log('================================\n');
    
    // Get recent updates
    const updates = getRecentUpdates();
    console.log(`📋 Found ${updates.length} update(s) from the past 7 days`);
    
    const subject = updates.length > 0
        ? `SIT Archive Weekly Update 🚀`
        : `SIT Archive Weekly Check-in`;
    
    // Get subscribers
    const subscribers = await getSubscribers();
    console.log(`👥 ${subscribers.length} active subscriber(s)\n`);
    
    if (subscribers.length === 0) {
        console.log('No subscribers yet. Exiting.');
        return;
    }
    
    // Send to each subscriber
    let sent = 0;
    let failed = 0;
    
    for (const sub of subscribers) {
        const html = buildEmail(updates, sub.unsubscribe_token);
        const success = await sendEmail(sub.email, subject, html);
        if (success) {
            sent++;
            console.log(`✅ Sent to ${sub.email}`);
        } else {
            failed++;
            console.log(`❌ Failed: ${sub.email}`);
        }
        
        // Small delay to respect rate limits
        await new Promise(r => setTimeout(r, 100));
    }
    
    console.log(`\n🏁 Done! Sent: ${sent}, Failed: ${failed}`);
}

main().catch(err => {
    console.error('Fatal error:', err);
    process.exit(1);
});
