"use client";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AddressChangeServicesForm } from "@/components/submission-forms/address-change-services-form";






export default function AddressChangeServicesFormPage() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <Header />
            
            
                <div >
                    <AddressChangeServicesForm />
                </div>
            
            <Footer />
        </div>
    )
}