import React from 'react';

const solutions = [
  {
    number: '01',
    title: 'Customer Relationship Management (CRM)',
    desc: 'Our Customer relationship management (CRM) System is the platform in Nepal which will be customized accordingly to the client’s requirement. Clients can request any feature to be included and their requirement will be fulfilled at a very economical rate.',
    image: '/images/csd1.png'
  },
  {
    number: '02',
    title: 'Human Resource Management System (HRMS)',
    desc: 'Our HR Management system combines all the HR functions from recruitment of an employee to resignation, for instance attendance, leave applying, payroll, employee evaluations, personal file management, etc. by reducing the documentation time.',
    image: '/images/csd2.png'
  },
  {
    number: '03',
    title: 'Accounting Inventory Management Software',
    desc: 'Our Mero Inventory system provides comprehensive inventory management with real-time tracking, automated reordering, and detailed analytics to optimize your supply chain operations.',
    image: '/images/csd3.jpg'
  },
  {
    number: '04',
    title: 'Hotel QR Services',
    desc: 'Our Hotel QR solution transforms guest experiences with instant access to services, menus, and information through simple QR code scanning, reducing contact and improving efficiency. Guests can easily navigate and access services, information, and amenities, making their stay more convenient and enjoyable.',
    image: '/images/csd4.png'
  },
];

const HRMS = () => {
  return (
    <div className="px-4 py-16 lg:px-12 sm:py-20 lg:py-24">
      <section className="relative min-h-[620px] flex items-center overflow-hidden bg-[#0f1a3e] rounded-2xl">
        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-35"
          autoPlay
          muted
          loop
          playsInline
          poster="https://static.wixstatic.com/media/c837a6_11cf3dc787b54862974c177e10e94969f000.jpg"
        >
          <source
            src="https://video.wixstatic.com/video/c837a6_11cf3dc787b54862974c177e10e94969/1080p/mp4/file.mp4"
            type="video/mp4"
          />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a123c]/85 to-[#1e2e69]/70" />

        {/* Content */}
        <div className="relative z-10 w-full px-6 py-14 md:py-20 gap-10 md:gap-14">

          {/* Heading */}
          <div className="text-left mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-3">
              Our Software Solutions
            </h2>
            <p className="text-xs sm:text-sm tracking-[3px] uppercase text-white/60 font-medium">
              Solutions tailored for every business model
            </p>
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-24 w-full max-w-7xl mx-auto">
            {solutions.map((card, i) => (
              <div
                key={i}
                className={`grid items-center gap-8 lg:gap-14 ${
                  i % 2 === 0 ? 'lg:grid-cols-[1.2fr_1fr]' : 'lg:grid-cols-[1fr_1.2fr]'
                }`}
              >
                <div
                  className={`order-1 ${
                    i % 2 === 0 ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="overflow-hidden ">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="h-[240px] w-full rounded-[22px] object-cover sm:h-[320px] lg:h-[360px]"
                    />
                  </div>
                </div>

                <div
                  className={`order-2 ${
                    i % 2 === 0 ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="max-w-2xl">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#d9e6ff] text-xl font-bold text-[#2f63f5] shadow-[0_10px_30px_rgba(47,99,245,0.2)]">
                      {card.number}
                    </div>

                    <h3 className="mb-5 text-lg font-bold tracking-tight text-white sm:text-xl lg:text-4xl">
                      {card.title}
                    </h3>

                    <p className="text-base leading-8 text-white/90 sm:text-md">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HRMS;
