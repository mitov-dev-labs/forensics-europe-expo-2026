import React, { useState } from 'react'

function RoadmapPoster() {
  const [imageError, setImageError] = useState(false)

  return (
    <section id="roadmap-poster" className="py-24 bg-fee-dark-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <div className="inline-block px-3 py-1 mb-6 rounded border border-fee-teal-500/30 text-fee-teal-400 text-xs font-bold tracking-wider uppercase">
              Vision 2026
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight text-white">
              THE 2026 <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fee-teal-400 to-white">ROADMAP</span>
            </h2>
            <p className="text-gray-400 mb-10 text-lg leading-relaxed">
              Our "Poster" Roadmap serves as the single source of truth for the 2026 vision. It outlines the global attendee profile and our pivot toward immersive learning.
            </p>

            <div className="flex flex-col">
              <a href="/media/v4-poster.png" target="_blank" className="group flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded flex items-center justify-center bg-fee-teal-500/20 text-fee-teal-400">
                    <i className="fas fa-image"></i>
                  </div>
                  <span className="font-semibold text-white">View Full Poster</span>
                </div>
                <i className="fas fa-arrow-right text-gray-500 group-hover:text-white transition-colors"></i>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-fee-teal-500/10 to-white/5 rounded-2xl blur-xl -z-10"></div>
            <div className="bg-black border border-white/10 p-2 rounded-xl shadow-2xl">
              {imageError ? (
                <div className="w-full h-[500px] rounded-lg border border-white/5 flex items-center justify-center text-gray-500 flex-col space-y-4 bg-black/50">
                  <i className="fas fa-image-slash text-4xl"></i>
                  <p>Preview Unavailable</p>
                </div>
              ) : (
                <img
                  src="/media/v4-poster.png"
                  alt="Forensics Europe 2026 Roadmap Poster"
                  className="w-full h-auto rounded-lg shadow-inner"
                  onError={() => setImageError(true)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RoadmapPoster
