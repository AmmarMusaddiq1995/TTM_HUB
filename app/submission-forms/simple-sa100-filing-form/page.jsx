import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SimpleAndAdvanceSelfAssessmentForm } from "@/components/submission-forms/simple-&-advance-self-assessment-form";

export default function SimpleAndAdvanceSelfAssessmentFormPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-10">
        <SimpleAndAdvanceSelfAssessmentForm />
      </main>
      <Footer />
    </div>
  );
}