import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { DBATrademarkRegistrationServicesForm } from "@/components/submission-forms/dba-trademark-registration-services-form";



export default function DBATrademarkRegistrationServicesFormPage() {
    return (
        <div>
            <Header />

            <div>
                <DBATrademarkRegistrationServicesForm />
            </div>
            <Footer />
        </div>

           
    )
}