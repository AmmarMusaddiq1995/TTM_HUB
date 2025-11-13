import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { InitialComplianceAfterFormationServiceForm } from "@/components/submission-forms/initial-compliance-after-formation-service-form";

export default function InitialComplianceAfterFormationFormPage() {
  return (
    <div>
      <Header />
      <main>
        <InitialComplianceAfterFormationServiceForm />
      </main>
      <Footer />
    </div>
  );
}