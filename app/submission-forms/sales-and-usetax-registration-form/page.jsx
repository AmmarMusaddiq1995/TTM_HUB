import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SalesAndUsetaxRegistrationForm } from "@/components/submission-forms/sales-and-usetax-registration-form";



export default function SalesAndUsetaxRegistrationPage() {
  return (
  <div>
    <Header />
    <div >
     <SalesAndUsetaxRegistrationForm />
     </div>
    <Footer />
  </div>
  );
}
