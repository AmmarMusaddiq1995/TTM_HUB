import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { PricingSection } from "@/components/pricing-section.jsx";
import { ServicesSection } from "@/components/services-section";
import { Separator } from "@/components/ui/separator";
import { FeaturedServices } from "@/components/featured-services";
import { FromTheOwner } from "@/components/from-the-owner";

export default function HomePage() {
  return(
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />      
        <ServicesSection />
        <FeaturedServices />
        {/* <PricingSection /> */}
        <FromTheOwner />
        <CTASection />
        <Separator />
      </main>
      <Footer />
    </div>
  )
}