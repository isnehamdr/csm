import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FiMenu, FiX, FiPhone, FiFileText } from "react-icons/fi";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Solutions", href: "#solutions" },
  { label: "Services", href: "#services" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#footer" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [active, setActive] = useState("Home");
  const [showForm, setShowForm] = useState(false);

  const lastScrollY = useRef(0);
  const menuRef = useRef(null);
  const menuItemsRef = useRef([]);
  const formRef = useRef(null);

  // ðŸ”½ Scroll hide/show navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ðŸŽ¬ Side menu animation
  useEffect(() => {
    if (menuOpen) {
      gsap.to(menuRef.current, {
        x: 0,
        duration: 0.6,
        ease: "power4.out",
      });

      gsap.fromTo(
        menuItemsRef.current,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.1,
          delay: 0.2,
          duration: 0.5,
          ease: "power3.out",
        }
      );
    } else {
      gsap.to(menuRef.current, {
        x: "100%",
        duration: 0.5,
        ease: "power3.in",
      });
    }
  }, [menuOpen]);

  // ðŸŽ¬ Modal animation
  useEffect(() => {
    if (showForm) {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, scale: 0.9, y: 50 },
        { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "power3.out" }
      );
    }
  }, [showForm]);

  return (
    <>
      {/* Navbar */}
      <div
        className="fixed top-0 left-0 w-full bg-white z-50"
      >
        <div className="flex items-center justify-between px-4 py-3 sm:px-6 md:px-12">
          
          {/* Logo */}
          <a href="#home">
            <img src="/images/logo.png" alt="logo" className="h-10 sm:h-12 md:h-14" />
          </a>

          {/* Right Side */}
          <div className="flex items-center gap-4 md:gap-8">
            
            {/* Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <a href="tel:+977061591368" className="flex cursor-pointer items-center gap-2 rounded-md border border-[#1e2e69] px-4 py-2 text-base text-[#1e2e69] transition hover:bg-[#1e2e69] hover:text-white lg:text-lg">
                <FiPhone />
                Schedule a Call
              </a>

              <button
                onClick={() => setShowForm(true)}
                className="flex cursor-pointer items-center gap-2 rounded-md bg-[#1e2e69] px-4 py-2 text-base text-white transition hover:opacity-90 lg:text-lg"
              >
                <FiFileText />
                Get a Quote
              </button>
            </div>

            {/* Menu Button */}
            <button onClick={() => setMenuOpen(true)} className="cursor-pointer rounded-md p-1">
              <FiMenu className="text-2xl md:text-3xl" />
            </button>
          </div>
        </div>
      </div>

      {/* ðŸ”¥ Side Menu */}
      <div
        ref={menuRef}
        className="fixed top-0 right-0 h-full w-[88%] sm:w-[70%] md:w-[500px] bg-[#1e2e69] text-white z-50 translate-x-full"
      >
        {/* Close */}
        <div className="flex justify-end p-5 sm:p-6">
          <button onClick={() => setMenuOpen(false)} className="cursor-pointer">
            <FiX className="text-3xl" />
          </button>
        </div>

        {/* Menu Items */}
        <ul className="mt-8 flex flex-col gap-6 px-6 text-xl tracking-wide sm:mt-10 sm:gap-8 sm:px-8 sm:text-2xl md:text-3xl">
          {navItems.map((item, index) => (
            <li
              key={item.label}
              ref={(el) => (menuItemsRef.current[index] = el)}
              onClick={() => setActive(item.label)}
              className={`cursor-pointer transition duration-300 ${
                active === item.label
                  ? "opacity-50"
                  : "opacity-100 hover:opacity-70"
              }`}
            >
              <a href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Footer */}
        <div className="absolute bottom-8 px-6 text-sm opacity-80 space-y-2 sm:bottom-10 sm:px-8 md:text-base">
          <p className="text-base sm:text-lg">Get the Best Service Today</p>
          <p>info@cmsnp.info</p>
        </div>
      </div>

      {/* ðŸ§¾ Quote Modal */}
      {showForm && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100]"
          onClick={() => setShowForm(false)}
        >
          <div
            ref={formRef}
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-[92%] max-w-[500px] rounded-xl p-4 shadow-lg sm:p-6 md:w-[500px]"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg md:text-2xl font-semibold text-[#1e2e69]">
                Get Answer to Your Query
              </h2>
              <button onClick={() => setShowForm(false)} className="cursor-pointer">
                <FiX />
              </button>
            </div>

            {/* Form */}
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Name*"
                className="border p-2 rounded-md outline-none focus:border-[#1e2e69]"
                required
              />

              <input
                type="email"
                placeholder="Email*"
                className="border p-2 rounded-md outline-none focus:border-[#1e2e69]"
                required
              />

              <input
                type="tel"
                placeholder="Phone Number*"
                className="border p-2 rounded-md outline-none focus:border-[#1e2e69]"
                required
              />

              <input
                type="text"
                placeholder="Company Name"
                className="border p-2 rounded-md outline-none focus:border-[#1e2e69]"
              />

              <textarea
                placeholder="Message*"
                rows="4"
                className="border p-2 rounded-md outline-none focus:border-[#1e2e69]"
                required
              />

              <button
                type="submit"
                className="mt-2 cursor-pointer rounded-md bg-[#1e2e69] py-2 text-white transition hover:opacity-90"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
