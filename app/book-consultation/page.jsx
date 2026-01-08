import CalScheduler from "@/components/CalScheduler";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function BookConsultation() {
  return (
    <>
    <Header />
    <section className="relative bg-[#0B0F0E] text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-widest text-[#2bb673]">
            Strategy Session
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold mt-4">
            Book a 30-Minute Consultation
          </h1>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            A focused conversation to understand your challenges, clarify priorities,
            and explore how Better Business can support your leaders, teams, and systems.
          </p>
        </div>

        {/* Card */}
        <div className="rounded-3xl bg-white p-6 md:p-10  ">
          <CalScheduler />
        </div>

      </div>
    </section>
    <Footer />
    </>
  );
}
