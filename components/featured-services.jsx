
"use client"
import { CometCard } from "./ui/comet-card"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"


export function FeaturedServices() {
  const router = useRouter();
  return (

    <section className="py-20 bg-gray-50 min-h-screen flex items-center justify-center w-full">
    <div className="container px-4 mx-auto">
      <h2 className="text-2xl lg:text-6xl font-extrabold mb-4 text-center">
         Our <span className="text-[#2bb673]">Featured Services</span>
      </h2>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-center text-pretty">
        We offer a range of services to help you start, protect, and grow your business.
      </p>




      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 py-8 place-items-center">

<CometCard className="w-full max-w-[18rem] sm:max-w-[20rem] h-auto">
<button
type="button"
onClick={() => router.push("/services/corp-formation-2")}
className="my-6 flex w-full cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 saturate-0 md:my-20 "
aria-label="View invite F7RA"
style={{
  transformStyle: "preserve-3d",
  transform: "none",
  opacity: 1,
}}
>
<div className="mx-2 flex-1">
  <div className="relative mt-2 aspect-[3/4] w-full">
    <img
      loading="lazy"
      className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover contrast-75"
      alt="Invite background"
      src="/corp.png"
      style={{
        boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
        opacity: 1,
      }}
    />
  </div>
</div>
<div className="mt-2 flex flex-shrink-0 items-center justify-between p-4 text-center text-white">
  <div className="text-md font-bold">C Corporation Formation</div>
  {/* <div className="text-xs text-gray-300 opacity-50">#F7RA</div> */}
</div>
</button>
</CometCard>

<CometCard className="w-full max-w-[18rem] sm:max-w-[20rem] h-auto">
<button
type="button"
onClick={() => router.push("/services/llc-formation-2")}
className="my-6 flex w-full cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 saturate-0 md:my-20"
aria-label="View invite F7RA"
style={{
  transformStyle: "preserve-3d",
  transform: "none",
  opacity: 1,
}}
>
<div className="mx-2 flex-1">
  <div className="relative mt-2 aspect-[3/4] w-full">
    <img
      loading="lazy"
      className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover contrast-75"
      alt="Invite background"
      src="/llc.png"
      style={{
        boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
        opacity: 1,
      }}
    />
  </div>
</div>
<div className="mt-2 flex flex-shrink-0 items-center justify-between p-4 text-center text-white">
  <div className="text-md font-bold">LLC Formation Service</div>
  {/* <div className="text-xs text-gray-300 opacity-50">#F7RA</div> */}
</div>
</button>
</CometCard>

<CometCard className="w-full max-w-[18rem] sm:max-w-[20rem] h-auto">
<button
type="button"
onClick={() => router.push("/services/ein-services")}
className="my-6 flex w-full cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 saturate-0 md:my-20 "
aria-label="View invite F7RA"
style={{
  transformStyle: "preserve-3d",
  transform: "none",
  opacity: 1,
}}
>
<div className="mx-2 flex-1">
  <div className="relative mt-2 aspect-[3/4] w-full">
    <img
      loading="lazy"
      className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover contrast-75"
      alt="Invite background"
      src="/ein.png"
      style={{
        boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
        opacity: 1,
      }}
    />
  </div>
</div>
<div className="mt-2 flex flex-shrink-0 items-center justify-between p-4 text-center text-white">
  <div className="text-md font-bold text-center">EIN Services</div>
  {/* <div className="text-xs text-gray-300 opacity-50">#F7RA</div> */}
</div>
</button>
</CometCard>

<CometCard className="w-full max-w-[18rem] sm:max-w-[20rem] h-auto">
<button
type="button"
onClick={() => router.push("/services/itin-services")}
className="my-6 flex w-full cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 saturate-0 md:my-20 "
aria-label="View invite F7RA"
style={{
  transformStyle: "preserve-3d",
  transform: "none",
  opacity: 1,
}}
>
<div className="mx-2 flex-1">
  <div className="relative mt-2 aspect-[3/4] w-full">
    <img
      loading="lazy"
      className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover contrast-75"
      alt="Invite background"
      src="/itin.png"
      style={{
        boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
        opacity: 1,
      }}
    />
  </div>
</div>
<div className="mt-2 flex flex-shrink-0 items-center justify-between p-4 text-center text-white">
  <div className="text-md font-bold text-center">ITIN Application</div>
  {/* <div className="text-xs text-gray-300 opacity-50">#F7RA</div> */}
</div>
</button>
</CometCard>

{/* ------------------------ 2nd Row ------------------------ */ }

<CometCard className="w-full max-w-[18rem] sm:max-w-[20rem] h-auto">
<button
type="button"
onClick={() => router.push("/services/uk-ltd-formation")}
className="my-6 flex w-full cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 saturate-0 md:my-20 "
aria-label="View invite F7RA"
style={{
  transformStyle: "preserve-3d",
  transform: "none",
  opacity: 1,
}}
>
<div className="mx-2 flex-1">
  <div className="relative mt-2 aspect-[3/4] w-full">
    <img
      loading="lazy"
      className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover contrast-75"
      alt="Invite background"
      src="/uk.png"
      style={{
        boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
        opacity: 1,
      }}
    />
  </div>
</div>
<div className="mt-2 flex flex-shrink-0 items-center justify-between p-4 text-center text-white">
  <div className="text-md font-bold">UK LTD Formation</div>
  {/* <div className="text-xs text-gray-300 opacity-50">#F7RA</div> */}
</div>
</button>
</CometCard>

<CometCard className="w-full max-w-[18rem] sm:max-w-[20rem] h-auto">
<button
type="button"
onClick={() => router.push("/services/registered-agent")}
className="my-6 flex w-full cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 saturate-0 md:my-20"
aria-label="View invite F7RA"
style={{
  transformStyle: "preserve-3d",
  transform: "none",
  opacity: 1,
}}
>
<div className="mx-2 flex-1">
  <div className="relative mt-2 aspect-[3/4] w-full">
    <img
      loading="lazy"
      className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover contrast-75"
      alt="Invite background"
      src="/agent.png"
      style={{
        boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
        opacity: 1,
      }}
    />
  </div>
</div>
<div className="mt-2 flex flex-shrink-0 items-center justify-between p-4 text-center text-white">
  <div className="text-md font-bold">Registered Agent Services</div>
  {/* <div className="text-xs text-gray-300 opacity-50">#F7RA</div> */}
</div>
</button>
</CometCard>

<CometCard className="w-full max-w-[18rem] sm:max-w-[20rem] h-auto">
<button
type="button"
onClick={() => router.push("/services/boi-filing-services")}
className="my-6 flex w-full cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 saturate-0 md:my-20 "
aria-label="View invite F7RA"
style={{
  transformStyle: "preserve-3d",
  transform: "none",
  opacity: 1,
}}
>
<div className="mx-2 flex-1">
  <div className="relative mt-2 aspect-[3/4] w-full">
    <img
      loading="lazy"
      className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover contrast-75"
      alt="Invite background"
      src="/boi.png"
      style={{
        boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
        opacity: 1,
      }}
    />
  </div>
</div>
<div className="mt-2 flex flex-shrink-0 items-center justify-between p-4 text-center text-white">
  <div className="text-md font-bold text-center">BOI Filing Services</div>
  {/* <div className="text-xs text-gray-300 opacity-50">#F7RA</div> */}
</div>
</button>
</CometCard>

<CometCard className="w-full max-w-[18rem] sm:max-w-[20rem] h-auto">
<button
type="button"
onClick={() => router.push("/services/vat-registration-services")}
className="my-6 flex w-full cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 saturate-0 md:my-20 "
aria-label="View invite F7RA"
style={{
  transformStyle: "preserve-3d",
  transform: "none",
  opacity: 1,
}}
>
<div className="mx-2 flex-1">
  <div className="relative mt-2 aspect-[3/4] w-full">
    <img
      loading="lazy"
      className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover contrast-75"
      alt="Invite background"
      src="/vat.png"
      style={{
        boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
        opacity: 1,
      }}
    />
  </div>
</div>
<div className="mt-2 flex flex-shrink-0 items-center justify-between p-4 text-center text-white">
  <div className="text-md font-bold text-center">VAT Registration Services</div>
  {/* <div className="text-xs text-gray-300 opacity-50">#F7RA</div> */}
</div>
</button>
</CometCard>


</div>

    </div>
    </section>
  )
}