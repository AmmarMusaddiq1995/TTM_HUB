"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export function CTASection() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/services/llc-formation-2");
  };
  return (
    <section className="py-20 bg-gray-50 text-black">
      <div className="container px-4 text-center mx-auto">
        <h2 className="text-3xl lg:text-6xl font-extrabold mb-6 text-balance">
          <span className="text-[#2bb673]">LLC Formation</span> in 3 Simple Steps
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          <div className="space-y-4">
            <div className="h-16 w-16 bg-[#2bb673] text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
              1
            </div>
            <h3 className="text-xl font-semibold">Choose Your State</h3>
            <p className="text-gray-600">
              Select the state where you want to form your LLC and we'll handle
              the rest.
            </p>
          </div>

          <div className="space-y-4">
          <div className="h-16 w-16 bg-[#2bb673] text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
              2
            </div>
            <h3 className="text-xl font-semibold">Provide Your Information</h3>
            <p className="text-gray-600">
              Fill out our simple form with your business details and contact
              information.
            </p>
          </div>

          <div className="space-y-4">
            <div className="h-16 w-16 bg-[#2bb673] text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
              3
            </div>
            <h3 className="text-xl font-semibold">We File Your LLC</h3>
            <p className="text-gray-600">
              We prepare and file your Articles of Organization with the state.
            </p>
          </div>
        </div>

        <Button
          onClick={handleClick}
          size="lg"
          className="bg-[#2bb673] cursor-pointer text-primary-foreground shadow-md shadow-black hover:scale-115 hover:shadow-lg hover:bg-[#2bb673]/80 transition-all duration-300 px-8 py-4 text-lg"
        >
          Start Your Compliance Process
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}
