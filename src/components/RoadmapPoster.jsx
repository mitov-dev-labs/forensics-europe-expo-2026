import React, { useState } from 'react'

function RoadmapPoster() {
  const [imageError, setImageError] = useState(false)

  return (
    <section id="roadmap-poster" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-bold mb-6">The 2026 <span className="text-blue-500">Roadmap</span></h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Our "Poster" Roadmap serves as the single source of truth for the 2026 vision. It outlines the global attendee profile and our pivot toward immersive learning.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-sm">
                <i className="fas fa-file-image text-blue-500"></i>
                <span className="text-slate-300 font-medium">2026 Roadmap Poster</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <a href="/media/roadmap-poster.png" target="_blank" className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold transition">
                  <i className="fas fa-image mr-2"></i>
                  View Poster
                </a>
                <a href="/media/forensics-roadmap-poster.pdf" target="_blank" className="inline-flex items-center px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-sm font-semibold transition">
                  <i className="fas fa-file-pdf mr-2"></i>
                  View Slides
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 bg-[rgba(30,41,59,0.7)] backdrop-blur-[10px] border border-white/10 p-2 rounded-[1.5rem] overflow-hidden shadow-2xl">
            {imageError ? (
              <div className="w-full h-[600px] rounded-[1.5rem] border border-white/10 flex items-center justify-center text-slate-400">
                <p>Image failed to load</p>
              </div>
            ) : (
              <img
                src="/media/roadmap-poster.png"
                alt="Forensics Europe 2026 Roadmap Poster"
                className="w-full h-auto rounded-[1.5rem]"
                onError={() => setImageError(true)}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default RoadmapPoster
