import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FilingArticlesOfAmendmentsForm } from "@/components/submission-forms/filing-articles-of-amendments-form";


export default function FilingArticlesOfAmendmentsPage() {
  return (
  <div>
    <Header />
    <div >
     <FilingArticlesOfAmendmentsForm />
     </div>
    <Footer />
  </div>
  );
}