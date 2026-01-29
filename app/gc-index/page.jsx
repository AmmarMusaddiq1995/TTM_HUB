"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import FlipCard from "@/components/FlipCard";

export default function GCIndexPage() {

  const benefits = [{
    title: "Stronger Role-Fit and Accountability",
    description: "People are placed in roles where they naturally contribute, reducing friction and boosting performance.",
  }, {
    title: "Faster Execution",
    description: "Less rework, clearer handoffs, fewer “stuck” initiatives.",
  }, {
    title: "Better Decision-Making",
    description: "The right voices in the right moments of the business cycle.",
  }, {
    title: "More Effective Leadership",
    description: "Leaders stop compensating for team gaps and start coaching performance.",
  }, {
    title: "Healthier Workspaces",
    description: "Reduced friction, improved trust, and clearer expectations.",
  }];

  const support = [
    {
    title: "Individual GC Profile Reviews",
    description: (
    <div className="px-4 py-4">
    <p>We help your leaders & team members understand</p>
    <ul className="list-disc list-inside mt-4">
      <li>Where they create their best impact</li>
      <li>How to avoid overextension and unhelpful defaults</li>
      <li>What they need from others to perform at their best</li>
    </ul>
    </div>
    )},
    {
      title: "Team Impact Reviews & Alignment",
      description: (
      <div className="px-4 py-4">
      <p>We map team impact patterns to reveal strengths, gaps, and risks—then facilitate practical alignment on:</p>
      <ul className="list-disc list-inside mt-4 text-pretty">
        <li>Decision rights and handoffs</li>
        <li>Collaboration norms</li>
        <li>Where to slow down, where to speed up, and where quality needs protecting</li>
      </ul>
      </div>
      )},
      {
        title: "Workshops & Capability Building",
        description: (
        <div className="px-4 py-4">
        <p>Interactive, business-focused sessions that build GC fluency and application. This is ideal for leadership teams, project teams, and cross-functional groups.</p>
        {/* <ul className="list-disc list-inside mt-4">
          <li>Where they create their best impact</li>
          <li>How to avoid overextension and unhelpful defaults</li>
          <li>What they need from others to perform at their best</li>
        </ul> */}
        </div>
        )},
        {
          title: "Organisation-Level Impact Mapping (for scale)",
          description: (
          <div className="px-4 py-4">
          <p>For organisations ready to embed GC Index across teams, the Organisation Impact Map (OIM) supports a broader view of impact distribution and alignment.</p>
          {/* <ul className="list-disc list-inside mt-4">
            <li>Where they create their best impact</li>
            <li>How to avoid overextension and unhelpful defaults</li>
            <li>What they need from others to perform at their best</li>
          </ul> */}
          </div>
          )},
  ]
  return (
    <>
    <Header />
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5" />
        <div className="relative mx-auto max-w-6xl px-6 text-center">
       
          <span className="inline-block bg-primary/20 text-black px-3 py-1 rounded-full  text-md sm:text-md  mb-4 ">
          Build Teams That Execute With Clarity, Speed & Trust
            </span>
          <h1 className="text-4xl md:text-6xl text-gray-900  font-bold tracking-tight">
            TTMHUB + GC Index for <span className="text-[#2bb673]">Business Impact</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto text-balance">
          Most business issues that show up as “performance problems” are actually <strong className="text-black font-extrabold">impact-mapping problems</strong>: unclear contribution, misaligned roles, friction in handoffs, and leaders carrying too much of the load.
          <strong className="text-black font-extrabold">The GC Index®</strong> gives you a practical, outcome-driven way to see how people naturally prefer to create impact, so you can design teams, roles, and workflows that make results more consistent.
          </p>
         
          <div className="mt-10 flex justify-center">
            <Button className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-6 text-base rounded-xl">
              Request a Call
            </Button>
          </div>
        </div>
      </section>

      {/* Problem */}
      {/* <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-xl text-slate-300 leading-relaxed">
            Most performance issues are not people problems — they are impact-mapping problems. Misaligned roles, unclear ownership, and leaders carrying too much of the load slow execution and create friction.
          </p>
        </div>
      </section> */}

      {/* What is GC Index */}
      <section className="py-20 ">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold mb-6 text-center">What is the <span className="text-[#2bb673]">GC Index®</span>?</h2>
          <p className="text-gray-600 ">
            The GC Index® is a <strong className="text-black font-extrabold">Digital Organimetric Tool</strong> that measures energy for impact — not personality or competency. It identifies how people naturally contribute so teams can be designed for results, not guesswork. This creates a shared language for teams and leaders; simple, practical, and focused on business outcomes.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-12 text-white place-items-center">
            {/* {["Game Changer", "Strategist", "Implementer", "Polisher", "Play Maker"].map((type) => (
              <Card key={type} className="bg-[#2bb673] shadow-lg shadow-black">
                <CardContent className="p-6 text-center font-extrabold text-xl text-white">
                  {type}
                </CardContent>
              </Card>
            ))} */}
            <div className="shadow-lg shadow-black bg-[#60C1A1] rounded-full w-40 h-40 flex items-center justify-center hover:scale-120 transition-all duration-300">
              <p className="font-bold text-xl text-center">Game Changer</p>
            </div>
            <div className="shadow-lg shadow-black bg-[#136B8D] rounded-full w-40 h-40 flex items-center justify-center hover:scale-120 transition-all duration-300">
              <p className="font-bold text-xl text-center">Strategist</p>
            </div>
            <div className="shadow-lg shadow-black bg-[#E92431] rounded-full w-40 h-40 flex items-center justify-center hover:scale-120 transition-all duration-300">
              <p className="font-bold text-xl text-center">Implementer</p>
            </div>
            <div className="shadow-lg shadow-black bg-[#FBCF46] rounded-full w-40 h-40 flex items-center justify-center hover:scale-120 transition-all duration-300">
              <p className="font-bold text-xl text-center">Polisher</p>
            </div>
            <div className="shadow-lg shadow-black bg-[#B02F7C] rounded-full w-40 h-40 flex items-center justify-center hover:scale-120 transition-all duration-300">
              <p className="font-bold text-xl text-center">Play Maker</p>
            </div>

          </div>
        </div>
      </section>

      {/* Why Use */}
      <section className="">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold mb-10 text-center">Why <span className="text-[#2bb673]">Businesses</span> use the <span className="text-[#2bb673]">GC Index</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8 place-items-center">
            {benefits.map(
              (item) => (
                <FlipCard key={item.title} title={item.title} description={item.description} />
              )
            )}
          </div>
        </div>
      </section>

      {/* How TTMHUB Helps */}
      <section className="py-20 ">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold mb-10 text-center">How <span className="text-[#2bb673]">TTMHUB</span> Supports <span className="text-[#2bb673]">GC Partners</span></h2>
          <div className="space-y-8 text-gray-600 ">
            <p>TTMHUB does not simple deliver profiles, we help you apply GC Index insight where it matters most: performance, leadership and execution.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8 place-items-center">
            {support.map(
              (item) => (
                <FlipCard key={item.title} title={item.title} description={item.description}  />
              )
            )}
            </div>
          </div>
        </div>
      </section>

      {/* Subscriptions */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold mb-10 text-center">Subscriptions For <span className="text-[#2bb673]">Sustainable Impact</span></h2>
          <p className="text-gray-600 ">
          TTMHUB offers company subscription models that make it easier to scale usage, build internal consistency, and maintain momentum, especially when you want more than a one-time assessment.
           </p> <br />
           <p className="text-gray-600 ">
           With subscription access, organisations can leverage the GC platform’s tools and resources (including options such as ChatGCT and related enablement features) to keep GC language active in day-to-day leadership and team decisions.
           </p> <br />
           <p className="text-gray-600">
           TTMHUB helps you make the subscription pay off by supporting rollout strategy, onboarding, facilitation, and integration into leadership routines, so the insight actually changes how work gets done.
           </p>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-primary/5 text-center">
        <h2 className="text-3xl font-semibold">Ready to strengthen execution and alignment?</h2>
        <p className="mt-4 text-gray-600">We’ll help you implement GC Index in a way that delivers measurable results.</p>
        <div className="mt-8">
          <Button className="bg-emerald-600 cursor-pointer shadow-lg shadow-black hover:bg-emerald-500 hover:scale-115 transition-all duration-300 text-white px-10 py-6 rounded-xl">
            Request a Call
          </Button>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
}
