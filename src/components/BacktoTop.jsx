import React, { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

const SCROLL_THRESHOLD = 280;

export default function BacktoTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > SCROLL_THRESHOLD);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-5 right-4 z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-[#1e2e69] text-white shadow-[0_14px_30px_rgba(30,46,105,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#16224f] sm:bottom-8 sm:right-8 sm:h-14 sm:w-14 ${
        isVisible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <FiArrowUp className="text-lg sm:text-xl" />
    </button>
  );
}
