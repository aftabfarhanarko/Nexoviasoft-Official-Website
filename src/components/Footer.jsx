// "use client";

// import React, { useRef } from "react";
// import { motion, useScroll } from "framer-motion";
// import Link from "next/link";
// import {
//   Twitter,
//   Instagram,
//   Youtube,
//   Linkedin,
//   ArrowRight,
//   ArrowUpRight,
//   MapPin,
// } from "lucide-react";
// import { useQuery } from "@/hooks/useApi";

// const FooterLink = ({ href, children }) => (
//   <Link
//     href={href}
//     className="group flex items-center gap-2 text-gray-500 hover:text-white transition-colors py-1"
//   >
//     <span className="relative overflow-hidden">
//       <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
//         {children}
//       </span>
//       <span className="absolute top-0 left-0 inline-block translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-[#EFFC76]">
//         {children}
//       </span>
//     </span>
//   </Link>
// );

// const Footer = () => {
//   const currentYear = new Date().getFullYear();
//   const containerRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end end"],
//   });

//   const { data } = useQuery("/footer");
//   const footer = data || {};

//   const socialLinks = [
//     { icon: Twitter, url: footer.twitter_url },
//     { icon: Instagram, url: footer.instagram_url },
//     { icon: Linkedin, url: footer.linkedin_url },
//     { icon: Youtube, url: footer.youtube_url },
//   ];

//   return (
//     <footer
//       ref={containerRef}
//       className="relative bg-[#050505] pt-32 pb-12 overflow-hidden"
//     >
//       <div className="relative z-20 max-w-7xl mx-auto px-6">
//         {/* CTA */}
//         <div className="flex flex-col items-center text-center mb-32">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="relative group cursor-pointer"
//           >
//             <h2 className="text-[12vw] md:text-[8vw] font-medium tracking-tight text-white/90 leading-[0.9]">
//               Have an idea?
//             </h2>
//             <div className="h-6" />
//             <h2 className="text-[12vw] md:text-[8vw] font-medium tracking-tight text-gray-500 leading-[0.9] group-hover:text-[#EFFC76] transition-colors">
//               Let&apos;s build it.
//             </h2>

//             <motion.div
//               whileHover={{ scale: 1.1, rotate: -5 }}
//               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 md:w-48 md:h-48 bg-[#EFFC76] rounded-full flex items-center justify-center mix-blend-difference opacity-0 group-hover:opacity-100 transition-opacity"
//             >
//               <ArrowRight size={48} className="text-black" />
//             </motion.div>
//           </motion.div>
//         </div>

//         {/* Main Content */}
//         <div className="flex flex-col md:flex-row justify-between gap-16 mb-24">
//           {/* Brand */}
//           <div className="max-w-xs">
//             <Link href="/" className="text-2xl font-bold text-white mb-6 block">
//               {footer.company_name}
//             </Link>

//             <p className="text-gray-500 mb-8">{footer.company_description}</p>

//             <div className="flex gap-4">
//               {socialLinks.map(
//                 ({ icon: Icon, url }, i) =>
//                   url && (
//                     <a
//                       key={i}
//                       href={url}
//                       target="_blank"
//                       className="text-gray-500 hover:text-[#EFFC76]"
//                     >
//                       <Icon size={20} />
//                     </a>
//                   )
//               )}
//             </div>
//           </div>

//           {/* Links */}
//           <div className="flex flex-wrap gap-16">
//             {/* Company */}
//             {footer.company_links?.length > 0 && (
//               <div>
//                 <h4 className="text-white mb-6">
//                   {footer.company_links_title}
//                 </h4>
//                 <div className="flex flex-col gap-3">
//                   {footer.company_links.map((item) => (
//                     <FooterLink key={item.label} href={item.url || "#"}>
//                       {item.label}
//                     </FooterLink>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Services */}
//             {footer.services_links?.length > 0 && (
//               <div>
//                 <h4 className="text-white mb-6">
//                   {footer.services_links_title}
//                 </h4>
//                 <div className="flex flex-col gap-3">
//                   {footer.services_links.map((item) => (
//                     <FooterLink key={item.label} href={item.url || "#"}>
//                       {item.label}
//                     </FooterLink>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Legal */}
//             {footer.legal_links?.length > 0 && (
//               <div>
//                 <h4 className="text-white mb-6">{footer.legal_links_title}</h4>
//                 <div className="flex flex-col gap-3">
//                   {footer.legal_links.map((item) => (
//                     <FooterLink key={item.label} href={item.url || "#"}>
//                       {item.label}
//                     </FooterLink>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Newsletter */}
//             {footer.newsletter_enabled && (
//               <div className="max-w-xs">
//                 <h4 className="text-white mb-6">{footer.newsletter_title}</h4>
//                 <div className="relative">
//                   <input
//                     type="email"
//                     placeholder={footer.newsletter_placeholder}
//                     className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#EFFC76]"
//                   />
//                   <button className="absolute right-0 top-3 text-gray-500 hover:text-[#EFFC76]">
//                     <ArrowUpRight size={20} />
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Bottom */}
//         <div className="flex flex-col md:flex-row justify-between items-end gap-6 relative">
//           <div className="flex items-center gap-2 text-gray-500 text-sm">
//             <MapPin size={14} /> {footer.location}
//           </div>

//           <span className="text-gray-600 text-sm">
//             © {currentYear} {footer.company_name}
//           </span>

//           <div className="absolute -bottom-20 right-0 opacity-10 pointer-events-none">
//             <h1 className="text-[15vw] font-bold text-white">LOG</h1>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import {
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Mail,
} from "lucide-react";
import { useQuery } from "@/hooks/useApi";

const FooterLink = ({ href, children }) => (
  <Link
    href={href}
    className="group flex items-center gap-2 text-gray-500 hover:text-white transition-colors py-1"
  >
    <span className="relative overflow-hidden">
      <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
        {children}
      </span>
      <span className="absolute top-0 left-0 inline-block translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-[#EFFC76]">
        {children}
      </span>
    </span>
  </Link>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const containerRef = useRef(null);
  // const isInView = useInView(containerRef, { once: true, amount: 0.1 }); // Unused in this version

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  const { data } = useQuery("/footer");
  console.log(data?.data);

  return (
    <footer
      ref={containerRef}
      className="relative bg-[#050505] pt-32 pb-12 overflow-hidden"
    >

      <div className="relative z-20 max-w-7xl mx-auto px-6">
        {/* 2. Massive Organic CTA */}
        <div className="flex flex-col items-center text-center mb-32 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group cursor-pointer"
          >
            <h2 className="text-[12vw] md:text-[8vw] font-medium tracking-tight text-white/90 leading-[0.9] group-hover:text-white transition-colors duration-500">
              Have an idea?
            </h2>
            <div className="h-4 md:h-8" /> {/* Spacer */}
            <h2 className="text-[12vw] md:text-[8vw] font-medium tracking-tight text-gray-500 leading-[0.9] group-hover:text-[#EFFC76] transition-colors duration-500">
              Let&apos;s build it.
            </h2>
            {/* Floating Magnetic Button */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 bg-[#EFFC76] rounded-full flex items-center justify-center mix-blend-difference opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            >
              <ArrowRight size={48} className="text-black" />
            </motion.div>
          </motion.div>
        </div>

        {/* 3. Floating Navigation (No Grid Lines) */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 md:gap-8 mb-24">
          {/* Brand - Minimal */}
          <div className="max-w-xs">
            <Link
              href="/"
              className="text-2xl font-bold text-white tracking-tight mb-6 inline-block"
            >
              SquadLog.
            </Link>
            <p className="text-gray-500 leading-relaxed mb-8">
              Crafting digital experiences with precision and passion. Based
              remotely, working globally.
            </p>
            <div className="flex gap-4">
              {[Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-gray-500 hover:text-[#EFFC76] transition-colors"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links - Floating Columns */}
          <div className="flex flex-wrap gap-12 md:gap-24">
            {/* Company & Services Grouped */}
            <div className="flex gap-12 md:gap-24">
              <div>
                <h4 className="text-white font-medium mb-6">Company</h4>
                <div className="flex flex-col gap-3">
                  {["About", "Work", "Agency", "Contact"].map((item) => (
                    <FooterLink key={item} href="#">
                      {item}
                    </FooterLink>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-white font-medium mb-6">Services</h4>
                <div className="flex flex-col gap-3">
                  {["Web Dev", "Mobile", "SaaS", "Design"].map((item) => (
                    <FooterLink key={item} href="#">
                      {item}
                    </FooterLink>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-white font-medium mb-6">Legal</h4>
                <div className="flex flex-col gap-3">
                  {[
                    { name: "Privacy Policy", href: "/privacy-policy" },
                    { name: "Terms & Conditions", href: "/terms-conditions" },
                    { name: "Refund Policy", href: "/refund-policy" },
                  ].map((item) => (
                    <FooterLink key={item.name} href={item.href}>
                      {item.name}
                    </FooterLink>
                  ))}
                </div>
              </div>
            </div>

            {/* Newsletter - Minimalist */}
            <div className="max-w-xs">
              <h4 className="text-white font-medium mb-6">Stay Updated</h4>
              <div className="relative group">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#EFFC76] transition-colors rounded-none"
                />
                <button className="absolute right-0 top-3 text-gray-500 group-focus-within:text-[#EFFC76] transition-colors">
                  <ArrowUpRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Bottom Anchor - Barely There */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 relative">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <MapPin size={14} /> New York, NY
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <Mail size={14} /> hello@squadlog.com
            </div>
          </div>

          <div className="flex gap-6 text-sm text-gray-600">
            <span>&copy; {currentYear} SquadLog</span>
          </div>

          {/* Giant Faded Anchor Text behind everything */}
          <div className="absolute -bottom-20 right-0 pointer-events-none select-none mix-blend-overlay opacity-20">
            <h1 className="text-[15vw] font-bold text-white/5 leading-none">
              LOG
            </h1>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
// 