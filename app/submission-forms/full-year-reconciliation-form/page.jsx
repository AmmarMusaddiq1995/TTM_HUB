import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FullYearReconciliationForm } from "@/components/submission-forms/full-year-reconciliation-form";


export default function FullYearReconciliationFormPage() {
  return (
    <div>
      <Header />
        <div >
           <FullYearReconciliationForm />
        </div>
      <Footer />
    </div>
  );
}