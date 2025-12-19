import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Videos from './pages/Videos'
import Materials from './pages/Materials'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/materials" element={<Materials />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
