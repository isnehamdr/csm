import { useEffect, useRef } from "react";

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 relative z-10 transition-transform duration-300 group-hover:scale-110">
        <path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/>
      </svg>
    ),
    bg: "bg-[#1e2e69]",
    name: "Ease of Use",
    desc: "Our platform features a user-friendly design that ensures a seamless experience for all users.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 relative z-10 transition-transform duration-300 group-hover:scale-110">
        <line x1="4" x2="4" y1="21" y2="14"/><line x1="4" x2="4" y1="10" y2="3"/>
        <line x1="12" x2="12" y1="21" y2="12"/><line x1="12" x2="12" y1="8" y2="3"/>
        <line x1="20" x2="20" y1="21" y2="16"/><line x1="20" x2="20" y1="12" y2="3"/>
        <line x1="2" x2="6" y1="14" y2="14"/><line x1="10" x2="14" y1="8" y2="8"/><line x1="18" x2="22" y1="16" y2="16"/>
      </svg>
    ),
    bg: "bg-[#1e2e69]",
    name: "Customization",
    desc: "Our solution is highly customizable, allowing you to tailor it perfectly to fit your unique business needs.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 relative z-10 transition-transform duration-300 group-hover:scale-110">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
      </svg>
    ),
    bg: "bg-[#1e2e69]",
    name: "Integration",
    desc: "The platform integrates easily with your existing tools, ensuring smooth transitions and enhanced productivity.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 relative z-10 transition-transform duration-300 group-hover:scale-110">
        <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/>
      </svg>
    ),
    bg: "bg-[#1e2e69]",
    name: "24/7 Support",
    desc: "We offer round-the-clock support to ensure quick resolution of any issues you may encounter.",
  },
];

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const els = ref.current?.querySelectorAll("[data-reveal]");
    if (!els) return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("opacity-100", "translate-y-0");
            e.target.classList.remove("opacity-0", "translate-y-8");
          } else {
            e.target.classList.remove("opacity-100", "translate-y-0");
            e.target.classList.add("opacity-0", "translate-y-8");
          }
        }),
      { threshold: 0.15 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function BusinessSections() {
  const ref = useReveal();

  return (
    <div ref={ref} className="w-full">
      <section id="services" className="w-full px-4 py-16 sm:px-12 sm:py-20 lg:py-24">

        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1e2e69] mb-4">
            We Provide The Best <span className="text-[#1e2e69]">Services</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
            We are committed to delivering top-notch services that empower businesses to manage their
            content effortlessly and effectively. Our CMS software is designed with user experience in
            mind, offering an intuitive interface that simplifies the process of creating, editing, and
            publishing content.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, i) => (
            <div
              key={i}
              data-reveal
              className="bg-white rounded-xl relative overflow-hidden pt-20 pb-8 px-4 sm:px-5 border border-[#e0e6ff] bg-gray-500
                         shadow-[rgba(0,0,0,0.15)_0px_3px_10px] flex flex-col items-center group
                         opacity-0 translate-y-8 transition-all duration-500
                         hover:shadow-[rgba(0,0,0,0.2)_0px_10px_28px]"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Blob â€” z-index:1, expands on hover */}
           <div
  className={`${svc.bg} absolute top-0 left-0 w-20 h-20 rounded-br-[40px]
              group-hover:w-full group-hover:h-full group-hover:rounded-none
              transition-all duration-500 z-[1]`}
/>

{/* Icon pinned to top-left, never moves */}
<div className="absolute top-0 left-0 w-20 h-20 flex items-center justify-center text-white z-[2]">
  {svc.icon}
</div>

              {/* Text â€” z-index:2, always above blob */}
              <p className="relative z-[2] mb-3 text-center text-base font-bold text-[#1e2e69]
                            group-hover:text-white transition-colors duration-500">
                {svc.name}
              </p>
              <p className="relative z-[2] text-center text-sm leading-relaxed text-gray-500
                            group-hover:text-white/90 transition-colors duration-500">
                {svc.desc}
              </p>
            </div>
          ))}
        </div>

      </section>
    </div>
  );
}
