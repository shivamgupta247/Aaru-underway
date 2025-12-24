import { Link, useLocation } from 'react-router-dom'
import { Menu, X, LogIn, UserCircle, LogOut } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import AuthModal from './AuthModal'
import logo from '../../logo_bg_removed.png.png'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [authMode, setAuthMode] = useState('login')
  const [showUserMenu, setShowUserMenu] = useState(false)
  const location = useLocation()
  const { user, logout } = useAuth()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close user menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showUserMenu && !event.target.closest('.user-menu-container')) {
        setShowUserMenu(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [showUserMenu])

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/videos', label: 'Videos' },
    { path: '/materials', label: 'Materials' },
    { path: '/roadmap', label: 'Roadmap' },
    { path: '/blog', label: 'Blog' },
    { path: '/bookmarks', label: 'Bookmarks' },
    { path: '/progress', label: 'Progress' },
  ]

  const isActive = (path) => location.pathname === path

  const handleLogout = async () => {
    try {
      await logout()
      setShowUserMenu(false)
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  const openAuthModal = (mode) => {
    setAuthMode(mode)
    setShowAuthModal(true)
  }

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#FFF5D2]/95 backdrop-blur-lg shadow-lg shadow-[#F25900]/20 border-b border-[#F25900]/30' 
          : 'bg-[#FFF5D2]/90 backdrop-blur-md border-b border-[#F25900]/20'
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
                <h1 className="text-3xl font-bold text-[#1a0f0a] group-hover:text-[#F25900] transition-colors">
                  AARU UNDERWAY
                </h1>
                <p className="text-sm text-[#F25900] uppercase tracking-wider">Your Voyage to Maritime Mastery</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-2 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                    isActive(link.path)
                      ? 'bg-gradient-to-r from-[#F25900] to-[#D84800] text-white shadow-lg shadow-[#F25900]/30 transform scale-105'
                      : 'text-[#1a0f0a]/70 hover:text-[#1a0f0a] hover:bg-[#F25900]/10 backdrop-blur-sm border border-transparent hover:border-[#F25900]/30'
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Auth Buttons */}
              {user ? (
                <div className="relative ml-2 user-menu-container">
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#F25900] to-[#D84800] text-white font-semibold hover:from-[#FF7020] hover:to-[#F25900] transition-all shadow-lg shadow-[#F25900]/30"
                  >
                    {user.photoURL ? (
                      <img src={user.photoURL} alt={user.displayName} className="w-6 h-6 rounded-full" />
                    ) : (
                      <UserCircle className="w-5 h-5" />
                    )}
                    <span className="max-w-[100px] truncate">{user.displayName || user.email?.split('@')[0]}</span>
                  </button>

                  {/* User Dropdown Menu */}
                  {showUserMenu && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border-2 border-[#F25900]/30 rounded-lg shadow-xl overflow-hidden z-50">
                      <div className="p-3 border-b border-[#F25900]/20">
                        <p className="text-[#1a0f0a] font-semibold truncate">{user.displayName || 'User'}</p>
                        <p className="text-[#1a0f0a]/60 text-xs truncate">{user.email}</p>
                      </div>
                      <button
                        onClick={handleLogout}
                        className="w-full px-4 py-2 text-left text-[#1a0f0a]/70 hover:bg-[#F25900]/20 hover:text-[#1a0f0a] transition-colors flex items-center gap-2"
                      >
                        <LogOut className="w-4 h-4" />
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex gap-2 ml-2">
                  <button
                    onClick={() => openAuthModal('login')}
                    className="px-5 py-2 rounded-full font-semibold text-sm text-[#1a0f0a]/70 hover:text-[#1a0f0a] hover:bg-[#F25900]/10 backdrop-blur-sm border border-transparent hover:border-[#F25900]/30 transition-all duration-300 flex items-center gap-2"
                  >
                    <LogIn className="w-4 h-4" />
                    Login
                  </button>
                  <button
                    onClick={() => openAuthModal('signup')}
                    className="px-5 py-2 rounded-full font-semibold text-sm bg-gradient-to-r from-[#F25900] to-[#D84800] text-white hover:from-[#FF7020] hover:to-[#F25900] transition-all duration-300 shadow-lg shadow-[#F25900]/30"
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-[#F25900] hover:text-[#FF7020] transition-colors hover:bg-[#F25900]/10 rounded-lg"
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
                      ? 'bg-gradient-to-r from-[#F25900] to-[#D84800] text-white shadow-lg shadow-[#F25900]/30'
                      : 'text-[#1a0f0a]/70 hover:text-[#1a0f0a] hover:bg-[#F25900]/10 backdrop-blur-sm border border-[#F25900]/20'
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Auth Buttons */}
              {user ? (
                <div className="pt-2 border-t border-[#F25900]/20">
                  <div className="px-5 py-3 text-[#1a0f0a]/70">
                    <p className="font-semibold text-[#1a0f0a]">{user.displayName || 'User'}</p>
                    <p className="text-xs text-[#1a0f0a]/50">{user.email}</p>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full px-5 py-3 rounded-full font-semibold text-sm text-[#1a0f0a]/70 hover:text-[#1a0f0a] hover:bg-[#F25900]/10 backdrop-blur-sm border border-[#F25900]/20 transition-all duration-300 flex items-center gap-2"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex gap-2 pt-2 border-t border-[#F25900]/20">
                  <button
                    onClick={() => {
                      openAuthModal('login')
                      setIsMenuOpen(false)
                    }}
                    className="flex-1 px-5 py-3 rounded-full font-semibold text-sm text-[#1a0f0a]/70 hover:text-[#1a0f0a] hover:bg-[#F25900]/10 backdrop-blur-sm border border-[#F25900]/20 transition-all duration-300"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => {
                      openAuthModal('signup')
                      setIsMenuOpen(false)
                    }}
                    className="flex-1 px-5 py-3 rounded-full font-semibold text-sm bg-gradient-to-r from-[#F25900] to-[#D84800] text-white hover:from-[#FF7020] hover:to-[#F25900] transition-all duration-300"
                  >
                    Sign Up
                  </button>
                </div>
              )}
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

      {/* Auth Modal */}
      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)}
        defaultMode={authMode}
      />
    </>
  )
}
