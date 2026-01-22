import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Briefcase, Shield, Rocket } from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function HrServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            <span className="text-[#2bb673]">HR</span> Services
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
          Is high turnover creeping into your culture? Our HR and Employee Assistance Program (EAP) support can help take a holistic approach to well-being and positive impact. We kick start with confidential assessments to understand what your team really needs, then we give you hands on support and interventions to make thing better.
          </p>
          <Link href="/submission-forms/hr-services-form">
            <Button size="lg" className="text-lg bg-[#2bb673] hover:bg-[#2bb673]/80 shadow-xl shadow-black hover:scale-105 cursor-pointer px-8 py-4">
              Start My HR Services
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why You Need HR Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardHeader>
                <Shield className="h-12 w-12 text-[#2bb673] mb-4" />
                <CardTitle>Stronger Employee Wellbeing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                EAPs provide confidential support for mental health, stress, and personal challenges—helping employees feel valued and supported.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Briefcase className="h-12 w-12 text-[#2bb673] mb-4" />
                <CardTitle>Improved Productivity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                When employees have access to timely support, they can focus better, perform consistently, and contribute more effectively.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Check className="h-12 w-12 text-[#2bb673] mb-4" />
                <CardTitle>Healthier Workplace Culture</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                EAPs promote trust, psychological safety, and a culture where people feel comfortable seeking help.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Rocket className="h-12 w-12 text-[#2bb673] mb-4" />
                <CardTitle>Business Risk & Cost Reduction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                Supporting employees proactively reduces turnover, workplace conflicts, and the hidden costs of unmanaged stress.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
