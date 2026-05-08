import React from 'react'

const cards = [
  {
    icon: '💻',
    title: 'Cutting-Edge Technology',
    desc: 'We leverage the latest tools and infrastructure so your business stays ahead — without the overhead of managing it yourself.',
  },
  {
    icon: '💰',
    title: 'Cost-Effective Solutions',
    desc: 'Get enterprise-grade IT services at a fraction of the cost. We optimize every dollar so you can invest more in what matters.',
  },
  {
    icon: '🎧',
    title: '24/7 Support & Monitoring',
    desc: 'Our team monitors your systems around the clock — catching issues before they ever impact your operations.',
  },
]

const HRMS = () => {
  return (
    <div className="px-4 py-16 lg:px-12 sm:py-20 lg:py-24">
    <section className="relative  min-h-[620px] flex items-center overflow-hidden bg-[#0f1a3e] rounded-2xl   ">
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
      <div className="relative z-10 w-full  px-6 py-14 md:py-20 gap-10 md:gap-14">
        
        {/* Heading */}
        <div className="text-left mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-3">
            Why Partner with Us?
          </h2>
          <p className="text-xs sm:text-sm tracking-[3px] uppercase text-white/60 font-medium">
            Focus on your mission.&nbsp;&nbsp;Let us manage your IT.
          </p>
        </div>

        {/* Cards */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-5xl">
          {cards.map((card) => (
            <div
              key={card.title}
              className="relative bg-white/[0.06] border border-white/[0.15] rounded-xl p-7 pt-8 hover:bg-white/[0.10] transition-colors duration-200"
            >
             
              <span className="absolute top-0 left-7 w-10 h-[6px] bg-[#2B328C] rounded-b-lg" />

          
              <div className="w-11 h-11 rounded-xl bg-[#2B328C]/50 border border-[#b9bfff]/30 flex items-center justify-center text-xl mb-4">
                {card.icon}
              </div>

              <h3 className="text-white font-semibold text-base sm:text-lg mb-2">
                {card.title}
              </h3>
              <p className="text-white/55 text-sm leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div> */}
        <div
            className="relative p-8 max-w-5xl mx-auto bg-white"
            style={{
              clipPath: `polygon(
                0% 0%,
                96% 0%,
                96% 22%,
                100% 22%,
                100% 100%,
                10% 100%,
                0% 100%,
                0% 100%
              )`,
            }}
          >
           
          </div>
        <div
            className="relative p-8 max-w-5xl mx-auto bg-white mt-8"
            style={{
              clipPath: `polygon(
                0% 0%,
                96% 0%,
                96% 22%,
                100% 22%,
                100% 100%,
                10% 100%,
                0% 100%,
                0% 100%
              )`,
            }}
          >
           
          </div>
        <div
            className="relative p-8 max-w-5xl mx-auto bg-white mt-8"
            style={{
              clipPath: `polygon(
                0% 0%,
                96% 0%,
                96% 22%,
                100% 22%,
                100% 100%,
                10% 100%,
                0% 100%,
                0% 100%
              )`,
            }}
          >
           
          </div>
      </div>
    </section>
    </div>
  )
}

export default HRMS