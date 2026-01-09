import React from 'react'

function Footer() {
  return (
    <footer className="bg-fee-dark-900 py-16 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
        <div className="mb-8 p-4 bg-white/5 rounded-2xl">
          <i className="fas fa-fingerprint text-fee-teal-500 text-4xl mb-2 block"></i>
          <span className="font-bold text-lg text-white tracking-widest uppercase">FEE 2026</span>
        </div>

        <p className="text-gray-500 text-sm max-w-md mx-auto mb-8 font-light leading-relaxed">
          Internal Strategic Repository for the Forensics Europe Expo 2026 relaunch. <br />
          Restricted access for authorised personnel only.
        </p>

        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8 text-xs font-medium text-gray-600 uppercase tracking-wider">
          <span>&copy; 2026 What Else Events Ltd</span>
          <span className="hidden md:inline text-gray-800">•</span>
          <a href="#" className="hover:text-fee-teal-500 transition-colors">Privacy Policy</a>
          <span className="hidden md:inline text-gray-800">•</span>
          <a href="#" className="hover:text-fee-teal-500 transition-colors">Terms of Use</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
