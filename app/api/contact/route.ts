import { NextResponse } from "next/server";
import { isEmailConfigured, sendLeadEmail } from "@/lib/email";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const allowedVisaTypes = new Set(["visit", "student"]);

export async function POST(request: Request) {
  try {
    if (!isEmailConfigured()) {
      return NextResponse.json(
        { error: "Email service is not configured yet. Please call or WhatsApp us directly." },
        { status: 503 }
      );
    }

    const body = await request.json();
    const name = String(body.name ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const email = String(body.email ?? "").trim();
    const visaType = String(body.visaType ?? "").trim();

    if (!name || !phone || !email || !visaType) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!allowedVisaTypes.has(visaType)) {
      return NextResponse.json(
        { error: "Please select a supported visa type." },
        { status: 400 }
      );
    }

    await sendLeadEmail({ name, phone, email, visaType });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Could not send your enquiry. Please try again or contact us by phone." },
      { status: 500 }
    );
  }
}
