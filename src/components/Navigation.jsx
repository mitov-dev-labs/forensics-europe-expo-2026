import React from 'react'

function Navigation() {
  return (
    <nav className="fixed w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-2">
            <i className="fas fa-fingerprint text-blue-500 text-2xl"></i>
            <span className="font-bold text-xl tracking-tight uppercase">FEE 2026 <span className="text-blue-500">Hub</span></span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#video" className="text-sm font-medium hover:text-blue-400 transition">Strategy Video</a>
            <a href="#roadmap-poster" className="text-sm font-medium hover:text-blue-400 transition">Poster</a>
            <a href="#demographics" className="text-sm font-medium hover:text-blue-400 transition">Insights</a>
            <a href="#library" className="text-sm font-medium hover:text-blue-400 transition">Documents</a>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition">Internal Access</button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
