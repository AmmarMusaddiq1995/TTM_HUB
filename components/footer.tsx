"use client";

import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-white text-black py-16">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-6">
              {/* <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">
                  FFG
                </span>
              </div>
              <span className="font-bold text-xl">FaazFinancialGroup</span> */}
              <Image src="/logottm.png" alt="The Talent Management Hub" width={140} height={20} />
            </Link>
            <p className="text-gray-600 mb-4">
              Making business formations and governance accessible, affordable and simple for entrepreneurs everywhere!
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-600">
            
              {/* <li>
                <Link
                  href="/pricing"
                  className="hover:text-[#2bb673] transition-colors"
                >
                  Pricing
                </Link>
              </li> */}
              <li>
                <a
                  href="/services/llc-formation-2"
                  className="hover:text-[#2bb673] transition-colors"
                >
                  LLC Formation
                </a>
              </li>
              <li>
                <a
                  href="/services/corp-formation-2"
                  className="hover:text-[#2bb673] transition-colors"
                >
                  Corporation Formation
                </a>
              </li>
              <li>
                <a
                  href="/services/hr-services"
                  className="hover:text-[#2bb673] transition-colors"
                >
                 HR Services
                </a>
              </li>
              <li>
                <a
                  href="/gc-index"
                  className="hover:text-[#2bb673] transition-colors"
                >
                 GC Index Intervention
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-600">
              {/* <li>
                <Link
                  href="/blog"
                  className="hover:text-[#2bb673] transition-colors"
                >
                  Blog
                </Link>
              </li> */}
              <li>
                <Link
                  href="/faq"
                  className="hover:text-[#2bb673] transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="hover:text-[#2bb673] transition-colors"
                >
                  How It Works
                </Link>
              </li>
              {/* <li>
                <a href="#" className="hover:text-[#2bb673] transition-colors">
                  Business Formation Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2bb673] transition-colors">
                  State Requirements
                </a>
              </li> */}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#2bb673] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#2bb673] transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/privacy"
                    className="hover:text-[#2bb673]  transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/terms"
                  className="hover:text-[#2bb673] transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-12 pt-8 text-center text-gray-600">
          <p> Copyright 2025 © FTSSolution.tech All Right Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
