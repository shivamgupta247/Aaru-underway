import { Heart, Github, Mail, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-amber-900/30 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Branding */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Marine Hub</h3>
            <p className="text-amber-200/70 text-sm leading-relaxed">
              Your comprehensive resource for marine engineering education. Empowering future marine engineers with quality content.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Navigation</h3>
            <ul className="space-y-2 text-amber-200/70 text-sm">
              <li><a href="/" className="hover:text-red-400 transition-colors">Home</a></li>
              <li><a href="/videos" className="hover:text-red-400 transition-colors">Video Lectures</a></li>
              <li><a href="/materials" className="hover:text-red-400 transition-colors">Study Materials</a></li>
              <li><a href="/roadmap" className="hover:text-red-400 transition-colors">Career Roadmap</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-amber-200/70 text-sm">
              <li><a href="#" className="hover:text-red-400 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Connect</h3>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-amber-900/40 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all hover:scale-110 text-amber-700 hover:text-white">
                <Github size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-amber-900/40 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all hover:scale-110 text-amber-700 hover:text-white">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-amber-900/40 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all hover:scale-110 text-amber-700 hover:text-white">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-900/30 pt-8 text-center">
          <p className="text-amber-200/70 mb-2 flex items-center justify-center gap-2 text-sm">
            Made with <Heart className="text-red-600 fill-red-600" size={18} /> for Marine Engineers
          </p>
          <p className="text-amber-900/70 text-xs">
            Marine Engineering Hub © {new Date().getFullYear()} | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
