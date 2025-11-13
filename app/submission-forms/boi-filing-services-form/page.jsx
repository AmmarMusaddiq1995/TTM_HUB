import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BoiFilingServicesForm } from "@/components/submission-forms/boi-filing-services-form";


export default function BoiFilingServicesPage() {
  return (
  <div>
    <Header />
    <div >
     <BoiFilingServicesForm />
     </div>
    <Footer />
  </div>
  );
}
