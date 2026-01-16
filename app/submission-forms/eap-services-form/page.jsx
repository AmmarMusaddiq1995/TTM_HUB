import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { EapServicesForm } from "@/components/submission-forms/eap-services-form";



export default function EapServicesFormPage() {
    return (
        <div>
            <Header />

            <div >
                <EapServicesForm />
            </div>
            <Footer />
        </div>

           
    )
}