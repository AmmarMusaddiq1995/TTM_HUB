import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = process.env.HR_SERVICES_NOTIFICATION_EMAIL || "grow@ttmhub.co";

// Helper function to format checkbox values
const formatCheckboxes = (formData, checkboxKeys) => {
  const selected = checkboxKeys
    .filter((key) => formData[key])
    .map((key) => {
      // Convert camelCase to readable format
      return key
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (str) => str.toUpperCase())
        .trim();
    });
  return selected.length > 0 ? selected.join(", ") : "None selected";
};

// Helper function to format work model checkboxes
const formatWorkModel = (formData) => {
  const models = [];
  if (formData.onSite) models.push("On-Site");
  if (formData.remote) models.push("Remote");
  if (formData.hybrid) models.push("Hybrid");
  if (formData.fieldBased) models.push("Field Based / Multi Site");
  return models.length > 0 ? models.join(", ") : "None selected";
};

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
      industry,
      country,
      companySize,
      primaryContactNameRole,
      emailAddress,
      companyWebsite,
      phoneWhatsappNumber,
      bestMethodToContactYou,
      doYouCurrentlyHaveAnHRFunctions,
      anyActiveHRMattersWeShouldBeAwareOf,
      totalEmployees,
      totalPeopleLeadersSupervisors,
      unionizedEnvironment,
      whatDoesSuccessLookLikeIn6090Days,
      whenDoYouWantSupportToStart,
      urgencyLevel,
      preferredEngagementType,
      estimatedBudgetRange,
      anythingElseWeShouldKnowBeforeWeConnect,
    } = formData;

    // HR Services interested in
    const hrServicesInterested = formatCheckboxes(formData, [
      "jobDescriptionsOrgStructure",
      "contractsLettersTemplates",
      "recruitmentProcessSupport",
      "onboardingDesign",
      "hrAudit",
      "hrPoliciesHandbookReviewUpdate",
      "conflictResolutionSupport",
      "investigationsIncidentResponseSupport",
      "disciplinaryProcessesSupport",
      "grievanceHandlingSupport",
      "managerCoachingForPerformanceConversations",
      "performanceManagementDesignCleanUp",
      "pipDesignSupport",
      "coachingForSupervisorsPeopleLeaders",
      "leadershipCoachingEcosystem",
      "teamInterventionsFacilitation",
      "cultureWellness",
      "successionPlanning",
    ]);

    // What's driving this request
    const drivingFactors = formatCheckboxes(formData, [
      "weAreGrowingFast",
      "performanceIssues",
      "conflictComplaints",
      "complianceRiskConcerns",
      "leadershipCapabilityGaps",
      "highTurnover",
      "needToFormalizeHRSystems",
    ]);

    // What they have in place
    const haveInPlace = formatCheckboxes(formData, [
      "employeeHandbookPolicies",
      "employmentContracts",
      "jobDescriptions",
      "performanceReviewProcess",
      "disciplinaryProcedure",
      "grievanceProcedure",
      "onboardingProcess",
      "trainingPlan",
      "noneOfTheAboveNotSure",
    ]);

    // Any of the following apply
    const specialCircumstances = formatCheckboxes(formData, [
      "multipleLocations",
      "shiftWork24HoursOperation",
      "contractorsAsMajorWorkforceSegment",
      "remoteWorkforceAcrossCountries",
      "recentRestructureMerger",
      "highPublicFacingRisk",
    ]);

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 12px;">
        <h2 style="color: #15803d; margin-bottom: 12px;">📋 New HR Services Enquiry</h2>
        <p style="margin-bottom: 16px;">A new HR Services form has been submitted. Below are the details:</p>

        <h3 style="margin-top: 20px; margin-bottom: 12px; color: #15803d; border-bottom: 2px solid #15803d; padding-bottom: 8px;">Company Details</h3>
        <p><strong>Company Name:</strong> ${companyName || "-"}</p>
        <p><strong>Industry:</strong> ${industry || "-"}</p>
        <p><strong>Country(ies) Of Operation:</strong> ${country || "-"}</p>
        <p><strong>Company Size:</strong> ${companySize || "-"}</p>
        <p><strong>Work Model:</strong> ${formatWorkModel(formData)}</p>
        <p><strong>Company Website:</strong> ${companyWebsite || "Not provided"}</p>

        <h3 style="margin-top: 20px; margin-bottom: 12px; color: #15803d; border-bottom: 2px solid #15803d; padding-bottom: 8px;">Primary Contact</h3>
        <p><strong>Name & Role:</strong> ${primaryContactNameRole || "-"}</p>
        <p><strong>Email Address:</strong> ${emailAddress || "-"}</p>
        <p><strong>Phone / WhatsApp:</strong> ${phoneWhatsappNumber || "-"}</p>
        <p><strong>Best Method to Contact:</strong> ${bestMethodToContactYou || "-"}</p>

        <h3 style="margin-top: 20px; margin-bottom: 12px; color: #15803d; border-bottom: 2px solid #15803d; padding-bottom: 8px;">What Support Do You Need?</h3>
        <p><strong>HR Services Interested In:</strong></p>
        <p style="margin-left: 20px; background: #f9fafb; padding: 12px; border-radius: 8px; border-left: 4px solid #15803d;">${hrServicesInterested}</p>
        
        <p style="margin-top: 12px;"><strong>What's driving this request right now? (Up to 2):</strong></p>
        <p style="margin-left: 20px; background: #f9fafb; padding: 12px; border-radius: 8px; border-left: 4px solid #15803d;">${drivingFactors}</p>

        <h3 style="margin-top: 20px; margin-bottom: 12px; color: #15803d; border-bottom: 2px solid #15803d; padding-bottom: 8px;">Current HR Setup</h3>
        <p><strong>Do You Currently Have An HR Functions?</strong> ${doYouCurrentlyHaveAnHRFunctions || "-"}</p>
        
        <p style="margin-top: 12px;"><strong>Do you have the following in place?</strong></p>
        <p style="margin-left: 20px; background: #f9fafb; padding: 12px; border-radius: 8px; border-left: 4px solid #15803d;">${haveInPlace}</p>
        
        <p style="margin-top: 12px;"><strong>Any active HR matters we should be aware of?</strong> ${anyActiveHRMattersWeShouldBeAwareOf || "-"}</p>

        <h3 style="margin-top: 20px; margin-bottom: 12px; color: #15803d; border-bottom: 2px solid #15803d; padding-bottom: 8px;">Team Snapshot (High-Level)</h3>
        <p><strong>Number of Employees:</strong> ${totalEmployees || "-"}</p>
        <p><strong>Number of People Leaders/Supervisors:</strong> ${totalPeopleLeadersSupervisors || "-"}</p>
        <p><strong>Unionized Environment?</strong> ${unionizedEnvironment || "-"}</p>
        
        <p style="margin-top: 12px;"><strong>Any of the following apply? (Optional Multi-Select):</strong></p>
        <p style="margin-left: 20px; background: #f9fafb; padding: 12px; border-radius: 8px; border-left: 4px solid #15803d;">${specialCircumstances || "None selected"}</p>

        <h3 style="margin-top: 20px; margin-bottom: 12px; color: #15803d; border-bottom: 2px solid #15803d; padding-bottom: 8px;">Goals, Timeline & Urgency</h3>
        <p><strong>What does success look like in 60-90 days?</strong></p>
        <p style="margin-left: 20px; background: #f9fafb; padding: 12px; border-radius: 8px; border-left: 4px solid #15803d;">${whatDoesSuccessLookLikeIn6090Days || "Not provided"}</p>
        <p style="margin-top: 12px;"><strong>When do you want support to start?</strong> ${whenDoYouWantSupportToStart || "-"}</p>
        <p><strong>Urgency level?</strong> ${urgencyLevel || "-"}</p>

        <h3 style="margin-top: 20px; margin-bottom: 12px; color: #15803d; border-bottom: 2px solid #15803d; padding-bottom: 8px;">Budget & Engagement Preferences</h3>
        <p><strong>Preferred engagement type?</strong> ${preferredEngagementType || "Not specified"}</p>
        <p><strong>Estimated Budget Range:</strong> ${estimatedBudgetRange || "Not specified"}</p>

        <h3 style="margin-top: 20px; margin-bottom: 12px; color: #15803d; border-bottom: 2px solid #15803d; padding-bottom: 8px;">Additional Information</h3>
        <p><strong>Anything else we should know before we connect?</strong></p>
        <p style="margin-left: 20px; background: #f9fafb; padding: 12px; border-radius: 8px; border-left: 4px solid #15803d;">${anythingElseWeShouldKnowBeforeWeConnect || "Not provided"}</p>

        
      </div>
    `;

    const subjectCompany = companyName || "Unknown Company";

    const emailResponse = await resend.emails.send({
      from: "TTM Hub <grow@ttmhub.co>",
      to: TO_EMAIL,
      subject: `New HR Services enquiry from ${subjectCompany}`,
      html,
    });

    return NextResponse.json(
      { success: true, emailId: emailResponse?.id || null },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending HR services email:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to send notification email",
      },
      { status: 500 }
    );
  }
}

