import { Link } from 'react-router-dom'
import { Video, BookOpen, Anchor, Ship, Award, ArrowRight, Zap, Users, CheckCircle, Map } from 'lucide-react'

export default function Home() {
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
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      {/* Animated Ocean Wave Background */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500" style={{clipPath: 'ellipse(100% 55% at 48% 44%)'}}></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-blue-900/30 to-slate-900/50"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-8">
          <div className="inline-block animate-fadeIn">
            <span className="px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-semibold backdrop-blur-sm">
              ⚓ Maritime Education Platform
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight animate-fadeIn" style={{animationDelay: '0.2s'}}>
            Master Marine Engineering at Your Own Pace
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fadeIn" style={{animationDelay: '0.4s'}}>
            Access comprehensive video lectures, study materials, and career guidance to excel in your marine engineering journey
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-fadeIn" style={{animationDelay: '0.6s'}}>
            <Link
              to="/videos"
              className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 shadow-lg shadow-orange-500/50"
            >
              <Video className="w-5 h-5" />
              Watch Videos
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/materials"
              className="group px-8 py-4 bg-slate-800/50 hover:bg-slate-700/50 backdrop-blur-lg text-white font-semibold rounded-full border-2 border-blue-400 hover:border-orange-400 transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105"
            >
              <BookOpen className="w-5 h-5" />
              Study Materials
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">What We Offer</h2>
            <p className="text-xl text-gray-400">Everything you need to succeed in marine engineering</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="group relative bg-gradient-to-br from-blue-900/30 to-slate-900/30 backdrop-blur-lg border border-blue-400/20 rounded-2xl p-8 hover:border-orange-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20 hover:transform hover:scale-105"
              >
                <div className={`w-16 h-16 ${feature.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform backdrop-blur-sm border border-blue-400/20`}>
                  <div className={`bg-gradient-to-br ${feature.color} text-transparent bg-clip-text`}>
                    {feature.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 mb-6">{feature.description}</p>

                <div className="flex items-center gap-2 text-orange-400 font-semibold group-hover:gap-3 transition-all">
                  <span>Explore</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-blue-900/20 to-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">Why Choose Us?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-900/40 to-slate-900/40 backdrop-blur-lg border border-blue-400/30 rounded-xl p-8 hover:bg-blue-900/50 hover:border-orange-400/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-orange-400 mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.desc}</p>
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
              <div key={index} className="text-center bg-gradient-to-br from-blue-900/30 to-slate-900/30 backdrop-blur-lg border border-blue-400/20 rounded-2xl p-6 hover:border-orange-400/50 hover:transform hover:scale-105 transition-all">
                <div className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">{stat.number}</div>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-6 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-lg border-y border-orange-400/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-300 mb-8">Join thousands of students already learning from our platform</p>
          <Link
            to="/videos"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/50"
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