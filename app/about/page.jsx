


/* ----------- Updated code with new frontend  ----------- */
"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Users,  Layers, Target, Scales, UserCheck, TrendingUp, ShieldCheck, Flag } from "lucide-react";
// import { ShieldCheckIcon } from "@heroicons/react/24/outline";
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
        "Your financial, legal, and people data are handled with confidentiality and care. Our guidance is dependable, ethical, and consistent.",
    },
    {
      icon: Users,
      title: "Client-Centric Approach",
      description:
        "Every engagement is tailored to your stage, goals, and pace—no generic templates, just practical solutions grounded in your reality.",
    },
    {
      icon: Layers,
      title: "Practical, Sustainable Structure",
      description:
        "We design systems that are clear, usable, and easy to maintain—supporting your team without adding friction or administrative burden.",
    },
    {
      icon: Target,
      title: "Results That Hold Up",
      description:
        "Aligned teams, reduced risk, consistent execution, and workspaces where people are supported to perform and grow.",
    },
  ];

  const whatWeDo = [
    {
      icon: Flag ,
      title: "Business Formation & Governance(US & UK)" ,
      description:"LLC, Corporation, and LTD formation; DBA and trademark registration; and official records management—ensuring your legal foundation is solid from day one.",
    } ,
    {
      icon: ShieldCheck ,
      title: "Compliance & Financial Management" ,
      description: "Support for EIN/ITIN, state and federal filings (including BOI), sales tax and VAT returns, registered agent services, and bookkeeping—turning administrative stress into organized clarity.",
    } , 
    {
      icon: UserCheck,
      title: "People Infrastructure & HR Strategy",
      description: "Clear HR policies and processes, recruitment optimization powered by The GC Index, and performance management systems that are fair, consistent, and defensible as your team grows." ,
    } , 
    {
      icon: TrendingUp,
      title: "Proactive Performance & Wellness(EAP)",
      description: "Comprehensive Employee Assistance Programs, The GC Index for impact alignment, DISC for behavioral insight, plus change management, DEI training, counseling, and executive coaching—reducing burnout, embracing neurodiversity, and fostering genuine care." ,
    } 
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
                <span className="text-[#2bb673]"><strong>TTMHUB</strong></span> helps leaders and teams thrive—personally, relationally, and professionally. 
                Over time, we observed a consistent challenge: even strong organizations struggle when foundational systems are weak.
                </p>
                <p className="text-gray-600 mb-6">
                Missed filings, disorganized books, inconsistent HR practices, and overlooked wellness quietly place 
                growing pressure on leaders—until they are carrying too much and watching good people burn out.
                </p>
                <p className="text-gray-600">
                <span className="text-[#2bb673]"><strong>Better Business</strong></span> exists to change that.
                We provide integrated structural and people support, combining operational rigor with evidence-based tools 
                such as The GC Index and DISC. The result is businesses that run with clarity, consistency, and confidence—without losing their humanity.
                </p>
              </div>
              <div className="relative">
                <img
                  src="/modern-office-collaboration.png"
                  alt="TTM Hub"
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
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                Why Choose Us?
              </h2>
              <p className="text-xl font-semibold text-gray-600">
                The Principles That Guide Everything We Do
              </p> 
              <br />
              <p className="text-xl text-gray-600">
              We combine executive-level standards with a human touch—delivering results that last, without unnecessary complexity or compromise.
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

        {/* What We Do */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                What We Do?
              </h2>
              <p className="text-xl font-semibold text-pretty text-gray-600">
              Four Core Areas For Business Strength & People Support
              </p>
            </div>
            {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"></div> */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whatWeDo.map((value, index) => (
                <Card key={index} className="text-center shadow-md hover:shadow-lg transition">
                  <CardContent className="pt-6">
                    {/* <value.icon className="h-12 w-12 text-[#2bb673] mx-auto mb-4" /> */}
                    <div className="rounded-full bg-[#2bb673] text-white mx-auto mb-4 h-12 w-12 flex items-center justify-center"> {index + 1} </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

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
                className="bg-[#2bb673] hover:bg-[#2bb673]/80 cursor-pointer hover:scale-115 transition-all duration-300 text-white px-8 py-4 text-lg"
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

