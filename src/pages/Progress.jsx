import { Link } from 'react-router-dom'
import { Trophy, Video, Download, TrendingUp, CheckCircle, Clock, BookOpen, Target } from 'lucide-react'
import { useProgress } from '../context/ProgressContext'
import { useAuth } from '../context/AuthContext'

export default function Progress() {
  const { user } = useAuth()
  const { videoProgress, materialProgress, getStats, loading } = useProgress()

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#FFF5D2] via-[#FFE5B4] to-[#FFF5D2] flex items-center justify-center">
        <div className="text-center space-y-6 max-w-md mx-auto px-6">
          <div className="w-24 h-24 bg-gradient-to-br from-[#F25900] to-[#D84800] rounded-full flex items-center justify-center mx-auto">
            <Trophy className="w-12 h-12 text-white" />
          </div>
          <h2 className="font-bebas text-5xl bg-gradient-to-r from-[#F25900] to-[#D84800] bg-clip-text text-transparent">Login Required</h2>
          <p className="text-[#1a0f0a]/70 text-lg">Please login to track your learning progress and earn achievements</p>
        </div>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#FFF5D2] via-[#FFE5B4] to-[#FFF5D2] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#F25900] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[#1a0f0a]/70">Loading your progress...</p>
        </div>
      </div>
    )
  }

  const stats = getStats()

  const completedVideos = Object.values(videoProgress).filter(v => v.status === 'completed')
  const inProgressVideos = Object.values(videoProgress).filter(v => v.status === 'started')
  const downloadedMaterials = Object.values(materialProgress)

  // Calculate progress percentage (assuming 16 total videos as in the app)
  const totalVideosInApp = 16
  const completionPercentage = Math.round((stats.completedVideos / totalVideosInApp) * 100)

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF5D2] via-[#FFE5B4] to-[#FFF5D2] py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-[#F25900] to-[#D84800] rounded-3xl flex items-center justify-center shadow-2xl shadow-[#F25900]/50 animate-float">
              <Trophy className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="font-bebas text-7xl bg-gradient-to-r from-[#F25900] to-[#D84800] bg-clip-text text-transparent mb-4 tracking-wider">
            Your Progress
          </h1>
          <p className="text-xl text-[#1a0f0a]/70 max-w-2xl mx-auto">
            Track your learning journey and celebrate your achievements
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Videos Completed */}
          <div className="bg-white border-2 border-[#F25900]/30 rounded-3xl p-8 space-y-4 hover:border-[#F25900] transition-all duration-300 shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="font-bebas text-5xl text-[#1a0f0a]">{stats.completedVideos}</h3>
              <p className="text-[#1a0f0a]/70 text-lg">Videos Completed</p>
            </div>
            <div className="w-full bg-[#FFF5D2] rounded-full h-3 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-500"
                style={{ width: `${completionPercentage}%` }}
              ></div>
            </div>
            <p className="text-sm text-[#1a0f0a]/60">{completionPercentage}% of total videos</p>
          </div>

          {/* Videos In Progress */}
          <div className="bg-white border-2 border-[#F25900]/30 rounded-3xl p-8 space-y-4 hover:border-[#F25900] transition-all duration-300 shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="font-bebas text-5xl text-[#1a0f0a]">{stats.startedVideos}</h3>
              <p className="text-[#1a0f0a]/70 text-lg">Videos In Progress</p>
            </div>
          </div>

          {/* Materials Downloaded */}
          <div className="bg-white border-2 border-[#F25900]/30 rounded-3xl p-8 space-y-4 hover:border-[#F25900] transition-all duration-300 shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
              <Download className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="font-bebas text-5xl text-[#1a0f0a]">{stats.downloadedMaterials}</h3>
              <p className="text-[#1a0f0a]/70 text-lg">Materials Downloaded</p>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Completed Videos */}
          <div>
            <h2 className="font-bebas text-4xl text-[#1a0f0a] mb-6 flex items-center gap-3">
              <Video className="w-8 h-8 text-[#F25900]" />
              Completed Videos ({completedVideos.length})
            </h2>
            {completedVideos.length > 0 ? (
              <div className="space-y-4 max-h-96 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#F25900] scrollbar-track-[#FFF5D2]">
                {completedVideos.slice(0, 10).map((video, index) => (
                  <div
                    key={index}
                    className="bg-white border-2 border-green-500/30 rounded-2xl p-4 hover:border-green-500 transition-all shadow-lg"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-grow">
                        <h4 className="text-[#1a0f0a] font-semibold mb-1">{video.title}</h4>
                        <p className="text-[#1a0f0a]/70 text-sm">{video.category}</p>
                        <p className="text-[#1a0f0a]/50 text-xs mt-1">
                          Completed: {new Date(video.completedAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-3xl border-2 border-[#F25900]/20 shadow-lg">
                <Video className="w-12 h-12 text-[#F25900]/50 mx-auto mb-3" />
                <p className="text-[#1a0f0a]/70">No completed videos yet</p>
                <Link
                  to="/videos"
                  className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-[#F25900] to-[#D84800] text-white rounded-full hover:scale-105 transition-all"
                >
                  Start Watching
                </Link>
              </div>
            )}
          </div>

          {/* Downloaded Materials */}
          <div>
            <h2 className="font-bebas text-4xl text-[#1a0f0a] mb-6 flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-[#F25900]" />
              Downloaded Materials ({downloadedMaterials.length})
            </h2>
            {downloadedMaterials.length > 0 ? (
              <div className="space-y-4 max-h-96 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#F25900] scrollbar-track-[#FFF5D2]">
                {downloadedMaterials.slice(0, 10).map((material, index) => (
                  <div
                    key={index}
                    className="bg-white border-2 border-blue-500/30 rounded-2xl p-4 hover:border-blue-500 transition-all shadow-lg"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Download className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-grow">
                        <h4 className="text-[#1a0f0a] font-semibold mb-1">{material.title}</h4>
                        <p className="text-[#1a0f0a]/70 text-sm">{material.category}</p>
                        <p className="text-[#1a0f0a]/50 text-xs mt-1">
                          Downloaded: {new Date(material.downloadedAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-3xl border-2 border-[#F25900]/20 shadow-lg">
                <BookOpen className="w-12 h-12 text-[#F25900]/50 mx-auto mb-3" />
                <p className="text-[#1a0f0a]/70">No materials downloaded yet</p>
                <Link
                  to="/materials"
                  className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-[#F25900] to-[#D84800] text-white rounded-full hover:scale-105 transition-all"
                >
                  Browse Materials
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Motivational Section */}
        {stats.completedVideos > 0 && (
          <div className="mt-12 bg-gradient-to-r from-[#F25900]/10 to-[#D84800]/10 border-2 border-[#F25900] rounded-3xl p-8 text-center shadow-lg">
            <Target className="w-16 h-16 text-[#F25900] mx-auto mb-4" />
            <h3 className="font-bebas text-3xl text-[#1a0f0a] mb-3">Keep Going! 🚀</h3>
            <p className="text-[#1a0f0a]/70 text-lg max-w-2xl mx-auto">
              You've made great progress! Continue your learning journey to unlock more achievements and master marine engineering.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
