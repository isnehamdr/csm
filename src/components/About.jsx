import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: "1",
    title: "Tailored Development",
    desc: "Custom software designed specifically for your business needs.",
  },
  {
    number: "2",
    title: "Quality Assurance",
    desc: "Rigorous testing to ensure reliability and performance.",
  },
  {
    number: "3",
    title: "Innovative Technology",
    desc: "Leverage the latest technologies to stay ahead of the competition.",
  },
  {
    number: "4",
    title: "Streamlined Operations",
    desc: "Solutions that enhance efficiency and productivity.",
  },
  {
    number: "5",
    title: "Ongoing Support",
    desc: "Dedicated support to assist you at every stage of your journey.",
  },
];

export const About = () => {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const textBlockRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        }
      );

      gsap.fromTo(
        textBlockRef.current,
        { x: 40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.0,
          ease: "power3.out",
          delay: 0.15,
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        }
      );

      // Stagger each numbered item
      gsap.fromTo(
        itemsRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1,
          delay: 0.4,
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-24"
   
    >
      <div className="flex flex-col md:flex-row items-stretch w-full">

        {/* ══ LEFT — Image with top-right notch ══ */}
        <div
          className="w-full md:w-[45%] shrink-0"
       
        >
          <div
            ref={imgRef}
            className="w-full overflow-hidden"
            style={{
              height: "clamp(320px, 42vw, 520px)",
              clipPath: `polygon(
                0% 0%,
                75% 0%,
                75% 20%,
                100% 20%,
                100% 100%,
                0% 100%
              )`,
              borderRadius: "0 0 10px 10px",
            }}
          >
            <img
              src="/images/about.avif"
              alt="About Us"
              className="w-full h-full object-cover"
              style={{ objectPosition: "86% 37%" }}
            />
          </div>
        </div>

        {/* ══ RIGHT — Text content ══ */}
        <div
          ref={textBlockRef}
          className="flex flex-col w-full "
          style={{
            paddingLeft: "clamp(24px, 4vw, 64px)",
            paddingRight: "clamp(24px, 5vw, 80px)",
            paddingTop: "clamp(32px, 2vw, 0px)",
            gap: "clamp(10px, 1.5vw, 18px)",
          }}
        >
          {/* Label */}
          <p
            className="text-sm font-medium uppercase tracking-[0.2em] text-[#1e2e69]"
            // style={{
          
            //   letterSpacing: "0.04em",
        
            // }}
          >
            About Us
          </p>

          {/* Heading */}
          <h2
            className="text-[#1e2e69] leading-tight uppercase font-semibold text-3xl md:text-4xl"
            // style={{
        
       
         
            //   letterSpacing: "-0.01em",
            // }}
          >
            Simple Solutions!
          </h2>

          {/* Divider */}
          <div className="bg-gray-200" style={{ height: "1px", width: "100%" }} />

          {/* Intro paragraph */}
          <p
            className="text-gray-500 leading-relaxed text-md"
      
    
          >
            We specialize in developing tailored software solutions that address
            the unique needs of businesses across various industries. Our focus
            on quality and innovation drives us to collaborate closely with
            clients to deliver effective IT solutions.
          </p>

          {/* Numbered service items */}
          <div className="flex flex-col" style={{ gap: "clamp(10px, 1.4vw, 16px)", marginTop: "4px" }}>
            {services.map((item, i) => (
              <div
                key={item.number}
                ref={(el) => (itemsRef.current[i] = el)}
                className="flex items-start gap-4"
              >
                {/* Number */}
                <span
                  className="text-[#1e2e69] shrink-0 font-light leading-none"
                  style={{
                    fontSize: "clamp(1rem, 1.6vw, 1.3rem)",
                    fontFamily: "'Helvetica Neue', Arial, sans-serif",
                    minWidth: "20px",
                    paddingTop: "2px",
                  }}
                >
                  {item.number}
                </span>

                {/* Thin divider line */}
                <div
                  className="shrink-0 bg-gray-300 self-stretch"
                  style={{ width: "1px", minHeight: "100%" }}
                />

                {/* Title + desc */}
                <div className="flex flex-col gap-0.5">
                  <p
                    className="text-[#1e2e69] font-semibold leading-snug"
                    style={{
                      fontSize: "clamp(0.82rem, 1.1vw, 0.92rem)",
                      fontFamily: "'Helvetica Neue', Arial, sans-serif",
                    }}
                  >
                    {item.title}
                  </p>
                  <p
                    className="text-gray-500 leading-relaxed"
                    style={{
                      fontSize: "clamp(0.76rem, 1vw, 0.85rem)",
                      fontFamily: "'Helvetica Neue', Arial, sans-serif",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

    
        </div>
      </div>
    </section>
  );
};

export default About;
