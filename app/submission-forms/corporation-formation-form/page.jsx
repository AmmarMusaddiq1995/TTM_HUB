import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CorporationFormationForm } from "@/components/submission-forms/c-corporation-formation";


export default function CorporationFormationPage() {
  return (
  <div>
    <Header />
    <div >
     <CorporationFormationForm />
     </div>
    <Footer />
  </div>
  );
}