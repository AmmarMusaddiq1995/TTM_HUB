import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { EinServicesForm } from "@/components/submission-forms/ein-services-form";


export default function EinServicesPage() {
  return (
  <div>
    <Header />
    <div >
     <EinServicesForm />
     </div>
    <Footer />
  </div>
  );
}