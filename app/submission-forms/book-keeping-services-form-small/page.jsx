import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BookKeepingServicesFormSmallBusiness } from "@/components/submission-forms/book-keeping-services-form-small";


export default function BookKeepingServices() {
  return (
    <div>
            <Header />

            <div >
                <BookKeepingServicesFormSmallBusiness />
            </div>
            <Footer />
        </div>

  );
}