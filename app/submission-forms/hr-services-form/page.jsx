import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HrServicesForm } from "@/components/submission-forms/hr-services-form";



export default function HrServicesFormPage() {
    return (
        <div>
            <Header />

            <div >
                <HrServicesForm />
            </div>
            <Footer />
        </div>

           
    )
}