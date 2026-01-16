import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import ServiceCard from "@/components/ServiceCard";


export default function ReferredServicesPage() {


    const services = [
        {
          id: 1,
          name: "Pro Content Supply",
          logo: "/logos/abc-hr.png",
          description:
            "Pro Content Supply is a premium content production partner for small to mid-sized businesses that want to grow their visibility, authority, and revenue through high-quality video and digital content. We specialize in creating professional, marketing-ready content that helps brands show up consistently, communicate clearly, and stand out in competitive markets without the overhead of hiring a full in-house team.",
          tags: ["Content", "Video", "Digital"],
          verified: true,
          featured: false,
          websiteUrl: "https://better.business.ttmhub.co/procontentsupply"
        },
        {
          id: 2,
          name: "Hostinger",
          logo: "/logos/finpro.png",
          description:
            "Hostinger offers everything you need to turn one day into your day one online! From fast, reliable web hosting and free domains to powerful email solutions, AI-powered website builders, and easy-to-use tools for beginners and pros alike. With 99.9% uptime, 24/7 support, and exclusive deals, Hostinger makes launching your website simple, affordable, and successful. Take the first step and bring your idea to life today—these deals won’t last long!",
          tags: ["Hosting", "Web", "Domain"],
          verified: false,
          featured: false,
          websiteUrl: "https://better.business.ttmhub.co/Hostinger"
        },
        {
          id: 3,
          name: "FTS Solutions",
          logo: "/logos/legaledge.png",
          description:
            "At FTS TECH, we are a cutting-edge software and IT solutions provider dedicated to transforming businesses through innovative technology. With a passion for delivering customized, scalable solutions, we help our clients thrive in a digitally-driven world.",
          tags: ["Software", "IT", "Solutions", "Web Development"],
          verified: true,
          featured: true,
          websiteUrl: "https://ftssolution.tech"
        }
      ];

      const sortedServices = [...services].sort(
        (a, b) => b.featured - a.featured
      );


return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
              Referred Services
              </h1>
              <p className="text-xl text-gray-600 mb-8 text-pretty">
              Trusted partners we recommend to support your business growth.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-gray-100 py-20">
            <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* <ServiceCard {...services[0]} />
                <ServiceCard {...services[1]} />
                <ServiceCard {...services[2]} /> */}

                
        {sortedServices.map((service) => (
          <ServiceCard
            key={service.id}
            logo={service.logo}
            name={service.name}
            description={service.description}
            tags={service.tags}
            verified={service.verified}
            featured={service.featured}
            websiteUrl={service.websiteUrl}
          />
        ))}
      
                
            </div>
            </div>

        </section>
        </main>
      <Footer />
    </div>
)
}