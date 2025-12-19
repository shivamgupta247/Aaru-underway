import { Link, useLocation } from 'react-router-dom'
import { Anchor, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/videos', label: 'Videos' },
    { path: '/materials', label: 'Materials' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-ocean-deep/95 to-ocean-mid/95 backdrop-blur-xl border-b-4 border-rust shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 group">
            <div className="w-16 h-16 bg-gradient-to-br from-rust to-anchor rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-rust/50">
              <Anchor className="w-8 h-8 text-white animate-float" />
            </div>
            <div>
              <h1 className="font-bebas text-4xl tracking-wider text-sand drop-shadow-lg">
                Marine Engineering Hub
              </h1>
              <p className="font-pathway text-sm text-foam tracking-widest uppercase">
                Navigate Your Studies
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-6 py-3 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 ${
                  isActive(link.path)
                    ? 'bg-gradient-to-r from-rust to-anchor text-white shadow-lg shadow-rust/50 scale-105'
                    : 'text-foam hover:bg-rust/20 hover:text-white hover:scale-105'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foam hover:text-rust transition-colors"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-2 animate-fadeInUp">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-6 py-3 rounded-xl font-bold uppercase tracking-wider text-sm transition-all duration-300 ${
                  isActive(link.path)
                    ? 'bg-gradient-to-r from-rust to-anchor text-white shadow-lg'
                    : 'text-foam hover:bg-rust/20 hover:text-white'
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
