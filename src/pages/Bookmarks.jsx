import { useState } from 'react'
import { ExternalLink, Calendar, Bookmark, BookmarkX, Loader2 } from 'lucide-react'
import { useBookmarks } from '../context/BookmarkContext'
import { useAuth } from '../context/AuthContext'

export default function Bookmarks() {
  const { bookmarks, loading, removeBookmark, isBookmarked } = useBookmarks()
  const { user } = useAuth()
  const [removingId, setRemovingId] = useState(null)

  // Category color mapping
  const getCategoryColor = (category) => {
    const colorMap = {
      'Blogs': 'bg-blue-500/20 text-blue-300 border-blue-500/50',
      'Shipping News': 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50',
      'Case Studies': 'bg-purple-500/20 text-purple-300 border-purple-500/50',
      'Merchant Navy': 'bg-amber-500/20 text-amber-300 border-amber-500/50',
      'Life at Sea': 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50',
      'Know More': 'bg-pink-500/20 text-pink-300 border-pink-500/50',
    }
    return colorMap[category] || 'bg-slate-500/20 text-slate-300 border-slate-500/50'
  }

  // Handle bookmark removal
  const handleRemoveBookmark = async (e, blogLink) => {
    e.preventDefault()
    setRemovingId(blogLink)
    await removeBookmark(blogLink)
    setRemovingId(null)
  }

  // If not logged in
  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#FFF5D2] via-[#FFE5B4] to-[#FFF5D2] pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <Bookmark className="w-16 h-16 text-[#F25900]/50 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-[#1a0f0a] mb-4">Login Required</h2>
            <p className="text-[#3d2315] text-lg mb-6">
              Please login to view your bookmarked articles
            </p>
          </div>
        </div>
      </div>
    )
  }

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#FFF5D2] via-[#FFE5B4] to-[#FFF5D2] pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-12 h-12 text-[#F25900] animate-spin mb-4" />
            <p className="text-[#3d2315] text-lg">Loading your bookmarks...</p>
          </div>
        </div>
      </div>
    )
  }

  // Empty state
  if (bookmarks.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#FFF5D2] via-[#FFE5B4] to-[#FFF5D2] pt-20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a0f0a] mb-4 text-center">
            My Bookmarks
          </h1>
          <p className="text-[#3d2315] text-center text-lg mb-12">
            Your saved articles collection
          </p>

          <div className="text-center py-20">
            <BookmarkX className="w-16 h-16 text-[#F25900]/50 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-[#1a0f0a] mb-2">No bookmarks yet</h2>
            <p className="text-[#3d2315] text-lg mb-6">
              Start bookmarking articles from the Blog section to build your collection
            </p>
            <a
              href="/blog"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F25900] to-[#D84800] hover:from-[#FF7020] hover:to-[#F25900] text-[#FFF5D2] px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Explore Blogs
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF5D2] via-[#FFE5B4] to-[#FFF5D2] pt-20">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a0f0a] mb-4">
            My Bookmarks
          </h1>
          <p className="text-[#1a0f0a]/70 text-lg">
            {bookmarks.length} {bookmarks.length === 1 ? 'article' : 'articles'} saved
          </p>
        </div>

        {/* Bookmarks Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookmarks.map((blog) => (
            <a
              key={blog.link}
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-xl overflow-hidden border-2 border-[#F25900]/20 hover:border-[#F25900] transition-all duration-300 hover:shadow-xl hover:shadow-[#F25900]/20 flex flex-col"
            >
              {/* Thumbnail Image */}
              <div className="relative h-48 overflow-hidden bg-[#FFF5D2]">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1505682634904-d7c8d95cdc50?w=400&h=250&fit=crop'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f0a]/20 to-transparent opacity-60"></div>
                
                {/* Category Badge */}
                <div className="absolute top-3 right-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm ${getCategoryColor(blog.category)}`}>
                    {blog.category}
                  </span>
                </div>

                {/* Remove Bookmark Button */}
                <button
                  onClick={(e) => handleRemoveBookmark(e, blog.link)}
                  disabled={removingId === blog.link}
                  className="absolute top-3 left-3 p-2 bg-red-600/90 backdrop-blur-sm rounded-full hover:bg-red-700 transition-all duration-300 group/remove disabled:opacity-50 shadow-lg"
                  title="Remove bookmark"
                >
                  {removingId === blog.link ? (
                    <Loader2 className="w-5 h-5 text-white animate-spin" />
                  ) : (
                    <BookmarkX className="w-5 h-5 text-white" />
                  )}
                </button>
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col bg-gradient-to-br from-white to-[#FFF5D2]/30">
                {/* Title */}
                <h3 className="text-lg font-bold text-[#1a0f0a] mb-3 line-clamp-2 group-hover:text-[#F25900] transition-colors">
                  {blog.title}
                </h3>

                {/* Description */}
                <p className="text-[#1a0f0a]/70 text-sm mb-4 line-clamp-3 flex-1">
                  {blog.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-[#F25900]/20">
                  <div className="flex items-center gap-2 text-[#1a0f0a]/60 text-xs">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{new Date(blog.publishedAt).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#1a0f0a]/60 group-hover:text-[#F25900] transition-colors" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
