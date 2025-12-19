import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Videos from './pages/Videos'
import Materials from './pages/Materials'
import Roadmap from './pages/Roadmap'

function AppContent() {
  const location = useLocation()
  const isRoadmapPage = location.pathname === '/roadmap'

  return (
    <div className="min-h-screen flex flex-col">
      {!isRoadmapPage && <Header />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/roadmap" element={<Roadmap />} />
        </Routes>
      </main>
      {!isRoadmapPage && <Footer />}
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
