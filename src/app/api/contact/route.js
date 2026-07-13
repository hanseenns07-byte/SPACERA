import { NextResponse } from "next/server";

// POST /api/contact — validates and "receives" a contact inquiry.
// In production, wire this up to email (Resend/Nodemailer), a CRM, or a DB.
// For now it validates input and returns a success payload, and logs to server.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body." },
      { status: 400 }
    );
  }

  const { name, email, phone, projectType, budget, message } = body || {};

  // Required-field validation.
  const errors = {};
  if (!name || !name.trim()) errors.name = "Full name is required.";
  if (!email || !email.trim()) {
    errors.email = "Email is required.";
  } else if (!EMAIL_RE.test(email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!message || !message.trim()) errors.message = "Message is required.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { success: false, message: "Please fix the errors below.", errors },
      { status: 422 }
    );
  }

  // Simulated persistence. Replace with real integration later.
  console.log("[SPACERA] New inquiry:", {
    name,
    email,
    phone: phone || "-",
    projectType: projectType || "-",
    budget: budget || "-",
    message,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({
    success: true,
    message:
      "Thank you! Your inquiry has been received. We'll get back to you within 24 hours.",
  });
}

export function GET() {
  return NextResponse.json(
    { success: false, message: "Use POST to submit an inquiry." },
    { status: 405 }
  );
}
