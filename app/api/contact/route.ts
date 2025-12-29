import { NextRequest, NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';

// Lazy initialization to avoid build-time errors
const getDb = () => neon(process.env.DATABASE_URL!);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, type, message } = body;

    // Validate required fields
    if (!name || !email || !type || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Insert into database
    const sql = getDb();
    await sql`
      INSERT INTO chiefofstaff_contacts (name, email, company, inquiry_type, message)
      VALUES (${name}, ${email}, ${company || null}, ${type}, ${message})
    `;

    return NextResponse.json(
      { success: true, message: 'Contact form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    );
  }
}
