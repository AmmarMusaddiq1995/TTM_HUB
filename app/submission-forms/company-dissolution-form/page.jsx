import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CompanyDissolutionForm } from "@/components/submission-forms/company-dissolution-form";

export default function CompanyDissolution() {
  return (
    <div>
            <Header />

            <div >
                <CompanyDissolutionForm />
            </div>
            <Footer />
        </div>

  );
}