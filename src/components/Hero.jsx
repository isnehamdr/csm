import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const scrollRef = useRef(null);
  const arrowRef = useRef(null);
  const imageRef = useRef(null);
  const brandRef = useRef(null);
  const brandWrapRef = useRef(null);
  const contentBoxRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#home",
          start: "top 75%",
          end: "bottom top",
          toggleActions: "restart none none reset",
        },
      });

      tl.fromTo(
        brandWrapRef.current,
        { x: "100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 1.2, ease: "power3.out" }
      )
        .fromTo(
          scrollRef.current,
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            opacity: 0,
          },
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.7"
        )
        .fromTo(
          imageRef.current,
          { rotateX: 90, opacity: 0, transformOrigin: "top center" },
          { rotateX: 0, opacity: 1, duration: 1.3, ease: "power4.out" },
          "-=0.45"
        )
        .fromTo(
          contentBoxRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" },
          "-=0.55"
        )
        .fromTo(
          textRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          "-=0.5"
        )
        .fromTo(
          buttonRef.current,
          { scale: 0.85, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" },
          "-=0.35"
        );

      gsap.to(arrowRef.current, {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 1,
        ease: "sine.inOut",
        delay: 1.2,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-white">
      <div
        ref={scrollRef}
        className="absolute left-0 top-0 bottom-0 z-20 hidden w-[44px] flex-col items-center justify-end pb-10 md:flex"
      />

      <div className="flex min-h-screen w-full px-4 pt-20 sm:px-6 md:px-10 lg:px-12 lg:pt-24">
        <div className="relative min-h-[70vh] flex-1 sm:min-h-[78vh] lg:min-h-0" style={{ perspective: "1200px" }}>
          <div
            ref={imageRef}
            className="absolute inset-y-[12px] left-0 right-0 overflow-hidden bg-gradient-to-br from-[#dde3ff] via-[#9ba8f8] to-[#5a62d6] sm:inset-y-[18px] lg:inset-y-[30px]"
            style={{
              clipPath: `polygon(
                0% 0%,
                96% 0%,
                96% 22%,
                100% 22%,
                100% 100%,
                10% 100%,
                10% 92%,
                0% 92%
              )`,
            }}
          >
            <img src="/images/hero2.jpg" alt="Hero" className="h-full w-full object-cover object-center" />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(195,205,255,0.55)_0%,rgba(88,96,213,0.35)_100%)] mix-blend-multiply" />
          </div>

          <div
            ref={contentBoxRef}
            className="absolute bottom-6 left-3 right-3 z-10 flex flex-col gap-2 rounded-2xl bg-white/82 backdrop-blur-sm sm:bottom-8 sm:left-4 sm:right-auto sm:max-w-[360px] lg:bottom-auto lg:left-0 lg:right-auto lg:top-[92px] lg:rounded-none lg:bg-transparent lg:backdrop-blur-0"
            style={{
              width: "clamp(220px, 72vw, 320px)",
              padding: "clamp(18px, 2.8vw, 36px)",
            }}
          >
            <h1
              ref={textRef}
              className="font-bold leading-snug text-[#1e2e69]"
              style={{ fontSize: "clamp(1.45rem, 5vw, 1.95rem)" }}
            >
              Your Journey to a Digital Future. Our IT Solutions, Tailored to Your Needs.
            </h1>

            <button
              ref={buttonRef}
              className="group flex w-fit cursor-pointer items-center gap-2 font-semibold text-[#1e2e69]"
              style={{ fontSize: "clamp(0.78rem, 1.1vw, 0.92rem)" }}
            >
              <span className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full bg-[#1e2e69] transition-transform duration-300 group-hover:scale-110">
                <svg viewBox="0 0 200 200" height="14" width="14" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M99.667 19.667c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.818-80-80-80m5.124 121.459-5.679-5.679 32.641-32.638H55.74V94.78h76.014L99.112 62.138l5.679-5.679 42.335 42.335-42.335 42.331Z"
                    fill="white"
                  />
                </svg>
              </span>
              Book Now
            </button>
          </div>
        </div>

        <div className="hidden shrink-0 flex-col items-center justify-end overflow-hidden md:flex" style={{ width: "clamp(70px, 10vw, 130px)" }}>
          <div ref={brandWrapRef} className="flex w-full items-center justify-center pb-2">
            <h2
              ref={brandRef}
              className="select-none text-[#1e2e69] [writing-mode:vertical-rl]"
              style={{
                transform: "rotate(180deg)",
                fontSize: "clamp(7.5rem, 12vw, 9rem)",
                fontWeight: 300,
                lineHeight: 0.9,
                letterSpacing: "0.04em",
                fontFamily: "'Helvetica Neue', Arial, sans-serif",
              }}
            >
              CMSNP
            </h2>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between px-4 pb-4 pt-3 md:hidden">
        <h2 className="text-[1.8rem] font-light text-[#1e2e69]">CMSNP</h2>
      </div>
    </section>
  );
};

export default Hero;
