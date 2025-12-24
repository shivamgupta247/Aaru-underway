import { Link } from 'react-router-dom'
import { Video, BookOpen, Anchor, Ship, Award, ArrowRight, Zap, Users, CheckCircle, Map, TrendingUp, Trophy } from 'lucide-react'
import { useProgress } from '../context/ProgressContext'
import { useAuth } from '../context/AuthContext'

export default function Home() {
  const { user } = useAuth()
  const { getStats } = useProgress()
  const stats = user ? getStats() : null
  const features = [
    {
      icon: <Video className="w-12 h-12" />,
      title: 'Video Lectures',
      description: 'High-quality video tutorials from industry experts covering all marine engineering topics',
      link: '/videos',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500/10'
    },
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: 'Study Materials',
      description: 'Comprehensive PDFs, notes, and references curated for marine students',
      link: '/materials',
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'bg-cyan-500/10'
    },
    {
      icon: <Map className="w-12 h-12" />,
      title: 'Career Roadmap',
      description: 'Navigate your merchant navy career path with detailed guidance',
      link: '/roadmap',
      color: 'from-orange-400 to-amber-500',
      bgColor: 'bg-orange-400/10'
    },
  ]

  const benefits = [
    { icon: <Zap />, title: 'Industry Expert Content', desc: 'Created by experienced maritime professionals' },
    { icon: <Users />, title: '1000+ Students', desc: 'Join thousands of aspiring marine engineers' },
    { icon: <CheckCircle />, title: 'Comprehensive Coverage', desc: 'All major topics and exams covered' },
    { icon: <Award />, title: 'Career Focused', desc: 'Designed to prepare you for real maritime careers' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF5D2] via-[#FFE5B4] to-[#FFF5D2]">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-[#F25900] to-[#FF7020]" style={{clipPath: 'ellipse(100% 55% at 48% 44%)'}}></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFF5D2]/50 via-[#FFE5B4]/30 to-[#FFF5D2]/50"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F25900]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F25900]/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-8">
          <div className="inline-block animate-fadeIn">
            <span className="px-4 py-2 bg-[#F25900]/20 border border-[#F25900]/30 rounded-full text-[#F25900] text-sm font-semibold backdrop-blur-sm">
              ⚓ Maritime Education Platform
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-[#1a0f0a] leading-tight animate-fadeIn" style={{animationDelay: '0.2s'}}>
            Master Marine Engineering at Your Own Pace
          </h1>

          <p className="text-xl text-[#3d2315] max-w-3xl mx-auto leading-relaxed animate-fadeIn" style={{animationDelay: '0.4s'}}>
            Access comprehensive video lectures, study materials, and career guidance to excel in your marine engineering journey
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-fadeIn" style={{animationDelay: '0.6s'}}>
            <Link
              to="/videos"
              className="group px-8 py-4 bg-gradient-to-r from-[#F25900] to-[#D84800] hover:from-[#FF7020] hover:to-[#F25900] text-[#FFF5D2] font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 shadow-lg shadow-[#F25900]/50"
            >
              <Video className="w-5 h-5" />
              Watch Videos
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/materials"
              className="group px-8 py-4 bg-white/80 hover:bg-white backdrop-blur-lg text-[#F25900] font-semibold rounded-full border-2 border-[#F25900] hover:border-[#D84800] transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105"
            >
              <BookOpen className="w-5 h-5" />
              Study Materials
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Progress Stats Widget (for logged-in users) */}
      {user && stats && (
        <section className="relative py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/80 backdrop-blur-lg border-2 border-[#F25900]/30 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#F25900] to-[#D84800] rounded-full flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-[#FFF5D2]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#1a0f0a]">Your Learning Progress</h3>
                    <p className="text-[#3d2315]">Keep up the great work!</p>
                  </div>
                </div>
                <Link
                  to="/progress"
                  className="px-6 py-3 bg-gradient-to-r from-[#F25900] to-[#D84800] hover:from-[#FF7020] hover:to-[#F25900] text-[#FFF5D2] font-semibold rounded-full transition-all duration-300 flex items-center gap-2 hover:scale-105"
                >
                  View Details
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                    <div>
                      <p className="text-3xl font-bold text-[#1a0f0a]">{stats.completedVideos}</p>
                      <p className="text-[#3d2315] text-sm">Videos Completed</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <TrendingUp className="w-8 h-8 text-[#F25900]" />
                    <div>
                      <p className="text-3xl font-bold text-[#1a0f0a]">{stats.startedVideos}</p>
                      <p className="text-[#3d2315] text-sm">In Progress</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-[#F25900]/20 to-[#FF7020]/20 border border-[#F25900]/30 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <BookOpen className="w-8 h-8 text-[#F25900]" />
                    <div>
                      <p className="text-3xl font-bold text-[#1a0f0a]">{stats.downloadedMaterials}</p>
                      <p className="text-[#3d2315] text-sm">Materials Downloaded</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#1a0f0a] mb-4">What We Offer</h2>
            <p className="text-xl text-[#3d2315]">Everything you need to succeed in marine engineering</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="group relative bg-white/80 backdrop-blur-lg border border-[#F25900]/20 rounded-2xl p-8 hover:border-[#F25900]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#F25900]/20 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-[#F25900]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform backdrop-blur-sm border border-[#F25900]/20">
                  <div className="text-[#F25900]">
                    {feature.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-[#1a0f0a] mb-3">{feature.title}</h3>
                <p className="text-[#3d2315] mb-6">{feature.description}</p>

                <div className="flex items-center gap-2 text-[#F25900] font-semibold group-hover:gap-3 transition-all">
                  <span>Explore</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-24 px-6 bg-[#FFE5B4]/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#1a0f0a] mb-4">Why Choose Us?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-lg border border-[#F25900]/30 rounded-xl p-8 hover:bg-white hover:border-[#F25900]/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-[#F25900] mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-[#1a0f0a] mb-2">{benefit.title}</h3>
                <p className="text-[#3d2315] text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '100+', label: 'Video Lectures' },
              { number: '50+', label: 'Study Materials' },
              { number: '1000+', label: 'Active Students' },
              { number: '24/7', label: 'Lifetime Access' },
            ].map((stat, index) => (
              <div key={index} className="text-center bg-white/80 backdrop-blur-lg border border-[#F25900]/20 rounded-2xl p-6 hover:border-[#F25900]/50 hover:transform hover:scale-105 transition-all">
                <div className="text-5xl font-bold bg-gradient-to-r from-[#F25900] to-[#D84800] bg-clip-text text-transparent mb-2">{stat.number}</div>
                <p className="text-[#3d2315]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-6 bg-gradient-to-r from-[#F25900]/20 to-[#D84800]/20 backdrop-blur-lg border-y border-[#F25900]/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#1a0f0a] mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-[#3d2315] mb-8">Join thousands of students already learning from our platform</p>
          <Link
            to="/videos"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#F25900] to-[#D84800] hover:from-[#FF7020] hover:to-[#F25900] text-[#FFF5D2] font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#F25900]/50"
          >
            Get Started Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  )
}