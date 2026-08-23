import nodemailer from "nodemailer";
import { siteConfig } from "@/content/site";

export type LeadPayload = {
  name: string;
  phone: string;
  email: string;
  visaType: string;
};

const visaLabels: Record<string, string> = {
  visit: "Visit Visa",
  student: "Student Visa",
  "work-permit": "Work Permit",
};

function getSmtpConfig() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? "465");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return null;
  }

  return {
    host,
    port,
    secure: process.env.SMTP_SECURE !== "false",
    auth: { user, pass },
  };
}

export function isEmailConfigured() {
  return getSmtpConfig() !== null;
}

export async function sendLeadEmail(payload: LeadPayload) {
  const smtp = getSmtpConfig();
  if (!smtp) {
    throw new Error("Email is not configured on the server.");
  }

  const to = process.env.LEAD_TO_EMAIL ?? siteConfig.email;
  const from = process.env.LEAD_FROM_EMAIL ?? smtp.auth.user;
  const visaLabel = visaLabels[payload.visaType] ?? payload.visaType;
  const submittedAt = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
  });

  const transporter = nodemailer.createTransport(smtp);

  const text = [
    "New website enquiry",
    "",
    `Name: ${payload.name}`,
    `Phone: ${payload.phone}`,
    `Email: ${payload.email}`,
    `Visa type: ${visaLabel}`,
    `Submitted: ${submittedAt}`,
    "",
    `Reply to: ${payload.email}`,
  ].join("\n");

  const html = `
    <h2>New website enquiry</h2>
    <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(payload.phone)}</p>
    <p><strong>Email:</strong> <a href="mailto:${escapeHtml(payload.email)}">${escapeHtml(payload.email)}</a></p>
    <p><strong>Visa type:</strong> ${escapeHtml(visaLabel)}</p>
    <p><strong>Submitted:</strong> ${escapeHtml(submittedAt)}</p>
  `;

  await transporter.sendMail({
    from: `${siteConfig.name} <${from}>`,
    to,
    replyTo: payload.email,
    subject: `New enquiry — ${visaLabel} — ${payload.name}`,
    text,
    html,
  });
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
