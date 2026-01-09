import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'

const documents = [
  {
    name: 'Marketplace Intelligence',
    type: 'MD',
    description: 'Strategic positioning and competitive analysis for Forensics Europe Expo 2026.',
    icon: 'fas fa-file-alt',
    iconColor: 'text-fee-teal-500',
    linkColor: 'text-fee-teal-400',
    filename: 'V4 - Marketplace Intelligence Report: Strategic Positioning for Forensics Europe Expo 2026.md'
  },
  {
    name: 'Sales & Monetisation Roadmap',
    type: 'MD',
    description: 'Detailed guide for the sales team to secure high-value exhibitors.',
    icon: 'fas fa-file-alt',
    iconColor: 'text-fee-purple-400',
    linkColor: 'text-fee-purple-300',
    filename: 'V4 - Forensics Europe Expo 2026: Sales & Monetization Roadmap.md'
  },
  {
    name: 'Executive Summary',
    type: 'MD',
    description: 'Strategic direction and operational framework for 2026.',
    icon: 'fas fa-file-alt',
    iconColor: 'text-fee-orange-500',
    linkColor: 'text-fee-orange-400',
    filename: 'V4 - Executive Summary: Strategic Direction for Forensics Europe Expo 2026.md'
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

function DocumentModal({ isOpen, onClose, title, content, isLoading }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-fee-dark-900 border border-white/10 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-black/40">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        
        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8">
          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-fee-teal-500"></div>
            </div>
          ) : (
            <div className="markdown-content">
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function DocumentLibrary() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState('')
  const [modalTitle, setModalTitle] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const openMarkdownModal = async (filename, title) => {
    setModalTitle(title)
    setModalOpen(true)
    setIsLoading(true)
    
    try {
      const response = await fetch(`/media/${filename}`)
      const text = await response.text()
      setModalContent(text)
    } catch (error) {
      setModalContent('Error loading document. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <section id="library" className="py-24 bg-fee-dark-900 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4 text-white">DOCUMENT <span className="text-fee-teal-500">LIBRARY</span></h2>
            <p className="text-gray-400">Access the raw research and strategic executive reports.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {documents.map((doc, index) => (
              <DocumentCard 
                key={index} 
                {...doc} 
                onOpenModal={openMarkdownModal}
              />
            ))}
          </div>
        </div>
      </section>

      <DocumentModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalTitle}
        content={modalContent}
        isLoading={isLoading}
      />
    </>
  )
}

function DocumentCard({ name, type, description, icon, iconColor, linkColor, filename, onOpenModal }) {
  const effectiveIconColor = type === 'PDF' ? 'text-white' : 'text-fee-teal-400';

  const handleClick = (e) => {
    if (type === 'MD') {
      e.preventDefault()
      onOpenModal(filename, name)
    }
  }

  if (type === 'MD') {
    return (
      <div 
        onClick={handleClick}
        className="bg-black/40 border border-white/5 p-6 rounded-xl hover:bg-white/5 hover:border-fee-teal-500/30 transition-all duration-300 group cursor-pointer h-full flex flex-col"
      >
        <div className={`mb-6 ${effectiveIconColor} text-4xl group-hover:scale-110 transition duration-300`}>
          <i className={icon}></i>
        </div>
        <h4 className="font-bold text-lg mb-3 text-white">{name}</h4>
        <p className="text-sm text-gray-400 mb-6 flex-grow leading-relaxed">{description}</p>
        <span className="inline-flex items-center text-xs font-bold text-fee-teal-500 uppercase tracking-widest group-hover:brightness-125 transition mt-auto">
          <span>View Report</span>
          <i className="fas fa-arrow-right ml-2 opacity-0 group-hover:opacity-100 transition-opacity"></i>
        </span>
      </div>
    )
  }

  return (
    <div className="bg-black/40 border border-white/5 p-6 rounded-xl hover:bg-white/5 hover:border-fee-teal-500/30 transition-all duration-300 group cursor-pointer h-full flex flex-col">
      <div className={`mb-6 ${effectiveIconColor} text-4xl group-hover:scale-110 transition duration-300`}>
        <i className={icon}></i>
      </div>
      <h4 className="font-bold text-lg mb-3 text-white">{name}</h4>
      <p className="text-sm text-gray-400 mb-6 flex-grow leading-relaxed">{description}</p>
      <a
        href={`/media/${filename}`}
        download
        className="inline-flex items-center text-xs font-bold text-fee-teal-500 uppercase tracking-widest hover:brightness-125 transition mt-auto"
      >
        <span>Download {type}</span>
        <i className="fas fa-download ml-2 opacity-0 group-hover:opacity-100 transition-opacity"></i>
      </a>
    </div>
  )
}

export default DocumentLibrary
