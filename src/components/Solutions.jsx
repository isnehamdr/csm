import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "01",
    label: "Information Technology",
    image: "/images/s6.jpg",
    desc: "Our software enhances IT productivity by offering robust project management tools tailored for technology teams. Track project progress, manage client support tickets, and optimize workflows with real-time reporting and integrated communication features.",
  },
  {
    id: "02",
    label: "Hospitality",
    image: "/images/s1.avif",
    desc: "Elevate your hospitality services with our software, which streamlines booking processes and enhances customer service. Manage reservations, guest check-ins, and personalized communications to ensure a memorable experience for every guest.",
  },
  {
    id: "03",
    label: "Education",
    image: "/images/s2.avif",
    desc: "Our platform simplifies student and staff administration in educational institutions. Manage admissions, attendance, and performance assessments while facilitating communication between faculty, students, and parents to foster engagement throughout the academic year.",
  },
  {
    id: "04",
    label: "Tours",
    image: "/images/s3.avif",
    desc: "Our solution simplifies itinerary planning for tour operators, allowing you to create detailed schedules that include accommodations and activities. Enhance customer communication before and after tours to ensure a seamless experience.",
  },
  {
    id: "05",
    label: "Real Estate",
    image: "/images/s5.jpg",
    desc: "Our software equips real estate professionals with tools for managing properties and client relationships. Utilize lead tracking, automated follow-ups, and customizable listings to streamline your sales process effectively.",
  },
  {
    id: "06",
    label: "Construction",
    image: "/images/s6.jpg",
    desc: "Our platform supports construction managers by streamlining scheduling, resource allocation, and budget tracking. Keep teams connected with real-time collaboration tools to ensure projects are completed on time and within budget.",
  },
];

const cardConfigs = [
  {
    clipPath:
      "polygon(0% 0%, 100% 0%, 100% 100%, 22% 100%, 22% 82%, 0% 82%)",
    labelBelow: true,
  },
  {
    clipPath:
      "polygon(0% 0%, 100% 0%, 100% 78%, 78% 78%, 78% 100%, 0% 100%)",
    labelBelow: false,
  },
  {
    clipPath:
      "polygon(0% 0%, 78% 0%, 78% 20%, 100% 20%, 100% 100%, 0% 100%)",
    labelBelow: true,
  },
  {
    clipPath:
      "polygon(0% 0%, 100% 0%, 100% 82%, 75% 82%, 75% 100%, 0% 100%)",
    labelBelow: false,
  },
  {
    clipPath:
      "polygon(0% 0%, 100% 0%, 100% 100%, 22% 100%, 22% 82%, 0% 82%)",
    labelBelow: true,
  },
  {
    clipPath:
      "polygon(0% 0%, 100% 0%, 100% 78%, 78% 78%, 78% 100%, 0% 100%)",
    labelBelow: false,
  },
];

export const Solutions = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const trackRef = useRef(null);
  const cardRefs = useRef([]);

  const [expanded, setExpanded] = useState(false);

  // Mobile active card
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "restart none none reset",
          },
        }
      );

      gsap.fromTo(
        cardRefs.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "restart none none reset",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const handleToggle = () => {
    const newExpanded = !expanded;
    setExpanded(newExpanded);

    const track = trackRef.current;

    if (!track) return;

    const totalWidth = track.scrollWidth;
    const visibleWidth = track.parentElement.offsetWidth;
    const maxScroll = totalWidth - visibleWidth;

    gsap.to(track, {
      x: newExpanded ? -maxScroll : 0,
      duration: 0.9,
      ease: "power3.inOut",
    });
  };

  return (
    <section
      id="solutions"
      ref={sectionRef}
      className="w-full overflow-hidden bg-[#f8faff] px-4 py-16 sm:px-6 sm:py-20 md:px-10 lg:px-12 lg:py-24"
    >
      {/* Header */}
      <div
        ref={headerRef}
        className="mb-12 flex flex-col gap-3 md:mb-16"
      >
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#1e2e69]">
          Our IT Services
        </p>

        <h2 className="text-3xl font-semibold uppercase leading-tight text-[#1e2e69] sm:text-4xl lg:text-5xl">
          Comprehensive Solutions
          <br />
          Tailored to Your Needs
        </h2>
      </div>

      {/* Cards */}
      <div className="overflow-hidden pb-4">
        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto will-change-transform [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:gap-5 lg:gap-7 lg:overflow-visible"
        >
          {services.map((service, i) => {
            const config = cardConfigs[i];

            return (
              <div
                key={service.id}
                ref={(el) => (cardRefs.current[i] = el)}
                className={`flex snap-center shrink-0 flex-col gap-3 w-[88%] sm:w-[48%] lg:w-[23%]
                ${
                  !config.labelBelow
                    ? "mt-10 lg:mt-16"
                    : "mt-0"
                }`}
              >
                {/* Top Label */}
                {!config.labelBelow && (
                  <p className="truncate text-xs font-medium tracking-wide text-[#1e2e69] md:text-sm">
                    {service.id}. {service.label}
                  </p>
                )}

                {/* Card */}
                <div
                  className="group relative h-[240px] w-full cursor-pointer sm:h-[320px] lg:h-[380px]"
                  style={{ perspective: "1200px" }}
                  onClick={() =>
                    setActiveCard(
                      activeCard === i ? null : i
                    )
                  }
                >
                  <div
                    className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d]
                    
                    ${
                      activeCard === i
                        ? "[transform:rotateY(180deg)]"
                        : ""
                    }

                    lg:group-hover:[transform:rotateY(180deg)]`}
                  >
                    {/* Front */}
                    <div
                      className="absolute inset-0 overflow-hidden [backface-visibility:hidden]"
                      style={{
                        clipPath: config.clipPath,
                      }}
                    >
                      <img
                        src={service.image}
                        alt={service.label}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-black/20" />

                      {/* Mobile Hint */}
                      <div className="absolute bottom-3 left-1/2 z-20 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-[10px] text-white lg:hidden">
                        Tap to explore
                      </div>
                    </div>

                    {/* Back */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#1e2e69] p-3 text-center text-white sm:p-5 lg:p-6 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                      <span className="mb-2 text-xs tracking-[0.25em] text-blue-300 sm:mb-3 sm:text-sm">
                        {service.id}
                      </span>

                      <h3 className="mb-2 text-lg font-semibold leading-snug text-white sm:mb-4 sm:text-2xl">
                        {service.label}
                      </h3>

                      <p className="text-xs leading-relaxed text-white sm:text-sm lg:text-base">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Label */}
                {config.labelBelow && (
                  <p className="truncate text-xs font-medium tracking-wide text-[#1e2e69] md:text-sm">
                    {service.id}. {service.label}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Button */}
      <div className="mt-10 flex justify-end">
        <button
          onClick={handleToggle}
          className="group hidden cursor-pointer items-center gap-3 text-sm font-medium text-[#1e2e69] transition-opacity duration-300 hover:opacity-70 sm:flex"
        >
          <span
            className={`flex h-10 w-10 items-center justify-center rounded-full bg-[#1e2e69] transition-all duration-500 group-hover:scale-110
            ${expanded ? "rotate-180" : "rotate-0"}`}
          >
            <svg
              viewBox="0 0 200 200"
              height="14"
              width="14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M99.667 19.667c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.818-80-80-80m5.124 121.459-5.679-5.679 32.641-32.638H55.74V94.78h76.014L99.112 62.138l5.679-5.679 42.335 42.335-42.335 42.331Z"
                fill="white"
              />
            </svg>
          </span>

          {expanded ? "See Less" : "See More"}
        </button>
      </div>
    </section>
  );
};

export default Solutions;