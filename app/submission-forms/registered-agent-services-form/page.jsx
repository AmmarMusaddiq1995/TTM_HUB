import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { RegisteredAgentServicesForm } from "@/components/submission-forms/registered-agent-services-form";



export default function RegisteredAgentServicesFormPage() {
    return (
        <div>
            <Header />

            <div >
                <RegisteredAgentServicesForm />
            </div>
            <Footer />
        </div>

           
    )
}