import { Newspaper } from 'lucide-react'
import BlogSection from '../components/BlogSection'

/**
 * Blog Page
 * Displays latest marine industry news and insights from MarineInsight.com
 */
export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF5D2] via-[#FFE5B4] to-[#FFF5D2]">
      {/* Background Effects */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-[#F25900] to-[#FF7020]" style={{clipPath: 'ellipse(100% 55% at 48% 44%)'}}></div>
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4 py-16">
          {/* Page Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#F25900] to-[#D84800] rounded-2xl mb-6 shadow-lg shadow-[#F25900]/30">
              <Newspaper className="w-10 h-10 text-[#FFF5D2]" />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#F25900] via-[#FF7020] to-[#D84800] text-transparent bg-clip-text">
                Marine Industry Blog
              </span>
            </h1>
            
            <p className="text-xl text-[#3d2315] max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest news, insights, and developments in the maritime industry.
              Curated articles from industry experts and professionals.
            </p>
          </div>

          {/* Blog Section */}
          <BlogSection />
        </div>
      </div>
    </div>
  )
}
