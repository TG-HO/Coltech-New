import { NextRequest, NextResponse } from "next/server";
import { sendContactInquiryEmail } from "@/lib/mail";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, organization, company, phone, serviceInterest, message, source } = body;

    // Validate required fields
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { success: false, error: "Full Name is required." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !/^\S+@\S+\.\S+$/.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { success: false, error: "Please enter your message or project requirements." },
        { status: 400 }
      );
    }

    const org = organization || company || "Not Specified";

    const result = await sendContactInquiryEmail({
      name: name.trim(),
      email: email.trim(),
      organization: org.trim(),
      phone: phone?.trim() || "",
      serviceInterest: serviceInterest?.trim() || "General Systems Architecture",
      message: message.trim(),
      source: source || "Website Inquiry Form",
    });

    return NextResponse.json({
      success: true,
      message: "Consultation inquiry dispatched successfully to the engineering desk.",
      routedTo: result.routedTo,
      isOverride: result.isOverride,
    });
  } catch (err: unknown) {
    console.error("[COLTECH Contact Mail API Error]:", err);
    const errorMessage = err instanceof Error ? err.message : "Internal Server Error";

    return NextResponse.json(
      {
        success: false,
        error: "Failed to dispatch email. Please try again or contact us directly at info@coltech.co.",
        details: process.env.NODE_ENV === "development" ? errorMessage : undefined,
      },
      { status: 500 }
    );
  }
}
