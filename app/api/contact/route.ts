import { NextResponse } from 'next/server';
import { Resend } from 'resend';

interface ContactRequestBody {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function validateBody(body: unknown): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  const data = body as Partial<ContactRequestBody>;

  if (!data.name || typeof data.name !== 'string' || data.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters.');
  }
  if (!data.email || typeof data.email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Please enter a valid email address.');
  }
  if (!data.subject || typeof data.subject !== 'string' || data.subject.trim().length < 2) {
    errors.push('Subject must be at least 2 characters.');
  }
  if (!data.message || typeof data.message !== 'string' || data.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters.');
  }

  return { valid: errors.length === 0, errors };
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { valid, errors } = validateBody(body);
    if (!valid) {
      return NextResponse.json({ error: errors.join(' ') }, { status: 400 });
    }

    const { name, email, subject, message } = body as ContactRequestBody;

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Email service is not configured. Please try again later.' },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL || 'hubaib@example.com',
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a1a1a; border-bottom: 2px solid #2563EB; padding-bottom: 8px;">
            New Contact Form Submission
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 8px 0; color: #666; font-weight: 600; width: 100px;">Name</td>
              <td style="padding: 8px 0; color: #1a1a1a;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666; font-weight: 600;">Email</td>
              <td style="padding: 8px 0; color: #1a1a1a;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666; font-weight: 600;">Subject</td>
              <td style="padding: 8px 0; color: #1a1a1a;">${subject}</td>
            </tr>
          </table>
          <div style="margin-top: 16px; padding: 16px; background: #f5f5f5; border-radius: 8px;">
            <p style="color: #666; font-weight: 600; margin: 0 0 8px 0;">Message</p>
            <p style="color: #1a1a1a; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #999; font-size: 12px; margin-top: 24px;">
            Sent from your portfolio contact form
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
