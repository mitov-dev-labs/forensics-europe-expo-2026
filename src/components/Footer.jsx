import React from 'react'

function Footer() {
  return (
    <footer className="bg-slate-950 py-12 px-4 border-t border-slate-900">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center space-x-2 mb-6">
          <i className="fas fa-fingerprint text-blue-500 text-2xl"></i>
          <span className="font-bold text-xl uppercase">FEE 2026</span>
        </div>
        <p className="text-slate-600 text-sm mb-4">Internal Strategic Repository - Access Restricted.</p>
        <div className="text-slate-700 text-xs">
          &copy; 2026 Forensics Europe Expo. Strategy Documentation Hub.
        </div>
      </div>
    </footer>
  )
}

export default Footer
