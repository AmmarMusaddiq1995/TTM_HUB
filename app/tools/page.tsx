"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ToolsPage() {
  const tools = [
    // {
    //   id: "business-name-generator",
    //   name: "Business Name Generator",
    //   description:
    //     "Quickly generate creative, brandable business name ideas using your own keywords, then take the next step to register your business.",
    //   href: "/tools/business-name-generator",
    //   tags: ["Branding", "Planning"],
    // },
    // Add more tools here as you build them
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
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-linear-to-br from-primary/10 to-primary/5 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
                Tools
              </h1>
              <p className="text-xl text-gray-600 mb-8 text-pretty">
                Practical, no-fluff tools to help you plan, start, and grow your business with more clarity and
                confidence.
              </p>
            </div>
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

