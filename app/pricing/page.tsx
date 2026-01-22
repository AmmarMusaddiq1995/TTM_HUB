import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Check } from "lucide-react";

export default function PricingPage() {
  // All services organized by category with estimated prices
  const servicesByCategory = [
    {
      category: "Strategic People Services",
      services: [
        { name: "Strategic People Support (HR Services)", price: "Custom Quote", description: "Comprehensive HR support and consulting", link: "/services/hr-services" },
        { name: "Employee Assistance Program (EAP)", price: "Custom Quote", description: "Employee wellness and support programs", link: "/services/eap-services" },
      ],
    },
    {
      category: "Formation Services",
      services: [
        { name: "LLC Formation", price: "From $250", description: "Varies by state", link: "/services/llc-formation-2" },
        { name: "Corp. Formation", price: "From $300", description: "Varies by state", link: "/services/corp-formation-2" },
        { name: "DBA/Trademark Registration", price: "$199", description: "Doing Business As registration", link: "/services/dba-trademark-registration" },
      ],
    },
    {
      category: "Compliance Services",
      services: [
        { name: "EIN Services", price: "$79", description: "Federal Tax ID number application", link: "/services/ein-services" },
        { name: "BOI Filing Services", price: "$149", description: "Beneficial Ownership Information filing", link: "/services/boi-filing-services" },
        { name: "ITIN Services", price: "$199", description: "Individual Taxpayer Identification Number", link: "/services/itin-services" },
        { name: "Sales & Use Tax Registration", price: "$299", description: "State tax registration services", link: "/services/sales-and-usetax-registration" },
        { name: "Annual Company State Filing", price: "$149", description: "Annual state compliance filing", link: "/services/annual-company-state-filing" },
        { name: "EIN Closing Services", price: "$199", description: "Close your EIN account", link: "/services/ein-closing-services" },
        { name: "Registered Agent Services", price: "$199/year", description: "Professional registered agent service", link: "/services/registered-agent" },
        { name: "Company Dissolution", price: "$299", description: "State fees vary", link: "/services/company-dissolution" },
        { name: "Company Revival", price: "$299", description: "State fees vary", link: "/services/company-revival" },
        { name: "Address Change Services", price: "$149", description: "Update business address", link: "/services/address-change-services" },
        { name: "Filing Articles Of Amendments", price: "$249", description: "State fee excluded", link: "/services/filing-articles-of-amendments" },
      ],
    },
    {
      category: "Bookkeeping & Taxes",
      services: [
        { name: "SMB Bookkeeping", price: "From $299/month", description: "Small business bookkeeping", link: "/services/pro-bookkeeping-services(small-business)" },
        { name: "SME Bookkeeping", price: "From $499/month", description: "Medium business bookkeeping", link: "/services/pro-bookkeeping-services(medium-business)" },
        { name: "Full Scale Bookkeeping", price: "From $799/month", description: "Large business bookkeeping", link: "/services/pro-bookkeeping-services(large-business)" },
        { name: "Full-Year Reconciliation Services", price: "Custom Quote", description: "Annual reconciliation services", link: "/services/full-year-reconciliation-services" },
        { name: "Setting Up New Books In QBO/Xero", price: "Custom Quote", description: "Charges vary based on nature of work", link: "/services/setting-up-new-books-in-QBO" },
      ],
    },
    {
      category: "UK Formation & Compliance Services",
      services: [
        { name: "UK LTD Formation", price: "£99", description: "UK Limited Company formation", link: "/services/uk-ltd-formation" },
        { name: "Simple Corporation Tax", price: "£299", description: "Simple CT600 filing", link: "/services/simple-corp-tax-return-ct600" },
        { name: "Advance Corporation Tax", price: "£499", description: "Complex CT600 filing", link: "/services/complex-corp-tax-return-ct600" },
        { name: "Registering Client For Self-Assessment", price: "£99", description: "Self-assessment registration", link: "/services/registering-client-for-selfassessment" },
        { name: "Simple Self Assessment (SA100)", price: "£199", description: "Simple SA100 filing", link: "/services/simple-self-assessment-filing" },
        { name: "Advance Self Assessment (SA100)", price: "£399", description: "Complex SA100 filing", link: "/services/advance-self-assessment-filing" },
        { name: "Annual Corporation Tax Accounts", price: "Custom Quote", description: "Annual accounts preparation", link: "/services/annual-accounts-preparation" },
        { name: "Confirmation Statement Filing", price: "£49", description: "Annual confirmation statement", link: "/services/confirmation-statement-filing-services" },
        { name: "VAT Registration", price: "£149", description: "UK VAT registration", link: "/services/vat-registration-services" },
        { name: "VAT Return Filing", price: "£99", description: "VAT return filing service", link: "/services/vat-return-filing-services" },
        { name: "Tax Budgeting & Investment Appraisal", price: "Custom Quote", description: "Tax planning services", link: "/services/tax-budgeting-services" },
        { name: "Initial Compliance After Formation", price: "£199", description: "Post-formation compliance setup", link: "/services/initial-compliance-after-formation" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              <span className="text-[#2bb673]">Pricing</span> & Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Transparent pricing for all our services. Get a quote or start your service today.
            </p>
          </div>
        </section>

        {/* Services by Category */}
        <section className="py-16 px-4">
          <div className="container max-w-7xl mx-auto space-y-16">
            {servicesByCategory.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-6">
                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-2">{category.category}</h2>
                  <div className="w-24 h-1 bg-[#2bb673] mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <Card
                      key={serviceIndex}
                      className="hover:shadow-lg transition-shadow duration-200 border-gray-200"
                    >
                      <CardHeader>
                        <CardTitle className="text-lg font-semibold mb-2">
                          {service.name}
                        </CardTitle>
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-bold text-[#2bb673]">
                            {service.price}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">
                          {service.description}
                        </p>
                      </CardHeader>
                      <CardContent>
                        <Link href={service.link}>
                          <Button
                            className="w-full bg-[#2bb673] hover:bg-[#2bb673]/80 shadow-md shadow-black hover:scale-105 cursor-pointer"
                          >
                            Get Started
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Note Section */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="container max-w-4xl mx-auto">
            <Card className="border-[#2bb673]/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">
                  Pricing Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#2bb673] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Formation Services</p>
                    <p className="text-sm text-muted-foreground">
                      Formation service prices vary by state due to different state filing fees. 
                      Contact us for a precise quote based on your state of formation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#2bb673] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Custom Quotes</p>
                    <p className="text-sm text-muted-foreground">
                      Services marked as "Custom Quote" are priced based on your specific needs. 
                      Fill out our form or contact us for a personalized quote.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#2bb673] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Monthly Services</p>
                    <p className="text-sm text-muted-foreground">
                      Bookkeeping and subscription services are billed monthly. 
                      Prices may vary based on transaction volume and complexity.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#2bb673] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">State Fees</p>
                    <p className="text-sm text-muted-foreground">
                      Some services require state filing fees that are separate from our service fees. 
                      These fees are passed through at cost and vary by state.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Help Choosing?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our team is here to help you find the right service for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="text-lg bg-[#2bb673] hover:bg-[#2bb673]/80 shadow-xl shadow-black hover:scale-105 cursor-pointer px-8 py-4"
                >
                  Contact Us
                </Button>
              </Link>
              <Link href="/services/llc-formation-2">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg border-[#2bb673] text-[#2bb673] hover:bg-[#2bb673] hover:text-white shadow-md shadow-black hover:scale-105 cursor-pointer px-8 py-4"
                >
                  Start Your Business
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
