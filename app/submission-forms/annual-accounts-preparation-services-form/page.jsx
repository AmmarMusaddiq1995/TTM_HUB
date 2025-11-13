import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AnnualAccountsPreparationServicesForm } from "@/components/submission-forms/annual-accounts-preparation-services-form";

export default function AnnualAccountsPreparationServicesFormPage() {
    return (
        <div>
        <Header />
        <div >
         <AnnualAccountsPreparationServicesForm />
         </div>
        <Footer />
        </div>
    )
}