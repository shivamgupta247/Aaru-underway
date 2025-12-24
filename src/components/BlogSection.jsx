import { useState, useEffect } from 'react'
import { ExternalLink, Calendar, AlertCircle, Loader2, ChevronLeft, ChevronRight, Bookmark } from 'lucide-react'
import { useBookmarks } from '../context/BookmarkContext'
import { useAuth } from '../context/AuthContext'

/**
 * Enhanced BlogSection Component
 * Fetches multiple RSS feeds from MarineInsight and provides category filtering
 * - Aggregates blogs from 6 different RSS feeds
 * - Category-based filtering
 * - Pagination support
 * - Responsive card layout
 */
export default function BlogSection() {
  const [allBlogs, setAllBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState('All')
  
  const { isBookmarked, toggleBookmark } = useBookmarks()
  const { user } = useAuth()
  
  const BLOGS_PER_PAGE = 12
  
  // RSS Feed Configuration
  const RSS_FEEDS = [
    {
      name: 'Blogs',
      url: 'https://api.rss2json.com/v1/api.json?rss_url=https://www.marineinsight.com/feed'
    },
    {
      name: 'Shipping News',
      url: 'https://api.rss2json.com/v1/api.json?rss_url=https://www.marineinsight.com/category/shipping-news/feed/'
    },
    {
      name: 'Case Studies',
      url: 'https://api.rss2json.com/v1/api.json?rss_url=https://www.marineinsight.com/category/case-studies/feed/'
    },
    {
      name: 'Merchant Navy',
      url: 'https://api.rss2json.com/v1/api.json?rss_url=https://www.marineinsight.com/tag/merchant-navy/feed/'
    },
    {
      name: 'Life at Sea',
      url: 'https://api.rss2json.com/v1/api.json?rss_url=https://www.marineinsight.com/category/life-at-sea/feed/'
    },
    {
      name: 'Know More',
      url: 'https://api.rss2json.com/v1/api.json?rss_url=https://www.marineinsight.com/category/know-more/feed/'
    }
  ]

  const CATEGORIES = ['All', 'Blogs', 'Shipping News', 'Case Studies', 'Merchant Navy', 'Life at Sea', 'Know More']

  useEffect(() => {
    fetchAllBlogs()
  }, [])

  /**
   * Fetch blogs from all RSS feeds in parallel
   */
  const fetchAllBlogs = async () => {
    try {
      setLoading(true)
      setError(null)

      // Fetch all feeds in parallel
      const fetchPromises = RSS_FEEDS.map(feed => 
        fetch(feed.url)
          .then(response => response.json())
          .then(data => ({
            category: feed.name,
            items: data.status === 'ok' ? data.items : []
          }))
          .catch(err => {
            console.error(`Error fetching ${feed.name}:`, err)
            return { category: feed.name, items: [] }
          })
      )

      const results = await Promise.all(fetchPromises)

      // Normalize and combine all blogs
      const combinedBlogs = []
      results.forEach(result => {
        result.items.forEach(item => {
          combinedBlogs.push({
            title: item.title || '',
            link: item.link || '',
            description: item.description || '',
            image: getThumbnail(item),
            publishedAt: item.pubDate || '',
            category: result.category
          })
        })
      })

      // Sort by published date (latest first)
      combinedBlogs.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))

      setAllBlogs(combinedBlogs)
    } catch (err) {
      console.error('Error fetching blogs:', err)
      setError('Failed to load blog posts. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  /**
   * Get thumbnail image from blog item
   */
  const getThumbnail = (item) => {
    // Try thumbnail field
    if (item.thumbnail) return item.thumbnail
    
    // Try enclosure
    if (item.enclosure?.link) return item.enclosure.link
    
    // Extract from description
    if (item.description) {
      const imgMatch = item.description.match(/<img[^>]+src="([^">]+)"/)
      if (imgMatch && imgMatch[1]) return imgMatch[1]
    }
    
    // Fallback image
    return 'https://images.unsplash.com/photo-1505682634904-d7c8d95cdc50?w=400&h=250&fit=crop'
  }

  /**
   * Strip HTML tags from description and truncate
   */
  const stripHtml = (html, maxLength = 120) => {
    const tmp = document.createElement('DIV')
    tmp.innerHTML = html
    const text = tmp.textContent || tmp.innerText || ''
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text
  }

  /**
   * Format date to readable string
   */
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  /**
   * Get category badge color
   */
  const getCategoryColor = (category) => {
    const colors = {
      'Blogs': 'bg-blue-500/20 text-blue-400 border-blue-500/50',
      'Shipping News': 'bg-cyan-500/20 text-cyan-400 border-cyan-500/50',
      'Case Studies': 'bg-purple-500/20 text-purple-400 border-purple-500/50',
      'Merchant Navy': 'bg-orange-500/20 text-orange-400 border-orange-500/50',
      'Life at Sea': 'bg-green-500/20 text-green-400 border-green-500/50',
      'Know More': 'bg-pink-500/20 text-pink-400 border-pink-500/50'
    }
    return colors[category] || 'bg-slate-500/20 text-slate-400 border-slate-500/50'
  }

  // Filter blogs by selected category
  const filteredBlogs = selectedCategory === 'All' 
    ? allBlogs 
    : allBlogs.filter(blog => blog.category === selectedCategory)

  // Calculate pagination
  const totalPages = Math.ceil(filteredBlogs.length / BLOGS_PER_PAGE)
  const startIndex = (currentPage - 1) * BLOGS_PER_PAGE
  const endIndex = startIndex + BLOGS_PER_PAGE
  const currentBlogs = filteredBlogs.slice(startIndex, endIndex)

  // Pagination handlers
  const goToPage = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const goToPrevious = () => {
    if (currentPage > 1) goToPage(currentPage - 1)
  }

  const goToNext = () => {
    if (currentPage < totalPages) goToPage(currentPage + 1)
  }

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages = []
    const maxVisible = 5
    
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i)
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i)
        pages.push('...')
        pages.push(totalPages)
      } else if (currentPage >= totalPages - 2) {
        pages.push(1)
        pages.push('...')
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i)
      } else {
        pages.push(1)
        pages.push('...')
        pages.push(currentPage - 1)
        pages.push(currentPage)
        pages.push(currentPage + 1)
        pages.push('...')
        pages.push(totalPages)
      }
    }
    
    return pages
  }

  // Handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
    setCurrentPage(1) // Reset to first page when category changes
  }

  // Handle bookmark toggle
  const handleBookmarkClick = async (e, blog) => {
    e.preventDefault() // Prevent card click
    if (!user) {
      alert('Please login to bookmark articles')
      return
    }
    await toggleBookmark(blog)
  }

  // Loading state
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <Loader2 className="w-12 h-12 text-cyan-500 animate-spin mb-4" />
        <p className="text-slate-400">Loading marine insights from multiple sources...</p>
      </div>
    )
  }

  // Error state
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
        <p className="text-red-400 mb-2">Failed to load blog posts</p>
        <p className="text-slate-500 text-sm">{error}</p>
        <button
          onClick={fetchAllBlogs}
          className="mt-4 px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors"
        >
          Try Again
        </button>
      </div>
    )
  }

  return (
    <div className="py-12">
      {/* Category Filter Tabs */}
      <div className="mb-8 overflow-x-auto">
        <div className="flex gap-2 pb-2 min-w-max">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 whitespace-nowrap ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30 scale-105'
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/50'
              }`}
            >
              {category}
              {category !== 'All' && (
                <span className="ml-2 text-xs opacity-70">
                  ({allBlogs.filter(b => b.category === category).length})
                </span>
              )}
              {category === 'All' && (
                <span className="ml-2 text-xs opacity-70">
                  ({allBlogs.length})
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Results Info */}
      {filteredBlogs.length > 0 && (
        <div className="mb-6 text-center">
          <p className="text-slate-400">
            Showing {startIndex + 1}-{Math.min(endIndex, filteredBlogs.length)} of {filteredBlogs.length} articles
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
          </p>
        </div>
      )}

      {/* No Results Message */}
      {filteredBlogs.length === 0 && (
        <div className="text-center py-12">
          <p className="text-slate-400 text-lg">No articles found in this category.</p>
        </div>
      )}

      {/* Blog Grid */}
      {filteredBlogs.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {currentBlogs.map((blog, index) => (
            <article
              key={`${blog.category}-${index}`}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10 group flex flex-col"
            >
              {/* Thumbnail Image */}
              <div className="relative h-48 overflow-hidden bg-slate-900">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1505682634904-d7c8d95cdc50?w=400&h=250&fit=crop'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                
                {/* Category Badge */}
                <div className="absolute top-3 right-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm ${getCategoryColor(blog.category)}`}>
                    {blog.category}
                  </span>
                </div>

                {/* Bookmark Button */}
                <button
                  onClick={(e) => handleBookmarkClick(e, blog)}
                  className="absolute top-3 left-3 p-2 bg-slate-900/80 backdrop-blur-sm rounded-full hover:bg-slate-800 transition-all duration-300 group/bookmark"
                  title={isBookmarked(blog.link) ? 'Remove bookmark' : 'Add bookmark'}
                >
                  <Bookmark 
                    className={`w-5 h-5 transition-all ${
                      isBookmarked(blog.link) 
                        ? 'fill-yellow-400 text-yellow-400' 
                        : 'text-slate-400 group-hover/bookmark:text-yellow-400'
                    }`}
                  />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 flex-grow flex flex-col">
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-cyan-400 transition-colors">
                  {blog.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm mb-4 line-clamp-3 flex-grow">
                  {stripHtml(blog.description)}
                </p>

                {/* Date */}
                <div className="flex items-center text-slate-500 text-sm mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <time dateTime={blog.publishedAt}>{formatDate(blog.publishedAt)}</time>
                </div>

                {/* Read More Button */}
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-lg transition-all duration-300 text-sm font-medium group-hover:shadow-lg group-hover:shadow-cyan-500/30"
                >
                  Read More
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            disabled={currentPage === 1}
            className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium transition-all ${
              currentPage === 1
                ? 'bg-slate-800/50 text-slate-600 cursor-not-allowed'
                : 'bg-slate-800 text-white hover:bg-cyan-500 hover:shadow-lg hover:shadow-cyan-500/30'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </button>

          {/* Page Numbers */}
          <div className="flex gap-2 flex-wrap justify-center">
            {getPageNumbers().map((page, index) => (
              page === '...' ? (
                <span key={`ellipsis-${index}`} className="px-3 py-2 text-slate-500">
                  ...
                </span>
              ) : (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`min-w-[40px] px-3 py-2 rounded-lg font-medium transition-all ${
                    currentPage === page
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30 scale-110'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  {page}
                </button>
              )
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={goToNext}
            disabled={currentPage === totalPages}
            className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium transition-all ${
              currentPage === totalPages
                ? 'bg-slate-800/50 text-slate-600 cursor-not-allowed'
                : 'bg-slate-800 text-white hover:bg-cyan-500 hover:shadow-lg hover:shadow-cyan-500/30'
            }`}
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Attribution */}
      <div className="text-center py-6 border-t border-slate-700/50">
        <p className="text-slate-400 text-sm">
          Source:{' '}
          <a
            href="https://www.marineinsight.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 underline"
          >
            MarineInsight.com
          </a>
          {' '}— Content © Marine Insight
        </p>
      </div>
    </div>
  )
}
