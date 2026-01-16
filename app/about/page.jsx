


/* ----------- Updated code with new frontend  ----------- */
"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Users, Layers, Target } from "lucide-react";
import Link from "next/link";


export default function AboutPage() {
  const stats = [
    { number: "5+", label: "Years Supporting Leaders Globally" },
    { number: "Diverse", label: "Clients Across Industries" },
    { number: "US & UK", label: "Business Formation & Compliance Expertise" },
    { number: "International", label: "Wellness & People Support Capability" },
  ];

  const values = [
    {
      icon: Shield,
      title: "Integrity & Trust",
      description:
        "We protect your business and financial data with the highest level of security and confidentiality.",
    },
    {
      icon: Users,
      title: "Client-Centric Approach",
      description:
        "Every entrepreneur we work with is a partner in success. Your goals are our mission.",
    },
    {
      icon: Layers,
      title: "Comprehensive Solutions",
      description:
        "From formation to financial management and tax compliance — we provide everything under one roof.",
    },
    {
      icon: Target,
      title: "Results That Matter",
      description:
        "We focus on precision, efficiency, and long-term success, so you can focus on innovation and growth.",
    },
  ];

  const audience = [];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-20">
          <div className="container mx-auto px-4 text-center">
            <Badge className="mb-4 bg-[#2bb673] text-white font-bold">
              About The Talent Management Hub
            </Badge>
            {/* <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
              Your Partner in <span className="text-orange-500">Business Growth & Compliance</span>
            </h1> */}
             <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-center">
                 Building Structure To Keep <span className="text-[#2bb673]">Business Strong</span>
                 - And <span className="text-[#2bb673]">People Supported</span>
               </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            Better Business is the <strong>TTMHUB</strong> pillar focused on operational clarity and human-centered support.
            We take care of the essentials—business formation, compliance, bookkeeping, clear HR policies and processes,
            and proactive performance and wellness—so leaders can focus on growth instead of gaps. <br />
            As certified The GC Index partners, we help align individual strengths with business needs, 
            reducing risk and burnout while building confidence, consistency, and momentum across the organization.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 text-center">
              Quick Facts
            </h1>
        
            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-center items-center mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-primary/20 w-40 h-40 rounded-full mx-auto" >
                  <div className="text-3xl md:text-4xl font-bold text-[#2bb673] mb-2 flex flex-col items-center justify-center h-full">
                    {stat.number}
                    <span className="text-gray-600 font-medium text-sm">{stat.label}</span>
                  </div>
                  
                </div>
              ))}
            </div> */}
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  <span className="text-[#2bb673]">Our Story:</span> From Insight to Innovation
                </h2>
                <p className="text-gray-600 mb-6">
                  With over <strong className="text-[#2bb673]">5 years+ of hands-on experience</strong> in business formations,
                  accounting, bookkeeping, payroll management, and compliance, our founder
                  recognized a recurring problem—entrepreneurs juggling multiple providers for
                  essential services. The result? Wasted time, miscommunications, and lost focus.
                </p>
                <p className="text-gray-600 mb-6">
                  That’s when <strong className="text-[#2bb673]">The Talent Management Hub</strong> was born—a unified solution
                  that brings everything under one roof. We help founders form, manage, and grow
                  their businesses through our <strong className="text-[#2bb673]">Compliance Concierge Model</strong>, ensuring
                  everything runs smoothly behind the scenes.
                </p>
                <p className="text-gray-600">
                  We’re not just experts—we’re partners in your success story. Let’s simplify your
                  business journey and build something extraordinary together.
                </p>
              </div>
              <div className="relative">
                <img
                  src="/modern-office-collaboration.png"
                  alt="FAAZ Financial Group team"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Us?
              </h2>
              <p className="text-xl text-gray-600">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center shadow-md hover:shadow-lg transition">
                  <CardContent className="pt-6">
                    <value.icon className="h-12 w-12 text-[#2bb673] mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Who This is For */}
        {/* <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Who This is For?
              </h2>
              <p className="text-xl text-pretty text-gray-600">
              If your goal is a well-run business that supports strong leaders and thriving teams — this is the place to start.
              Better Business is for organizations that:
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section className="bg-gray-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Simplify <span className="text-[#2bb673]">Your Business Journey?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              The Talent Management Hub is your trusted partner for formation, accounting, payroll,
              and compliance. Let’s handle the details while you build your dream.
            </p>
            <Link href="/contact">  
              <Button
                size="lg"
                className="bg-[#2bb673] hover:bg-primary cursor-pointer hover:scale-115 transition-all duration-300 text-white px-8 py-4 text-lg"
              >
                Contact Us Today
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

