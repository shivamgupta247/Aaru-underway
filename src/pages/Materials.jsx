import { useState } from 'react'
import { Download, FileText, Search, BookOpen, Layers, Zap, Cog, Waves, Ship, Filter, CheckCircle } from 'lucide-react'
import { useProgress } from '../context/ProgressContext'
import { useAuth } from '../context/AuthContext'

export default function Materials() {
  const { user } = useAuth()
  const { isMaterialDownloaded, markMaterialDownloaded } = useProgress()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    'All',
    'Fundamentals',
    'Operations',
    'Thermodynamics',
    'Maintenance',
    'Electrical',
    'Naval Architecture',
  ]

  const materials = [
    {
      id: 1,
      title: 'Marine Engineering Basics',
      description: 'Comprehensive PDF covering fundamental concepts, diagrams, and practice questions for first-year students.',
      pages: 250,
      size: '15 MB',
      category: 'Fundamentals',
      icon: <FileText className="w-8 h-8" />,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      title: 'Engine Room Procedures',
      description: 'Standard operating procedures, emergency protocols, and watchkeeping guidelines for marine engineers.',
      pages: 180,
      size: '12 MB',
      category: 'Operations',
      icon: <Cog className="w-8 h-8" />,
      gradient: 'from-green-500 to-teal-500',
    },
    {
      id: 3,
      title: 'Thermodynamics Notes',
      description: 'Complete lecture notes on marine thermodynamics, cycles, and heat transfer applications.',
      pages: 320,
      size: '18 MB',
      category: 'Thermodynamics',
      icon: <Zap className="w-8 h-8" />,
      gradient: 'from-orange-500 to-red-500',
    },
    {
      id: 4,
      title: 'Maintenance Manual',
      description: 'Preventive and corrective maintenance procedures for common marine machinery and equipment.',
      pages: 420,
      size: '25 MB',
      category: 'Maintenance',
      icon: <Cog className="w-8 h-8" />,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      id: 5,
      title: 'Marine Electrical Systems',
      description: 'Electrical distribution, generators, motors, and automation systems on modern vessels.',
      pages: 280,
      size: '16 MB',
      category: 'Electrical',
      icon: <Zap className="w-8 h-8" />,
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      id: 6,
      title: 'Naval Architecture Guide',
      description: 'Ship design principles, hydrostatics, resistance, and propulsion theory with solved examples.',
      pages: 350,
      size: '22 MB',
      category: 'Naval Architecture',
      icon: <Ship className="w-8 h-8" />,
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      id: 7,
      title: 'Diesel Engine Technology',
      description: 'In-depth coverage of marine diesel engines, fuel systems, and performance optimization.',
      pages: 290,
      size: '19 MB',
      category: 'Fundamentals',
      icon: <Cog className="w-8 h-8" />,
      gradient: 'from-red-500 to-orange-500',
    },
    {
      id: 8,
      title: 'Safety Management Systems',
      description: 'ISM Code, safety procedures, risk assessment, and emergency response protocols.',
      pages: 210,
      size: '14 MB',
      category: 'Operations',
      icon: <FileText className="w-8 h-8" />,
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      id: 9,
      title: 'Refrigeration & Air Conditioning',
      description: 'Marine HVAC systems, refrigeration cycles, and environmental control systems.',
      pages: 240,
      size: '17 MB',
      category: 'Thermodynamics',
      icon: <Waves className="w-8 h-8" />,
      gradient: 'from-blue-500 to-indigo-500',
    },
    {
      id: 10,
      title: 'Auxiliary Machinery Handbook',
      description: 'Pumps, compressors, heat exchangers, purifiers, and other auxiliary equipment.',
      pages: 380,
      size: '23 MB',
      category: 'Maintenance',
      icon: <Layers className="w-8 h-8" />,
      gradient: 'from-teal-500 to-cyan-500',
    },
    {
      id: 11,
      title: 'Automation & Control Systems',
      description: 'Modern ship automation, PLC systems, sensors, and integrated bridge systems.',
      pages: 270,
      size: '20 MB',
      category: 'Electrical',
      icon: <Zap className="w-8 h-8" />,
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      id: 12,
      title: 'Ship Stability Advanced',
      description: 'Advanced stability calculations, damage stability, and inclining experiments.',
      pages: 310,
      size: '21 MB',
      category: 'Naval Architecture',
      icon: <Ship className="w-8 h-8" />,
      gradient: 'from-cyan-500 to-teal-500',
    },
  ]

  const filteredMaterials = materials.filter((material) => {
    const matchesSearch = material.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         material.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || material.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleDownload = (material) => {
    // Mark material as downloaded
    if (user) {
      markMaterialDownloaded(material.id, material)
    }
    // Replace with actual download logic
    alert(`Downloading ${material.title}. Replace this with your actual PDF link.`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF5D2] via-[#FFE5B4] to-[#FFF5D2] py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-[#F25900] to-[#D84800] rounded-3xl flex items-center justify-center shadow-2xl shadow-[#F25900]/50 animate-float">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="font-bebas text-7xl bg-gradient-to-r from-[#F25900] to-[#D84800] bg-clip-text text-transparent mb-4 tracking-wider">
            Study Materials
          </h1>
          <p className="text-xl text-[#1a0f0a]/70 max-w-2xl mx-auto">
            Curated PDFs, notes, and reference materials for comprehensive learning
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-[#1a0f0a]/60 w-6 h-6" />
            <input
              type="text"
              placeholder="Search study materials..."
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

        {/* Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMaterials.map((material, index) => (
            <div
              key={material.id}
              className="group relative overflow-hidden rounded-3xl bg-white border-2 border-[#F25900]/30 hover:border-[#F25900] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#F25900]/30 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#F25900]/0 to-[#D84800]/0 group-hover:from-[#F25900]/10 group-hover:to-[#D84800]/10 transition-all duration-500"></div>

              <div className="relative p-8 space-y-6">
                {/* Icon */}
                <div className={`w-20 h-20 bg-gradient-to-br ${material.gradient} rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:rotate-12 group-hover:scale-110 transition-all duration-500`}>
                  {material.icon}
                </div>

                {/* Category Badge */}
                <div className="flex items-center gap-2">
                  <span className="px-4 py-2 bg-[#F25900]/10 border border-[#F25900]/50 rounded-full text-[#F25900] text-xs font-semibold uppercase tracking-wide">
                    {material.category}
                  </span>
                  {isMaterialDownloaded(material.id) && (
                    <div className="flex items-center gap-1 px-3 py-2 bg-green-500/20 border border-green-500/50 rounded-full">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-green-600 text-xs font-semibold">Downloaded</span>
                    </div>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-pathway text-2xl text-[#1a0f0a] leading-tight group-hover:text-[#F25900] transition-colors">
                  {material.title}
                </h3>

                {/* Description */}
                <p className="text-[#1a0f0a]/70 leading-relaxed line-clamp-3">
                  {material.description}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-6 text-sm text-[#1a0f0a]/60">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    <span>{material.pages} pages</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4" />
                    <span>{material.size}</span>
                  </div>
                </div>

                {/* Download Button */}
                <button
                  onClick={() => handleDownload(material)}
                  className={`w-full py-4 text-white rounded-full font-bold uppercase tracking-wider text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group-hover:gap-5 ${
                    isMaterialDownloaded(material.id)
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500'
                      : 'bg-gradient-to-r from-[#F25900] to-[#D84800]'
                  }`}
                >
                  <Download className="w-5 h-5" />
                  {isMaterialDownloaded(material.id) ? 'Download Again' : 'Download PDF'}
                </button>
              </div>

              {/* Corner Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#FFF5D2]/30 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredMaterials.length === 0 && (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-[#F25900]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-[#F25900]" />
            </div>
            <h3 className="font-bebas text-4xl text-[#1a0f0a] mb-4">No Materials Found</h3>
            <p className="text-[#1a0f0a]/70 text-lg">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Stats */}
        <div className="mt-20 text-center p-10 bg-white rounded-3xl border-2 border-[#F25900]/20 shadow-lg">
          <p className="text-2xl text-[#1a0f0a]/70 mb-2">
            Showing <span className="text-[#F25900] font-bold">{filteredMaterials.length}</span> of{' '}
            <span className="text-[#F25900] font-bold">{materials.length}</span> materials
          </p>
          <p className="text-[#1a0f0a]/60">New materials added regularly</p>
        </div>

        {/* Info Box */}
        <div className="mt-12 p-8 bg-white rounded-3xl border-2 border-[#F25900]/20 shadow-lg">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-[#F25900]/20 rounded-full flex items-center justify-center flex-shrink-0">
              <FileText className="w-6 h-6 text-[#F25900]" />
            </div>
            <div>
              <h3 className="font-bebas text-2xl text-[#1a0f0a] mb-2 tracking-wide">Admin Note</h3>
              <p className="text-[#1a0f0a]/70 leading-relaxed">
                Replace the download functionality with actual PDF links. You can host files on cloud storage (Google Drive, Dropbox) or use a dedicated content management system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
