import React from "react";

export default function Footer() {
  const siteLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Solutions", href: "#solutions" },
    { label: "Services", href: "#services" },
  ];

  const socialLinks = [
    { label: "Facebook", href: "https://facebook.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Twitter", href: "https://twitter.com" },
  ];

  return (
    <footer id="footer" className="w-full bg-gradient-to-br from-[#f0f4ff] to-[#e8edfa]  pb-6 pt-4 text-[#1e2d6b] ">
      <div>
        {/* Decorative Header Section */}
        <div className="relative overflow-hidden">
          <div
            className="relative h-[120px] sm:h-[220px] md:h-[280px] lg:h-[380px] bg-gradient-to-r from-[#1e2d6b] to-[#2a3d8a]"
            style={{
              clipPath: `polygon(
                0% 0%,
                96% 0%,
                96% 22%,
                100% 22%,
                100% 100%,
                10% 100%,
                10% 82%,
                0% 82%
              )`,
            }}
          >
            <div
              className="absolute bottom-[8%] left-[5%] right-0 h-[85%] sm:left-[8%]"
              style={{
                backgroundImage: "url('/images/logo.png')",
                backgroundSize: "contain",
                backgroundPosition: "left bottom",
                backgroundRepeat: "no-repeat",
                filter: "brightness(0) invert(1)",
              }}
            />
          </div>
        </div>

        {/* Main Footer Content - Equal 5 Column Grid */}
        <div className="sm:px-6 lg:px-12 px-4 grid grid-cols-1 gap-8  pb-6 mt-12 text-sm leading-6 sm:grid-cols-2 sm:pt-10 lg:grid-cols-5 lg:gap-x-10 lg:gap-y-8">
          
          {/* Description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="leading-relaxed text-[#2a3d8a]/80">
              We empower businesses to streamline customer relationships,
              enhance sales processes, and improve overall efficiency through
              our customizable and user-friendly software.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-2 lg:col-span-1">
            <h3 className="mb-2 text-lg font-semibold text-[#1e2d6b]">
              Navigation
            </h3>
            {siteLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="w-fit text-[#2a3d8a]/80 transition-colors hover:text-[#1e2d6b] hover:underline"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Opening Time */}
          <div className="flex flex-col gap-2 lg:col-span-1">
            <h3 className="mb-2 text-lg font-semibold text-[#1e2d6b]">
              Opening Time
            </h3>
            <div>
              <div className="flex items-center justify-between gap-4 border-b border-[#1e2d6b]/10 pb-2">
                <span className="font-medium text-[#1e2d6b]">SUN - FRI</span>
                <span className="text-right text-[#2a3d8a]/80">10:00 AM - 6:00 PM</span>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <span className="font-medium text-[#1e2d6b]">SAT</span>
                <span className="text-red-500">Closed</span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-2 lg:col-span-1">
            <h3 className="mb-2 text-lg font-semibold text-[#1e2d6b]">
              Contact
            </h3>
            <div className="flex flex-col gap-2 text-[#2a3d8a]/80">
              <a
                href="mailto:info@cmsnp.info"
                className="break-all hover:text-[#1e2d6b] hover:underline"
              >
                info@cmsnp.info
              </a>
              <a
                href="tel:+977061591368"
                className="hover:text-[#1e2d6b] hover:underline"
              >
                +977 061591368
              </a>
              <span>Pokhara, Nepal</span>
            </div>
          </div>

          {/* Social & CTA */}
          <div className="flex flex-col gap-2 lg:col-span-1">
            <h3 className="mb-2 text-lg font-semibold text-[#1e2d6b]">
              Follow Us
            </h3>

            <div className="rounded-xl bg-white/60 p-4 backdrop-blur-sm sm:p-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="max-w-[220px]">
                  <p className="font-medium text-[#1e2d6b]">Get in touch</p>
                  <p className="text-sm leading-6 text-[#2a3d8a]/70">
                    We are here if you need us
                  </p>
                </div>
              </div>

              {/* Social Icons */}
              <div className="mt-5 flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1e2d6b] text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#2a3d8a]"
                    aria-label={link.label}
                  >
                    {/* Facebook, LinkedIn, Instagram, Twitter SVGs remain unchanged */}
                    {link.label === "Facebook" && (
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.99h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.99C18.343 21.128 22 16.991 22 12z" />
                      </svg>
                    )}

                    {link.label === "LinkedIn" && (
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                      </svg>
                    )}

                    {link.label === "Instagram" && (
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5Zm8.95 1.35a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 6.85A5.15 5.15 0 1 1 6.85 12 5.16 5.16 0 0 1 12 6.85Zm0 1.8A3.35 3.35 0 1 0 15.35 12 3.35 3.35 0 0 0 12 8.65Z" />
                      </svg>
                    )}

                    {link.label === "Twitter" && (
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21.543 6.498c.014.2.014.4.014.6 0 6.102-4.644 13.136-13.136 13.136A13.05 13.05 0 0 1 1.34 18.16c.37.043.727.057 1.111.057a9.25 9.25 0 0 0 5.73-1.97 4.628 4.628 0 0 1-4.32-3.206c.286.043.572.072.872.072.414 0 .828-.057 1.214-.157a4.62 4.62 0 0 1-3.706-4.535v-.057a4.65 4.65 0 0 0 2.084.586A4.625 4.625 0 0 1 2.27 5.093a13.123 13.123 0 0 0 9.52 4.821 5.216 5.216 0 0 1-.114-1.057 4.623 4.623 0 0 1 7.992-3.163 9.088 9.088 0 0 0 2.927-1.114 4.607 4.607 0 0 1-2.027 2.555 9.25 9.25 0 0 0 2.655-.714 9.93 9.93 0 0 1-2.32 2.398Z" />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 sm:px-6 lg:px-12 px-4 flex flex-col items-center justify-between gap-3 border-t border-[#1e2d6b]/10 pt-6 text-center text-xs text-[#2a3d8a]/60 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} CMSNP. All rights reserved.</p>
          <p className="flex flex-wrap items-center justify-center gap-1 sm:justify-start">
            Crafted by
            <a
              href="https://www.wix.com/studio"
              target="_blank"
              rel="noreferrer noopener"
              className="underline transition-colors hover:text-[#1e2d6b]"
            >
              S.A.I T Solution Trade and Concerns
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
