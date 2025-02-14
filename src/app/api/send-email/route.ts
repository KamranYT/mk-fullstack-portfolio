import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message, to } = await request.json();

    if (!process.env.GMAIL_APP_PASSWORD) {
      console.error('GMAIL_APP_PASSWORD is not defined in environment variables');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'mk7275374@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: 'mk7275374@gmail.com',
      to: to || 'mk7275374@gmail.com', // Fallback to your email if 'to' is not provided
      subject: `New Contact Form Message from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `,
      html: `
<h3>New Contact Form Message</h3>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Message:</strong> ${message}</p>
      `,
    };

    // Send email with detailed error logging
    try {
      await transporter.sendMail(mailOptions);
      return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (emailError: unknown) {
      console.error('Detailed email error:', {
        error: emailError,
        message: emailError instanceof Error ? emailError.message : 'Unknown error',
        stack: emailError instanceof Error ? emailError.stack : undefined,
      });
      return NextResponse.json(
        { error: `Email sending failed: ${emailError instanceof Error ? emailError.message : 'Unknown error'}` },
        { status: 500 }
      );
    }
  } catch (error: unknown) {
    console.error('Request processing error:', error);
    return NextResponse.json(
      { error: `Failed to process request: ${error instanceof Error ? error.message : 'Unknown error'}` },
      { status: 500 }
    );
  }
} 
