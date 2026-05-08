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
  const textBlockRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text animation only
      gsap.fromTo(
        textBlockRef.current,
        { x: 40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          delay: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "restart none none reset",
          },
        }
      );

      // Services animation only
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
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "restart none none reset",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="w-full py-16 sm:py-20 lg:py-24"
    >
      <div className="flex w-full flex-col items-stretch gap-8 md:flex-row md:gap-0">
        
        {/* Image Section - No GSAP */}
        <div className="w-full shrink-0 md:w-[52%]">
          <div
            className="w-full overflow-hidden rounded-xl md:rounded-none"
            style={{
              height: "clamp(320px, 42vw, 520px)",
              borderRadius: "0 0 10px 10px",
            }}
          >
            <img
              src="/images/about.avif"
              alt="About Us"
              className="h-full w-full object-cover md:[clip-path:polygon(0%_0%,82%_0%,82%_18%,100%_18%,100%_100%,18%_100%,18%_82%,0%_82%)]"
              style={{ objectPosition: "86% 37%" }}
            />
          </div>
        </div>

        {/* Content Section */}
        <div
          ref={textBlockRef}
          className="flex w-full flex-col"
          style={{
            paddingLeft: "clamp(16px, 4vw, 64px)",
            paddingRight: "clamp(16px, 5vw, 80px)",
            paddingTop: "clamp(8px, 2vw, 0px)",
            gap: "clamp(10px, 1.5vw, 18px)",
          }}
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#1e2e69]">
            About Us
          </p>

          <h2 className="text-3xl font-semibold uppercase leading-tight text-[#1e2e69] sm:text-4xl lg:text-5xl">
            Simple Solutions!
          </h2>

          <div
            className="bg-gray-200"
            style={{ height: "1px", width: "100%" }}
          />

          <p className="text-sm leading-relaxed text-gray-500 sm:text-base">
            We specialize in developing tailored software solutions that address
            the unique needs of businesses across various industries. Our focus
            on quality and innovation drives us to collaborate closely with
            clients to deliver effective IT solutions.
          </p>

          <div
            className="mt-1 flex flex-col"
            style={{ gap: "clamp(10px, 1.4vw, 16px)" }}
          >
            {services.map((item, i) => (
              <div
                key={item.number}
                ref={(el) => (itemsRef.current[i] = el)}
                className="flex items-start gap-3 sm:gap-4"
              >
                <span
                  className="shrink-0 leading-none text-[#1e2e69]"
                  style={{
                    fontSize: "clamp(1rem, 1.6vw, 1.3rem)",
                    fontFamily: "'Helvetica Neue', Arial, sans-serif",
                    minWidth: "20px",
                    paddingTop: "2px",
                  }}
                >
                  {item.number}
                </span>

                <div
                  className="shrink-0 self-stretch bg-gray-300"
                  style={{ width: "1px", minHeight: "100%" }}
                />

                <div className="flex flex-col gap-0.5">
                  <p
                    className="font-semibold leading-snug text-[#1e2e69]"
                    style={{
                      fontSize: "clamp(0.82rem, 1.1vw, 0.92rem)",
                      fontFamily: "'Helvetica Neue', Arial, sans-serif",
                    }}
                  >
                    {item.title}
                  </p>

                  <p
                    className="leading-relaxed text-gray-500"
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