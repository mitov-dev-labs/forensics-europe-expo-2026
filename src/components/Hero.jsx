import React from 'react'

function Hero() {
  return (
    <header className="pt-32 pb-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold">
          Strategy Hub
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
          Forensics Europe <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">2026 Strategy</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
          Centralized access to the roadmap, video strategy, and the 2026 competitive landscape analysis.
        </p>
      </div>
    </header>
  )
}

export default Hero
