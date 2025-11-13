import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BookKeepingServicesFormMediumBusiness } from "@/components/submission-forms/book-keeping-services-form-medium";


export default function BookKeepingServices() {
  return (
    <div>
            <Header />

            <div >
                <BookKeepingServicesFormMediumBusiness />
            </div>
            <Footer />
        </div>

  );
}