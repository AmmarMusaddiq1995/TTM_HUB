import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CompanyRevivalForm } from "@/components/submission-forms/company-revival-form";

export default function CompanyRevival() {
  return (
    <div>
            <Header />

            <div>
                <CompanyRevivalForm />
            </div>
            <Footer />
        </div>

  );
}