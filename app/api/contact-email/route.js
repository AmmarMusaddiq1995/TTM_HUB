import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = "admin@ttmhub.co";

export async function POST(req) {
  try {
    const { formData } = await req.json();

    const {
      name,
      email,
      whatsapp,
      companyName,
      location,
      supportRelatedTo,
      intent,
      message,
    } = formData;

    const html = `
      <div style="font-family: Arial; max-width: 600px;">
        <h2>📩 New Contact Form Submission</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>WhatsApp:</strong> ${whatsapp || "-"}</p>
        <p><strong>Company:</strong> ${companyName || "-"}</p>
        <p><strong>Location:</strong> ${location || "-"}</p>

        <p><strong>Support Related To:</strong><br />
          ${supportRelatedTo.join(", ") || "-"}
        </p>

        <p><strong>I Want To:</strong><br />
          ${intent.join(", ") || "-"}
        </p>

        <p><strong>Message:</strong><br />
          ${message || "-"}
        </p>
      </div>
    `;

    await resend.emails.send({
      from: "TTM Hub <grow@ttmhub.co>",
      to: TO_EMAIL,
      subject: "New Contact Us Submission",
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact email error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
