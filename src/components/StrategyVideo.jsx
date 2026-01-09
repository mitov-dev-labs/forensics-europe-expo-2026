import React, { useRef, useState } from 'react'

function StrategyVideo() {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section id="video" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-black mb-4 tracking-tight text-white">STRATEGIC <span className="text-fee-teal-400">WALKTHROUGH</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Watch the detailed breakdown of our 2026 strategic goals and vision.</p>
        </div>
        <div className="group relative bg-black/40 backdrop-blur-xl border border-white/10 p-2 rounded-2xl shadow-2xl transition-all duration-500 hover:border-fee-teal-500/30 hover:shadow-[0_0_40px_rgba(0,180,180,0.1)]">
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl bg-black">
            <video
              ref={videoRef}
              className="absolute top-0 left-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              controls
              poster="/media/video-poster.jpg" // Assuming a poster might exist or good practice to add
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src="/media/strategy-video-v4.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StrategyVideo
