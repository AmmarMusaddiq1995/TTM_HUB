"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import FlipCard from "@/components/FlipCard";
import Link from "next/link";
import { CardHeader, CardTitle } from "@/components/ui/card";
import faq from "@/data/faq.json";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";


function FaqText({ content, className = "" }) {
  if (!content) return null;
  const hasHtml = /<[a-z][\s\S]*>/i.test(content);
  if (hasHtml) {
    return <span className={className} dangerouslySetInnerHTML={{ __html: content }} />;
  }
  return <span className={className}>{content}</span>;
}

export default function DISCPersonalityProgramPage() {

  const problems = [{
    title: "Interpersonal Effectiveness",
    description: "Leaders often struggle with interpersonal effectiveness despite strong technical or strategic capability.",
  }, {
    title: "Misunderstood Communications",
    description: "Misunderstood communication styles create friction, disengagement, and avoidable conflict.",
  }, {
    title: "Emotional Intelligence",
    description: "Emotional intelligence is discussed conceptually but rarely translated into consistent, practical leadership behaviour.",
  }, {
    title: "Lack Of Discussion",
    description: "Organizations lack a shared, non-clinical language to discuss behaviour without judgement or defensiveness.",
  }];

  const services = [{
    title: "Behavioural Awareness",
    description: "Uses DISC as a behavioural awareness tool, not a personality label or evaluative instrument.",
  },
  {
    title: "Emotional Intelligence",
    description: "Integrates emotional intelligence development with facilitated sense-making and application, not standalone assessments.",
  },
  {
    title: "Reporting",
    description: "Balances individual insight with group-level understanding through aggregated reporting.",
  },
  {
    title: "Environments",
    description: "Maintains strict developmental, governance-safe positioning suitable for executive and board-facing environments.",
  }];




  return (
    <>
    <Header />
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5" />
        <div className="relative mx-auto max-w-6xl px-6 text-center">
       
          {/* <span className="inline-block bg-primary/20 text-black px-3 py-1 rounded-full  text-md sm:text-md  mb-4 ">
          Build Teams That Execute With Clarity, Speed & Trust
            </span> */}
          <h1 className="text-4xl md:text-6xl text-gray-900  font-bold tracking-tight">
            <span className="text-[#2bb673] font-serif">DISC</span> Personality Program
          </h1>
          {/* <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto text-balance">
          Most business issues that show up as “performance problems” are actually <strong className="text-black font-extrabold">impact-mapping problems</strong>: unclear contribution, misaligned roles, friction in handoffs, and leaders carrying too much of the load.
          <strong className="text-black font-extrabold">The GC Index®</strong> gives you a practical, outcome-driven way to see how people naturally prefer to create impact, so you can design teams, roles, and workflows that make results more consistent.
          </p> */}
         
          <div className="mt-10 flex justify-center">
            <Link href="/contact">
            <Button className="bg-emerald-600 cursor-pointer shadow-lg shadow-black hover:bg-emerald-500 hover:scale-115 transition-all duration-300 text-white px-10 py-6 rounded-xl">
              Request a Call
            </Button>
            </Link>
          </div>
        </div>
      </section>

     

      

      {/* Problems The Service Solves */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold mb-10 text-center"><span className="text-[#2bb673]">Problems</span> The Service <span className="text-[#2bb673]">Solves</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 gap-8 place-items-center">
            {problems.map(
              (item) => (
                <FlipCard key={item.title} title={item.title} description={item.description} />
              )
            )}
          </div>
        </div>
      </section>

      {/* What Makes Service Different */}
      <section className="py-20 ">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold mb-10 text-center">What Makes <span className="text-[#2bb673]">Service Different</span></h2>
          <div className="space-y-8 text-gray-600 ">
            {/* <p>TTMHUB does not simple deliver profiles, we help you apply GC Index insight where it matters most: performance, leadership and execution.</p> */}
            <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 gap-8 place-items-center">
            {/* {support.map(
              (item) => (
                <FlipCard key={item.title} title={item.title} description={item.description}  />
              )
            )} */}
            {services.map(
                (item) => (
                    <Card key={item.title} className="shadow-lg shadow-black h-full">
                    <CardHeader>
                      <CardTitle>
                        <span className="text-[#2bb673]">{item.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{item.description}</p>
                    </CardContent>
                  </Card>
                )
            )}
           
            </div>
          </div>
        </div>
      </section>

      {/* Who Is The Service For */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold mb-10 text-center">Who The <span className="text-[#2bb673]">Service Is For</span></h2>
          <ul className="list-disc list-inside mt-4">
            <li>Executives, managers, supervisors, and emerging leaders.</li>
            <li>Leadership teams seeking improved communication, trust, and emotional literacy.</li>
            <li>Organizations introducing or reinforcing emotional intelligence as a leadership capability.
            </li>
          </ul>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-primary/5 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold text-center text-gray-900">Ready to strengthen execution and alignment?</h2>
        <p className="mt-4 text-gray-600">We’ll help you implement DISC Personality Program in a way that delivers measurable results.</p>
        <div className="mt-8">
          <Link href="/contact">
          <Button className="bg-emerald-600 cursor-pointer shadow-lg shadow-black hover:bg-emerald-500 hover:scale-115 transition-all duration-300 text-white px-10 py-6 rounded-xl">
            Request a Call
          </Button>
          </Link>
        </div>
      </section>

   

    </main>
    <Footer />
    </>
  );
}
