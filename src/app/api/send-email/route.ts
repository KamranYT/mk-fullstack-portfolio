import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, message, to } = await req.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Check if Gmail app password is configured
    if (!process.env.GMAIL_APP_PASSWORD) {
      console.error('❌ GMAIL_APP_PASSWORD is not configured');
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact the administrator.' },
        { status: 500 }
      );
    }

    console.log('📧 Attempting to send email...');
    console.log('📧 From:', 'mk7275374@gmail.com');
    console.log('📧 To:', to || 'mk7275374@gmail.com');
    console.log('📧 Subject: New Contact Form Message from', name);

    // Create transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'mk7275374@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Verify transporter configuration
    try {
      await transporter.verify();
      console.log('✅ Transporter verified successfully');
    } catch (verifyError) {
      console.error('❌ Transporter verification failed:', verifyError);
      return NextResponse.json(
        { error: 'Email service configuration error. Please try again later.' },
        { status: 500 }
      );
    }

    // Email content
    const mailOptions = {
      from: 'mk7275374@gmail.com',
      to: to || 'mk7275374@gmail.com',
      subject: `New Contact Form Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New Contact Form Message</h2>
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #2563eb;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #64748b; font-size: 14px;">
            This message was sent from your portfolio contact form.
          </p>
        </div>
      `,
    };

    // Send email
    console.log('📧 Sending email...');
    await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully');

    return NextResponse.json({ 
      success: true, 
      message: 'Email sent successfully!' 
    });

  } catch (error) {
    console.error('❌ Email sending error:', error);
    
    // Provide more specific error messages
    let errorMessage = 'Failed to send email. Please try again later.';
    
    if (error instanceof Error) {
      if (error.message.includes('Invalid login')) {
        errorMessage = 'Email authentication failed. Please check the configuration.';
      } else if (error.message.includes('quota')) {
        errorMessage = 'Email quota exceeded. Please try again later.';
      } else if (error.message.includes('network')) {
        errorMessage = 'Network error. Please check your connection and try again.';
      }
    }
    
    return NextResponse.json(
      { 
        error: errorMessage,
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
} 
