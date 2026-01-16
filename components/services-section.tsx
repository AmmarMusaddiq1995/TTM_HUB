"use client"
import { CometCard } from "./ui/comet-card"
import { motion } from "framer-motion"


export function ServicesSection() {
  const services = [
    {
      icon: "🚀",
      title: "Growing Businesses",
      description:
        "Businesses that are growing and need more structure.",
      image: "/growingBusiness.png",
    },
    {
      icon: "🛡️",
      title: "Struggling Businesses",
      description:
        "Businesses that are struggling with compliance or operational clarity.",
      image: "/compliance.png",
    },
    {
      icon: "📈",
      title: "Stretched Leadership",
      description:
        "Businesses that have leaders stretched beyond their capacity.",
      image: "/leaders.png",
    },
    {
      icon: "📈",
      title: "Flexible HR Support",
      description:
        "Businesses that need HR support but can’t hire a full-time HR manager.",
      image: "/hr2.png",
    },
    {
      icon: "📈",
      title: "Strong Culture",
      description:
        "Businesses that want to strengthen culture and reduce risk.",
      image: "/culture.png",
    },
    {
      icon: "📈",
      title: "Support",
      description:
        "Businesses that want to build systems that support people and performance.",
      image: "/build.png",
    },
   
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-6xl font-extrabold mb-4 text-balance">
           <span className="text-[#2bb673]">Who</span> This Is For?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Better business is for organizations that:
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index} className="text-center">
              <div className="mb-8">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>

              <div className="flex items-center justify-center mb-4">
                {/* <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span className="text-2xl">{service.icon}</span>
                </div> */}
                <img src="/icon.png" alt="Expert People Support" className="w-12 h-12 mr-3" />
                <h3 className="text-2xl font-bold">{service.title}</h3>
              </div>

              <p className="text-muted-foreground  text-pretty">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

     
    </section>

 
  )
}
