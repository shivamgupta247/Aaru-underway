import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import logo from '../../logo_bg_removed.png.png'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/videos', label: 'Videos' },
    { path: '/materials', label: 'Materials' },
    { path: '/roadmap', label: 'Roadmap' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg shadow-blue-900/20 border-b border-blue-400/20' 
        : 'bg-slate-900/80 backdrop-blur-md border-b border-blue-400/10'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 group">
            <img 
              src={logo} 
              alt="Aaru Underway" 
              className="w-24 h-24 group-hover:scale-110 transition-transform object-contain"
            />
            <div>
              <h1 className="text-3xl font-bold text-white group-hover:text-orange-400 transition-colors">
                AARU UNDERWAY
              </h1>
              <p className="text-sm text-orange-300/70 uppercase tracking-wider">Your Voyage to Maritime Mastery</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                  isActive(link.path)
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-600/30 transform scale-105'
                    : 'text-gray-300 hover:text-white hover:bg-blue-500/10 backdrop-blur-sm border border-transparent hover:border-blue-400/30'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-orange-400 hover:text-orange-300 transition-colors hover:bg-blue-500/10 rounded-lg"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-2 animate-slideDown">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-5 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                  isActive(link.path)
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-600/30'
                    : 'text-gray-300 hover:text-white hover:bg-blue-500/10 backdrop-blur-sm border border-blue-400/20'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </header>
  )
}