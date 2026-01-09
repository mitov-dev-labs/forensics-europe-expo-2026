import React, { useEffect, useRef, useState } from 'react'

function SurveyIntelligence() {
  const canvasRef = useRef(null)
  const chartRef = useRef(null)
  const [activeChart, setActiveChart] = useState('org')

  const dataSets = {
    org: {
      label: 'Attendee Organisation Types (%)',
      labels: ['Forensic Providers', 'Academic', 'Consultancy', 'Police', 'Private Sector', 'Others'],
      data: [21.31, 13.11, 11.48, 9.84, 9.84, 34.42],
      color: '#5B9BD5'
    },
    region: {
      label: 'Operating Region (%)',
      labels: ['International', 'London', 'South East', 'East England', 'South West', 'Others'],
      data: [57.38, 13.11, 11.48, 4.92, 4.92, 8.27],
      color: '#3a77b3'
    },
    content: {
      label: 'Content Streams Interest (%)',
      labels: ['Scenes of Crime', 'Laboratory Sciences', 'Mobile & Data Forensics'],
      data: [63.83, 55.32, 46.81],
      color: '#5B9BD5'
    },
    motivation: {
      label: 'Why Attend Events (%)',
      labels: ['New Techniques', 'Sector Challenges', 'Network/Collaborate', 'Source Products', 'CPD/Prof.Dev.', 'Best Practice', 'Live Demos', 'No Involvement'],
      data: [59.57, 44.68, 40.43, 38.30, 27.66, 25.53, 21.28, 27.50],
      color: '#f07c42'
    },
    procurement: {
      label: 'Procurement Role (%)',
      labels: ['Source Products', 'No Involvement', 'Procurement Boards', 'Book Services', 'Purchase Products'],
      data: [47.50, 27.50, 10.00, 5.00, 5.00],
      color: '#f07c42'
    }
  }

  const chartDescriptions = {
    org: 'Diverse mix across providers(21.31%), academia(13.11%), private sector(13.11%), and consultancy(11.48%).',
    region: 'Global reach with strong international presence (57.38%), plus London (13.11%) and South East (11.48%).',
    content: 'Strong interest across all streams: Scenes of Crime (63.83%) leads, Lab Sciences (55.32%), Mobile/Data (46.81%).',
    motivation: 'Learning new techniques (59.57%), sector challenges (44.68%), networking (40.43%), and sourcing products (38.30%) top the list.',
    procurement: 'High purchasing influence: 30.00% recommend/specify, 27.50% are decision makers, and 15.00% conduct research.'
  }

  const activeDescription = chartDescriptions[activeChart] || ''

  useEffect(() => {
    const loadChart = async () => {
      try {
        if (typeof window !== 'undefined' && canvasRef.current) {
          const chartModule = await import('chart.js/auto')
          const Chart = chartModule.default

          Chart.defaults.color = '#94a3b8'
          Chart.defaults.font.family = "'Inter', sans-serif"

          const ctx = canvasRef.current.getContext('2d')
          if (!ctx) return

          const config = dataSets[activeChart]

          if (chartRef.current) {
            chartRef.current.destroy()
          }

          chartRef.current = new Chart(ctx, {
            type: 'bar',
            data: {
              labels: config.labels,
              datasets: [{
                label: config.label,
                data: config.data,
                backgroundColor: config.color + '44',
                borderColor: config.color,
                borderWidth: 2,
                borderRadius: 8,
              }]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: { display: false }
              },
              scales: {
                y: { beginAtZero: true, grid: { color: 'rgba(255,255,255,0.05)' } },
                x: { grid: { display: false } }
              }
            }
          })
        }
      } catch (err) {
        console.error('Chart loading error:', err)
      }

      return () => {
        if (chartRef.current) {
          chartRef.current.destroy()
        }
      }
    }

    loadChart()
  }, [activeChart])

  return (
    <section id="demographics" className="py-24 relative overflow-hidden bg-fee-dark-900">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-fee-teal-900/5 -skew-x-12 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-8">
          <div>
            <h2 className="text-4xl font-black mb-4 text-white">SURVEY <span className="text-fee-teal-500">INTELLIGENCE</span></h2>
            <p className="text-gray-400 mb-2 text-lg">Real-time data from 2025 research phase.</p>
            <p className="text-fee-teal-400 text-sm font-semibold tracking-wide border-l-2 border-fee-teal-500 pl-4 py-1 bg-fee-teal-500/5">{activeDescription}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              { id: 'org', label: 'Org Types' },
              { id: 'region', label: 'Region' },
              { id: 'content', label: 'Content' },
              { id: 'motivation', label: 'Motivation' },
              { id: 'procurement', label: 'Procurement' }
            ].map(btn => (
              <button
                key={btn.id}
                onClick={() => setActiveChart(btn.id)}
                className={`px-4 py-2 rounded text-sm font-semibold transition-all duration-300 ${activeChart === btn.id
                    ? 'bg-fee-teal-600 text-white shadow-lg shadow-fee-teal-500/25 scale-105'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                  }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-black/40 border border-white/10 p-8 rounded-2xl shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-fee-teal-500 via-white to-fee-teal-500"></div>
            <div className="h-[300px] w-full">
              <canvas ref={canvasRef}></canvas>
            </div>
          </div>
          <div className="space-y-6">
            <StatCard
              title="Buying Power"
              value="55%"
              description="Influence >£20,000 budgets"
              className="bg-black/40 border border-white/10 p-8 rounded-2xl hover:border-fee-teal-500/50 transition-colors duration-300 group"
              valueColor="text-fee-teal-400 group-hover:scale-110 transition-transform duration-300 inline-block"
            />
            <StatCard
              title="Decision Makers"
              value="27.5%"
              description="Direct purchase authority"
              className="bg-black/40 border border-white/10 p-8 rounded-2xl hover:border-white/50 transition-colors duration-300 group"
              valueColor="text-white group-hover:scale-110 transition-transform duration-300 inline-block"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function StatCard({ title, value, description, className, valueColor }) {
  return (
    <div className={className}>
      <h4 className="text-sm font-semibold text-slate-500 uppercase mb-4">{title}</h4>
      <div className={`text-3xl font-bold ${valueColor}`}>{value}</div>
      <p className="text-xs text-slate-500 mt-1 italic">{description}</p>
    </div>
  )
}

export default SurveyIntelligence
