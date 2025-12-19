import { Heart, Github, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-ocean-deep/95 to-ocean-mid/90 backdrop-blur-xl border-t-4 border-rust mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bebas text-2xl text-sand mb-4 tracking-wider">About Us</h3>
            <p className="text-foam leading-relaxed">
              Your comprehensive resource for marine engineering education. Empowering future marine engineers with quality content.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bebas text-2xl text-sand mb-4 tracking-wider">Quick Links</h3>
            <ul className="space-y-2 text-foam">
              <li><a href="/" className="hover:text-rust transition-colors">Home</a></li>
              <li><a href="/videos" className="hover:text-rust transition-colors">Video Lectures</a></li>
              <li><a href="/materials" className="hover:text-rust transition-colors">Study Materials</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bebas text-2xl text-sand mb-4 tracking-wider">Connect</h3>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 bg-ocean-bright rounded-full flex items-center justify-center hover:bg-rust transition-all hover:scale-110">
                <Github size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-ocean-bright rounded-full flex items-center justify-center hover:bg-rust transition-all hover:scale-110">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-ocean-bright/30 pt-8 text-center">
          <p className="text-foam mb-2 flex items-center justify-center gap-2">
            Made with <Heart className="text-rust fill-rust" size={18} /> for Marine Engineers
          </p>
          <p className="text-sand/70 text-sm">
            Marine Engineering Hub © {new Date().getFullYear()} | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
