import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { EinClosingServicesForm } from "@/components/submission-forms/ein-closing-services-form";



export default function EINClosingServicesFormPage() {
    return (
        <div>
            <Header />

            <div >
                <EinClosingServicesForm />
            </div>
            <Footer />
        </div>

           
    )
}