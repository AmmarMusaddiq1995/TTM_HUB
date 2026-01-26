"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function NoteFromOwner() {
  return (
    <section className="relative overflow-hidden py-4">
      
      {/* Spotlight */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#22c55e"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 ">

        {/* LEFT — Owner Card */}
        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-6 max-w-sm"
        >
          <h3 className="text-lg font-semibold">Ms. Lara Dowell</h3>
          <p className="text-sm text-gray-500 mb-4">
            CEO of The Talent Management Hub
          </p>

          <div className="relative h-[320px] w-full rounded-xl overflow-hidden">
            <Image
              src="/owner.jpg"
              alt="Owner"
              fill
              className="object-cover"
            />
          </div>

          <a
            href="#"
            className="inline-block mt-4 text-sm font-medium text-green-600 hover:underline"
          >
            Visit LinkedIn →
          </a>
        </motion.div> */}

        {/* RIGHT — Letter Content */}
        <div className="space-y-8">

          {/* Heading */}
          {/* <TextGenerateEffect
            words="A Note from the Owner"
            className="text-3xl md:text-4xl font-bold text-gray-900"
          /> */}

          {/* Highlight Quote */}
          <motion.blockquote
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border-l-4 border-green-500 pl-5 text-lg font-medium text-gray-900"
          >
            Businesses don’t struggle because leaders lack commitment —  
            they struggle because the systems meant to support them are fragmented.
          </motion.blockquote>

          {/* Paragraphs */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-5 text-gray-700 leading-relaxed"
          >
            <p>
              After years of working with leaders across industries, regions, and
              stages of growth, one pattern appears again and again.
            </p>

            <p>
              I’ve seen strong leaders burn out under unclear structures. I’ve
              seen capable teams underperform because the foundations around
              them were unstable. And I’ve seen promising businesses stall —
              not from lack of vision, but from lack of integrated support.
            </p>

            <p className="font-semibold text-gray-900">
              That is why Better Business exists.
            </p>

            <p>
              At The Talent Management Hub, we believe success doesn’t happen in
              silos. Healthy organizations are built when leaders are supported
              as people, teams work well together, and the business itself is
              structured to protect and sustain growth.
            </p>
          </motion.div>

          {/* Values Cards */}
          <HoverEffect
            items={[
              {
                title: "Better Me",
                description: "Supporting leaders as people, not just roles.",
                link: "#",
              },
              {
                title: "Better Teams",
                description: "Equipping teams to collaborate and perform.",
                link: "#",
              },
              {
                title: "Better Business",
                description: "Structures that protect, guide, and sustain growth.",
                link: "#",
              },
            ]}
          />

          {/* Closing */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-lg font-semibold text-gray-900 pt-6"
          >
            Let’s Build Better Businesses , Together!
          </motion.p>

        </div>
      </div>
    </section>
  );
}
