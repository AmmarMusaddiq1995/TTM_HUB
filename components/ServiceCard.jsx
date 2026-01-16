// export default function ServiceCard() {
//     return (
//       <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 p-6 flex flex-col justify-between">
        
//         {/* Top Section */}
//         <div>
//           {/* Logo + Badge */}
//           <div className="flex items-center justify-between mb-4">
//             <img
//               src="/partner-logo.png"
//               alt="Company Logo"
//               className="h-10 w-auto object-contain"
//             />
  
//             <span className="text-xs font-medium text-blue-700 bg-blue-50 px-3 py-1 rounded-full">
//               TTM Verified
//             </span>
//           </div>
  
//           {/* Company Name */}
//           <h3 className="text-lg font-semibold text-slate-900 mb-2">
//             Company Name
//           </h3>
  
//           {/* Description */}
//           <p className="text-sm text-slate-600 leading-relaxed mb-4">
//             Short description of the service offered by this company. Clear,
//             concise, and business-focused.
//           </p>
  
//           {/* Tags */}
//           <div className="flex flex-wrap gap-2 mb-6">
//             <span className="text-xs text-slate-700 bg-slate-100 px-3 py-1 rounded-full">
//               HR
//             </span>
//             <span className="text-xs text-slate-700 bg-slate-100 px-3 py-1 rounded-full">
//               Compliance
//             </span>
//             <span className="text-xs text-slate-700 bg-slate-100 px-3 py-1 rounded-full">
//               Payroll
//             </span>
//           </div>
//         </div>
  
//         {/* CTA Section */}
//         <div className="flex items-center gap-3">
//           <button className="flex-1 bg-blue-600 text-white text-sm font-medium py-2.5 rounded-xl hover:bg-blue-700 transition">
//             Request Introduction
//           </button>
  
//           {/* <a
//             href="#"
//             className="flex-1 text-center text-sm font-medium text-blue-700 border border-blue-200 py-2.5 rounded-xl hover:bg-blue-50 transition"
//           >
//             Learn More
//           </a> */}
//         </div>
//       </div>
//     );
//   }
  
/* ------ Updated Card That Accepts Props ------ */

// export default function ServiceCard({
//     logo,
//     name,
//     description,
//     tags = [],
//     verified = false,
//     websiteUrl
//   }) {
//     return (
//       <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 p-6 flex flex-col justify-between">
        
//         {/* Top */}
//         <div>
//           {/* Logo + Badge */}
//           <div className="flex items-center justify-between mb-4">
//             <img
//               src={logo}
//               alt={name}
//               className="h-10 w-auto object-contain"
//             />
  
//             {verified && (
//               <span className="text-xs font-medium text-blue-700 bg-blue-50 px-3 py-1 rounded-full">
//                 TTM Verified
//               </span>
//             )}
//           </div>
  
//           {/* Name */}
//           <h3 className="text-lg font-semibold text-slate-900 mb-2">
//             {name}
//           </h3>
  
//           {/* Description */}
//           <p className="text-sm text-slate-600 leading-relaxed mb-4">
//             {description}
//           </p>
  
//           {/* Tags */}
//           <div className="flex flex-wrap gap-2 mb-6">
//             {tags.map((tag, index) => (
//               <span
//                 key={index}
//                 className="text-xs text-slate-700 bg-slate-100 px-3 py-1 rounded-full"
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>
//         </div>
  
//         {/* CTA */}
//         <div className="flex items-center gap-3">
//           {/* <button className="flex-1 bg-blue-600 text-white text-sm font-medium py-2.5 rounded-xl hover:bg-blue-700 transition">
//             Request Introduction
//           </button> */}
  
//           <a
//             href={websiteUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex-1 text-center text-sm font-medium bg-[#2bb673] text-white shadow-lg shadow-black py-2.5 rounded-xl hover:bg-[#2bb673]/80 hover:shadow-xl transition"
//           >
//             Visit {name}
//           </a>
//         </div>
//       </div>
//     );
//   }

/* ---------------- Featured Service Card ---------------- */

export default function ServiceCard({
    logo,
    name,
    description,
    tags = [],
    verified = false,
    featured = false,
    websiteUrl
  }) {
    return (
      <div
        className={`relative rounded-2xl p-6 flex flex-col justify-between transition-all duration-300
          ${
            featured
              ? "bg-white border-2 border-[#2bb673] shadow-md hover:shadow-lg hover:scale-[1.02]"
              : "bg-white border border-slate-200 shadow-sm hover:shadow-md"
          }
        `}
      >
        {/* Featured Badge */}
        {featured && (
          <span className="absolute -top-3 left-6 bg-[#2bb673] text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
            Featured Partner
          </span>
        )}
  
        {/* Top Content */}
        <div>
          {/* Logo + Verified */}
          <div className="flex items-center justify-between mb-4">
            <img
              src={logo}
              alt={name}
              className="h-10 w-auto object-contain"
            />
  
            {verified && (
              <span className="text-xs font-medium text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
                TTM Verified
              </span>
            )}
          </div>
  
          {/* Name */}
          <h3 className="text-lg font-semibold text-slate-900 mb-2">
            {name}
          </h3>
  
          {/* Description */}
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            {description}
          </p>
  
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs text-slate-700 bg-slate-100 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
  
        {/* CTA */}
        <div className="flex items-center gap-3">
          {/* <button
            className={`flex-1 text-sm font-medium py-2.5 rounded-xl transition
              ${
                featured
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }
            `}
          >
            Request Introduction
          </button> */}
  
          <a
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 text-center text-sm font-medium bg-[#2bb673] text-white shadow-lg shadow-black py-2.5 rounded-xl hover:bg-[#2bb673]/80 hover:shadow-xl transition
             
            `}
          >
            Visit {name}
          </a>
        </div>
      </div>
    );
  }
  
  