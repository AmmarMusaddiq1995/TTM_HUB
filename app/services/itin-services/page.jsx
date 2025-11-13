import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ItinApplicationForm } from "@/components/submission-forms/itin-application-form";

export default function ItinServicesPage() {
  return (
    <div>
      <Header />
      <div >
        <ItinApplicationForm />
      </div>
    </div>
  );
}