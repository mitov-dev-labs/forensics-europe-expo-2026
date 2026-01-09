import React from 'react'

function Hero() {
  return (
    <header className="pt-40 pb-24 px-4 relative overflow-hidden bg-fee-dark-900">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-fee-teal-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center space-x-2 px-3 py-1 mb-8 rounded bg-fee-teal-900/30 border border-fee-teal-500/30 text-fee-teal-400 text-xs font-bold tracking-wider uppercase">
          <span className="w-2 h-2 rounded-full bg-fee-teal-400 animate-pulse"></span>
          <span>Strategy Hub Active</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tight leading-none text-white">
          THE ONLY <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-fee-teal-400 to-white">FORENSICS STRATEGY</span>
          <br className="hidden md:block" /> YOU NEED.
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
          Centralised access to the <span className="text-white font-medium">2026 Roadmap</span>, competitive landscape analysis, and executive strategy.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
          <a href="#video" className="group relative px-8 py-4 bg-fee-teal-500 hover:bg-fee-teal-400 text-white font-bold tracking-wide rounded transition-all duration-300 shadow-[0_0_20px_rgba(0,180,180,0.3)] hover:shadow-[0_0_30px_rgba(0,180,180,0.5)]">
            WATCH BRIEFING
            <div className="absolute inset-0 bg-white/20 blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded"></div>
          </a>
          <a href="#library" className="px-8 py-4 bg-transparent border border-white/20 hover:border-white/40 text-white font-medium tracking-wide rounded transition-all duration-300 hover:bg-white/5">
            DOCUMENT LIBRARY
          </a>
        </div>
      </div>
    </header>
  )
}

export default Hero
