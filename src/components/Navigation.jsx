import React from 'react'

function Navigation() {
  return (
    <nav className="fixed w-full z-50 bg-[#1a0f2e]/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          <div className="flex items-center">
            <img
              src="https://cdn.asp.events/CLIENT_What_Els_3DA387DB_C539_2963_A29A3FDA05E823C6/sites/forensics-europe-expo/media/branding/Forensics-Logo_wo_Dates_Landscape.png/fit-in/700x1400/filters:no_upscale()"
              alt="Forensics Europe Expo"
              className="h-16 w-auto" // Adjust height as necessary
            />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#video" className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300">STRATEGY</a>
            <a href="#roadmap-poster" className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300">POSTER</a>
            <a href="#demographics" className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300">INSIGHTS</a>
            <a href="#library" className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300">DOCUMENTS</a>
          </div>
        </div>
      </div>
    </nav>
  )
}


export default Navigation
