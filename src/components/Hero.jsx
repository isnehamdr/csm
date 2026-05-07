import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

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
      // Brand: slides in from the RIGHT (x: 100% → 0) slowly
      gsap.fromTo(
        brandWrapRef.current,
        {
          x: "100%",
          opacity: 0,
        },
        {
          x: "0%",
          opacity: 1,
          duration: 1.6,
          ease: "power3.out",
          delay: 0.4,
        }
      );

      // Scroll indicator: clip reveal from top
      gsap.fromTo(
        scrollRef.current,
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          opacity: 0,
        },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          delay: 1,
        }
      );

      // Arrow bounce
      gsap.to(arrowRef.current, {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 1,
        ease: "sine.inOut",
        delay: 1.5,
      });

      // Image reveal: rotateX from 90deg
      gsap.fromTo(
        imageRef.current,
        {
          rotateX: 90,
          opacity: 0,
          transformOrigin: "top center",
        },
        {
          rotateX: 0,
          opacity: 1,
          duration: 1.3,
          ease: "power4.out",
          delay: 0.1,
        }
      );

      // Content box
      gsap.fromTo(
        contentBoxRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", delay: 0.7 }
      );

      // Heading
      gsap.fromTo(
        textRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.9 }
      );

      // Button
      gsap.fromTo(
        buttonRef.current,
        { scale: 0.85, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)", delay: 1.1 }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white">

      {/* ── Scroll Down — far left ── */}
      <div
        ref={scrollRef}
        className="absolute left-0 top-0 bottom-0 z-20 hidden w-[44px] flex-col items-center justify-end pb-10 md:flex"
      >
        <div className="flex flex-col items-center gap-3">
          <div ref={arrowRef}>
            <svg
              width="20"
              height="130"
              viewBox="86.9 20 26 160.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M101.1 30.2c2.2-.6 3.9-2.6 3.9-5s-2.3-5.2-5.2-5.2-5.2 2.3-5.2 5.2 1.8 4.6 4.2 5.1v145.5l-10.3-10.3-1.6 1.6 12.2 12.2.8.8.8-.8 12.2-12.2-1.6-1.6-10.3 10.3V30.2Z"
                fill="#1e2e69"
                fillRule="evenodd"
              />
            </svg>
          </div>
          <span className="rotate-180 text-[11px] font-medium tracking-[0.18em] text-[#1e2e69] [writing-mode:vertical-rl]">
            Scroll Down
          </span>
        </div>
      </div>

      {/* ── Main Layout ── */}
      <div className="flex min-h-screen w-full pl-[44px]">

        {/* ── Image Section ── */}
        <div className="relative flex-1" style={{ perspective: "1200px" }}>
          <div
            ref={imageRef}
            className="absolute inset-y-[30px] left-0 right-0 overflow-hidden bg-gradient-to-br from-[#dde3ff] via-[#9ba8f8] to-[#5a62d6]"
            style={{
              clipPath: `polygon(
                0% 0%,
                96% 0%,
                96% 22%,
                100% 22%,
                100% 100%,
                18% 100%,
                18% 72%,
                0% 72%
              )`,
            }}
          >
            <img
              src="/images/hero2.jpg"
              alt="Hero"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(195,205,255,0.55)_0%,rgba(88,96,213,0.35)_100%)] mix-blend-multiply" />
          </div>

          {/* ── Content Box ── */}
          <div
            ref={contentBoxRef}
            className="absolute bottom-[30px] left-[-30px] z-10 flex flex-col gap-2"
            style={{
              width: "clamp(200px, 30%, 320px)",
              padding: "clamp(18px, 2.8vw, 36px)",
            }}
          >
            <h1
              ref={textRef}
              className="font-bold leading-snug text-[#1e2e69]"
              style={{ fontSize: "clamp(0.9rem, 1.7vw, 1.2rem)" }}
            >
              Your Journey to a Digital Future. Our IT Solutions, Tailored to Your Needs.
            </h1>

            <button
              ref={buttonRef}
              className="group flex w-fit items-center gap-2 font-semibold text-[#1e2e69]"
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

        {/* ── Vertical Brand — slides in from right ── */}
        <div
          className="hidden shrink-0 flex-col items-center justify-end overflow-hidden md:flex"
          style={{ width: "clamp(70px, 10vw, 130px)" }}
        >
          {/* This wrapper is what GSAP animates (x: 100% → 0) */}
          <div ref={brandWrapRef} className="flex items-center justify-center w-full pb-2">
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

      {/* ── Mobile ── */}
      <div className="flex items-center justify-between px-4 pb-4 pt-2 md:hidden">
        <h2 className="text-[1.8rem] font-light text-[#1e2e69]" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
          Be.Guardit
        </h2>
        <button className="border border-[#1e2e69] px-3 py-1.5 text-xs font-medium tracking-wide text-[#1e2e69]">
          ↓ Scroll Down
        </button>
      </div>
    </div>
  );
};

export default Hero;