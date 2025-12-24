import { useState, useEffect } from 'react'
import { Play, Clock, Search, Filter, Tv, Youtube, X, CheckCircle, Circle, XCircle } from 'lucide-react'
import { useProgress } from '../context/ProgressContext'
import { useAuth } from '../context/AuthContext'

export default function Videos() {
  const { user } = useAuth()
  const { isVideoCompleted, isVideoStarted, markVideoStarted, markVideoCompleted, unmarkVideo } = useProgress()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedVideo, setSelectedVideo] = useState(null)

  const categories = [
    'All',
    'Thermodynamics',
    'Fluid Mechanics',
    
  ]

  const videos = [
    {
      id: 'ytX2R3FkB5M',
      title: 'BASIC THERMODYNAMICS 01',
      description: '⚓ This video sets the stage for a full marine engineering thermodynamics series, tailored for beginners and fellow cadets. Stay tuned as we move into real-world applications, detailed law breakdowns, and ship-specific systems in upcoming episodes.',
      duration: '40:30',
      category: 'Thermodynamics',
      thumbnail: 'thermodynamics',
    },
    {
      id: 'JxWe5UudW3A',
      title: 'BASIC THERMODYNAMICS 02',
      description: '⚙️ This is a crucial step before diving into deeper laws and system analysis, so make sure you understand these terms well — they\'ll keep showing up throughout your marine engineering journey!',
      duration: '36:20',
      category: 'Thermodynamics',
      thumbnail: 'thermodynamics',
    },
    {
      id: 'ws_UClHthb0',
      title: 'BASIC THERMODYNAMICS 03',
      description: '⚙️ Mastering this concept is essential as it forms the core of energy analysis in all types of thermodynamic systems — from engines to boilers and beyond!',
      duration: '48:50',
      category: 'Thermodynamics',
      thumbnail: 'thermodynamics',
    },
    {
      id: 'mAbiL8SCKH8',
      title: 'BASIC THERMODYNAMICS 04',
      description: '⚙️ Continue your thermodynamics journey with this essential marine engineering lecture covering advanced concepts and practical applications.',
      duration: '48:50',
      category: 'Thermodynamics',
      thumbnail: 'thermodynamics',
    },
    {
      id: 'I8oGzY0aVPE',
      title: 'BASIC THERMODYNAMICS 05',
      description: '⚙️ Dive deeper into thermodynamic principles essential for marine engineers and understand real-world ship system applications.',
      duration: '1:11:15',
      category: 'Thermodynamics',
      thumbnail: 'thermodynamics',
    },
    {
      id: '02CHi3cXn9U',
      title: 'BASIC THERMODYNAMICS 06',
      description: '⚙️ Master the fundamentals of thermodynamics with practical examples from marine engineering operations.',
      duration: '43:15',
      category: 'Thermodynamics',
      thumbnail: 'thermodynamics',
    },
    {
      id: '5_DF51FmAgs',
      title: 'BASIC THERMODYNAMICS 07',
      description: '⚙️ Learn advanced thermodynamic concepts and their applications in ship machinery and propulsion systems.',
      duration: '1:51:04',
      category: 'Thermodynamics',
      thumbnail: 'thermodynamics',
    },
    {
      id: 'L541PukEspA',
      title: 'BASIC THERMODYNAMICS 08',
      description: '⚙️ Essential thermodynamics knowledge for marine engineering students covering heat transfer and energy systems.',
      duration: '35:28',
      category: 'Thermodynamics',
      thumbnail: 'thermodynamics',
    },
    {
      id: 'ajQZE3YJQs4',
      title: 'BASIC THERMODYNAMICS 09',
      description: '⚙️ Comprehensive coverage of thermodynamic cycles and their importance in marine diesel engines.',
      duration: '1:16:07',
      category: 'Thermodynamics',
      thumbnail: 'thermodynamics',
    },
    {
      id: 'UJ0W7ji6Bqk',
      title: 'BASIC THERMODYNAMICS 10',
      description: '⚙️ Understand the key principles of thermodynamics for efficient ship operations and engine performance.',
      duration: '1:02:32',
      category: 'Thermodynamics',
      thumbnail: 'thermodynamics',
    },
    {
      id: 'mGexXcjewMg',
      title: 'BASIC THERMODYNAMICS 11',
      description: '⚙️ Advanced thermodynamics lecture covering energy conservation and practical marine engineering applications.',
      duration: '2:00:43',
      category: 'Thermodynamics',
      thumbnail: 'thermodynamics',
    },
    {
      id: 'YzLuezlUzdg',
      title: 'BASIC THERMODYNAMICS 12',
      description: '⚙️ Complete guide to thermodynamic systems in marine engineering with real-world examples and calculations.',
      duration: '1:11:05',
      category: 'Thermodynamics',
      thumbnail: 'thermodynamics',
    },
    {
      id: 'b3pHnHG4is8',
      title: 'BASIC THERMODYNAMICS 13',
      description: '⚙️ Final essential concepts in basic thermodynamics for marine engineers with practical problem-solving techniques.',
      duration: '23:35',
      category: 'Thermodynamics',
      thumbnail: 'thermodynamics',
    },
    {
      id: 'DrdFvgsCe6o',
      title: 'FLUID MECHANICS 01',
      description: '💧 Introduction to fluid mechanics for marine engineers. Learn fundamental concepts of fluid properties, pressure, buoyancy, and flow dynamics essential for ship operations.',
      duration: '51:16',
      category: 'Fluid Mechanics',
      thumbnail: 'fluid',
    },
    {
      id: 's56r1Bb8_xM',
      title: 'FLUID MECHANICS 02',
      description: '💧 Continue your fluid mechanics journey with advanced concepts in fluid flow, Bernoulli\'s equation, and practical applications in marine systems.',
      duration: '2:08:33',
      category: 'Fluid Mechanics',
      thumbnail: 'fluid',
    },
    {
      id: 'cxmZdL4EY0w',
      title: 'FLUID MECHANICS 03',
      description: '💧 Master fluid mechanics principles including viscosity, laminar and turbulent flow, and their critical role in ship design and operations.',
      duration: '1:39:11',
      category: 'Fluid Mechanics',
      thumbnail: 'fluid',
    },
  ]

  const filteredVideos = videos.filter((video) => {
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         video.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || video.category.toLowerCase() === selectedCategory
    return matchesSearch && matchesCategory
  })

  const openVideo = (video) => {
    setSelectedVideo(video)
    // Mark video as started when opened
    if (user && !isVideoCompleted(video.id)) {
      markVideoStarted(video.id, video)
    }
  }

  const closeVideo = () => {
    setSelectedVideo(null)
  }

  const getThumbnailGradient = (thumbnail) => {
    const gradients = {
      thermodynamics: 'from-orange-500 to-red-500',
      fluid: 'from-blue-400 to-cyan-600',
      diesel: 'from-red-500 to-orange-500',
      stability: 'from-blue-500 to-cyan-500',
      auxiliary: 'from-green-500 to-teal-500',
      marpol: 'from-purple-500 to-pink-500',
      propulsion: 'from-indigo-500 to-blue-500',
      boiler: 'from-yellow-500 to-red-500',
      electrical: 'from-cyan-500 to-blue-500',
      'two-stroke': 'from-orange-500 to-red-500',
      cargo: 'from-teal-500 to-green-500',
    }
    return gradients[thumbnail] || 'from-rust to-anchor'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF5D2] via-[#FFE5B4] to-[#FFF5D2] py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-[#F25900] to-[#D84800] rounded-3xl flex items-center justify-center shadow-2xl shadow-[#F25900]/50 animate-float">
              <Tv className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="font-bebas text-7xl bg-gradient-to-r from-[#F25900] to-[#D84800] bg-clip-text text-transparent mb-4 tracking-wider">
            Video Lectures
          </h1>
          <p className="text-xl text-[#1a0f0a]/70 max-w-2xl mx-auto">
            Expert-curated video content covering all aspects of marine engineering
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-[#1a0f0a]/60 w-6 h-6" />
            <input
              type="text"
              placeholder="Search videos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-16 pr-6 py-5 bg-white border-2 border-[#F25900]/30 rounded-full text-[#1a0f0a] placeholder-[#1a0f0a]/50 focus:outline-none focus:border-[#F25900] transition-all text-lg shadow-lg"
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-hide">
            <Filter className="text-[#1a0f0a]/70 flex-shrink-0" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category.toLowerCase())}
                className={`px-6 py-3 rounded-full font-semibold uppercase tracking-wider text-sm whitespace-nowrap transition-all duration-300 flex-shrink-0 ${
                  selectedCategory === category.toLowerCase()
                    ? 'bg-gradient-to-r from-[#F25900] to-[#D84800] text-white shadow-lg shadow-[#F25900]/50 scale-105'
                    : 'bg-white text-[#1a0f0a] border-2 border-[#F25900]/30 hover:border-[#F25900] hover:bg-[#F25900]/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video, index) => (
            <div
              key={video.id}
              className="group cursor-pointer animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openVideo(video)}
            >
              <div className="relative overflow-hidden rounded-3xl bg-white border-2 border-[#F25900]/30 hover:border-[#F25900] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#F25900]/30">
                {/* Thumbnail */}
                <div className={`relative h-52 bg-gradient-to-br ${getThumbnailGradient(video.thumbnail)} flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-125 transition-transform duration-300 shadow-2xl">
                      <Play className="w-10 h-10 text-white fill-white ml-1" />
                    </div>
                  </div>
                  
                  {/* Duration Badge */}
                  <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-black/70 backdrop-blur-sm px-3 py-2 rounded-full">
                    <Clock className="w-4 h-4 text-white" />
                    <span className="text-white font-semibold text-sm">{video.duration}</span>
                  </div>

                  {/* YouTube Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-red-600 px-3 py-2 rounded-full">
                    <Youtube className="w-4 h-4 text-white" />
                    <span className="text-white font-semibold text-xs">YouTube</span>
                  </div>

                  {/* Progress Badge */}
                  {isVideoCompleted(video.id) && (
                    <div className="absolute top-4 right-4 flex items-center gap-2 bg-green-500 px-3 py-2 rounded-full">
                      <CheckCircle className="w-4 h-4 text-white" />
                      <span className="text-white font-semibold text-xs">Completed</span>
                    </div>
                  )}
                  {isVideoStarted(video.id) && !isVideoCompleted(video.id) && (
                    <div className="absolute top-4 right-4 flex items-center gap-2 bg-yellow-500 px-3 py-2 rounded-full">
                      <Circle className="w-4 h-4 text-white" />
                      <span className="text-white font-semibold text-xs">In Progress</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 space-y-4 bg-gradient-to-br from-white to-[#FFF5D2]/30">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-[#F25900]/10 border border-[#F25900]/50 rounded-full text-[#F25900] text-xs font-semibold uppercase tracking-wide">
                      {video.category}
                    </span>
                  </div>

                  <h3 className="font-pathway text-2xl text-[#1a0f0a] leading-tight group-hover:text-[#F25900] transition-colors">
                    {video.title}
                  </h3>

                  <p className="text-[#1a0f0a]/70 leading-relaxed line-clamp-2">
                    {video.description}
                  </p>

                  <div className="pt-4 flex items-center gap-3 text-[#F25900] font-bold group-hover:gap-5 transition-all">
                    <span className="uppercase tracking-wider text-sm">Watch Now</span>
                    <Play className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredVideos.length === 0 && (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-[#F25900]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-[#F25900]" />
            </div>
            <h3 className="font-bebas text-4xl text-[#1a0f0a] mb-4">No Videos Found</h3>
            <p className="text-[#1a0f0a]/70 text-lg">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Stats */}
        <div className="mt-20 text-center p-10 bg-white rounded-3xl border-2 border-[#F25900]/20 shadow-lg">
          <p className="text-2xl text-[#1a0f0a]/70 mb-2">
            Showing <span className="text-[#F25900] font-bold">{filteredVideos.length}</span> of{' '}
            <span className="text-[#F25900] font-bold">{videos.length}</span> videos
          </p>
          <p className="text-[#1a0f0a]/60">More content added regularly</p>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fadeInUp p-4"
          onClick={closeVideo}
        >
          <div 
            className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden border-4 border-[#F25900] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeVideo}
              className="absolute top-4 right-4 z-10 w-12 h-12 bg-gradient-to-r from-[#F25900] to-[#D84800] hover:from-[#D84800] hover:to-[#F25900] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xl"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Video Header */}
            <div className="bg-gradient-to-br from-[#FFF5D2] to-white p-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-[#F25900]/10 border border-[#F25900]/50 rounded-full text-[#F25900] text-xs font-semibold uppercase tracking-wide">
                  {selectedVideo.category}
                </span>
                <div className="flex items-center gap-2 text-[#1a0f0a]/70">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-semibold">{selectedVideo.duration}</span>
                </div>
              </div>
              <h2 className="font-bebas text-3xl text-[#1a0f0a] mb-2 tracking-wide">
                {selectedVideo.title}
              </h2>
              <p className="text-[#1a0f0a]/70">
                {selectedVideo.description}
              </p>
            </div>

            {/* Video Player */}
            <div className="relative pt-[56.25%] bg-black">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Mark as Complete Button */}
            <div className="p-6 bg-gradient-to-br from-[#FFF5D2] to-white space-y-3">
              {isVideoCompleted(selectedVideo.id) ? (
                <>
                  <div className="flex items-center justify-center gap-3 text-green-600 text-lg font-semibold">
                    <CheckCircle className="w-6 h-6" />
                    <span>Completed! Great job! 🎉</span>
                  </div>
                  <button
                    onClick={() => unmarkVideo(selectedVideo.id)}
                    className="w-full py-3 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-semibold text-sm rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    <XCircle className="w-5 h-5" />
                    Unmark as Completed
                  </button>
                </>
              ) : (
                <button
                  onClick={() => markVideoCompleted(selectedVideo.id, selectedVideo)}
                  className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold text-lg rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <CheckCircle className="w-6 h-6" />
                  Mark as Completed
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
