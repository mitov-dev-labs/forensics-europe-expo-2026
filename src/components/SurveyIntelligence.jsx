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
      color: '#3b82f6'
    },
    region: {
      label: 'Operating Region (%)',
      labels: ['International', 'London', 'South East', 'East England', 'South West', 'Others'],
      data: [57.38, 13.11, 11.48, 4.92, 4.92, 8.27],
      color: '#6366f1'
    },
    content: {
      label: 'Content Streams Interest (%)',
      labels: ['Scenes of Crime', 'Laboratory Sciences', 'Mobile & Data Forensics'],
      data: [63.83, 55.32, 46.81],
      color: '#10b981'
    },
    motivation: {
      label: 'Why Attend Events (%)',
      labels: ['CPD/Prof. Dev.', 'Sector Challenges', 'New Techniques', 'Live Demos', 'Best Practice'],
      data: [63.83, 59.57, 55.32, 46.81, 40.43],
      color: '#f59e0b'
    },
    procurement: {
      label: 'Procurement Role (%)',
      labels: ['Source Products', 'No Involvement', 'Procurement Boards', 'Book Services', 'Purchase Products'],
      data: [47.50, 27.50, 10.00, 5.00, 5.00],
      color: '#ef4444'
    }
  }

  const chartDescriptions = {
    org: 'Diverse mix of forensic professionals, with providers and consultants representing the majority.',
    region: 'Global reach with strong international presence, complemented by UK regional coverage.',
    content: 'Strong interest across all three 2026 strategic streams, with Scenes of Crime leading at 63.83%.',
    motivation: 'Professional development (63.83%) and keeping up with sector challenges (59.57%) are top priorities.',
    procurement: '47.50% actively source products, showing strong purchasing influence among attendees.'
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
    <section id="demographics" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-4">Survey Intelligence</h2>
            <p className="text-slate-400 mb-2">Real-time data from 2025 research phase.</p>
            <p className="text-slate-300 text-sm italic">{activeDescription}</p>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setActiveChart('org')}
              className={`px-4 py-2 rounded-lg text-sm transition ${
                activeChart === 'org' ? 'bg-blue-600' : 'bg-slate-800 hover:bg-slate-700'
              }`}
            >
              Org Types
            </button>
            <button
              onClick={() => setActiveChart('region')}
              className={`px-4 py-2 rounded-lg text-sm transition ${
                activeChart === 'region' ? 'bg-blue-600' : 'bg-slate-800 hover:bg-slate-700'
              }`}
            >
              Region
            </button>
            <button
              onClick={() => setActiveChart('content')}
              className={`px-4 py-2 rounded-lg text-sm transition ${
                activeChart === 'content' ? 'bg-blue-600' : 'bg-slate-800 hover:bg-slate-700'
              }`}
            >
              Content
            </button>
            <button
              onClick={() => setActiveChart('motivation')}
              className={`px-4 py-2 rounded-lg text-sm transition ${
                activeChart === 'motivation' ? 'bg-blue-600' : 'bg-slate-800 hover:bg-slate-700'
              }`}
            >
              Motivation
            </button>
            <button
              onClick={() => setActiveChart('procurement')}
              className={`px-4 py-2 rounded-lg text-sm transition ${
                activeChart === 'procurement' ? 'bg-blue-600' : 'bg-slate-800 hover:bg-slate-700'
              }`}
            >
              Procurement
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-[rgba(30,41,59,0.7)] backdrop-blur-[10px] border border-white/10 p-8 rounded-[1.5rem]">
            <canvas ref={canvasRef} height="250"></canvas>
          </div>
          <div className="space-y-6">
            <StatCard
              title="Buying Power"
              value="55%"
              description="Influence >£20,000 budgets"
              className="bg-[rgba(30,41,59,0.7)] backdrop-blur-[10px] border border-white/10 p-6 rounded-[1.5rem]"
              valueColor="text-emerald-400"
            />
            <StatCard
              title="Decision Makers"
              value="27.5%"
              description="Direct purchase authority"
              className="bg-[rgba(30,41,59,0.7)] backdrop-blur-[10px] border border-white/10 p-6 rounded-[1.5rem]"
              valueColor="text-blue-400"
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
