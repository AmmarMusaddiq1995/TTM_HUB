import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = process.env.EAP_NOTIFICATION_EMAIL || "grow@ttmhub.co";

export async function POST(req) {
  try {
    const { formData } = await req.json();

    if (!formData) {
      return NextResponse.json(
        { success: false, error: "Missing form data" },
        { status: 400 }
      );
    }

    const {
      companyName,
      totalHeadCount,
      country,
      industry,
      primaryOfficeLocation,
      companyWebsite,
      primaryContactNameRole,
      emailAddress,
      phoneWhatsappNumber,
      bestMethodToContactYou,
      preferredSupportChannel,
      howShouldEmployeesAccessSupport,
      doYouNeedAfterHoursAccess,
      preferredTurnaroundTimeForFirstAppointment,
      doYouNeedUrgentCrisisEscalationGuidance,
      targetStartDate,
      budgetApproach,
      estimatedBudgetRange,
      billingCountryCurrency,
      keyConcernsOrContext,
      howDidYouHearAboutUs,
      // checkbox + other fields are included via JSON.stringify below
    } = formData;

 

    const { topSupportAreas = [] } = formData;

        const supportAreasText = topSupportAreas.length > 0 ? topSupportAreas.join(", ") : "-";

    const { servicesIncluded = [] } = formData;
   
        const servicesIncludedText = servicesIncluded.length > 0 ? servicesIncluded.join(", ") : "-";


    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; padding: 16px; border: 1px solid #e5e7eb; border-radius: 12px;">
        <h2 style="color: #15803d; margin-bottom: 12px;">🌱 New EAP Services Enquiry</h2>
        <p style="margin-bottom: 16px;">A new EAP Services form has been submitted. Below are the details:</p>

        <h3 style="margin-top: 16px; margin-bottom: 8px;">Company Details</h3>
        <p><strong>Company Name:</strong> ${companyName || "-"}</p>
        <p><strong>Total Head Count:</strong> ${totalHeadCount || "-"}</p>
        <p><strong>Country:</strong> ${country || "-"}</p>
        <p><strong>Industry:</strong> ${industry || "-"}</p>
        <p><strong>Primary Office Location:</strong> ${primaryOfficeLocation || "-"}</p>
        <p><strong>Company Website:</strong> ${companyWebsite || "-"}</p>

        <h3 style="margin-top: 16px; margin-bottom: 8px;">Primary Contact</h3>
        <p><strong>Name & Role:</strong> ${primaryContactNameRole || "-"}</p>
        <p><strong>Email Address:</strong> ${emailAddress || "-"}</p>
        <p><strong>Phone / WhatsApp:</strong> ${phoneWhatsappNumber || "-"}</p>
        <p><strong>Best Method to Contact:</strong> ${bestMethodToContactYou || "-"}</p>

        <h3 style="margin-top: 16px; margin-bottom: 8px;">Services You Want Included</h3>
        <p><strong>Selected Services:</strong> ${servicesIncludedText}</p>

        <h3 style="margin-top: 16px; margin-bottom: 8px;">Top Support Areas</h3>
        <p><strong>Selected Areas:</strong> ${supportAreasText}</p>

        <h3 style="margin-top: 16px; margin-bottom: 8px;">Preferred Support Channel</h3>
        <p><strong>Preferred Support Channel:</strong> ${preferredSupportChannel || "-"}</p>


        <h3 style="margin-top: 16px; margin-bottom: 8px;">Access & Response Expectations</h3>
        <p><strong>How should employees access support?</strong> ${howShouldEmployeesAccessSupport || "-"}</p>
        <p><strong>After-hours access needed?</strong> ${doYouNeedAfterHoursAccess || "-"}</p>
        <p><strong>Preferred turnaround time for first appointment:</strong> ${preferredTurnaroundTimeForFirstAppointment || "-"}</p>
        <p><strong>Urgent/crisis escalation guidance needed?</strong> ${doYouNeedUrgentCrisisEscalationGuidance || "-"}</p>
        <p><strong>Target start date:</strong> ${targetStartDate || "-"}</p>

        <h3 style="margin-top: 16px; margin-bottom: 8px;">Commercials</h3>
        <p><strong>Budget Approach:</strong> ${budgetApproach || "-"}</p>
        <p><strong>Estimated Budget Range:</strong> ${estimatedBudgetRange || "-"}</p>
        <p><strong>Billing Country & Currency:</strong> ${billingCountryCurrency || "-"}</p>

        <h3 style="margin-top: 16px; margin-bottom: 8px;">Additional Information</h3>
        <p><strong>Key Concerns or Context:</strong> ${keyConcernsOrContext || "-"}</p>
        <p><strong>How did they hear about you?</strong> ${howDidYouHearAboutUs || "-"}</p>

        
      </div>
    `;

    const subjectCompany = companyName || "Unknown Company";

    const emailResponse = await resend.emails.send({
      from: "TTM Hub <grow@ttmhub.co>",
      to: TO_EMAIL,
      subject: `New EAP Services enquiry from ${subjectCompany}`,
      html,
    });

    return NextResponse.json(
      { success: true, emailId: emailResponse?.id || null },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending EAP services email:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to send notification email",
      },
      { status: 500 }
    );
  }
}

