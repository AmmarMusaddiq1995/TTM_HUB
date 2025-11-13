"use client";

import { BusinessFormationForm } from "@/components/submission-forms/llc-formation-form";
import { CorporationFormationForm } from "@/components/submission-forms/c-corporation-formation";
import { EinServicesForm } from "@/components/submission-forms/ein-services-form";
import { ItinApplicationForm } from "@/components/submission-forms/itin-application-form";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";


 function StartBusinessPage() {
  // const params = new URLSearchParams(window.location.search);
  // const serviceType = params.get("serviceType");

  const searchParams = useSearchParams();
  const serviceType = searchParams.get("serviceType");
  console.log("serviceType :", serviceType);
  const [selectedService, setSelectedService] = useState(serviceType || "");

  const serviceComponents = {
    llc: <BusinessFormationForm />,
    corp: <CorporationFormationForm />,
    ein: <EinServicesForm />,
    itin: <ItinApplicationForm />,
  };

  return (
    <div>
      <Header />
          <div>
            <BusinessFormationForm />
          </div>
          <Footer />
        </div>
      

      
    
  );
}

export default function MyPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <StartBusinessPage />
    </Suspense>
  );
}