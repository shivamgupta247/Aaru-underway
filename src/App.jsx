import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { BookmarkProvider } from './context/BookmarkContext'
import { ProgressProvider } from './context/ProgressContext'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Videos from './pages/Videos'
import Materials from './pages/Materials'
import Roadmap from './pages/Roadmap'
import Blog from './pages/Blog'
import Bookmarks from './pages/Bookmarks'
import Progress from './pages/Progress'

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
          <Route path="/blog" element={<Blog />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/progress" element={<Progress />} />
        </Routes>
      </main>
      {!isRoadmapPage && <Footer />}
    </div>
  )
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <BookmarkProvider>
          <ProgressProvider>
            <AppContent />
          </ProgressProvider>
        </BookmarkProvider>
      </AuthProvider>
    </Router>
  )
}

export default App
