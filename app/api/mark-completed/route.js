// import { NextResponse } from "next/server";
// import { Resend } from "resend";
// import { supabase } from "@/lib/supabaseClient";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(req) {
//   try {
//     const { formId } = await req.json();

//     // 1️⃣ Update form status to completed
//     const { data: formData, error: updateError } = await supabase
//       .from("form_submissions")
//       .update({ status: "completed" })
//       .eq("id", formId)
//       .select("user_id, service_name")
//       .single();

//     if (updateError) throw updateError;

//     // 2️⃣ Get user email from user_data table
//     const { data: userData, error: userError } = await supabase
//       .from("user_data")
//       .select("email, first_name, last_name")
//       .eq("id", formData.user_id)
//       .single();

//     if (userError) throw userError;

//     // 3️⃣ Send email via Resend
//     const emailHtml = `
//       <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;padding:20px;border:1px solid #ddd;border-radius:10px">
//         <h2 style="color:#16a34a">✅ Your Application is Completed</h2>
//         <p>Hi ${userData.first_name} ${userData.last_name || "there"},</p>
//         <p>We’re excited to let you know that your <b>${formData.service_name}</b> form has been marked as <b>Completed</b>.</p>
//         <p>Thank you for trusting <b>TTM Hub</b>.</p>
//         <p style="margin-top:20px;">Best regards,<br><b>TTM Hub Team</b></p>
//       </div>
//     `;

//     await resend.emails.send({
//       from: "TTM Hub <ammarmu007@gmail.com>",
//       to: userData.email,
//       subject: "Your Application is Completed ✅",
//       html: emailHtml,
//     });

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error("Error marking completed:", error);
//     return NextResponse.json({ success: false, error: error.message });
//   }
// }

/* ---------------- Updated Mark Status as Completed --------- */

// import { NextResponse } from "next/server";
// import { Resend } from "resend";
// import { supabase } from "@/lib/supabaseClient";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(req) {
//   try {
//     const { formId } = await req.json();

//     // 1️⃣ Update form status to completed
//     const { data: formData, error: updateError } = await supabase
//       .from("form_submissions")
//       .update({ status: "completed" })
//       .eq("id", formId)
//       .select("user_id, service_name")
//       .single();

//     if (updateError) throw updateError;

//     // 2️⃣ Get user email from user_data table
//     const { data: userData, error: userError } = await supabase
//       .from("user_data")
//       .select("email, first_name, last_name")
//       .eq("id", formData.user_id) // ✅ corrected relationship
//       .single();

//     if (userError) throw userError;

//     // 3️⃣ Send email via Resend
//     const emailHtml = `
//       <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;padding:20px;border:1px solid #ddd;border-radius:10px">
//         <h2 style="color:#16a34a">✅ Your Application is Completed</h2>
//         <p>Hi ${userData.first_name} ${userData.last_name || "there"},</p>
//         <p>We’re excited to let you know that your <b>${formData.service_name}</b> form has been marked as <b>Completed</b>.</p>
//         <p>Thank you for trusting <b>TTM Hub</b>.</p>
//         <p style="margin-top:20px;">Best regards,<br><b>TTM Hub Team</b></p>
//       </div>
//     `;

//     const emailResponse = await resend.emails.send({
//       from: "TTM Hub <ammarmu007@gmail.com>",
//       to: userData.email,
//       subject: "Your Application is Completed ✅",
//       html: emailHtml,
//     });

//     console.log("Email response:", emailResponse);

//     return NextResponse.json({
//       success: true,
//       message: `Email sent successfully to ${userData.email}`,
//     });
//   } catch (error) {
//     console.error("Error marking completed:", error);
//     return NextResponse.json({ success: false, error: error.message });
//   }
// }


/* ---------------- Updated Mark Status as Completed More updated--------- */

import { NextResponse } from "next/server";
import { Resend } from "resend";
import { supabase } from "@/lib/supabaseClient";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { formId } = await req.json();

    // 1️⃣ Update form status
    const { data: formData, error: updateError } = await supabase
      .from("form_submissions")
      .update({ status: "completed" })
      .eq("id", formId)
      .select("user_id, service_name")
      .single();

    if (updateError) throw updateError;
    if (!formData) throw new Error("Form not found or update failed.");

    // 2️⃣ Get user email from user_data (assuming form_submissions.user_id → user_data.id)
    const { data: userData, error: userError } = await supabase
      .from("user_data")
      .select("email, first_name, last_name")
      .eq("id", formData.user_id)
      .single();

    if (userError) throw userError;
    if (!userData?.email) throw new Error("User email not found.");

    // 3️⃣ Prepare email content
    const emailHtml = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;padding:20px;border:1px solid #ddd;border-radius:10px">
        <h2 style="color:#16a34a">✅ Your Application is Completed</h2>
        <p>Hi ${userData.first_name} ${userData.last_name || ""},</p>
        <p>We’re excited to let you know that your <b>${formData.service_name}</b> form has been marked as <b>Completed</b>.</p>
        <p>Thank you for trusting <b>TTM Hub</b>.</p>
        <p style="margin-top:20px;">Best regards,<br><b>TTM Hub Team</b></p>
      </div>
    `;

    // 4️⃣ Send email via Resend
    const emailResponse = await resend.emails.send({
      from: "TTM Hub <grow@ttmhub.co>", // replace with verified sender
      to: userData.email,
      subject: "Your Application is Completed ✅",
      html: emailHtml,
    });

    // 5️⃣ Log and verify response
    console.log("📧 Resend Email Response:", emailResponse);

    if (!emailResponse?.id) {
      throw new Error("Resend did not return a valid email ID. Response: " + JSON.stringify(emailResponse));
    }

    // 6️⃣ Return success response
    return NextResponse.json({
      success: true,
      message: `Email sent successfully to ${userData.email}`,
      emailId: emailResponse.id,
      resendResponse: emailResponse,
    });
  } catch (error) {
    console.error("❌ Error marking completed:", error);
    return NextResponse.json({
      success: false,
      error: error.message || "An unexpected error occurred",
    });
  }
}
