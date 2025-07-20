// app/api/contact/route.ts
// This file acts as your backend endpoint for the contact form

import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY); // Initialize Resend with your API key

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json(); // Get form data from the request body

    // Basic validation (you can add more robust validation here)
    if (!name || !email || !message) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }
    if (!email.includes('@')) { // Simple email format check
     return NextResponse.json({ message: 'Invalid email format' }, { status: 400 });
    }


    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'denischipeta0@gmail.com', // IMPORTANT: Replace with a verified domain/email from Resend
      to: 'dchipeta@mubas.ac.mw', // IMPORTANT: Replace with the email address you want to receive messages
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error('Resend email error:', error);
      return NextResponse.json({ message: 'Failed to send email via Resend', error: error.message }, { status: 500 });
    }

    console.log('Email sent successfully via Resend:', data);
    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });

  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}