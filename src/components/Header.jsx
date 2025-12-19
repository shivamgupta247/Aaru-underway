import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import logo from '../../logo.jpeg'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/videos', label: 'Videos' },
    { path: '/materials', label: 'Materials' },
    { path: '/roadmap', label: 'Roadmap' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-lg border-b border-amber-900/30">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 group">
            <img src={logo} alt="Aaru Underway" className="w-20 h-20 rounded-lg shadow-lg shadow-red-600/30 group-hover:scale-110 transition-transform object-cover border-2 border-red-600/30" />
            <div>
              <h1 className="text-3xl font-bold text-white group-hover:text-red-400 transition-colors">
                Marine Hub
              </h1>
              <p className="text-sm text-amber-700">Engineering Education</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-5 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                  isActive(link.path)
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                    : 'text-amber-200 hover:text-white hover:bg-amber-900/40'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-amber-700 hover:text-red-400 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-5 py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
                  isActive(link.path)
                    ? 'bg-red-600 text-white'
                    : 'text-amber-200 hover:text-white hover:bg-amber-900/40'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
