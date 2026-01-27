"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen">
    <Header />
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-4xl px-6">
        <header className="mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900">TTMHUB Better Business Services Terms & Conditions</h1>
          <p className="mt-2 text-gray-600">
            Please read this Legal Disclaimer and Terms of Service carefully before accessing our website or using our services.
          </p>
          <div className="mt-4">
            <span className="inline-block rounded bg-[#2bb673] px-3 py-1 text-sm font-medium text-white">
              The Talent Management Hub — A Wyoming Limited Liability Company <br /><br />
              Better Business Services Terms & Conditions
Applies to Formation Services, Compliance Services, Bookkeeping & Taxes, and UK Formation & Tax Services offered on business.ttmhub.co.

            </span>
          </div>
        </header>

        {/* Table of contents */}
        <nav className="mb-8 rounded-lg border border-gray-200 bg-white p-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Contents</h2>
          <ul className="grid gap-2 sm:grid-cols-2">
            <li><a href="#1" className="text-sm text-gray-700 hover:text-[#2bb673]">• Agreement To Terms (Payment = Legal Acceptance)</a></li>
            <li><a href="#2" className="text-sm text-gray-700 hover:text-[#2bb673]">• Definitions (Interpretation)</a></li>
            <li><a href="#3" className="text-sm text-gray-700 hover:text-[#2bb673]">• Services Governed By These Terms</a></li>
            <li><a href="#4" className="text-sm text-gray-700 hover:text-[#2bb673]">• Nature Of Services - No Guarantees</a></li>
            <li><a href="#5" className="text-sm text-gray-700 hover:text-[#2bb673]">• Client Responsibilities (Accuracy + Timeliness)</a></li>
            <li><a href="#6" className="text-sm text-gray-700 hover:text-[#2bb673]">• Formation Services Terms</a></li>
            <li><a href="#7" className="text-sm text-gray-700 hover:text-[#2bb673]">• Compliance Services Terms</a></li>
            <li><a href="#8" className="text-sm text-gray-700 hover:text-[#2bb673]">• Bookkeeping & Tax Services Terms</a></li>
            <li><a href="#9" className="text-sm text-gray-700 hover:text-[#2bb673]">• UK Formation & Tax Services Terms</a></li>
            <li><a href="#10" className="text-sm text-gray-700 hover:text-[#2bb673]">• Fees , Payment Terms & Third-Party Fees</a></li>
            <li><a href="#11" className="text-sm text-gray-700 hover:text-[#2bb673]">• Universal Non-Refund Rule (All Service)</a></li>
            <li><a href="#12" className="text-sm text-gray-700 hover:text-[#2bb673]">• Government Or Ministry Rejection - Explicit Acceptance</a></li>
            <li><a href="#13" className="text-sm text-gray-700 hover:text-[#2bb673]">• Client Conduct , Suspension & Termination</a></li>
            <li><a href="#14" className="text-sm text-gray-700 hover:text-[#2bb673]">• Chargebacks & Disputes</a></li>
            <li><a href="#15" className="text-sm text-gray-700 hover:text-[#2bb673]">• Dispute Resolution: Remote-First Arbitration Venue </a></li>
            <li><a href="#16" className="text-sm text-gray-700 hover:text-[#2bb673]">• Limitation Of Liability</a></li>
            <li><a href="#17" className="text-sm text-gray-700 hover:text-[#2bb673]">• Indemnification</a></li>
            <li><a href="#18" className="text-sm text-gray-700 hover:text-[#2bb673]">• Confidentiality</a></li>
            <li><a href="#19" className="text-sm text-gray-700 hover:text-[#2bb673]">• Intellectual Property: Limited License</a></li>
            <li><a href="#20" className="text-sm text-gray-700 hover:text-[#2bb673]">• Force Majeure</a></li>
            <li><a href="#21" className="text-sm text-gray-700 hover:text-[#2bb673]">• Governing Law</a></li>
            <li><a href="#22" className="text-sm text-gray-700 hover:text-[#2bb673]">• International Client Acknowledgement & Risk Allocation</a></li>
            <li><a href="#23" className="text-sm text-gray-700 hover:text-[#2bb673]">• Severability; Waiver; Assignment; Updates; Notices</a></li>
            <li><a href="#24" className="text-sm text-gray-700 hover:text-[#2bb673]">• Entire Agreement</a></li>
            
          </ul>
        </nav>

        <article className="prose prose-lg max-w-none">
          <section id="1">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Agreement To Terms (Payment = Legal Acceptance)</h3>
           <p>By accessing <a className="text-[#2bb673] underline font-bold" href="https://business.ttmhub.co">business.ttmhub.co / ttmhub.co/betterbusiness</a> , submitting an application, or making payment for any service, you (“Client,” “you,” “your”) expressly agree that:</p>
           <ul className="list-disc pl-6 text-gray-600 py-4">
            <li>You have read and understood these Terms & Conditions (“Terms”).</li>
            <li>You accept them in full and without modification.</li>
            <li>Payment constitutes irrevocable legal acceptance of these Terms.</li>
           </ul>
           <p>If you do not agree to these Terms, please do not submit payment.</p>
          </section>

          <section id="2" className="mt-4">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Definitions (Interpretation)</h3>
            <p>For purposes of these Terms:</p>
            <ul className="list-disc pl-6 text-gray-600 py-4">
             <li><strong>“TTMHUB”</strong> means The Talent Management Hub, LLC (a Wyoming limited liability company).</li>
             <li><strong>“Client”</strong> means you, the person or entity submitting an application for Services.</li>
             <li><strong>“Services”</strong> means any service offered through business.ttmhub.co, including those listed in Section 3.</li>
             <li><strong>“Work Begins”</strong> means the earliest occurrence of any of the following: onboarding review, intake validation, research, drafting, consultation time, preparation for submission, or any time spent by TTMHUB or its collaborators in connection with your order.</li>
             <li><strong>“Third-Party Fees”</strong> means any fees charged by governments, registries, ministries, payment processors, registered agents, platforms, couriers, or other third parties.</li>
             <li><strong>“Deliverables”</strong> means work product provided to you (drafts, documents, templates, filings prepared, reports, summaries, reconciliations, submissions, or recommendations).</li>
             <li><strong>“Collaborators”</strong> means independent contractors, consultants, or specialist providers engaged by TTMHUB to support delivery of Services.</li>
             <li><strong>“Customer Content”</strong> means content you provide, such as documents, data, or information.</li>
             <li><strong>“Content”</strong> means any information, text, graphics, photos or other materials uploaded, downloaded, or appearing in connection with the Services.</li>
          </ul>
          <p>Headings are for convenience only and do not affect interpretation.</p>
          </section>

          <section id="3" className="mt-4">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Services Governed By These Terms</h3>
           <p>These Terms govern all non–Strategic People Support services, including but not limited to:</p>
           <ul className="list-disc pl-6 text-gray-600 py-4">
            <li><strong>Formation Services</strong></li>
            <li><strong>Compliance Services</strong></li>
            <li><strong>Bookkeeping & Tax Services</strong></li>
            <li><strong>UK Formation & Tax Services</strong></li>
           </ul>
          </section>

          <section id="4" className="mt-4">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Nature Of Services - No Guarantees</h3>
           <p>TTMHUB provides administrative, coordination, and advisory support only.</p>
           <p>TTMHUB does not:</p>
           <ul className="list-disc pl-6 text-gray-600 py-4">
            <li>Guarantee approval by any government agency, registry, or ministry.</li>
            <li>Control processing timelines or enforcement decisions.</li>
            <li>Override statutory or regulatory eligibility criteria.</li>
            <li>Provide legal or tax advice unless expressly stated in writing.</li>
          </ul>
          <p>All services involving government or official authorities carry inherent risk, which you accept upon payment.</p>
          </section>

          <section id="5" className="mt-4">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Client Responsibilities (Accuracy + Timeliness)</h3>
            <p>You are responsible for providing complete, accurate, and timely information and for responding to requests for clarification or approval.</p>
            <p>If you provide incorrect, incomplete, inconsistent, or changing information, you accept responsibility for resulting delays, rejections, additional work, re-filing costs, and Third-Party Fees. TTMHUB is not liable for adverse outcomes caused by client-provided information or delayed responses.</p>
          </section>

          <section id="6" className="mt-4">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Formation Services Terms</h3>
           <p>(LLC, Corporation, DBA, Trademark Registration)</p>

           <h5 className="text-xl font-semibold text-gray-900 py-4">1. Scope Clarification</h5>
           <p>TTMHUB provides administrative and filing support only. We do not:</p>
           <ul className="list-disc pl-6 text-gray-600 py-4">
            <li>Determine the legal suitability of entity types.</li>
            <li>Provide legal opinions on structure, liability, or tax treatment.</li>
            <li>Guarantee approval by any state, federal, or trademark authority.</li>
           </ul>

           <h5 className="text-xl font-semibold text-gray-900 py-4">2. Client Responsibility For Accuracy</h5>
           <p>You are solely responsible for the accuracy of:</p>
           <ul className="list-disc pl-6 text-gray-600 py-4">
            <li>Legal names and spellings.</li>
            <li>Ownership percentages.</li>
            <li>Addressess.</li>
            <li>Jurisdiction selection.</li>
            <li>Business activity descriptions.</li>
           </ul>
           <p>If incorrect or incomplete information is provided and filings are submitted:</p>
           <ul className="list-disc pl-6 text-gray-600 py-4">
            <li>All fees become non-refundable.</li>
            <li>Corrections require new filings and additional fees.</li>
            <li>TTMHUB bears no liability for rejection or delay.</li>
            
           </ul>

           <h5 className="text-xl font-semibold text-gray-900 py-4">3. Trademark-Specific Protections</h5>
           <p>Trademark registration services:</p>
           <ul className="list-disc pl-6 text-gray-600 py-4">
            <li>Do not guarantee approval, protection, or enforceability.</li>
            <li>Do not include clearance searches or legal opinions unless explicitly purchased.</li>
            <li>May be refused or opposed for reasons entirely outside TTMHUB’s control.</li>
           </ul>
           <p>Once a trademark application is submitted, no refunds apply under any circumstance.</p>
          
          </section>

          <section id="7" className="mt-4">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Compliance Services Terms</h3>
            <p>(EIN, BOI, ITIN, Sales & Use Tax, Annual Filings, Registered Agent, Dissolution, Revival, Amendments)</p>
            
            <h5 className="text-xl font-semibold text-gray-900 py-4">1. No Outcomes Guaranteed</h5>
            <p>Compliance services depend on:</p>
            <ul className="list-disc pl-6 text-gray-600 py-4">
              <li>Government agencies and ministries.</li>
              <li>Third-party processing systems.</li>
              <li>Statutory deadlines and eligibility rules.</li>
            </ul>
            <p>TTMHUB does not guarantee:</p>
            <ul className="list-disc pl-6 text-gray-600 py-4">
              <li>Processing speed</li>
              <li>Acceptance</li>
              <li>Approval outcomes</li>
              <li>Avoidance of penalties caused by incorrect or late client submissions</li>
            </ul>

            <h5 className="text-xl font-semibold text-gray-900 py-4">2. Deadline Dependency Clause</h5>
            <p>If you fail to provide required information before a statutory or regulatory deadline, you accept full responsibility for:</p>
            <ul className="list-disc pl-6 text-gray-600 py-4">
              <li>Late fees</li>
              <li>Penalties</li>
              <li>Interest</li>
              <li>Rejected or voided filings</li>
            </ul>
            <p>TTMHUB is not liable for missed deadlines caused by delayed or incomplete client responses.</p>

            <h5 className="text-xl font-semibold text-gray-900 py-4">3. Dissolution & Revival</h5>
            <p>State and government fees vary and are always non-refundable.
            If a dissolution or revival fails due to outstanding liabilities, compliance blocks, or statutory restrictions, no refund applies.</p>

          </section>

          <section id="8" className="mt-4">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Bookkeeping & Tax Services Terms</h3>
            <p>(SMB/SME Bookkeeping, Full-Scale Bookkeeping, Reconciliation, New Books Setup)</p>

            <h5 className="text-xl font-semibold text-gray-900 py-4">1. Advisory, Not Assurance</h5>
            <p>Bookkeeping and tax services:</p>
            <ul className="list-disc pl-6 text-gray-600 py-4">
              <li>Rely entirely on client-provided data</li>
              <li>Do not constitute audits, reviews, or assurances</li>
              <li>Do not guarantee tax outcomes, profitability, or compliance status</li>
            </ul>

            <h5 className="text-xl font-semibold text-gray-900 py-4">2. Client Data Integrity Clause</h5>
            <p>You are solely responsible for:</p>
            <ul className="list-disc pl-6 text-gray-600 py-4">
              <li>Completeness of financial records</li>
              <li>Accuracy of transactions</li>
              <li>Full disclosure of income, liabilities, and accounts.</li>
            </ul>
            <p>If inaccurate or incomplete data results in errors:</p>
            <ul className="list-disc pl-6 text-gray-600 py-4">
              <li>Corrections are billable</li>
              <li>Fees paid are non-refundable</li>
            </ul>

            <h5 className="text-xl font-semibold text-gray-900 py-4">3. No Retroactive Liability</h5>
            <p>TTMHUB is not responsible for:</p>
            <ul className="list-disc pl-6 text-gray-600 py-4">
              <li>Historical errors prior to engagement</li>
              <li>Penalties related to periods before onboarding</li>
              <li>Misclassification or omissions by prior providers</li>
            </ul>
            
          </section>

          <section id="9" className="mt-4">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">UK Formation & Tax Services Terms</h3>
            <p>(UK LTD Formation, Corporation Tax, Self-Assessment, VAT)</p>

            <h5 className="text-xl font-semibold text-gray-900 py-4">1. Jurisdictional Limitation</h5>
            <p>UK services are administrative and coordination-based and may involve third-party UK partners.
            TTMHUB does not act as your UK legal or tax representative unless explicitly stated in writing.</p>

            <h5 className="text-xl font-semibold text-gray-900 py-4">2. HMRC Dependency</h5>
            <p>HMRC decisions, timelines, reviews, and enforcement actions are entirely outside TTMHUB’s control.
            Rejected or delayed filings do not trigger refunds once work has begun.</p>

            <h5 className="text-xl font-semibold text-gray-900 py-4">3. VAT Registration & Returns</h5>
            <p>VAT registration:</p>
            <ul className="list-disc pl-6 text-gray-600 py-4">
              <li>Is not guaranteed</li>
              <li>Maybe refused based on HMRC criteria</li>
              <li>Does not entitle you to reclaim VAT automatically</li>
            </ul>
            <p>VAT return accuracy depends entirely on records you submit. Corrections are chargeable and non-refundable.</p>
          </section>

          <section id="10" className="mt-4">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Fees , Payment Terms & Third-Party Fees</h3>
            <ul className="list-disc pl-6 text-gray-600 py-4">
              <li>All prices are as displayed at checkout or confirmed in writing.</li>
              <li>Work generally begins once payment is received and cleared.</li>
              <li>You are responsible for all applicable Third-Party Fees unless explicitly included in your package.</li>
              <li>Third-Party Fees are non-refundable under all circumstances.</li>
            </ul>
          </section>

          <section id="11" className="mt-4">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Universal Non-Refund Rule (All Services)</h3>
            <p>Once any of the following occurs, refunds are contractually barred:</p>
            <ul className="list-disc pl-6 text-gray-600 py-4">
              <li>Onboarding review begins</li>
              <li>Documents are drafted</li>
              <li>Government or third-party submissions are prepared or filed</li>
              <li>Advisory or administrative time is spent</li>
              <li>Third-party or government fees are incurred</li>
            </ul>
            <p>Client regret, misunderstanding, dissatisfaction, or change of direction does not constitute grounds for a refund.</p>
          </section>

          <section id="12" className="mt-4">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Government Or Ministry Rejection - Explicit Acceptance</h3>
            <p>By submitting payment, you expressly acknowledge that:</p>
            <ul className="list-disc pl-6 text-gray-600 py-4">
              <li>All formation, compliance, tax, and registration services involve third-party government authorities</li>
              <li>Approval, rejection, delay, or enforcement decisions are made solely by those authorities</li>
              <li>TTMHUB does not guarantee outcomes, timelines, or acceptance</li>
            </ul>
            <p>If an application, filing, registration, or submission is rejected, delayed, questioned, or denied by any government agency, registry, or ministry (U.S. or foreign):</p>
            <ul className="list-disc pl-6 text-gray-600 py-4">
              <li>Fees paid to TTMHUB remain earned and non-refundable once Work Begins</li>
              <li>Government and Third-Party Fees are non-refundable under all circumstances</li>
              <li>Corrections, re-filings, or alternative approaches constitute new services and may require additional fees.</li>
            </ul>
                      
          </section>

          <section id="13" className="mt-4">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Client Conduct , Suspension & Termination</h3>
            <p>TTMHUB may suspend or terminate services (without refund for work performed or Third-Party Fees incurred) if:</p>
            <ul className="list-disc pl-6 text-gray-600 py-4">
              <li>You fail to provide required information within a reasonable time</li>
              <li>You are abusive, harassing, discriminatory, or threatening toward staff or Collaborators</li>
              <li>You request unethical or unlawful conduct</li>
              <li>You breach these Terms, including initiating improper chargebacks</li>
            </ul>
          </section>

          <section id="14" className="mt-4">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Chargebacks & Disputes</h3>
            <p>Initiating a chargeback without first contacting TTMHUB constitutes a breach of these Terms.
            TTMHUB may:</p>
            <ul className="list-disc pl-6 text-gray-600 py-4">
              <li>Suspend services immediately</li>
              <li>Submit records to payment processors</li>
              <li>Recover chargeback and administrative fees where permitted by law</li>
            </ul>
          </section>

          <section id="15" className="mt-4">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Dispute Resolution: Remote-First Arbitration Venue </h3>
           <p> Except where prohibited by law, any dispute, claim, or controversy arising out of or relating to these Terms, the Site, or Services shall be resolved by binding arbitration seated in Wyoming, USA, administered by the American Arbitration Association (AAA) under its applicable rules.</p>
           <p className="mt-2"> Remote-first hearings. The parties agree that arbitration proceedings, including conferences and evidentiary hearings, will be conducted remotely by videoconference unless the arbitrator determines that an in-person hearing is necessary for fairness. The parties further agree that submission of evidence, witness statements, and exhibits may be handled electronically.</p>
           <p className="mt-2"> Pre-arbitration resolution. Before commencing arbitration, the Client must provide written notice of the dispute and allow 14 calendar days for good-faith resolution. If unresolved, either party may proceed to arbitration.</p>
           <p className="mt-2"> Carve-outs. Either party may seek temporary or injunctive relief in a court of competent jurisdiction to protect intellectual property, confidentiality, or to prevent unauthorized use of materials, without waiving arbitration.</p>
           <p className="mt-2">All notices to TTMHUB must be sent to Grow@ttmhub.co and will be deemed delivered when sent (provided no bounce-back notice is received). Notices to the Client will be sent to the email address used at checkout or provided in onboarding.</p>
           <p className="mt-2">To the fullest extent permitted by law, the parties consent to electronic delivery of dispute notices and arbitration communications, including service of arbitration demands and related documents by email.</p>
           <p className="mt-2">The arbitrator may award reasonable attorneys’ fees, administrative fees, and costs to the prevailing party. If the arbitrator determines a claim was brought primarily for harassment, leverage, or without a reasonable basis, the arbitrator may award fees and costs against the initiating party.</p>
          </section>

          <section id="16" className="mt-4">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Limitation Of Liability</h3>
            <p>To the maximum extent permitted under Wyoming law:</p>
            <ul className="list-disc pl-6 text-gray-600 py-4">
                <li>TTMHUB’s total liability for any claim arising out of or related to Services shall not exceed the amount paid for the specific service giving rise to the claim.</li>
                <p>TTMHUB is not liable for:</p>
                <li className="ml-7">indirect, incidental, consequential, special, or punitive damages</li>
                <li className="ml-7">lost profits, revenue, data, or business opportunities</li>
                <li className="ml-7">penalties, interest, or enforcement actions imposed by third parties or governments.</li>
                <li className="ml-7">penalties, interest, or enforcement actions imposed by third parties or governments.</li>
            </ul>
            <p>Some jurisdictions do not allow certain limitations; in such cases, liability is limited to the fullest extent permitted under Wyoming law.</p>
           
          </section>

          <section id="17" className="mt-4">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Indemnification</h3>
            <p>You agree to indemnify and hold harmless TTMHUB and its Collaborators from claims, damages, liabilities, and reasonable expenses (including attorneys’ fees) arising from: (a) information you provided that was false, incomplete, misleading, or unlawful; (b) your misuse of Deliverables; (c) your breach of these Terms; or (d) your violation of any law or third-party rights.</p>
            
          </section>


          <section id="18" className="mt-4">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Confidentiality</h3>
            <p>TTMHUB will treat non-public client information as confidential and use it only to provide Services, administer the engagement, and comply with legal obligations. You agree to keep confidential any non-public templates, methods, pricing, and Deliverables provided by TTMHUB that are not intended for public distribution.</p>
           
          </section>

          <section id="19" className="mt-4">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Intellectual Property: Limited License</h3>
           <p>TTMHUB retains all rights to its methodologies, templates, frameworks, and pre-existing materials. Upon full payment, you receive a limited, non-transferable license to use Deliverables internally for your business purposes only. You may not resell, redistribute, or publish TTMHUB templates or materials as standalone products.</p>
          </section>

          <section id="20" className="mt-4">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Force Majeure</h3>
           <p>TTMHUB is not responsible for delays or failure to perform due to events beyond reasonable control, including government backlogs, system outages, vendor interruptions, natural disasters, public emergencies, labor disruptions, or internet/utility failures.</p>
          </section>

          <section id="21" className="mt-4">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Governing Law</h3>
           <p>These Terms & Conditions and any dispute arising out of or relating to Services provided by The Talent Management Hub shall be governed by and construed in accordance with the laws of the State of Wyoming, United States of America, without regard to conflict-of-law principles.
           You expressly agree that Wyoming law applies regardless of your country of residence or where Services are accessed.</p>
          </section>

          <section id="22" className="mt-4">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">International Client Acknowledgement & Risk Allocation</h3>
            <p>The Talent Management Hub is a business registered in the State of Wyoming, USA, providing online services globally. By purchasing Services, you expressly acknowledge and agree that:</p>
            <ul className="list-disc pl-6 text-gray-600 py-4">
              <li>Services are deemed to be provided from and performed in the United States, regardless of your physical location.</li>
              <li>This agreement is governed exclusively by Wyoming law, even if you reside or operate outside the United States.</li>
              <li>You are solely responsible for understanding and complying with local laws, regulatory requirements, eligibility criteria, and consumer or business obligations applicable in your jurisdiction.</li>
              <li>Local consumer protection laws or statutory rights in your country do not automatically apply to this agreement.</li>
              <li>Rejection, delay, or refusal by a foreign government, ministry, registry, or authority does not constitute a service failure by TTMHUB.</li>
              <li>Government or ministry decisions in your country are outside TTMHUB’s control and do not entitle you to refunds once Work Begins.</li>
            </ul>
            
          </section>

            <section id="23" className="mt-4">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Severability; Waiver; Assignment; Updates; Notices</h3>
            <ul className="list-disc pl-6 text-gray-600 py-4">
                <li><strong>Severability:</strong> If any provision is unenforceable, the remainder remains in effect.</li>
                <li><strong>Waiver:</strong> Failure to enforce any provision does not constitute a waiver of future enforcement.</li>
                <li><strong>Assignment:</strong> You may not assign these Terms without TTMHUB’s prior written consent.</li>
                <li><strong>Updates:</strong> TTMHUB may update these Terms at any time; your continued use constitutes acceptance.</li>
                <li><strong>Notices:</strong> Notices to TTMHUB must be sent to Grow@ttmhub.co; notices to you will be sent to the email address used at checkout or provided in onboarding.</li>
            </ul>
          </section>

          <section id="24" className="mt-4">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Entire Agreement</h3>
           <p>These Terms constitute the entire agreement governing Services provided through <a className="text-[#2bb673] underline font-bold" href="https://business.ttmhub.co">business.ttmhub.co</a> and supersede all prior understandings.</p>
          </section>

          <footer className="mt-8 border-t pt-6 text-sm text-gray-600">
            <p>
              <strong>Contact:</strong> For questions about these Terms, please contact The Talent Management Hub, LLC at{" "}
              <a className="text-[#2bb673]" href="mailto:business.ttmhub.co">business.ttmhub.co</a>.
            </p>
            <p className="mt-2">Last updated: <strong>{new Date().toLocaleDateString()}</strong></p>
          </footer>
        </article>
      </div>

      {/* Strategic People Support Services Terms & Conditions */}

      <div className="mx-auto max-w-4xl px-6 py-12">
        <header className="mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900">Strategic People Support Terms & Conditions</h1>
          <p className="mt-2 text-gray-600">
            Please read this Legal Disclaimer and Terms of Service carefully before accessing our website or using our services.
          </p>
          <div className="mt-4">
            <span className="inline-block rounded bg-[#2bb673] px-3 py-1 text-sm font-medium text-white">
              The Talent Management Hub — A Wyoming Limited Liability Company <br /><br />
              Strategic People ServicesTerms & Conditions
              Applies only to Strategic People Servicesservices and related engagements.

            </span>
          </div>
        </header>

        {/* Table of contents */}
        <nav className="mb-8 rounded-lg border border-gray-200 bg-white p-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Contents</h2>
          <ul className="grid gap-2 sm:grid-cols-2">
            <li><a href="#25" className="text-sm text-gray-700 hover:text-[#2bb673]">• Agreement To Terms (Payment/Proposal Acceptance = Legal Acceptance)</a></li>
            <li><a href="#26" className="text-sm text-gray-700 hover:text-[#2bb673]">• Definitions (Interpretation)</a></li>
            <li><a href="#27" className="text-sm text-gray-700 hover:text-[#2bb673]">• Scope Of Services; No Guaranteed Outcomes</a></li>
            <li><a href="#28" className="text-sm text-gray-700 hover:text-[#2bb673]">• Important Disclaimers (Legal/HR Boundaries)</a></li>
            <li><a href="#29" className="text-sm text-gray-700 hover:text-[#2bb673]">• Cross-Border Delivery; Provider Location; Data Transfers</a></li>
            <li><a href="#30" className="text-sm text-gray-700 hover:text-[#2bb673]">• Client Responsibilities (Strict)</a></li>
            <li><a href="#31" className="text-sm text-gray-700 hover:text-[#2bb673]">• Fees, Retainers, Payment Terms</a></li>
            <li><a href="#32" className="text-sm text-gray-700 hover:text-[#2bb673]">• Refunds; Chnage Of Mind; Unused Time</a></li>
            <li><a href="#33" className="text-sm text-gray-700 hover:text-[#2bb673]">• Scheduling, Cancellations, No-Shows</a></li>
            <li><a href="#34" className="text-sm text-gray-700 hover:text-[#2bb673]">• Change Requests; Scope Creep Control</a></li>
            <li><a href="#35" className="text-sm text-gray-700 hover:text-[#2bb673]">• Confidentiality</a></li>
            <li><a href="#36" className="text-sm text-gray-700 hover:text-[#2bb673]">• Intellectual Property: License</a></li>
            <li><a href="#37" className="text-sm text-gray-700 hover:text-[#2bb673]">• Third-Party Resources,Referrals & External Links</a></li>
            <li><a href="#38" className="text-sm text-gray-700 hover:text-[#2bb673]">• Live Events, Trainings , Workshops , Consulting Sessions & Therapy Services</a></li>
            <li><a href="#39" className="text-sm text-gray-700 hover:text-[#2bb673]">• Non-Solicitation Of Providers </a></li>
            <li><a href="#40" className="text-sm text-gray-700 hover:text-[#2bb673]">• Termination; Suspension</a></li>
            <li><a href="#41" className="text-sm text-gray-700 hover:text-[#2bb673]">• Disclaimer Of Warranties</a></li>
            <li><a href="#42" className="text-sm text-gray-700 hover:text-[#2bb673]">• Limitation Of Liability</a></li>
            <li><a href="#43" className="text-sm text-gray-700 hover:text-[#2bb673]">• Indemnification</a></li>
            <li><a href="#44" className="text-sm text-gray-700 hover:text-[#2bb673]">• Force Majeure</a></li>
            <li><a href="#45" className="text-sm text-gray-700 hover:text-[#2bb673]">• Dispute Resolution: Remote-First Arbitration; Venue</a></li>
            <li><a href="#46" className="text-sm text-gray-700 hover:text-[#2bb673]">• Governing Law</a></li>
            <li><a href="#47" className="text-sm text-gray-700 hover:text-[#2bb673]">• International Client Acknowledgement</a></li>
            <li><a href="#48" className="text-sm text-gray-700 hover:text-[#2bb673]">• Entire Agreement; Severability; Waiver; Assignment; Updates; </a></li>
            
          </ul>
        </nav>

        <article className="prose prose-lg max-w-none">
          <section id="25">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Agreement To Terms (Payment/Proposal Acceptance = Legal Acceptance)</h3>
          <p>These Strategic People Support Terms & Conditions (“Strategic People Terms”) govern Strategic People Support services provided by The Talent Management Hub, LLC (“TTMHUB,” “we,” “us,” “our”).</p><br />
          <p>By doing any of the following, you (“Client,” “you,” “your”) accept these Strategic People Terms:</p>
           <ul className="list-disc pl-6 text-gray-600 py-4">
            <li>Signing a proposal, statement of work, or service agreement</li>
            <li>Clicking “I agree” or otherwise electronically accepting</li>
            <li>Paying an invoice or retainer for Strategic People Support or authorizing commencement of work</li>
           </ul>
           <p>If you do not agree to these Terms, please do not approve work or submit payment.</p>
          </section>

          <section id="26" className="mt-4">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Definitions (Interpretation)</h3>
            <p>For purposes of these Terms:</p>
            <ul className="list-disc pl-6 text-gray-600 py-4">
           <li><strong>“Strategic People Support”</strong> means HR advisory, people strategy, performance and culture interventions, policy development, manager coaching (business context), HR infrastructure design, and related consulting services delivered under a proposal/SOW.</li>
           <li><strong>“Collaborators/Providers”</strong> means consultants, coaches, HR specialists, and other independent providers engaged by TTMHUB (including individuals located in Trinidad and Tobago and/or the United States).</li>
           <li><strong>“Deliverables”</strong> means outputs provided to you such as drafts, policies, toolkits, frameworks, reports, recommendations, templates, meeting notes, and plans.</li>
           <li><strong>“Work Begins”</strong> means the earliest occurrence of discovery, intake review, research, drafting, meetings, analysis, or any time spent by TTMHUB / Providers on your engagement.</li>
          </ul>
          <p>Headings are for convenience only and do not affect interpretation.</p>
          </section>

          <section id="27" className="mt-4">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Scope Of Services; No Guaranteed Outcomes</h3>
          
           <ul className="list-disc pl-6 text-gray-600 py-4">
            <li><strong>Scope.</strong> Scope is strictly limited to what is described in your proposal/statement of work (“SOW”). Anything not explicitly included is out of scope and may require additional fees.
            </li>
            <li><strong>No Guarantees.</strong> Strategic People Support is advisory and depends on your implementation, leadership decisions, workforce dynamics, and business constraints. TTMHUB does not guarantee outcomes, including (without limitation) employee performance improvements, retention, engagement, disciplinary outcomes, risk elimination, or legal compliance outcomes.
            </li>
            <li><strong>Client Implementation Responsibility.</strong> You are solely responsible for implementing recommendations, applying policies consistently, maintaining documentation, and making final decisions.
            </li>
           
           </ul>
          </section>

          <section id="28" className="mt-4">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Important Disclaimers (Legal/HR Boundaries)</h3>
          
           <ul className="list-disc pl-6 text-gray-600 py-4">
            <li><strong>Not legal advice.</strong> TTMHUB is not a law firm and does not provide legal representation. Any HR guidance is operational and advisory. You should consult qualified counsel in your jurisdiction for legal advice, including employment law and regulatory compliance.</li>
            <li><strong>Not medical/mental health services.</strong> Unless expressly contracted under a separate written agreement with appropriately licensed professionals, Strategic People Support is not therapy, diagnosis, or medical treatment.</li>
            <li><strong>No employee relationship.</strong> Providers are not your employees. Nothing in this engagement creates an employment, partnership, or joint venture relationship between you and TTMHUB or any Provider.</li>
        
          </ul>
    
          </section>

          <section id="29" className="mt-4">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Cross-Border Delivery; Provider Location; Data Transfers</h3>
            <ul className="list-disc pl-6 text-gray-600 py-4">
                <li><strong>Remote and cross-border performance.</strong> You acknowledge that Strategic People Support may be delivered remotely and that Providers may be located in Trinidad & Tobago and/or the United States, while TTMHUB is registered in Wyoming, USA.</li>
                <li><strong>Data access and transfer consent.</strong> You authorize TTMHUB and its Providers to access, process, and store engagement-related information (including HR and workforce-related business information) across borders as required to deliver Services. You are responsible for ensuring you have the authority and legal basis to share such information with us.</li>
                <li><strong>Client privacy and compliance obligations.</strong> You remain responsible for compliance with your local privacy, employment, and data protection obligations (including employee notices/consents where applicable).</li>
            </ul>
          </section>

          <section id="30" className="mt-4">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Client Responsibilities (Strict)</h3>
           <p>You agree to:</p>
           <ul className="list-disc pl-6 text-gray-600 py-4">
            <li>Provide accurate and complete information</li>
            <li>Identify decision-makers and respond to requests promptly</li>
            <li>Review Deliverables within agreed timelines</li>
            <li>Notify us of any changes that affect scope, timelines, or assumptions and apply Deliverables appropriately and consistently</li>
           </ul>

           <p>TTMHUB is not responsible for adverse outcomes caused by incomplete, inaccurate, late, or withheld information.</p>
          
          </section>

          <section id="31" className="mt-4">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Fees, Retainers, Payment Terms</h3>
           <ul className="list-disc pl-6 text-gray-600 py-4">
              <li><strong>Retainers and prepayment.</strong> Strategic People Support typically begins with a retainer or upfront payment (as stated in the SOW). Work begins only after payment clears, unless expressly agreed otherwise in writing.</li>
              <li><strong>Invoices and due dates.</strong> Invoices are due as stated. Late payments may result in suspension of work until the account is current.</li>
              <li><strong>Expenses and third-party tools.</strong> Any pass-through costs (software, assessments, travel, printing, courier) require your approval (unless pre-authorized in the SOW) and are non-refundable once incurred.</li>
           </ul>

          </section>

          <section id="32" className="mt-4">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Refunds; Chnage Of Mind; Unused Time</h3>
           
            <ul className="list-disc pl-6 text-gray-600 py-4">
              <li> <strong>No refunds once Work Begins.</strong> Because Strategic People Support involves time-based professional services and capacity reservation, fees are non-refundable once Work Begins, including retainers, completed meetings, and time spent producing Deliverables.
              </li>
              <li> <strong>Change of mind.</strong> Client regret, shifting priorities, internal changes, or “we decided not to proceed” does not create a refund right.</li>
              <li> <strong>Unused hours (if applicable).</strong> If your SOW includes a monthly hour bank or retainer hours:</li>
              <ul className="list-disc pl-6 text-gray-600 py-4">
                <li>unused hours do not roll over unless explicitly stated</li>
                <li>unused hours are not refundable</li>
              </ul>
            </ul>

            
          </section>

          <section id="33" className="mt-4">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Scheduling, Cancellations, No-Shows</h3>
           <ul className="list-disc pl-6 text-gray-600 py-4">
              <li><strong>Rescheduling.</strong> Meetings may be rescheduled with at least 24 hours’ notice (or as specified in the SOW). Late cancellations or no-shows may be charged as delivered time.</li>
              <li><strong>Delays caused by Client.</strong> If delays occur due to client non-responsiveness or late approvals, timelines will shift and additional fees may apply for rework or reprioritization.</li>
           </ul>
          </section>

          <section id="34" className="mt-4">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Change Requests; Scope Creep Control</h3>
            <p>Any material change in scope, urgency, number of stakeholders, jurisdictions, or deliverables may require:</p>
            <ul className="list-disc pl-6 text-gray-600 py-4">
              <li>A written change order</li>
              <li>Revised fees</li>
              <li>Revised timelines</li>
            </ul>
            <p>TTMHUB is not obligated to perform out-of-scope work without written agreement.</p>
          </section>

          <section id="35" className="mt-4">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Confidentiality</h3>
            
            <ul className="list-disc pl-6 text-gray-600 py-4">
              <li><strong>Mutual confidentiality.</strong> Each party agrees to protect the other’s non-public confidential information and use it only for the engagement.</li>
              <li><strong>Exceptions.</strong> Confidentiality does not apply to information that is publicly available (not through breach), independently developed, or required by law to be disclosed.</li>
            </ul>
           
          </section>

          <section id="36" className="mt-4">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Intellectual Property: License</h3>
        
            <ul className="list-disc pl-6 text-gray-600 py-4">
              <li><strong>TTMHUB materials.</strong> TTMHUB retains ownership of its methodologies, templates, frameworks, and tools.</li>
              <li><strong>Client license.</strong> Upon full payment, you receive a limited, non-transferable license to use Deliverables internally for your organization. You may not resell, publish, or distribute TTMHUB templates/materials as standalone products.</li>
            </ul>
           
                      
          </section>

          <section id="37" className="mt-4">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Resources, Referrals & External Links</h3>
            <p>TTMHUB may provide or reference third-party resources, tools, templates, platforms, service providers, websites, links, or recommendations (“Third-Party Resources”), including items listed in any “Resources” section on our Site or shared during delivery of Services.</p>
            <p className="mt-2">You acknowledge and agree that:</p>
            <ul className="list-disc pl-6 text-gray-600 py-4">
              <li><strong>No endorsement or warranty.</strong> Third-Party Resources are provided for convenience and general informational purposes only. TTMHUB does not control, operate, or warrant any Third-Party Resource and does not guarantee their performance, suitability, availability, security, legality, compliance, or results.</li>
              <li><strong>Use at your own risk.</strong> Your use of any Third-Party Resource is entirely at your own risk and subject to the third party’s own terms, privacy policies, pricing, and practices. You are solely responsible for conducting appropriate due diligence and determining whether a Third-Party Resource is appropriate for your circumstances.</li>
              <li><strong>No liability for third-party acts.</strong> To the maximum extent permitted by law, TTMHUB and its Providers shall not be liable for any loss, harm, damages, claims, costs, or disputes arising out of or relating to:</li>
              <ul className="list-disc pl-6 text-gray-600 py-4">
                <li>Your use of or reliance on Third-Party Resources</li>
                <li>Third-party errors, omissions, misconduct, negligence, breaches, or service failures</li>
                <li>Data loss, cybersecurity incidents, unauthorized access, or account compromise involving a third party</li>
                <li>Billing disputes, refunds, or chargebacks involving a third party, or any outcomes, approvals, rejections, penalties, or compliance issues connected to a third party.</li>
              </ul>
              <li><strong>No agency relationship.</strong> Any referral does not create an agency, partnership, employment, or joint venture relationship between TTMHUB and any third party. Unless expressly stated in a written agreement, third parties are not authorized to make commitments on TTMHUB’s behalf.</li>
            </ul>

            <p>In any event, any claim related to Third-Party Resources is subject to the limitation of liability in this Agreement.</p>
          </section>

          <section id="39" className="mt-4">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Non-Solicitation Of Providers</h3>
            <p>During the engagement and for 12 months after completion, you agree not to directly hire or contract with TTMHUB Providers introduced through this engagement outside of TTMHUB, unless agreed in writing.</p>
          </section>

          <section id="40" className="mt-4">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Termination; Suspension</h3>
            <ul className="list-disc pl-6 text-gray-600 py-4">
                <li> <strong>Termination by Client.</strong> You may terminate by written notice. Fees for Work performed and capacity reserved remain payable and non-refundable.</li>
                <li> <strong>Termination by TTMHUB.</strong> We may terminate or suspend services if:</li>
                <ul className="list-disc pl-6 text-gray-600 py-4">
                    <li>you fail to pay</li>
                    <li>you breach these Terms</li>
                    <li>you engage in abusive, harassing, discriminatory, or threatening conduct</li>
                    <li>you request unlawful/unethical actions</li>
                </ul>
                <p>No refunds apply upon termination for cause.</p>
            </ul>
          </section>

          <section id="41" className="mt-4">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Disclaimer Of Warranties</h3>
           <p>Services and Deliverables are provided “as is” and “as available.” To the fullest extent permitted by law, TTMHUB disclaims implied warranties including fitness for a particular purpose and non-infringement.</p>
          </section>

          <section id="42" className="mt-4">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Limitation Of Liability</h3>
            <p>To the maximum extent permitted under Wyoming law:</p>
            <ul className="list-disc pl-6 text-gray-600 py-4">
                <li>TTMHUB’s total liability is limited to the amount paid for the specific Strategic People Support engagement in the 30 days preceding the event giving rise to the claim</li>
                <li>TTMHUB is not liable for indirect, consequential, special, punitive, or incidental damages, including lost profits, lost revenue, reputational harm, or business interruption.</li>
               
            </ul>
          </section>


          <section id="43" className="mt-4">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Indemnification</h3>
            <p>You agree to indemnify and hold harmless TTMHUB and its Providers from claims, damages, and expenses arising from:</p>
            <ul className="list-disc pl-6 text-gray-600 py-4">
                <li>your misuse of Deliverables</li>
                <li>your employment decisions and implementation actions</li>
                <li>inaccurate or unlawful information you provided</li>
                <li>your breach of these Terms</li>
            </ul>
          </section>

          <section id="44" className="mt-4">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Force Majeure</h3>
            <p>Neither party is liable for delays or failure to perform due to events beyond reasonable control (including outages, vendor failures, government disruptions, natural disasters, civil unrest, or public emergencies).</p>
          </section>

          <section id="45" className="mt-4">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Dispute Resolution: Remote-First Arbitration Venue</h3>
            <p className="mt-2"> Except where prohibited by law, any dispute, claim, or controversy arising out of or relating to these Terms, the Site, or Services shall be resolved by binding arbitration seated in Wyoming, USA, administered by the American Arbitration Association (AAA) under its applicable rules.</p>
            <p className="mt-2"> Remote-first hearings. The parties agree that arbitration proceedings, including conferences and evidentiary hearings, will be conducted remotely by videoconference unless the arbitrator determines that an in-person hearing is necessary for fairness. The parties further agree that submission of evidence, witness statements, and exhibits may be handled electronically.</p>
            <p className="mt-2"> Pre-arbitration resolution. Before commencing arbitration, the Client must provide written notice of the dispute and allow 14 calendar days for good-faith resolution. If unresolved, either party may proceed to arbitration.</p>
            <p className="mt-2"> Carve-outs. Either party may seek temporary or injunctive relief in a court of competent jurisdiction to protect intellectual property, confidentiality, or to prevent unauthorized use of materials, without waiving arbitration.</p>
            <p className="mt-2"> All notices to TTMHUB must be sent to business@ttmhub.co and will be deemed delivered when sent (provided no bounce-back notice is received). Notices to the Client will be sent to the email address used at checkout or provided in onboarding.</p>
            <p className="mt-2"> To the fullest extent permitted by law, the parties consent to electronic delivery of dispute notices and arbitration communications, including service of arbitration demands and related documents by email.</p>
            <p className="mt-2"> The arbitrator may award reasonable attorneys’ fees, administrative fees, and costs to the prevailing party. If the arbitrator determines a claim was brought primarily for harassment, leverage, or without a reasonable basis, the arbitrator may award fees and costs against the initiating party. </p>
          </section>

          <section id="46" className="mt-4">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Governing Law</h3>
           <p>These Strategic People Terms are governed by the laws of the State of Wyoming, USA, without regard to conflict-of-law principles.</p>
          </section>

          <section id="47" className="mt-4">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">International Client Acknowledgement</h3>
            <p>If you access services outside the United States, you acknowledge:</p>
            <ul className="list-disc pl-6 text-gray-600 py-4">
              <li>services are deemed delivered from the United States</li>
              <li>Wyoming law governs this agreement</li>
              <li>you are responsible for local legal compliance in your jurisdiction, including employment and privacy obligations</li>
              
            </ul>
            
          </section>

            <section id="48" className="mt-4">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Entire Agreement; Severability; Waiver; Assignment; Updates</h3>
            <ul className="list-disc pl-6 text-gray-600 py-4">
                <li> <strong>Entire agreement.</strong> These Terms plus your SOW/proposal form the entire agreement for Strategic People Support.</li>
                <li> <strong>Severability.</strong> If a provision is unenforceable, the remainder remains effective.</li>
                <li> <strong>Waiver.</strong> Failure to enforce a right is not a waiver.</li>
                <li> <strong>Updates.</strong> Updated terms apply only prospectively unless expressly agreed.</li>
                
            </ul>
          </section>

        

          <footer className="mt-8 border-t pt-6 text-sm text-gray-600">
            <p>
              <strong>Contact:</strong> For questions about these Terms, please contact The Talent Management Hub, LLC at{" "}
              <a className="text-[#2bb673]" href="mailto:business.ttmhub.co">business.ttmhub.co</a>.
            </p>
            <p className="mt-2">Last updated: <strong>{new Date().toLocaleDateString()}</strong></p>
          </footer>
        </article>
      </div>


    </div>
    <Footer />
    </div>
  );
}
