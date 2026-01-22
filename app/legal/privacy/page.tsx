"use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <div className="bg-white text-gray-800">
      <Header />
      {/* Hero Section */}
      <section className="relative overflow-hidden  py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 opacity-90"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-4"
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg opacity-90"
          >
            Your privacy matters to us. This page explains how <strong>TTMHUB</strong> collects, uses, and protects your information.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="max-w-5xl mx-auto py-16 px-6 space-y-10"
      >
        {/* Section Template */}
        {[
          {
            title: "1. Our Commitment to Privacy",
            content: `Your privacy matters to us. This Privacy Policy explains how TTMHUB collects, uses, discloses, stores, and protects personal information when you interact with business.ttmhub.co, contact us, register for events, or purchase and use our services (collectively, the “Services”).`
          },
          {
            title: "2. Who We Are",
            content:`TTMHUB is a business registered in the State of Wyoming, USA. We provide services globally, including formation and compliance services, bookkeeping/tax services, UK support services, and Strategic People Support services. Some Services may be delivered by independent providers located in Trinidad & Tobago and/or the United States.`
          },
          {
            title: "3. What This Policy Covers and What It Does Not",
            content: (<>This Privacy Policy covers personal information collected by TTMHUB through the Services.<br />
            It does not cover : <br />
            <ul className="list-disc pl-6 text-gray-600 py-4">
              <li>Third-party websites, tools, payment processors, or platforms you use separately (see Section 12)</li>
              <li>Information handled under a third party’s own privacy policy.</li>
            </ul>
            </>
          )
          },


          {
            title: "4. Information We Collect",
            content: (<>
            <p>We collect information in three main ways:</p>
            <ol className="list-disc pl-6 text-gray-600 py-4">
              <li className="font-bold text-black"><strong>Information you provide</strong></li>
              <p>Depending on the Service, you may provide:</p>
              <ul className="list-disc pl-6 text-gray-600 py-4">
                <li><strong className="text-black">Contact information:</strong> name, email, phone, mailing address, business address.</li>
                <li><strong className="text-black">Account/onboarding information:</strong> intake forms, service applications, communications, support requests.</li>
                <li><strong className="text-black">Formation/compliance information:</strong> entity details, ownership/management details, beneficial ownership information, jurisdiction selections, and filing-related documentation.</li>
                <li><strong className="text-black">Identification information (as needed):</strong> government-issued identification and numbers you provide for processing (e.g., EIN/ITIN-related data, passport/ID details).</li>
                <li><strong className="text-black">Billing information:</strong> billing address and transaction references (note: payment card details are typically handled by payment processors; see Section 11).</li>
                <li><strong className="text-black">Bookkeeping/tax information:</strong> transaction records, accounting exports, bank statements, and tax-related information you provide.</li>
                <li><strong className="text-black">Strategic People Support information:</strong> HR and organizational information, such as policies, performance documentation, role structures, and workplace concerns you submit.</li>
                <li><strong className="text-black">Event participation:</strong> registration details, attendance, chat messages, submitted questions, and feedback.</li>
              </ul>
              <li className="font-bold text-black"><strong>Information collected automatically</strong></li>
              <p>We may collect:</p>
              <ul className="list-disc pl-6 text-gray-600 py-4">
                <li><strong className="text-black">Device and browser data:</strong> IP address, device identifiers, browser type, OS, language.</li>
                <li><strong className="text-black">Usage data:</strong> pages viewed, actions taken, timestamps, referring URLs.
                </li>
                <li><strong className="text-black">Cookies and similar technologies:</strong> see Section 10.</li>
             
              </ul>
              <li className="font-bold text-black"><strong>Information collected from third-party services</strong></li>
              <p>We may receive information from:</p>
              <ul className="list-disc pl-6 text-gray-600 py-4">
                 <li><strong className="text-black">Payment processors:</strong> (confirmation of payment status, fraud checks, dispute signals)</li>
                 <li><strong className="text-black">Scheduling/booking systems:</strong> (appointment metadata)</li>
                 <li><strong className="text-black">Government agencies/registries or filing platforms:</strong> (submission status, rejection notices, confirmations)</li>
                 <li><strong className="text-black">Service providers supporting our operations:</strong> (hosting, analytics, email delivery, document tools, CRM)</li>
                 <li><strong className="text-black">Referrals/partners:</strong> when you ask us to connect or coordinate services</li>
              </ul>
            </ol>
            
            </>)  },

          {
            title: "5. How We Use Information",
         content:(<>
         <p>We use information to:</p>
         <ul className="list-disc pl-6 text-gray-600 py-4">
          <li>Provide services and deliverables</li>
          <li>Communicate about onboarding, requirements, timelines, and completion</li>
          <li>Schedule sessions and events</li>
          <li>Process payments and prevent fraud</li>
          <li>Provide customer support</li>
          <li>Comply with legal obligations and respond to lawful requests</li>
          <li>Enforce our Terms & Conditions and manage disputes/chargebacks</li>
          <li>Improve our website and services</li>
          <li>Send marketing communications where permitted (you may opt out)</li>
         </ul>
         </>)  },
          {
            title: "6. Legal Bases for Processing (International Standards)",
            content: (<>
            <p>Where required, we process personal information based on one or more of:</p>
            <ul className="list-disc pl-6 text-gray-600 py-4">
              <li><strong className="text-black">Contractual necessity:</strong> (providing Services you request)</li>
              <li><strong className="text-black">Legitimate interests:</strong> (operating our business, security, service improvement, dispute prevention)</li>
              <li><strong className="text-black">Legal obligations:</strong> (compliance/recordkeeping)</li>
              <li><strong className="text-black">Consent:</strong> (where required, such as some marketing and recordings)</li>
            </ul>
            </>)  },

          {
            title: "7. Sharing and Disclosure of Information",
            content: (
              <>
              <p>We do not sell personal information as a business model. We may share personal information in the following circumstances:</p>
              <p className="font-bold text-black py-4">A- Service providers and processors (third parties we use to run our business)</p>
              <p>We share information with vendors that help us operate and deliver Services. These vendors may process personal information on our behalf. Examples include:</p>
              <ul className="list-disc pl-6 text-gray-600 py-4">
                <li><strong className="text-black">Payment processing:</strong> Stripe and PayPal (payment status, transaction references, fraud and dispute signals).</li>
                <li><strong className="text-black">Scheduling and bookings:</strong> Calendly and Amelia (appointment scheduling details and contact information).</li>
                <li><strong className="text-black">Communications and collaboration:</strong> Google Workspace and Google Meet (email, documents, calendar, and meeting functionality; may include recordings and transcripts where enabled).</li>
                <li><strong className="text-black">Video conferencing:</strong> Zoom and Google Meet (meeting access, audio/video, chat, and recordings if enabled and disclosed).</li>
                <li><strong className="text-black">Automation/AI meeting features:</strong> where AI features are enabled within meeting platforms or tools (e.g., transcript generation, summaries), related meeting data may be processed to provide those features. These providers are authorized to use personal information only as needed to provide services to us, subject to their terms and applicable data protection obligations. Service providers may change over time. We may add, replace, or remove vendors as our operations evolve. We will update this Privacy Policy as appropriate to reflect material changes.</li>
              </ul>
             
              <p className="font-bold text-black py-4">B- Independent contractors and collaborators (Strategic People Support and delivery partners)</p>
              <p>We may share personal information with vetted independent contractors and collaborators who assist in delivering Services. Access is limited to what is necessary to perform their role and is subject to confidentiality and data-handling expectations.</p>
             
              <p className="font-bold text-black py-4">C- Filing authorities, registries, and required third parties (Better Business services)</p>
              <p>To complete formation/compliance services, we may submit information to state/federal agencies, registries, ministries, and HMRC (as applicable), and may share information with registered agent services or filing platforms where needed.</p>
             
              <p className="font-bold text-black py-4">D- Legal, safety, and enforcement</p>
              <p>We may disclose information to comply with law, court orders, lawful requests, or to protect the rights, safety, and security of TTMHUB, clients, collaborators, or others (including investigating fraud and chargebacks).</p>
             
              <p className="font-bold text-black py-4">E- Business transfers </p>
              <p>If we undergo a merger, acquisition, restructuring, or sale, personal information may be transferred as part of that transaction, subject to appropriate safeguards.</p>
              </>
            ) },

          {
            title: "8. Strategic People Support: HR and Sensitive Context Information",
            content:`Strategic People Support engagements may involve workforce-related information. You are responsible for ensuring you have legal authority to share employee or workplace data with us. We recommend limiting sharing of highly sensitive personal information unless necessary.
Where sensitive information is required, we restrict access and handle it with heightened confidentiality.
`},
          {
            title: "9. Events, Live Trainings, Workshops, and Therapy-Related Sessions",
            content: `Some events or sessions may be recorded (audio/video/chat) for replay, quality assurance, documentation, and/or note-taking (including AI-enabled transcription and summaries where available). Where recording or AI features are enabled, we will provide notice at registration or at the start of the session.
You may request a non-recorded and/or non-transcribed session by contacting us at privacy@ttmhub.co in advance. We will make reasonable efforts to accommodate requests, but certain formats (e.g., large group events) may not support individualized recording/transcription preferences.
You acknowledge that group sessions may involve participant sharing; we request confidentiality but cannot guarantee the behavior of other attendees. You control what you choose to share in group settings.
If an Event is delivered by a licensed therapist/counselor, additional informed consent terms may apply to that specific service.
` },
          {
            title:"10. Cookies and Tracking Technologies",
            content:`We use cookies and similar technologies to operate the site, improve performance, understand usage, and remember preferences. You can control cookies through your browser settings; disabling cookies may affect functionality.`  },

          {
            title:"11. Payment Information",
            content:`Payments are processed by third-party payment processors (e.g., Stripe and PayPal) under their own terms and privacy practices. TTMHUB generally receives confirmation of payment and basic transaction details (such as billing information and payment status), but does not store full payment card details unless explicitly stated.` },
          {
            title: "12. Third-Party Links, Tools, and Resources",
            content: `Our site may include links to third-party tools, platforms, or resources (including items in a “Resources” section). Third parties operate under their own terms and privacy policies. We are not responsible for third-party privacy practices. We recommend reviewing third-party policies before sharing information with them.`},
          {
            title: "13. International Data Transfers",
            content: `Because we operate globally and may use providers and collaborators located in Trinidad & Tobago and/or the United States, your information may be transferred and processed outside your country of residence. We take reasonable steps to protect cross-border transfers, including confidentiality obligations, access controls, and security measures.`},

          {
            title: "14. Data Retention",
            content: "We retain personal information as long as reasonably necessary to provide Services, maintain business records, meet legal/compliance obligations, and manage disputes/chargebacks. Retention periods vary by service type. When information is no longer needed, we securely delete or anonymize it where feasible."
          },
          {
            title: "15. Your Rights and Choices",
            content: `Depending on your location, you may have rights to request access, correction, deletion, objection/restriction, or portability. To submit a request, email privacy@ttmhub.co with the subject line “Privacy Request.” We may need to verify your identity.
You may opt out of marketing emails using the unsubscribe link or by emailing privacy@ttmhub.co.`
          },
         
          {
            title: "16. Security Measures",
            content: `We use reasonable administrative, technical, and organizational safeguards designed to protect personal information. No system is 100% secure; you use the Services at your own risk.`
          },
          {
            title: "17. Children’s Privacy",
            content: `Our Services are not directed to individuals under 18. If we learn we collected personal information from a minor, we will take steps to delete it.`
          },
          {
            title: "18. Compliance Screening and Fraud Prevention (Better Business Services)",
            content: `We may take reasonable steps to verify identity, screen for fraud, and respond to lawful requests from authorities. Where identity documents are collected, they are used for verification/processing purposes and protected with restricted access.`
          },
          {
            title: "19. Changes to This Policy",
            content: `We may update this Privacy Policy periodically. The “Last Updated” date reflects the latest revision. Continued use of the Services after updates means you accept the revised policy.`
          },
          {
            title: "20. Contact Us",
            content: `For privacy questions or requests:
Email: privacy@ttmhub.co
Website: business.ttmhub.co
Business: The Talent Management Hub, LLC (Wyoming, USA)`
          },
        ].map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold text-black mb-3">
              {section.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">{section.content}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
