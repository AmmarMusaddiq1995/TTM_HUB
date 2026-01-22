"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabaseClient";
import { useAuthContext } from "@/context/AppContext";
import { useRouter } from "next/navigation";
import { Footer } from "../footer";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";




export function HrServicesForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [formData, setFormData] = useState({
   
  });

  const { user } = useAuthContext();
  const [userPersonalId, setUserPersonalId] = useState(null);
  
  useEffect(() => {
    const fetchUserData = async () => {
      if (!user?.id) return;
      console.log("user :", user);

      const { data, error } = await supabase
        .from("user_data")
        .select("id")
        .eq("auth_user_id", user?.id)
        .single();

      if (error) {
        console.error("Error fetching user data:", error);
      } else {
        console.log("user data :", data);
        setUserPersonalId(data.id);
        console.log("user personal id :", data.id);
      }
    };

    fetchUserData();
  }, [user]);



  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      console.log("userPersonalId :", userPersonalId);
      console.log("user :", user);

      if (!user || userError) {
        alert("Please login to submit this form.");
        setLoading(false);
        return;
      }

      const submissionData = {
        ...formData,
      };

      console.log(
        "submissionData inserting into form_submissions",
        submissionData
      );

      const { error } = await supabase.from("form_submissions").insert([
        {
          user_id: userPersonalId,
          service_name: "HR Services",
          form_data: submissionData,
          status: "pending",
          payment_status: "pending",
          // amount:price


        },
      ]);

      console.log("form_submissions inserted successfully");

      // Fire-and-forget: send notification email to internal team
      try {
        const res = await fetch("/api/hr-services-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ formData: submissionData }),
        });

        if (!res.ok) {
          console.error("Failed to send HR Services notification email");
        }
      } catch (emailErr) {
        console.error("Error calling HR Services email API:", emailErr);
      }

      alert("Thank you! We will get back to you shortly on your email.");
      router.push("/");
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="relative min-h-screen py-12 px-4">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/30 blur-3xl"></div>
          <div className="absolute top-1/3 -right-20 h-80 w-80 rounded-full bg-purple-300/30 blur-3xl"></div>
          <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-300/20 blur-3xl"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-transparent to-green-300"></div>
        </div>
      <Card className="relative z-10 max-w-2xl mx-auto shadow-xl shadow-black">
        <CardHeader>
          <CardTitle className="text-lg font-bold text-center">
            Start Your HR Services
          </CardTitle>
          <CardDescription className="text-center">
            Fill out the form below to begin your HR services process
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4 border rounded-md p-4">

            <div className="space-y-2">
              <h2 className="text-lg font-bold text-center">
                 Company Details
              </h2>
            </div>

              <div className="space-y-2">
                <Label htmlFor="companyName">
                  Company Name
                </Label>
                <Input
                  id="companyName"
                  value={formData.companyName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      companyName: e.target.value,
                    })
                  }
                  className="border-gray-300 shadow-md shadow-black"
                  required
                />
              </div>  

              <div className="space-y-2">
              <Label htmlFor="industry">
                Industry
              </Label>
              <Select
                value={formData.industry}
                onValueChange={(value) =>
                  setFormData({ ...formData, industry: value })
                }
                required
              >
                <SelectTrigger className="border-gray-300 shadow-md shadow-black">
                  <SelectValue placeholder="Select industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="FinancialServices">
                    Financial Services
                  </SelectItem>
                  <SelectItem value="Energy">
                    Energy
                  </SelectItem>
                  <SelectItem value="Construction">
                    Construction
                  </SelectItem>
                  <SelectItem value="Retail">
                    Retail
                  </SelectItem>
                  <SelectItem value="Manufacturing">
                    Manufacturing
                  </SelectItem>
                  <SelectItem value="Healthcare">
                    Healthcare
                  </SelectItem>
                  <SelectItem value="Education">
                    Education
                  </SelectItem>
                  <SelectItem value="Hospitality">
                    Hospitality
                  </SelectItem>
                  <SelectItem value="PublicSector">
                    Public Sector
                  </SelectItem>
                  <SelectItem value="NGO">
                    NGO
                  </SelectItem>
                  <SelectItem value="Other">
                    Other
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
                <Label htmlFor="country">Country(ies) Of Operation</Label>
                <Input
                  id="country"
                  value={formData.country}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      country: e.target.value,
                    })
                  }
                  className="border-gray-300 shadow-md shadow-black"
                  required
                />
              </div>

              <div className="space-y-2">
              <Label htmlFor="companySize">Company Size</Label>
              <Select
                value={formData.companySize}
                onValueChange={(value) =>
                  setFormData({ ...formData, companySize: value })
                }
                required
              >
                <SelectTrigger className="border-gray-300 shadow-md shadow-black">
                  <SelectValue placeholder="Select company size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-10">
                    1-10
                  </SelectItem>
                  <SelectItem value="11-25">
                    11-25
                  </SelectItem>
                  <SelectItem value="26-50">
                    26-50
                  </SelectItem>
                  <SelectItem value="51-100">
                    51-100
                  </SelectItem>
                  <SelectItem value="101-250">
                    101-250
                  </SelectItem>
                  <SelectItem value="251+">
                    251+
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
                <Label htmlFor="workModel">Work Model</Label>
                <div className="flex items-center space-x-2 ">
                  <input
                    id="onSite"
                    type="checkbox"
                    checked={!!formData.onSite}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        onSite: e.target.checked,
                      })
                    }
                  />
                  <Label htmlFor="onSite">On-Site</Label>
                </div>
                <div className="flex items-center space-x-2 ">
                  <input
                    id="remote"
                    type="checkbox"
                    checked={!!formData.remote}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        remote: e.target.checked,
                      })
                    }
                  />
                  <Label htmlFor="remote">Remote</Label>
                </div>
                <div className="flex items-center space-x-2 ">
                  <input
                    id="hybrid"
                    type="checkbox"
                    checked={!!formData.hybrid}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        hybrid: e.target.checked,
                      })
                    }
                  />
                  <Label htmlFor="hybrid">Hybrid</Label>
                </div>
                <div className="flex items-center space-x-2 ">
                  <input
                    id="fieldBased"
                    type="checkbox"
                    checked={!!formData.fieldBased}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        fieldBased: e.target.checked,
                      })
                    }
                  />
                  <Label htmlFor="fieldBased">Field Based / Multi Site</Label>
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="primaryContactNameRole">Primary Contact Name & Role</Label>
                <Input
                  id="primaryContactNameRole"
                  value={formData.primaryContactNameRole}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      primaryContactNameRole: e.target.value,
                    })
                  }
                  className="border-gray-300 shadow-md shadow-black"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="emailAddress">Email Address (Will Be Used For Communication)</Label>
                <Input
                  id="emailAddress"
                  value={formData.emailAddress}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      emailAddress: e.target.value,
                    })
                  }
                  className="border-gray-300 shadow-md shadow-black"
                  required
                />
              </div>


              <div className="space-y-2">
                <Label htmlFor="companyWebsite">Company Website(Optional)</Label>
                <Input
                  id="companyWebsite"
                  value={formData.companyWebsite}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      companyWebsite: e.target.value,
                    })
                  }
                  className="border-gray-300 shadow-md shadow-black"
                  optional
                />
              </div>
              

              <div className="space-y-2">
                <Label htmlFor="phoneWhatsappNumber">Phone Number / Whatsapp Number</Label>
                <Input
                  id="phoneWhatsappNumber"
                  value={formData.phoneWhatsappNumber}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      phoneWhatsappNumber: e.target.value,
                    })
                  }
                  className="border-gray-300 shadow-md shadow-black"
                  required
                />
              </div>



              <div className="space-y-2">
              <Label htmlFor="bestMethodToContactYou">Best Method To Contact You?</Label>
              <Select
                value={formData.bestMethodToContactYou}
                onValueChange={(value) =>
                  setFormData({ ...formData, bestMethodToContactYou: value })
                }
                required
              >
                <SelectTrigger className="border-gray-300 shadow-md shadow-black">
                  <SelectValue placeholder="Select best method to contact you" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Email">
                    Email
                  </SelectItem>
                  <SelectItem value="Phone">
                    Phone
                  </SelectItem>
                  <SelectItem value="Whatsapp">
                    Whatsapp
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <hr style={{ border: "1px solid #e0e0e0" }} />

            <div className="space-y-2">
              <h2 className="text-lg font-bold text-center">
                 What Support Do You Need?
              </h2>
            </div>

            <div className="space-y-2">
                <Label htmlFor="servicesYouWantIncluded">Which HR Services Are You Interested In? (Check All That Apply)</Label>
              
                <div className="flex items-center space-x-2 ">
                  <input
                    id="jobDescriptionsOrgStructure"
                    type="checkbox"
                    checked={!!formData.jobDescriptionsOrgStructure}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        jobDescriptionsOrgStructure: e.target.checked,
                      })
                    }
                  />
                  <Label htmlFor="jobDescriptionsOrgStructure">Job descriptions & Org structure support</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    id="contractsLettersTemplates"
                    type="checkbox"
                    checked={!!formData.contractsLettersTemplates}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        contractsLettersTemplates: e.target.checked,
                      })
                    }
                  />
                  <Label htmlFor="contractsLettersTemplates">Contracts/letters/templates (offer letters, warnings, termination letters etc)</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    id="recruitmentProcessSupport"
                    type="checkbox"
                    checked={!!formData.recruitmentProcessSupport}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        recruitmentProcessSupport: e.target.checked,
                      })
                    }
                  />
                  <Label htmlFor="recruitmentProcessSupport">Recruitment process support (screening, interviews, selection etc)</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    id="onboardingDesign"
                    type="checkbox"
                    checked={!!formData.onboardingDesign}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        onboardingDesign: e.target.checked,
                      })
                    }
                  />
                  <Label htmlFor="onboardingDesign">Onboarding design</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    id="hrAudit"
                    type="checkbox"
                    checked={!!formData.hrAudit}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        hrAudit: e.target.checked,
                      })
                    }
                  />
                  <Label htmlFor="hrAudit">HR audit (documentation, processes, risk check)</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    id="hrPoliciesHandbookReviewUpdate"
                    type="checkbox"
                    checked={!!formData.hrPoliciesHandbookReviewUpdate}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        hrPoliciesHandbookReviewUpdate: e.target.checked,
                      })
                    }
                  />
                  <Label htmlFor="hrPoliciesHandbookReviewUpdate">HR policies & handbook review/update</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    id="conflictResolutionSupport"
                    type="checkbox"
                    checked={!!formData.conflictResolutionSupport}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        conflictResolutionSupport: e.target.checked,
                      })
                    }
                  />
                  <Label htmlFor="conflictResolutionSupport">Conflict resolution support</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    id="investigationsIncidentResponseSupport"
                    type="checkbox"
                    checked={!!formData.investigationsIncidentResponseSupport}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        investigationsIncidentResponseSupport: e.target.checked,
                      })
                    }
                  />
                  <Label htmlFor="investigationsIncidentResponseSupport">Investigations/Incident response support</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    id="disciplinaryProcessesSupport"
                    type="checkbox"
                    checked={!!formData.disciplinaryProcessesSupport}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        disciplinaryProcessesSupport: e.target.checked,
                      })
                    }
                  />
                  <Label htmlFor="disciplinaryProcessesSupport">Disciplinary processes support</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    id="grievanceHandlingSupport"
                    type="checkbox"
                    checked={!!formData.grievanceHandlingSupport}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        grievanceHandlingSupport: e.target.checked,
                      })
                    }
                  />
                  <Label htmlFor="grievanceHandlingSupport">Grievance handling support</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    id="managerCoachingForPerformanceConversations"
                    type="checkbox"
                    checked={!!formData.managerCoachingForPerformanceConversations}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        managerCoachingForPerformanceConversations: e.target.checked,
                      })
                    }
                  />
                  <Label htmlFor="managerCoachingForPerformanceConversations">Manager coaching for performance conversations</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    id="performanceManagementDesignCleanUp"
                    type="checkbox"
                    checked={!!formData.performanceManagementDesignCleanUp}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        performanceManagementDesignCleanUp: e.target.checked,
                      })
                    }
                  />
                  <Label htmlFor="performanceManagementDesignCleanUp">Performance management design/clean-up</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    id="pipDesignSupport"
                    type="checkbox"
                    checked={!!formData.pipDesignSupport}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        pipDesignSupport: e.target.checked,
                      })
                    }
                  />
                  <Label htmlFor="pipDesignSupport">PIP design/support (performance improvement plans)</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    id="coachingForSupervisorsPeopleLeaders"
                    type="checkbox"
                    checked={!!formData.coachingForSupervisorsPeopleLeaders}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        coachingForSupervisorsPeopleLeaders: e.target.checked,
                      })
                    }
                  />
                  <Label htmlFor="coachingForSupervisorsPeopleLeaders">Coaching for supervisors/people leaders</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    id="leadershipCoachingEcosystem"
                    type="checkbox"
                    checked={!!formData.leadershipCoachingEcosystem}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        leadershipCoachingEcosystem: e.target.checked,
                      })
                    }
                  />
                  <Label htmlFor="leadershipCoachingEcosystem">Leadership coaching ecosystem (Better Me/Better Teams)</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    id="teamInterventionsFacilitation"
                    type="checkbox"
                    checked={!!formData.teamInterventionsFacilitation}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        teamInterventionsFacilitation: e.target.checked,
                      })
                    }
                  />
                  <Label htmlFor="teamInterventionsFacilitation">Team interventions/facilitation</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    id="cultureWellness"
                    type="checkbox"
                    checked={!!formData.cultureWellness}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        cultureWellness: e.target.checked,
                      })
                    }
                  />
                  <Label htmlFor="cultureWellness">Culture & wellness</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    id="successionPlanning"
                    type="checkbox"
                    checked={!!formData.successionPlanning}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        successionPlanning: e.target.checked,
                      })
                    }
                  />
                  <Label htmlFor="successionPlanning">Succession planning</Label>
                </div>

              </div>


              <div className="space-y-2 ">
                <Label htmlFor="whatsDrivingThisRequestRightNow">What's driving this request right now? (Pick Upto 2)</Label>
              
              
                <div className="flex items-center space-x-2 ">
                  <input
                    id="weAreGrowingFast"
                    type="checkbox"
                    checked={!!formData.weAreGrowingFast}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        weAreGrowingFast: e.target.checked,
                      })
                    }
                  />
                  <Label htmlFor="weAreGrowingFast">We're growing fast</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    id="performanceIssues"
                    type="checkbox"
                    checked={!!formData.performanceIssues}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        performanceIssues: e.target.checked,
                      })
                    }
                  />
                  <Label htmlFor="performanceIssues">Performance issues</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    id="conflictComplaints"
                    type="checkbox"
                    checked={!!formData.conflictComplaints}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        conflictComplaints: e.target.checked,
                      })
                    }
                  />
                  <Label htmlFor="conflictComplaints">Conflict / Complaints</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    id="complianceRiskConcerns"
                    type="checkbox"
                    checked={!!formData.complianceRiskConcerns}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        complianceRiskConcerns: e.target.checked,
                      })
                    }
                  />
                  <Label htmlFor="complianceRiskConcerns">Compliance /Risk concerns</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    id="leadershipCapabilityGaps"
                    type="checkbox"
                    checked={!!formData.leadershipCapabilityGaps}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        leadershipCapabilityGaps: e.target.checked,
                      })
                    }
                  />
                  <Label htmlFor="leadershipCapabilityGaps">Leadership capability gaps</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    id="highTurnover"
                    type="checkbox"
                    checked={!!formData.highTurnover}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        highTurnover: e.target.checked,
                      })
                    }
                  />
                  <Label htmlFor="highTurnover">High turnover</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    id="needToFormalizeHRSystems"
                    type="checkbox"
                    checked={!!formData.needToFormalizeHRSystems}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        needToFormalizeHRSystems: e.target.checked,
                      })
                    }
                  />
                  <Label htmlFor="needToFormalizeHRSystems">Need to formalize HR systems</Label>
                </div>
                
              </div>

              <hr style={{ border: "1px solid #e0e0e0" }} />

              <div className="space-y-2">
                <h2 className="text-lg font-bold text-center">
                  Current HR Setup
                </h2>
              </div>
              
              
           <div className="space-y-2">
              <Label htmlFor="doYouCurrentlyHaveAnHRFunctions">
                Do You Currently Have An HR Functions?
              </Label>
              <Select
                value={formData.doYouCurrentlyHaveAnHRFunctions}
                onValueChange={(value) =>
                  setFormData({ ...formData, doYouCurrentlyHaveAnHRFunctions: value })
                }
                required
              >
                <SelectTrigger className="border-gray-300 shadow-md shadow-black">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="no_hr_support_currently"> No Hr Support Currently </SelectItem>
                  <SelectItem value="admin_led_hr"> Admin-Led HR </SelectItem>
                  <SelectItem value="part_time_hr"> Part-Time HR </SelectItem>
                  <SelectItem value="dedicated_hr_team_in_house"> Dedicated HR Team (In-House) </SelectItem>
                  <SelectItem value="outsourced_hr_provider"> Outsourced HR Provider </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="doYouCurrentlyHaveAnHRFunctions">
                Do you have the following in place?
              </Label>

              <div className="flex items-center space-x-2">
                  <input
                    id="employeeHandbookPolicies"
                    type="checkbox"
                    checked={!!formData.employeeHandbookPolicies}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        employeeHandbookPolicies: e.target.checked,
                      })
                    }
                  />
                  <Label htmlFor="employeeHandbookPolicies">Employee handbook/policies</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    id="employmentContracts"
                    type="checkbox"
                    checked={!!formData.employmentContracts}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        employmentContracts: e.target.checked,
                      })
                    }
                  />
                  <Label htmlFor="employmentContracts">Employment contracts</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    id="jobDescriptions"
                    type="checkbox"
                    checked={!!formData.jobDescriptions}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        jobDescriptions: e.target.checked,
                      })
                    }
                  />
                  <Label htmlFor="jobDescriptions">Job descriptions</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    id="performanceReviewProcess"
                    type="checkbox"
                    checked={!!formData.performanceReviewProcess}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        performanceReviewProcess: e.target.checked,
                      })
                    }
                  />
                  <Label htmlFor="performanceReviewProcess">Performance review process</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    id="disciplinaryProcedure"
                    type="checkbox"
                    checked={!!formData.disciplinaryProcedure}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        disciplinaryProcedure: e.target.checked,
                      })
                    }
                  />
                  <Label htmlFor="disciplinaryProcedure">Disciplinary procedure</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    id="grievanceProcedure"
                    type="checkbox"
                    checked={!!formData.grievanceProcedure}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        grievanceProcedure: e.target.checked,
                      })
                    }
                  />
                  <Label htmlFor="grievanceProcedure">Grievance procedure</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    id="onboardingProcess"
                    type="checkbox"
                    checked={!!formData.onboardingProcess}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        onboardingProcess: e.target.checked,
                      })
                    }
                  />
                  <Label htmlFor="onboardingProcess">Onboarding process</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    id="trainingPlan"
                    type="checkbox"
                    checked={!!formData.trainingPlan}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        trainingPlan: e.target.checked,
                      })
                    }
                  />
                  <Label htmlFor="trainingPlan">Training plan</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    id="noneOfTheAboveNotSure"
                    type="checkbox"
                    checked={!!formData.noneOfTheAboveNotSure}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        noneOfTheAboveNotSure: e.target.checked,
                      })
                    }
                  />
                  <Label htmlFor="noneOfTheAboveNotSure">None of the above/Not sure</Label>
                </div>

            </div>

            <div className="space-y-2">
              <Label htmlFor="anyActiveHRMattersWeShouldBeAwareOf">
                Any active HR matters we should be aware of?
              </Label>
              <Select
                value={formData.anyActiveHRMattersWeShouldBeAwareOf}
                onValueChange={(value) =>
                  setFormData({ ...formData, anyActiveHRMattersWeShouldBeAwareOf: value })
                }
                required
              >
                <SelectTrigger className="border-gray-300 shadow-md shadow-black">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Yes"> Yes </SelectItem>
                  <SelectItem value="No"> No </SelectItem>
                  <SelectItem value="Prefer_to_discuss_privately_on_a_call"> Prefer to discuss privately on a call </SelectItem>
                
                </SelectContent>
              </Select>
            </div>

            <hr style={{ border: "1px solid #e0e0e0" }} />

            <div className="space-y-2">
              <h2 className="text-lg font-bold text-center">
                 Team Snapshot (High-Level)
              </h2>
            </div>

            <div className="space-y-2">
              <Label htmlFor="totalEmployees">
                Number of Employees (Numeric)
              </Label>
              <Input
                id="totalEmployees"
                type="number"
                value={formData.totalEmployees}
                onChange={(e) =>
                  setFormData({ ...formData, totalEmployees: e.target.value })
                }
                className="border-gray-300 shadow-md shadow-black"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="totalPeopleLeadersSupervisors">
                Number of People Leaders/Supervisors (Numeric)
              </Label>
              <Input
                type="number"
                id="totalPeopleLeadersSupervisors"
                value={formData.totalPeopleLeadersSupervisors}
                onChange={(e) =>
                  setFormData({ ...formData, totalPeopleLeadersSupervisors: e.target.value })
                }
                className="border-gray-300 shadow-md shadow-black"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="unionizedEnvironment">
                Unionized Environment?
              </Label>
              <Select
                value={formData.unionizedEnvironment}
                onValueChange={(value) =>
                  setFormData({ ...formData, unionizedEnvironment: value })
                }
                required
              >
                <SelectTrigger className="border-gray-300 shadow-md shadow-black">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Yes"> Yes </SelectItem>
                  <SelectItem value="Partially"> Partially </SelectItem>
                  <SelectItem value="No"> No </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
                <Label htmlFor="totalPeopleLeadersSupervisors">
                    Any of the following apply? (Optional Multi-Select)
                </Label>

                <div className="flex items-center space-x-2">
                  <input
                    id="multipleLocations"
                    type="checkbox"
                    checked={!!formData.multipleLocations}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        multipleLocations: e.target.checked,
                      })
                    }
                  />
                  <Label htmlFor="multipleLocations">Multiple Locations</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    id="shiftWork24HoursOperation"
                    type="checkbox"
                    checked={!!formData.shiftWork24HoursOperation}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        shiftWork24HoursOperation: e.target.checked,
                      })
                    }
                  />
                  <Label htmlFor="shiftWork24HoursOperation">Shift work / 24-hours operation</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    id="contractorsAsMajorWorkforceSegment"
                    type="checkbox"
                    checked={!!formData.contractorsAsMajorWorkforceSegment}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        contractorsAsMajorWorkforceSegment: e.target.checked,
                      })
                    }
                  />
                  <Label htmlFor="contractorsAsMajorWorkforceSegment">Contractors as major workforce segment</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    id="remoteWorkforceAcrossCountries"
                    type="checkbox"
                    checked={!!formData.remoteWorkforceAcrossCountries}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        remoteWorkforceAcrossCountries: e.target.checked,
                      })
                    }
                  />
                  <Label htmlFor="remoteWorkforceAcrossCountries">Remote workforce across countries</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    id="noneOfTheAboveNotSure"
                    type="checkbox"
                    checked={!!formData.recentRestructureMerger}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        recentRestructureMerger: e.target.checked,
                      })
                    }
                  />
                  <Label htmlFor="recentRestructureMerger">Recent restructure/merger</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    id="highPublicFacingRisk"
                    type="checkbox"
                    checked={!!formData.highPublicFacingRisk}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        highPublicFacingRisk: e.target.checked,
                      })
                    }
                  />
                  <Label htmlFor="highPublicFacingRisk">High public-facing risk (regulated / safety-critical)</Label>
                </div>
            </div>

            <hr style={{ border: "1px solid #e0e0e0" }} />

            <div className="space-y-2">
              <h2 className="text-lg font-bold text-center">
                 Goals, Timeline & Urgency
              </h2>
            </div>

            <div className="space-y-2">
                <Label htmlFor="whatDoesSuccessLookLikeIn6090Days">What does success look like in 60-90 days?</Label>
                <Input
                  id="whatDoesSuccessLookLikeIn6090Days"
                  type="text"
                  value={formData.whatDoesSuccessLookLikeIn6090Days}
                  onChange={(e) =>
                    setFormData({ ...formData, whatDoesSuccessLookLikeIn6090Days: e.target.value })
                  }
                  className="border-gray-300 shadow-md shadow-black"
                  optional
                />
            </div>

            <div className="space-y-2">
              <Label htmlFor="whenDoYouWantSupportToStart">
                When do you want support to start?
              </Label>
              <Select
                value={formData.whenDoYouWantSupportToStart}
                onValueChange={(value) =>
                  setFormData({ ...formData, whenDoYouWantSupportToStart: value })
                }
                required
              >
                <SelectTrigger className="border-gray-300 shadow-md shadow-black">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="immediately_within_1_2_weeks"> Immediately (within 1-2 weeks) </SelectItem>
                  <SelectItem value="this_month"> This month </SelectItem>
                  <SelectItem value="next_month"> Next month </SelectItem>
                  <SelectItem value="just_exploring_planning"> Just exploring / planning </SelectItem>
                </SelectContent>
              </Select>
            </div>


            <div className="space-y-2">
              <Label htmlFor="urgencyLevel">
                Urgency level?
              </Label>
              <Select
                value={formData.urgencyLevel}
                onValueChange={(value) =>
                  setFormData({ ...formData, urgencyLevel: value })
                }
                required
              >
                <SelectTrigger className="border-gray-300 shadow-md shadow-black">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low"> Low (Planning) </SelectItem>
                  <SelectItem value="medium"> Medium (Important but stable) </SelectItem>
                  <SelectItem value="high"> High (Time sensitive issue) </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <hr style={{ border: "1px solid #e0e0e0" }} />

            <div className="space-y-2">
              <h2 className="text-lg font-bold text-center">
                 Budget & Engagement Preferences (Optional but helpful)
              </h2>
            </div>

            <div className="space-y-2">
              <Label htmlFor="preferredEngagementType">
                Preferred engagement type?
              </Label>
              <Select
                value={formData.preferredEngagementType}
                onValueChange={(value) =>
                  setFormData({ ...formData, preferredEngagementType: value })
                }
                optional
              >
                <SelectTrigger className="border-gray-300 shadow-md shadow-black">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="one_time_project"> One-time project (e.g, handbook, audit, templates) </SelectItem>
                  <SelectItem value="monthly_retainer"> Monthly retainer / HR partner </SelectItem>
                  <SelectItem value="coaching_hr_bundle"> Coaching + HR bundle </SelectItem>
                  <SelectItem value="not_sure_recommend_a_fit_please"> Not sure, recommend a fit please </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
                <Label htmlFor="estimatedBudgetRange">Estimated Budget Range (Optional)</Label>
                <Input
                  id="estimatedBudgetRange"
                  value={formData.estimatedBudgetRange}
                  onChange={(e) =>
                    setFormData({ ...formData, estimatedBudgetRange: e.target.value })
                  }
                  className="border-gray-300 shadow-md shadow-black"
                  optional
                  />
            </div>


              <div className="space-y-2">
                <Label htmlFor="anythingElseWeShouldKnowBeforeWeConnect">
                  Anything else we should know before we connect? (Optional)
                </Label>
                <Input
                  id="anythingElseWeShouldKnowBeforeWeConnect"
                  value={formData.anythingElseWeShouldKnowBeforeWeConnect}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      anythingElseWeShouldKnowBeforeWeConnect: e.target.value,
                    })
                  }
                  className="border-gray-300 shadow-md shadow-black"
                  optional
                />
              </div>


              
             
            </div>

            <Button type="submit" className="w-full bg-[#2bb673] hover:bg-[#2bb673]/80 shadow-md shadow-black hover:scale-105 cursor-pointer px-8 py-4" disabled={loading}>
              {loading ? "Submitting..." : "Get A Quote"}
            </Button>
          </form>
        </CardContent>
      </Card>
      </div>

      
    </>
  );
}

