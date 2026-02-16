"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import FlipCard from "./FlipCard";

export function CTASection() {
  const router = useRouter();

  // const handleClick = () => {
  //   router.push("/services/llc-formation-2");
  // };
  return (
    // <section className="py-20 bg-gray-50 text-black">
    //   <div className="container px-4 text-center mx-auto">
    //     <h2 className="text-3xl lg:text-6xl font-extrabold mb-6 text-balance">
    //       How It <span className="text-[#2bb673]">Works</span> 
    //     </h2>

    //     <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
    //       <div className="space-y-4">
    //         <div className="h-16 w-16 bg-[#2bb673] text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
    //           1
    //         </div>
    //         <h3 className="text-xl font-semibold">Choose Your State</h3>
    //         <p className="text-gray-600">
    //           Select the state where you want to form your LLC and we'll handle
    //           the rest.
    //         </p>
    //       </div>

    //       <div className="space-y-4">
    //       <div className="h-16 w-16 bg-[#2bb673] text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
    //           2
    //         </div>
    //         <h3 className="text-xl font-semibold">Provide Your Information</h3>
    //         <p className="text-gray-600">
    //           Fill out our simple form with your business details and contact
    //           information.
    //         </p>
    //       </div>

    //       <div className="space-y-4">
    //         <div className="h-16 w-16 bg-[#2bb673] text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
    //           3
    //         </div>
    //         <h3 className="text-xl font-semibold">We File Your LLC</h3>
    //         <p className="text-gray-600">
    //           We prepare and file your Articles of Organization with the state.
    //         </p>
    //       </div>
    //     </div>

    //     <Button
    //       onClick={handleClick}
    //       size="lg"
    //       className="bg-[#2bb673] cursor-pointer text-primary-foreground shadow-md shadow-black hover:scale-115 hover:shadow-lg hover:bg-[#2bb673]/80 transition-all duration-300 px-8 py-4 text-lg"
    //     >
    //       Start Your Compliance Process
    //       <ArrowRight className="ml-2 h-5 w-5" />
    //     </Button>
    //   </div>
    // </section>

  //   <section className="py-20 bg-gray-50 text-black">
  //   <div className="container px-4 text-center mx-auto">
  //     <h2 className="text-3xl lg:text-6xl font-extrabold mb-6 text-balance">
  //       How It <span className="text-[#2bb673]">Works</span> 
  //     </h2>

  //     <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
  //       <div className="space-y-4">
  //         <div className="h-16 w-16 bg-[#2bb673] text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
  //           1
  //         </div>
  //         <h3 className="text-xl font-semibold">Start Your Application</h3>
  //         <p className="text-gray-600 text-balance">
  //          Complete a short service application to tell us what you need.
  //         </p>
  //         <p className="text-gray-600 text-balance">
  //           For Strategic People Services , we begin with a discovery call to understand you goals , context and priorities.
  //         </p>
         
  //       </div>

  //       <div className="space-y-4">
  //       <div className="h-16 w-16 bg-[#2bb673] text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
  //           2
  //         </div>
  //         <h3 className="text-xl font-semibold">We Align & Get To Work</h3>
  //         <p className="text-gray-600">
  //          Once your application is reviewed, we proceed based on your selected service:
  //         </p>
  //         <ul className="list-disc pl-6 text-gray-600 text-balance ">
  //           <li><strong className="text-black">Formation & Compliance Srvices etc:</strong> We began preparing & filing your documentation according to your choosen package</li>
         
  //         </ul>
  //       </div>

  //       <div className="space-y-4">
  //         <div className="h-16 w-16 bg-[#2bb673] text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
  //           3
  //         </div>
  //         <h3 className="text-xl font-semibold">We File Your LLC</h3>
  //         <p className="text-gray-600">
  //           We prepare and file your Articles of Organization with the state.
  //         </p>
  //       </div>
  //     </div>

  //     <Button
  //       onClick={handleClick}
  //       size="lg"
  //       className="bg-[#2bb673] cursor-pointer text-primary-foreground shadow-md shadow-black hover:scale-115 hover:shadow-lg hover:bg-[#2bb673]/80 transition-all duration-300 px-8 py-4 text-lg"
  //     >
  //       Start Your Compliance Process
  //       <ArrowRight className="ml-2 h-5 w-5" />
  //     </Button>
  //   </div>
  // </section>



  <section className="py-20 bg-gray-50 text-black">
    <div className="container px-4 text-center mx-auto">
      <h2 className="text-3xl lg:text-6xl font-extrabold mb-6 text-balance">
        How We <span className="text-[#2bb673]">Work</span> 
      </h2>

      <div className="grid md:grid-cols-4 gap-6  mx-auto py-8 place-items-center">
        <FlipCard title="1. Start Your Application" className=""
        description={ <> 
        <p className="text-balance">Complete a short service application to tell us what you need.</p> <br /> 
        <p className="text-balance">For Strategic People Services , we begin with a discovery call to understand you goals , context and priorities.</p>
        </> } />
        <FlipCard title="2. We Align & Get To Work" className=""
        description={ <>
        <p className="text-balance">Once your application is reviewed, we proceed based on your selected service:</p>
        <ul className=" text-xs ">
          <li><strong className="text-black">Formation & Compliance Srvices etc:</strong> We began preparing & filing your documentation according to your choosen package</li>
          <li><strong className="text-black">Strategic People Services:</strong> We prepare a tailored proposal outlining scope, timelines, and support options for your approval.</li>
        </ul>
         </>
        } />
        <FlipCard title="3. Receive Your Documents & Access" className=""
        description={ <>
        <ul className=" text-sm ">
          <li><strong className="text-black">Formation & Compliance etc:</strong> Your completed documents (e.g, formation paperwork, EIN, registerations etc) are delivered to your dashboard.</li>
          <li><strong className="text-black">Strategic People Services:</strong> You recieve confirmation, documentation and next steps via email.</li>
        </ul>
         </>} /> 
        <FlipCard title="4. Ready To Launch & Grow" className=""
        description={ <>
        <ul className=" text-sm ">
          <li><strong className="text-black">New Businesses:</strong> With your company set up correctly, you're ready to launch with confidence.</li>
          <li><strong className="text-black">Strategic People Services:</strong> You gain access to the agreed upon services,tools, and ongoing support, so your people and business can thrive.</li>
        </ul>
        </>} />
      </div>

      <Button
        // onClick={handleClick}
        onClick = {() => document.getElementById("section-4")?.scrollIntoView({ behavior: "smooth" })}
        size="lg"
        className="bg-[#2bb673] mt-10 cursor-pointer text-primary-foreground shadow-md shadow-black hover:scale-115 hover:shadow-lg hover:bg-[#2bb673]/80 transition-all duration-300 px-8 py-6 text-lg"
      >
        Configure Your Package
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>

    </div>
  </section>
  );
}
