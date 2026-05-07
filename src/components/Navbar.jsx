// import React, { useState, useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { FiMenu, FiX, FiPhone, FiFileText } from "react-icons/fi";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [showNav, setShowNav] = useState(true);
//   const [active, setActive] = useState("Home");

//   const lastScrollY = useRef(0);
//   const menuRef = useRef(null);
//   const menuItemsRef = useRef([]);

//   // 🔽 Scroll behavior
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > lastScrollY.current) {
//         setShowNav(false);
//       } else {
//         setShowNav(true);
//       }
//       lastScrollY.current = window.scrollY;
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // 🎬 GSAP animation
//   useEffect(() => {
//     if (menuOpen) {
//       gsap.to(menuRef.current, {
//         x: 0,
//         duration: 0.6,
//         ease: "power4.out",
//       });

//       gsap.fromTo(
//         menuItemsRef.current,
//         { x: 50, opacity: 0 },
//         {
//           x: 0,
//           opacity: 1,
//           stagger: 0.1,
//           delay: 0.2,
//           duration: 0.5,
//           ease: "power3.out",
//         }
//       );
//     } else {
//       gsap.to(menuRef.current, {
//         x: "100%",
//         duration: 0.5,
//         ease: "power3.in",
//       });
//     }
//   }, [menuOpen]);

//   const navItems = ["Home", "Services", "FAQ", "Contact"];

//   return (
//     <>
//       {/* Navbar */}
//       <div
//         className={`fixed top-0 left-0 w-full bg-white z-50 transition-transform duration-300 ${
//           showNav ? "translate-y-0" : "-translate-y-full"
//         }`}
//       >
//         <div className="flex justify-between items-center px-6 md:px-12 py-3">
          
//           {/* Logo */}
//           <img src="/images/logo.png" alt="logo" className="h-12 md:h-14 cursor-pointe" />

//           {/* Right side */}
//           <div className="flex items-center gap-4 md:gap-8">
            
//             {/* Buttons */}
//             <div className="hidden md:flex items-center gap-4 cursor-pointe">
//               <button className="flex items-center gap-2 border rounded-md border-[#1e2e69] text-[#1e2e69] px-4 py-2 text-base lg:text-lg hover:bg-[#1e2e69] hover:text-white transition">
//                 <FiPhone />
//                 Schedule a Call
//               </button>

//               <button className="flex items-center gap-2 cursor-pointe bg-[#1e2e69] rounded-md text-white px-4 py-2 text-base lg:text-lg hover:opacity-90 transition">
//                 <FiFileText />
//                 Get a Quote
//               </button>
//             </div>

//             {/* Menu Button */}
//             <button onClick={() => setMenuOpen(true)}>
//               <FiMenu className="text-2xl md:text-3xl" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Side Menu */}
//       <div
//         ref={menuRef}
//         className="fixed top-0 right-0 h-full w-[85%] sm:w-[70%] md:w-[500px] bg-[#1e2e69] text-white z-50 translate-x-full cursor-pointer"
//       >
//         {/* Close */}
//         <div className="flex justify-end p-6">
//           <button className="cursor-pointer" onClick={() => setMenuOpen(false)}>
//             <FiX className="text-3xl" />
//           </button>
//         </div>

//         {/* Nav Items */}
//         <ul className="flex flex-col gap-8 px-8 mt-10 text-2xl md:text-5xl tracking-wide r">
//           {navItems.map((item, index) => (
//             <li
//               key={item}
//               ref={(el) => (menuItemsRef.current[index] = el)}
//               onClick={() => setActive(item)}
//               className={`cursor-pointer transition duration-300 ${
//                 active === item
//                   ? "opacity-50"
//                   : "opacity-100 hover:opacity-70"
//               }`}
//             >
//               {item}
//             </li>
//           ))}
//         </ul>

//         {/* Footer Content */}
//         <div className="absolute bottom-10 px-8 text-sm md:text-base opacity-80 space-y-2">
//           <p className="text-xl">Get the Best Service Today</p>
//           <p>info@cmsnp.info</p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;








import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FiMenu, FiX, FiPhone, FiFileText } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [active, setActive] = useState("Home");
  const [showForm, setShowForm] = useState(false);

  const lastScrollY = useRef(0);
  const menuRef = useRef(null);
  const menuItemsRef = useRef([]);
  const formRef = useRef(null);

  const navItems = ["Home", "Services", "FAQ", "Contact"];

  // 🔽 Scroll hide/show navbar
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

  // 🎬 Side menu animation
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

  // 🎬 Modal animation
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
        className={`fixed top-0 left-0 w-full bg-white z-50 transition-transform duration-300 ${
          showNav ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 md:px-12 py-3">
          
          {/* Logo */}
          <img src="/images/logo.png" alt="logo" className="h-12 md:h-14" />

          {/* Right Side */}
          <div className="flex items-center gap-4 md:gap-8">
            
            {/* Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <button className="flex items-center gap-2 border rounded-md border-[#1e2e69] text-[#1e2e69] px-4 py-2 text-base lg:text-lg hover:bg-[#1e2e69] hover:text-white transition">
                <FiPhone />
                Schedule a Call
              </button>

              <button
                onClick={() => setShowForm(true)}
                className="flex items-center gap-2 bg-[#1e2e69] rounded-md text-white px-4 py-2 text-base lg:text-lg hover:opacity-90 transition"
              >
                <FiFileText />
                Get a Quote
              </button>
            </div>

            {/* Menu Button */}
            <button onClick={() => setMenuOpen(true)}>
              <FiMenu className="text-2xl md:text-3xl" />
            </button>
          </div>
        </div>
      </div>

      {/* 🔥 Side Menu */}
      <div
        ref={menuRef}
        className="fixed top-0 right-0 h-full w-[85%] sm:w-[70%] md:w-[500px] bg-[#1e2e69] text-white z-50 translate-x-full"
      >
        {/* Close */}
        <div className="flex justify-end p-6">
          <button onClick={() => setMenuOpen(false)}>
            <FiX className="text-3xl" />
          </button>
        </div>

        {/* Menu Items */}
        <ul className="flex flex-col gap-8 px-8 mt-10 text-2xl md:text-3xl tracking-wide">
          {navItems.map((item, index) => (
            <li
              key={item}
              ref={(el) => (menuItemsRef.current[index] = el)}
              onClick={() => {
                setActive(item);
                setMenuOpen(false);
              }}
              className={`cursor-pointer transition duration-300 ${
                active === item
                  ? "opacity-50"
                  : "opacity-100 hover:opacity-70"
              }`}
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Footer */}
        <div className="absolute bottom-10 px-8 text-sm md:text-base opacity-80 space-y-2">
          <p className="text-lg">Get the Best Service Today</p>
          <p>info@cmsnp.info</p>
        </div>
      </div>

      {/* 🧾 Quote Modal */}
      {showForm && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100]"
          onClick={() => setShowForm(false)}
        >
          <div
            ref={formRef}
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-[90%] md:w-[500px] rounded-xl p-6 shadow-lg"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl md:text-2xl font-semibold text-[#1e2e69]">
                Get Answer to Your Query
              </h2>
              <button onClick={() => setShowForm(false)}>
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
                className="bg-[#1e2e69] text-white py-2 rounded-md mt-2 hover:opacity-90 transition"
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