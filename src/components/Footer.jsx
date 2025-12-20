import { Heart, Github, Mail, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 border-t border-blue-400/20 mt-20 overflow-hidden">
      {/* Subtle wave decoration */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
      
      {/* Background gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Branding */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Marine Hub
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your comprehensive resource for marine engineering education. Empowering future marine engineers with quality content.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Navigation</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="/" className="hover:text-orange-400 transition-colors inline-flex items-center group">
                  <span className="w-1 h-1 bg-blue-400 rounded-full mr-2 group-hover:bg-orange-400 transition-colors"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="/videos" className="hover:text-orange-400 transition-colors inline-flex items-center group">
                  <span className="w-1 h-1 bg-blue-400 rounded-full mr-2 group-hover:bg-orange-400 transition-colors"></span>
                  Video Lectures
                </a>
              </li>
              <li>
                <a href="/materials" className="hover:text-orange-400 transition-colors inline-flex items-center group">
                  <span className="w-1 h-1 bg-blue-400 rounded-full mr-2 group-hover:bg-orange-400 transition-colors"></span>
                  Study Materials
                </a>
              </li>
              <li>
                <a href="/roadmap" className="hover:text-orange-400 transition-colors inline-flex items-center group">
                  <span className="w-1 h-1 bg-blue-400 rounded-full mr-2 group-hover:bg-orange-400 transition-colors"></span>
                  Career Roadmap
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors inline-flex items-center group">
                  <span className="w-1 h-1 bg-blue-400 rounded-full mr-2 group-hover:bg-orange-400 transition-colors"></span>
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors inline-flex items-center group">
                  <span className="w-1 h-1 bg-blue-400 rounded-full mr-2 group-hover:bg-orange-400 transition-colors"></span>
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors inline-flex items-center group">
                  <span className="w-1 h-1 bg-blue-400 rounded-full mr-2 group-hover:bg-orange-400 transition-colors"></span>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors inline-flex items-center group">
                  <span className="w-1 h-1 bg-blue-400 rounded-full mr-2 group-hover:bg-orange-400 transition-colors"></span>
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Connect</h3>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 bg-gradient-to-br from-blue-900/40 to-slate-900/40 hover:from-orange-500 hover:to-red-500 rounded-lg flex items-center justify-center transition-all hover:scale-110 text-blue-400 hover:text-white border border-blue-400/20 hover:border-orange-400/50 backdrop-blur-sm shadow-lg hover:shadow-orange-500/50"
              >
                <Github size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gradient-to-br from-blue-900/40 to-slate-900/40 hover:from-orange-500 hover:to-red-500 rounded-lg flex items-center justify-center transition-all hover:scale-110 text-blue-400 hover:text-white border border-blue-400/20 hover:border-orange-400/50 backdrop-blur-sm shadow-lg hover:shadow-orange-500/50"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gradient-to-br from-blue-900/40 to-slate-900/40 hover:from-orange-500 hover:to-red-500 rounded-lg flex items-center justify-center transition-all hover:scale-110 text-blue-400 hover:text-white border border-blue-400/20 hover:border-orange-400/50 backdrop-blur-sm shadow-lg hover:shadow-orange-500/50"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-gray-500 text-xs mt-4">
              Join our maritime community
            </p>
          </div>
        </div>

        <div className="border-t border-blue-400/20 pt-8 text-center">
          <p className="text-gray-400 mb-2 flex items-center justify-center gap-2 text-sm">
            Made with <Heart className="text-orange-500 fill-orange-500 animate-pulse" size={18} /> for Marine Engineers
          </p>
          <p className="text-gray-500 text-xs">
            Marine Engineering Hub © {new Date().getFullYear()} | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}