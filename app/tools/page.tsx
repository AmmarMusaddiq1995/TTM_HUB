"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import FlipCard from "@/components/FlipCard"

export default function ToolsPage() {
  const tools = [
  
    {
      id: "GC Index-Intervention",
      name: "GC Index Intervention",
      description: "The GC Index is a tool that helps you understand your natural impact style and how it can be used to improve your leadership and team performance.",
      href: "/gc-index",
      tags: ["Leadership", "Team Performance"],
    },
    {
      id: "DISC Personality Program",
      name: "DISC Personality Program",
      description: "The DISC Personality Program is a tool that helps you understand your natural personality style and how it can be used to improve your leadership and team performance.",
      href: "/disc-personality-program",
      tags: ["Leadership", "Team Performance"],
    },
    {
      id: "E-Book",
      name: "DON'T JUST FIX IT, SOLVE IT (E-Book)",
      description: "A Practical Guide to Root Cause Problem-Solving for Leaders. Tired of solving the same problems over and over? This book teaches you to stop treating symptoms and start solving root causes.",
      href: "https://www.amazon.com/dp/B0GL3BX54S/ref=sr_1_2?crid=ZBL5Q46QDCZZ&dib=eyJ2IjoiMSJ9.8KpiF4O5RG2h7ynbDHd9ST8UX6SbuN_Y6A-HwIP7gV8pASd-EDqmV_oQhGUXwG1ta3R7iuiyebE1ZiBZHZm5mYwDX-5TTtogwjQcdGNE3INWosa-wmm3c9NALymTBvHqqgUpz4vE_jmbbB6dQ6qxeKzVRou6TW51iMnLEGEbxAUEhEx_LUDzA_bkku7V9Tw2h-7ZG4mTKpgHQSOlt1nUNQMUS2x5xVisAZ5jznAirjc.pxHU9v1im7NR85gSGjODU9DzCJ3wx_2sUs8glxqM7TQ&dib_tag=se&keywords=don%27t+just+fix+it&qid=1770081070&sprefix=don%27t+just+fix+it+%2Caps%2C187&sr=8-2",
      tags: ["Leadership", "Team Performance", "E-Book"],
    }
  ];

  const whatYoullFind = [
    {
      title: "People Insight Tools",
      description: "Understand how individuals and teams naturally make impact, communicate, and contribute, so you can lead, recruit, and structure work more effectively."
      ,className: ""
    },
    {
      title: "Practical Templates & Documents",
      description: "Ready-to-use tools that support operational clarity, compliance, and consistency, without unnecessary complexity."
    ,className: ""
    },
    {
      title: "Books, Workbooks & Guided Resources",
      description: "Carefully developed materials that help translate insight into action and intention into results."
    ,className: ""
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-linear-to-br from-primary/10 to-primary/5 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block bg-primary/20 text-black px-3 py-1 rounded-full  text-md sm:text-md  mb-4 ">
              Clarity. Capability. Confidence - by design.
            </span>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
                <span className="text-[#2bb673]">Tools</span> That Build <span className="text-[#2bb673]">Better Businesses</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 text-pretty">
              At The Talent Management Hub (TTMHUB), we believe better businesses are built when leaders and organizations are equipped with the right tools, not just good intentions. This Tools space brings together practical, research-informed resources designed to strengthen people decisions, support compliance, and improve how businesses operate, intentionally and sustainably.
              </p>
            </div>
          </div>
        </section>

        {/* Tools Description */}
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto max-w-2xl  px-4">
            <p>From insight tools like The GC Index and DISC, to downloadable templates, documents, books, and workbooks, these resources are designed to meet you where you are - whether you’re exploring, learning, or ready to implement.</p>
            <br />
            <p>Some tools are free, because access to clarity matters. Others are paid, because depth, rigor, and thoughtful design require investment.</p>
            <br />
            <p>All are purposeful. All are aligned to building better businesses.</p>
          </div>
        </section>

        <section className="bg-gray-100 py-10">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
              What You'll Find Here
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 mx-auto items-center">
              {
                whatYoullFind.map((item)=>(
                  <FlipCard key={item.title} title={item.title} description={item.description} className={item.className} />
                ))
              }

            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-10">
          
            <h1 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
              Why These Tools Matter
            </h1>
            <div className="max-w-2xl mx-auto">
            <p>
              Strong businesses donot rely on guesswork. They rely on clarity, fit and well-designed systems.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Make informed people and structural decisions.</li>
              <li>Reduce friction, confusion, and misalignment.</li>
              <li>Support performance through clarity - not pressure.</li>
              <li>Build businesses that are compliant, intentional, and positioned to grow.</li>
            </ul>
            <br />
            <p>
            Whether you start with a free resource or invest in a deeper tool, each offering is designed to support meaningful progress, at the pace that’s right for you.

            </p>
            <br />
            <p className="font-extrabold text-black font-serif">Explore. Learn. Apply.</p><br />
            <p className="font-extrabold text-black font-serif">Let's Make Better Businesses Together.</p>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map((tool) => (
                <Card key={tool.id} className="flex flex-col h-full">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-gray-900">{tool.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-4 flex-1">
                    <p className="text-sm text-gray-600">{tool.description}</p>
                    {tool.tags && tool.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {tool.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-700 border border-gray-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="mt-auto pt-2">
                      <Link href={tool.href}>
                        <Button className="w-full cursor-pointer bg-[#2bb673] hover:bg-[#2bb673]/90">
                          Open Tool
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

