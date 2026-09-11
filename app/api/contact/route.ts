import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { supabase } from '@/lib/supabase';

const resend = new Resend(process.env.RESEND_API_KEY);

// ✏️  Change this to your real email address
const ADMIN_EMAIL = process.env.ADMIN_EMAIL ?? 'YOUR_EMAIL@gmail.com';
const FROM_EMAIL = 'SchengenDesk <onboarding@resend.dev>';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body as {
      name?: string;
      email?: string;
      message?: string;
    };

    // ── 1. Validate inputs ───────────────────────────────────────────────────
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: 'All fields (name, email, message) are required.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    // ── 2. Save to Supabase ──────────────────────────────────────────────────
    const { error: dbError } = await supabase
      .from('contact_submissions')
      .insert([{ name: name.trim(), email: email.trim(), message: message.trim() }]);

    if (dbError) {
      console.error('[Supabase] Insert error:', dbError);
      return NextResponse.json(
        { error: 'Database error. Please try again.' },
        { status: 500 }
      );
    }

    // ── 3. Send thank-you email to student ───────────────────────────────────
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email.trim(),
      subject: 'We received your message — SchengenDesk ✈️',
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
        <body style="margin:0;padding:0;background:#0f1526;font-family:'Segoe UI',Arial,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#0f1526;padding:40px 0;">
            <tr><td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background:#1B2540;border-radius:16px;overflow:hidden;max-width:600px;width:100%;">
                <!-- Header -->
                <tr>
                  <td style="background:linear-gradient(135deg,#1B2540 0%,#2a3560 100%);padding:36px 40px;text-align:center;border-bottom:2px solid #D8B25C;">
                    <div style="font-size:32px;margin-bottom:8px;">✈️</div>
                    <h1 style="margin:0;color:#D8B25C;font-size:26px;font-weight:700;letter-spacing:-0.5px;">Schengen<em style="color:#8FD9B6;font-style:normal;">Desk</em></h1>
                    <p style="margin:6px 0 0;color:#9BA3B8;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Pakistan → Schengen Area</p>
                  </td>
                </tr>
                <!-- Body -->
                <tr>
                  <td style="padding:40px 40px 32px;">
                    <h2 style="margin:0 0 16px;color:#F4EFE2;font-size:22px;font-weight:600;">Hi ${name.trim()} 👋</h2>
                    <p style="margin:0 0 20px;color:#C7CCDA;font-size:15px;line-height:1.7;">
                      Thank you for reaching out to <strong style="color:#D8B25C;">SchengenDesk</strong>! We've received your message and will get back to you personally within <strong style="color:#8FD9B6;">24–48 hours</strong>.
                    </p>
                    <!-- Message preview box -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin:24px 0;">
                      <tr>
                        <td style="background:#0f1526;border-left:3px solid #D8B25C;border-radius:8px;padding:16px 20px;">
                          <p style="margin:0 0 6px;color:#9BA3B8;font-size:11px;text-transform:uppercase;letter-spacing:1px;">Your message</p>
                          <p style="margin:0;color:#C7CCDA;font-size:14px;line-height:1.6;">${message.trim().replace(/\n/g, '<br>')}</p>
                        </td>
                      </tr>
                    </table>
                    <p style="margin:0 0 28px;color:#C7CCDA;font-size:15px;line-height:1.7;">
                      In the meantime, feel free to explore our country guides, visa hurdle ratings, and intake deadlines on the site.
                    </p>
                    <table cellpadding="0" cellspacing="0"><tr><td>
                      <a href="https://schengen-desk.vercel.app/" style="display:inline-block;background:#D8B25C;color:#0f1526;text-decoration:none;font-weight:700;font-size:14px;padding:12px 28px;border-radius:8px;letter-spacing:0.3px;">
                        Explore SchengenDesk →
                      </a>
                    </td></tr></table>
                  </td>
                </tr>
                <!-- Footer -->
                <tr>
                  <td style="background:#0f1526;padding:24px 40px;border-top:1px solid #2a3560;text-align:center;">
                    <p style="margin:0 0 4px;color:#9BA3B8;font-size:12px;">© 2026 SchengenDesk · Not affiliated with any government or embassy.</p>
                    <p style="margin:0;color:#6B7280;font-size:11px;">🇵🇰 Built in Pakistan · For Schengen Applicants</p>
                  </td>
                </tr>
              </table>
            </td></tr>
          </table>
        </body>
        </html>
      `,
    });

    // ── 4. Send admin notification email ────────────────────────────────────
    await resend.emails.send({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      subject: `🎓 New inquiry from ${name.trim()} — SchengenDesk`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head><meta charset="UTF-8"></head>
        <body style="margin:0;padding:0;background:#0f1526;font-family:'Segoe UI',Arial,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#0f1526;padding:40px 0;">
            <tr><td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background:#1B2540;border-radius:16px;overflow:hidden;max-width:600px;width:100%;">
                <tr>
                  <td style="background:#D8B25C;padding:20px 40px;">
                    <h1 style="margin:0;color:#0f1526;font-size:20px;font-weight:700;">🎓 New Student Inquiry</h1>
                    <p style="margin:4px 0 0;color:#3a2f0e;font-size:13px;">SchengenDesk · Contact Form</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:32px 40px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding:10px 0;border-bottom:1px solid #2a3560;">
                          <span style="color:#9BA3B8;font-size:12px;text-transform:uppercase;letter-spacing:1px;display:block;margin-bottom:4px;">Name</span>
                          <strong style="color:#F4EFE2;font-size:16px;">${name.trim()}</strong>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:10px 0;border-bottom:1px solid #2a3560;">
                          <span style="color:#9BA3B8;font-size:12px;text-transform:uppercase;letter-spacing:1px;display:block;margin-bottom:4px;">Email</span>
                          <a href="mailto:${email.trim()}" style="color:#8FD9B6;font-size:15px;">${email.trim()}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:10px 0;border-bottom:1px solid #2a3560;">
                          <span style="color:#9BA3B8;font-size:12px;text-transform:uppercase;letter-spacing:1px;display:block;margin-bottom:4px;">Message</span>
                          <p style="color:#C7CCDA;font-size:14px;line-height:1.7;margin:0;">${message.trim().replace(/\n/g, '<br>')}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:10px 0;">
                          <span style="color:#9BA3B8;font-size:12px;text-transform:uppercase;letter-spacing:1px;display:block;margin-bottom:4px;">Submitted</span>
                          <span style="color:#C7CCDA;font-size:14px;">${new Date().toUTCString()}</span>
                        </td>
                      </tr>
                    </table>
                    <div style="margin-top:24px;">
                      <a href="mailto:${email.trim()}" style="display:inline-block;background:#8FD9B6;color:#0f1526;text-decoration:none;font-weight:700;font-size:13px;padding:10px 24px;border-radius:8px;">
                        Reply to ${name.trim()} →
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="background:#0f1526;padding:16px 40px;text-align:center;">
                    <p style="margin:0;color:#6B7280;font-size:11px;">This is an automated notification from SchengenDesk.</p>
                  </td>
                </tr>
              </table>
            </td></tr>
          </table>
        </body>
        </html>
      `,
    });

    return NextResponse.json(
      { success: true, message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (err) {
    console.error('[Contact API] Unexpected error:', err);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
