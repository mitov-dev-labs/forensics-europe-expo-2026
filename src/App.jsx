import React from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import StrategyVideo from './components/StrategyVideo'
import RoadmapPoster from './components/RoadmapPoster'
import SurveyIntelligence from './components/SurveyIntelligence'
import DocumentLibrary from './components/DocumentLibrary'
import Footer from './components/Footer'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="bg-red-900 text-white p-8 min-h-screen flex items-center justify-center">
          <div>
            <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
            <p className="mb-4">Error: {this.state.error?.message}</p>
            <p className="text-sm opacity-75">Check the browser console for more details</p>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

function App() {
  return (
    <div className="bg-slate-900 text-slate-100 hero-pattern min-h-screen">
      <ErrorBoundary>
        <Navigation />
        <Hero />
        <StrategyVideo />
        <RoadmapPoster />
        <SurveyIntelligence />
        <DocumentLibrary />
        <Footer />
      </ErrorBoundary>
    </div>
  )
}

export default App
