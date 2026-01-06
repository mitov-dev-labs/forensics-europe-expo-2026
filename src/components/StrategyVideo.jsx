import React, { useRef, useState } from 'react'

function StrategyVideo() {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section id="video" className="py-12 bg-slate-900/50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Strategic Walkthrough</h2>
          <p className="text-slate-400">Watch the detailed breakdown of our 2026 strategic goals.</p>
        </div>
        <div className="bg-[rgba(30,41,59,0.7)] backdrop-blur-[10px] border border-white/10 p-4 rounded-[2rem]">
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-[1.5rem] shadow-2xl">
            <video
              ref={videoRef}
              className="absolute top-0 left-0 w-full h-full object-cover"
              controls
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src="/media/strategy-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StrategyVideo
