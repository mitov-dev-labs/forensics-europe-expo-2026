import React from 'react'

const documents = [
  {
    name: 'Marketplace Insight',
    type: 'DOCX',
    description: 'Competitive analysis vs Blue Light Show and Intl Security Expo.',
    icon: 'fas fa-file-word',
    iconColor: 'text-blue-500',
    linkColor: 'text-blue-400',
    filename: 'V3 - Marketplace Insight_ A Competitive Analysis for Forensics Europe Expo 2026.docx'
  },
  {
    name: 'Monetization Roadmap',
    type: 'DOCX',
    description: 'Detailed guide for the sales team to secure high-value exhibitors.',
    icon: 'fas fa-file-word',
    iconColor: 'text-indigo-500',
    linkColor: 'text-indigo-400',
    filename: 'V3 - Forensics Europe Expo 2026_ Exhibitor Monetization Roadmap.docx'
  },
  {
    name: 'Executive Outlook',
    type: 'DOCX',
    description: 'Strategic imperatives and operational framework for 2026.',
    icon: 'fas fa-file-word',
    iconColor: 'text-emerald-500',
    linkColor: 'text-emerald-400',
    filename: 'V3 - Forensics Europe Expo_ Post-Show Executive Report & Strategic Outlook for 2026.docx'
  },
  {
    name: 'Full Survey Data',
    type: 'PDF',
    description: 'Comprehensive data set from November 2025 survey phase.',
    icon: 'fas fa-file-pdf',
    iconColor: 'text-red-500',
    linkColor: 'text-red-400',
    filename: 'Data_All_251125 (1).pdf'
  }
]

function DocumentLibrary() {
  return (
    <section id="library" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Document Library</h2>
          <p className="text-slate-400">Access the raw research and strategic executive reports.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {documents.map((doc, index) => (
            <DocumentCard key={index} {...doc} />
          ))}
        </div>
      </div>
    </section>
  )
}

function DocumentCard({ name, type, description, icon, iconColor, linkColor, filename }) {
  return (
    <div className="bg-[rgba(30,41,59,0.7)] backdrop-blur-[10px] border border-white/10 p-6 rounded-2xl hover:bg-slate-800 transition group cursor-pointer">
      <div className={`mb-4 ${iconColor} text-3xl group-hover:scale-110 transition duration-300`}>
        <i className={icon}></i>
      </div>
      <h4 className="font-bold text-sm mb-2">{name}</h4>
      <p className="text-xs text-slate-500 mb-4 line-clamp-2">{description}</p>
      <a
        href={`/media/${filename}`}
        download
        className={`text-xs font-bold ${linkColor} uppercase tracking-widest hover:text-white transition`}
      >
        Download {type}
      </a>
    </div>
  )
}

export default DocumentLibrary
