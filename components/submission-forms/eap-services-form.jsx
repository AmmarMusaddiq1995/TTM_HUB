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




export function EapServicesForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [formData, setFormData] = useState({
    companyName: "",
    totalHeadCount: "",
    country: "",
    industry: "",
    primaryOfficeLocation: "",
    companyWebsite: "",
    primaryContactNameRole: "",
    emailAddress: "",
    phoneWhatsappNumber: "",
    bestMethodToContactYou: "",
    howShouldEmployeesAccessSupport: "",
    doYouNeedAfterHoursAccess: "",
    preferredTurnaroundTimeForFirstAppointment: "",
    doYouNeedUrgentCrisisEscalationGuidance: "",
    targetStartDate: "",
    budgetApproach: "",
    estimatedBudgetRange: "",
    billingCountryCurrency: "",
    keyConcernsOrContext: "",
    howDidYouHearAboutUs: "",
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
          service_name: "EAP Services",
          form_data: submissionData,
          status: "pending",
          payment_status: "pending",
          // amount:price


        },
      ]);

      console.log("form_submissions inserted successfully");

      // Fire-and-forget: send notification email to internal team
      try {
        const res = await fetch("/api/eap-services-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ formData: submissionData }),
        });

        if (!res.ok) {
          console.error("Failed to send EAP notification email");
        }
      } catch (emailErr) {
        console.error("Error calling EAP email API:", emailErr);
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
            Start Your EAP Services
          </CardTitle>
          <CardDescription className="text-center">
            Fill out the form below to begin your EAP services process
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
                <Label htmlFor="totalHeadCount">Total Head Count</Label>
                <Input
                  id="totalHeadCount"
                  value={formData.totalHeadCount}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      totalHeadCount: e.target.value,
                    })
                  }
                  className="border-gray-300 shadow-md shadow-black"
                  required
                />
              </div>


              <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
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
              <Label htmlFor="industry">Industry</Label>
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
                <Label htmlFor="primaryOfficeLocation">Primary Office Location(City/Region)</Label>
                <Input
                  id="primaryOfficeLocation"
                  value={formData.primaryOfficeLocation}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      primaryOfficeLocation: e.target.value,
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
                  required
                />
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
                <Label htmlFor="emailAddress">Email Address</Label>
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
                <Label htmlFor="servicesYouWantIncluded">Services You Want Included (Check All That Apply)</Label>
              
                <div className="flex items-center space-x-2 ">
                  <input
                    id="generalMentalHealth"
                    type="checkbox"
                    checked={!!formData.generalMentalHealth}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        generalMentalHealth: e.target.checked,
                      })
                    }
                  />
                  <Label htmlFor="generalMentalHealth">General  mental health support for your organization</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    id="wellnessDevelopment"
                    type="checkbox"
                    checked={!!formData.wellnessDevelopment}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        wellnessDevelopment: e.target.checked,
                      })
                    }
                  />
                  <Label htmlFor="wellnessDevelopment">Wellness development</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    id="psychoEducationalWorkshops"
                    type="checkbox"
                    checked={!!formData.psychoEducationalWorkshops}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        psychoEducationalWorkshops: e.target.checked,
                      })
                    }
                  />
                  <Label htmlFor="psychoEducationalWorkshops">Psycho-Educational Workshops (Anxiety/Stress/Anger Management/DEI Awareness)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    id="inPersonCounselling"
                    type="checkbox"
                    checked={!!formData.inPersonCounselling}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        inPersonCounselling: e.target.checked,
                      })
                    }
                  />
                  <Label htmlFor="inPersonCounselling">In-Person Counselling (Where Available)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    id="behaviourChangeConsulting"
                    type="checkbox"
                    checked={!!formData.behaviourChangeConsulting}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        behaviourChangeConsulting: e.target.checked,
                      })
                    }
                  />
                  <Label htmlFor="behaviourChangeConsulting">Behaviour Change Consulting</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    id="psychotherapyCounseling"
                    type="checkbox"
                    checked={!!formData.psychotherapyCounseling}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        psychotherapyCounseling: e.target.checked,
                      })
                    }
                  />
                  <Label htmlFor="psychotherapyCounseling">Psychotherapy / Counseling</Label>
                </div>
              </div>


              <div className="space-y-2 ">
                <Label htmlFor="topSupportAreas">Top Support Areas For Your Team (Pick Upto 3)</Label>
              
              
                <div className="flex items-center space-x-2 ">
                  <input
                    id="stressBurnout"
                    type="checkbox"
                    checked={!!formData.stressBurnout}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        stressBurnout: e.target.checked,
                      })
                    }
                  />
                  <Label htmlFor="stressBurnout">Stress & burnout</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    id="conflictAtWork"
                    type="checkbox"
                    checked={!!formData.conflictAtWork}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        conflictAtWork: e.target.checked,
                      })
                    }
                  />
                  <Label htmlFor="conflictAtWork">Conflict at work</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    id="anxietyDepression"
                    type="checkbox"
                    checked={!!formData.anxietyDepression}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        anxietyDepression: e.target.checked,
                      })
                    }
                  />
                  <Label htmlFor="anxietyDepression">Anxiety & Depression</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    id="griefLoss"
                    type="checkbox"
                    checked={!!formData.griefLoss}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        griefLoss: e.target.checked,
                      })
                    }
                  />
                  <Label htmlFor="griefLoss">Grief & loss</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    id="substanceMisuse"
                    type="checkbox"
                    checked={!!formData.substanceMisuse}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        substanceMisuse: e.target.checked,
                      })
                    }
                  />
                  <Label htmlFor="substanceMisuse">Substance misuse</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    id="familyRelationshipStrain"
                    type="checkbox"
                    checked={!!formData.familyRelationshipStrain}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        familyRelationshipStrain: e.target.checked,
                      })
                    }
                  />
                  <Label htmlFor="familyRelationshipStrain">Family Relationship Strain</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    id="financialStress"
                    type="checkbox"
                    checked={!!formData.financialStress}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        financialStress: e.target.checked,
                      })
                    }
                  />
                  <Label htmlFor="financialStress">Financial Stress</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    id="workplaceChange"
                    type="checkbox"
                    checked={!!formData.workplaceChange}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        workplaceChange: e.target.checked,
                      })
                    }
                  />
                  <Label htmlFor="workplaceChange">Workplace Change</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    id="traumaExposure"
                    type="checkbox"
                    checked={!!formData.traumaExposure}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        traumaExposure: e.target.checked,
                      })
                    }
                  />
                  <Label htmlFor="traumaExposure">Trauma Exposure</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    id="harassmentConcerns"
                    type="checkbox"
                    checked={!!formData.harassmentConcerns}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        harassmentConcerns: e.target.checked,
                      })
                    }
                  />
                  <Label htmlFor="harassmentConcerns">Harassment Concerns</Label>
                </div>
                
              </div>
              

              <div className="space-y-2">
              <Label htmlFor="preferredSupportChannel">
                Preferred Support Channel?
              </Label>
              <Select
                value={formData.preferredSupportChannel}
                onValueChange={(value) =>
                  setFormData({ ...formData, preferredSupportChannel: value })
                }
                required
              >
                <SelectTrigger className="border-gray-300 shadow-md shadow-black">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Virtual_Only"> Virtual Only </SelectItem>
                  <SelectItem value="In_Person_Virtual"> In-Person + Virtual </SelectItem>
                  <SelectItem value="Not_Sure"> Not Sure </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <hr style={{ border: "1px solid #e0e0e0" }} />

            <div className="space-y-2">
              <h2 className="text-lg font-bold text-center">
                 Access & Response Expectations
              </h2>
            </div>

            <div className="space-y-2">
              <Label htmlFor="howShouldEmployeesAccessSupport">
                How should employees access support?
              </Label>
              <Select
                value={formData.howShouldEmployeesAccessSupport}
                onValueChange={(value) =>
                  setFormData({ ...formData, howShouldEmployeesAccessSupport: value })
                }
                required
              >
                <SelectTrigger className="border-gray-300 shadow-md shadow-black">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Self_Referral"> Self-Referral </SelectItem>
                  <SelectItem value="Manager_Referral"> Manager Referral </SelectItem>
                  <SelectItem value="HR_Referral"> HR Referral </SelectItem>
                  <SelectItem value="A_Mix"> A Mix </SelectItem>
                </SelectContent>
              </Select>
            </div>


            <div className="space-y-2">
              <Label htmlFor="doYouNeedAfterHoursAccess">
                Do you need after hours access?
              </Label>
              <Select
                value={formData.doYouNeedAfterHoursAccess}
                onValueChange={(value) =>
                  setFormData({ ...formData, doYouNeedAfterHoursAccess: value })
                }
                required
              >
                <SelectTrigger className="border-gray-300 shadow-md shadow-black">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Yes"> Yes </SelectItem>
                  <SelectItem value="No"> No </SelectItem>
                </SelectContent>
              </Select>
            </div>


            <div className="space-y-2">
              <Label htmlFor="preferredTurnaroundTimeForFirstAppointment">
                Preferred turnaround time for first appointment?
              </Label>
              <Select
                value={formData.preferredTurnaroundTimeForFirstAppointment}
                onValueChange={(value) =>
                  setFormData({ ...formData, preferredTurnaroundTimeForFirstAppointment: value })
                }
                required
              >
                <SelectTrigger className="border-gray-300 shadow-md shadow-black">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="24-48_hours"> 24-48 hours </SelectItem>
                  <SelectItem value="3-5_business_days"> 3-5 business days </SelectItem>
                  <SelectItem value="within_7_days"> within 7 days </SelectItem>
                </SelectContent>
              </Select>
            </div>


            <div className="space-y-2">
              <Label htmlFor="doYouNeedUrgentCrisisEscalationGuidance">
                Do you need urgent/crisis escalation guidance?
              </Label>
              <Select
                value={formData.doYouNeedUrgentCrisisEscalationGuidance}
                onValueChange={(value) =>
                  setFormData({ ...formData, doYouNeedUrgentCrisisEscalationGuidance: value })
                }
                required
              >
                <SelectTrigger className="border-gray-300 shadow-md shadow-black">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Yes"> Yes </SelectItem>
                  <SelectItem value="No"> No </SelectItem>
                </SelectContent>
              </Select>
            </div>


            <hr style={{ border: "1px solid #e0e0e0" }} />

            <div className="space-y-2">
              <h2 className="text-lg font-bold text-center">
                 Launch & Communication
              </h2>
            </div>

            <div className="space-y-2">
              <Label htmlFor="targetStartDate">
                Target start date
              </Label>
              <Select
                value={formData.targetStartDate}
                onValueChange={(value) =>
                  setFormData({ ...formData, targetStartDate: value })
                }
                required
              >
                <SelectTrigger className="border-gray-300 shadow-md shadow-black">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ASAP"> ASAP </SelectItem>
                  <SelectItem value="Within_30_days"> Within 30 days </SelectItem>
                  <SelectItem value="Within_60_days"> Within 60 days </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <hr style={{ border: "1px solid #e0e0e0" }} />

            <div className="space-y-2">
              <h2 className="text-lg font-bold text-center">
                 Commercials (Optional, but help us quote correctly)
              </h2>
            </div>

            <div className="space-y-2">
              <Label htmlFor="budgetApproach">
                Budget Approach
              </Label>
              <Select
                value={formData.budgetApproach}
                onValueChange={(value) =>
                  setFormData({ ...formData, budgetApproach: value })
                }
                optional
              >
                <SelectTrigger className="border-gray-300 shadow-md shadow-black">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Per_employee_per_month"> Per employee per month </SelectItem>
                  <SelectItem value="Fixed_monthly_retainer"> Fixed monthly retainer </SelectItem>
                  <SelectItem value="Pay_per_use"> Pay per use </SelectItem>
                  <SelectItem value="Not_sure"> Not sure </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
                <Label htmlFor="estimatedBudgetRange">
                  Estimated Budget Range (Optional)
                </Label>
                <Input
                  id="estimatedBudgetRange"
                  value={formData.estimatedBudgetRange}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      estimatedBudgetRange: e.target.value,
                    })
                  }
                  className="border-gray-300 shadow-md shadow-black"
                  optional
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="billingCountryCurrency">
                  Billing Country & Currency (Optional)
                </Label>
                <Input
                  id="billingCountryCurrency"
                  value={formData.billingCountryCurrency}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      billingCountryCurrency: e.target.value,
                    })
                  }
                  className="border-gray-300 shadow-md shadow-black"
                  optional
                />
              </div>

              <hr style={{ border: "1px solid #e0e0e0" }} />

              <div className="space-y-2">
              <h2 className="text-lg font-bold text-center">
                 Anything Else We Should Know?
              </h2>
            </div>    

            <div className="space-y-2">
                <Label htmlFor="keyConcernsOrContext">
                  Key Concerns Or Context (Optional)
                </Label>
                <Input
                  id="keyConcernsOrContext"
                  value={formData.keyConcernsOrContext}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      keyConcernsOrContext: e.target.value,
                    })
                  }
                  className="border-gray-300 shadow-md shadow-black"
                  optional
                />
              </div>


              <div className="space-y-2">
                <Label htmlFor="howDidYouHearAboutUs">
                  How did you hear about us? (Optional)
                </Label>
                <Input
                  id="howDidYouHearAboutUs"
                  value={formData.howDidYouHearAboutUs}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      howDidYouHearAboutUs: e.target.value,
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

