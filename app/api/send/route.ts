import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, hospital, message } = await req.json();

    // Verify all fields are present
    if (!name || !email || !hospital || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const smtpUser = process.env.SMTP_USER ?? '';
    // Strip spaces from App Password (Google shows them with spaces for readability)
    const smtpPass = (process.env.SMTP_PASS ?? '').replace(/\s/g, '');
    const smtpHost = process.env.SMTP_HOST ?? 'smtp.gmail.com';
    const smtpPort = Number(process.env.SMTP_PORT) || 587;

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true only for 465 (SSL), false for 587 (TLS/STARTTLS)
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Email to PARS team
    const mailOptions = {
      from: `PARS Health Demo Request <${smtpUser}>`,
      to: 'parswork.in@gmail.com',
      replyTo: email,
      subject: `New Demo Request from ${name} (${hospital})`,
      text: `
Name: ${name}
Email: ${email}
Hospital/Organization: ${hospital}

Message:
${message}
      `.trim(),
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #b91c1c; margin-bottom: 20px;">New Demo Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Hospital/Organization:</strong> ${hospital}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 5px;">${message}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error: unknown) {
    // Log the real error on the server so you can debug
    console.error('=== SMTP Error ===');
    if (error instanceof Error) {
      console.error('Message:', error.message);
      console.error('Stack:', error.stack);
    } else {
      console.error(error);
    }
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
