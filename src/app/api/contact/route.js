import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { site } from "@/data/site";

// POST /api/contact — validates an inquiry and emails it to the studio inbox.
//
// Email delivery uses SMTP via environment variables (see .env.example):
//   SMTP_HOST   (default: smtp.gmail.com)
//   SMTP_PORT   (default: 465)
//   SMTP_USER   the sending account, e.g. idspacera@gmail.com
//   SMTP_PASS   a Gmail *App Password* (not your normal password)
//   CONTACT_TO  where inquiries land (default: idspacera@gmail.com)
//
// If SMTP isn't configured yet, the route still accepts the inquiry and logs it
// to the server so the form never errors — but nothing is emailed until the
// env vars are set. Configure them in Netlify → Site settings → Environment.

export const runtime = "nodejs"; // nodemailer needs the Node runtime (not edge)

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CONTACT_TO = process.env.CONTACT_TO || "idspacera@gmail.com";

// Basic HTML-escaping so submitted values can't inject markup into the email.
function esc(v = "") {
  return String(v)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function buildEmail({ name, email, phone, projectType, budget, message }) {
  const rows = [
    ["Name", name],
    ["Email", email],
    ["Phone", phone || "—"],
    ["Project Type", projectType || "—"],
    ["Budget", budget || "—"],
  ]
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 14px 6px 0;color:#8A6645;font-weight:600;white-space:nowrap">${k}</td><td style="padding:6px 0;color:#2C2C2C">${esc(
          v
        )}</td></tr>`
    )
    .join("");

  const html = `
  <div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:0 auto;background:#F8F6F3;border-radius:16px;overflow:hidden;border:1px solid #eee">
    <div style="background:#8A6645;color:#fff;padding:20px 24px">
      <h2 style="margin:0;font-size:18px;letter-spacing:.5px">SPACERA — New Inquiry</h2>
    </div>
    <div style="padding:24px">
      <table style="border-collapse:collapse;font-size:14px;width:100%">${rows}</table>
      <div style="margin-top:16px;padding-top:16px;border-top:1px solid #e5ddd3">
        <p style="margin:0 0 6px;color:#8A6645;font-weight:600;font-size:14px">Message</p>
        <p style="margin:0;color:#2C2C2C;font-size:14px;line-height:1.6;white-space:pre-wrap">${esc(
          message
        )}</p>
      </div>
    </div>
  </div>`;

  const text = `New SPACERA inquiry
Name: ${name}
Email: ${email}
Phone: ${phone || "-"}
Project Type: ${projectType || "-"}
Budget: ${budget || "-"}

Message:
${message}`;

  return { html, text };
}

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

  // Required-field + format validation.
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

  const clean = {
    name: name.trim(),
    email: email.trim(),
    phone,
    projectType,
    budget,
    message: message.trim(),
  };

  // Send the email if SMTP is configured.
  const { SMTP_USER, SMTP_PASS } = process.env;
  if (SMTP_USER && SMTP_PASS) {
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.gmail.com",
        port: Number(process.env.SMTP_PORT || 465),
        secure: Number(process.env.SMTP_PORT || 465) === 465,
        auth: { user: SMTP_USER, pass: SMTP_PASS },
      });

      const { html, text } = buildEmail(clean);
      await transporter.sendMail({
        from: `"SPACERA Website" <${SMTP_USER}>`,
        to: CONTACT_TO,
        replyTo: `"${clean.name}" <${clean.email}>`,
        subject: `New inquiry from ${clean.name} — SPACERA`,
        text,
        html,
      });
    } catch (err) {
      console.error("[SPACERA] Failed to send inquiry email:", err);
      return NextResponse.json(
        {
          success: false,
          message:
            "We couldn't send your message right now. Please try again or reach us on WhatsApp.",
        },
        { status: 502 }
      );
    }
  } else {
    // Not configured yet — don't lose the lead, log it and let the user through.
    console.warn(
      "[SPACERA] SMTP not configured; inquiry logged only:",
      JSON.stringify({ ...clean, receivedAt: new Date().toISOString() })
    );
  }

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
