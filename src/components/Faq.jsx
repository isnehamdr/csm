import { useState } from "react";

const faqs = [
  {
    q: "What industries does your CMS software support?",
    a: "Our CMS software is designed to support a wide range of industries, including IT, Education, Tours, Real Estate, Construction, and Hospitality.",
  },
  {
    q: "Is the CMS customizable for different industries?",
    a: "Yes, our CMS is highly customizable to meet the specific needs and requirements of each industry.",
  },
  {
    q: "How does the CMS help improve business efficiency?",
    a: "Our CMS helps improve business efficiency by automating routine tasks, providing detailed analytics and reports, and enhancing customer relationship management.",
  },
  {
    q: "What kind of customer support do you offer?",
    a: "We offer 24/7 customer support via email, phone, and live chat to assist you with any issues or questions you may have.",
  },
  {
    q: "How secure is my data with your CMS?",
    a: "Data security is our top priority. Our CMS uses advanced encryption methods and follows industry best practices to ensure your data is safe and secure.",
  },
  {
    q: "What pricing plans do you offer?",
    a: "We offer flexible pricing plans to suit businesses of all sizes. Contact us for detailed information on our plans and pricing.",
  },
];

const ChevronUp = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path fillRule="evenodd" d="M11.8833796,8.18133292 L12.5971399,8.88956809 L18.9617796,15.2535291 L18.2546728,15.9606359 L11.8862867,9.59933292 L5.52539349,15.9606359 L4.81828671,15.2535291 L11.1792867,8.89233292 Z" />
  </svg>
);

const ChevronDown = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path fillRule="evenodd" d="M18.2546728,8.18171329 L18.9617796,8.88882007 L11.8882867,15.9607133 L4.81828671,8.88882007 L5.52539349,8.18171329 L11.8882867,14.5457133 Z" />
  </svg>
);

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="w-full min-h-screen bg-gradient-to-br from-[#f0f4ff] to-[#e8edfa] px-4 py-16 sm:px-12 sm:py-20 lg:py-24 ">
      <div className="rounded-2xl border border-[#e0e6ff] p-4 shadow-sm sm:p-8 max-w-7xl mx-auto">

        <h2 className="mb-6 text-3xl font-semibold uppercase text-[#1e2e69] sm:text-5xl">
          Frequently asked questions
        </h2>

        <div className="flex flex-col">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className=" mb-3 overflow-hidden rounded-lg border border-gray-200 bg-white">

                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-3 p-4 text-left"
                >
                  <span className="font-medium text-sm sm:text-base text-[#1e2e69] pr-4 leading-snug">
                    {faq.q}
                  </span>
                  <span className={`text-[#1e2e69] flex-shrink-0 transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
                    <ChevronDown />
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out
                    ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <p className="bg-white p-4 text-sm leading-relaxed text-[#1e2e69] sm:text-base">
                    {faq.a}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
