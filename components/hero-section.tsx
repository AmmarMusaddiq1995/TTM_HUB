"use client"

import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute min-h-screen inset-0 opacity-100 ">
        <img
          src="/zero-section.png"
          alt="Entrepreneur working"
          className="w-full h-full min-h-screen object-cover"
        />
      </div>

   


<div className="relative flex flex-col items-left justify-center container px-4 py-10 lg:py-20  mx-auto ">
        <div className="max-w-2xl text-center">
          <div className="mb-6 ">
         
            <span className="inline-block bg-primary/20 text-primary-foreground px-3 py-1 rounded-full  text-md sm:text-md  mb-4 ">
              WHERE STABILITY MEETS STRATEGY
            </span>
        
          </div>

          <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 text-balance ">
            {/* Let's Make <span className="text-[#2bb673]">Better Business</span> Together */}
            <TextGenerateEffect words="Let's Make Better Business Together" className="text-4xl lg:text-6xl font-extrabold mb-6 text-balance"></TextGenerateEffect>
          </h1>

        
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 text-pretty">
            Your business deserves stability - let's secure it.
          </p>
         

         
          <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center items-center">
            <Link href="/start-business">
              <Button
                size="lg"
                className="bg-[#2bb673] cursor-pointer  hover:scale-115  hover:bg-white hover:text-[#2bb673] transition-all duration-300 animate-bounce text-white px-8 py-4 text-lg"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
          

      
        </div>
      </div>

      {/* Feature Icons */}
      <div className="relative  ">
        <div className="container mx-auto  px-4 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          
            <div className="flex flex-col items-center space-y-2">
              <div className="h-18 w-18 border-2 border-primary/60 rounded-full flex items-center justify-center">
                <span className="text-primary text-3xl">📋</span>
              </div>
              <span className="text-md font-medium text-gray-300">
                Formation and Compliance
              </span>
            </div>
           
            
            {/* <div className="flex flex-col items-center space-y-2">
              <div className="h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-primary text-xl">🌐</span>
              </div>
              <span className="text-sm text-gray-300">Website and Domain</span>
            </div> */}

         
            <div className="flex flex-col items-center space-y-2">
              <div className="h-18 w-18 border-2 border-primary/60 rounded-full flex items-center justify-center">
                <span className="text-primary text-3xl">📊</span>
              </div>            
              <span className="text-md font-medium text-gray-300">
                Banking and Bookkeeping
              </span>
            </div>
            

           
            <div className="flex flex-col items-center space-y-2">
              <div className="h-18 w-18 border-2 border-primary/60 rounded-full flex items-center justify-center">
                <span className="text-primary text-3xl">💡</span>
              </div>
              <span className="text-md font-medium text-gray-300">
                Tax Advice and Filing
              </span>
            </div>
            

            
            <div className="flex flex-col items-center space-y-2">
              <div className="h-18 w-18 border-2 border-primary/60 rounded-full flex items-center justify-center">
                <span className="text-primary text-3xl">🎯</span>
              </div>
              <span className="text-md font-medium text-gray-300">
                Expert Customer Support
              </span>
            </div>
            
            
          </div>
        </div>
      </div>
    </section>
  );
}
