import { Link } from 'react-router-dom'
import { Video, BookOpen, Anchor, Ship, Award, ArrowRight, Zap, Users, CheckCircle, Map } from 'lucide-react'

export default function Home() {
  const features = [
    {
      icon: <Video className="w-12 h-12" />,
      title: 'Video Lectures',
      description: 'High-quality video tutorials from industry experts covering all marine engineering topics',
      link: '/videos',
      color: 'from-red-600 to-red-700',
      bgColor: 'bg-red-900/20'
    },
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: 'Study Materials',
      description: 'Comprehensive PDFs, notes, and references curated for marine students',
      link: '/materials',
      color: 'from-amber-600 to-yellow-700',
      bgColor: 'bg-amber-900/20'
    },
    {
      icon: <Map className="w-12 h-12" />,
      title: 'Career Roadmap',
      description: 'Navigate your merchant navy career path with detailed guidance',
      link: '/roadmap',
      color: 'from-orange-600 to-red-700',
      bgColor: 'bg-orange-900/20'
    },
  ]

  const benefits = [
    { icon: <Zap />, title: 'Industry Expert Content', desc: 'Created by experienced maritime professionals' },
    { icon: <Users />, title: '1000+ Students', desc: 'Join thousands of aspiring marine engineers' },
    { icon: <CheckCircle />, title: 'Comprehensive Coverage', desc: 'All major topics and exams covered' },
    { icon: <Award />, title: 'Career Focused', desc: 'Designed to prepare you for real maritime careers' },
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-stone-900 to-black"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-700/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-8">
          <div className="inline-block">
            <span className="px-4 py-2 bg-red-600/10 border border-red-600/30 rounded-full text-red-400 text-sm font-semibold">
              ⚓ Maritime Education Platform
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight">
            Master Marine Engineering at Your Own Pace
          </h1>

          <p className="text-xl text-amber-200/80 max-w-3xl mx-auto leading-relaxed">
            Access comprehensive video lectures, study materials, and career guidance to excel in your marine engineering journey
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link
              to="/videos"
              className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <Video className="w-5 h-5" />
              Watch Videos
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/materials"
              className="px-8 py-4 bg-stone-800 hover:bg-stone-700 text-white font-semibold rounded-lg border border-amber-700 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <BookOpen className="w-5 h-5" />
              Study Materials
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">What We Offer</h2>
            <p className="text-xl text-amber-200/70">Everything you need to succeed in marine engineering</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="group relative bg-gradient-to-br from-stone-900 to-black border border-amber-900/30 rounded-xl p-8 hover:border-red-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-600/10"
              >
                <div className={`w-16 h-16 ${feature.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <div className={`bg-gradient-to-br ${feature.color} text-transparent bg-clip-text`}>
                    {feature.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-amber-200/70 mb-6">{feature.description}</p>

                <div className="flex items-center gap-2 text-red-400 font-semibold group-hover:gap-3 transition-all">
                  <span>Explore</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-stone-900 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">Why Choose Us?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-stone-800/50 border border-amber-900/30 rounded-xl p-8 hover:bg-stone-800 transition-all duration-300">
                <div className="text-red-500 mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-amber-200/70 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '100+', label: 'Video Lectures' },
              { number: '50+', label: 'Study Materials' },
              { number: '1000+', label: 'Active Students' },
              { number: '24/7', label: 'Lifetime Access' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-red-500 mb-2">{stat.number}</div>
                <p className="text-amber-200/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-red-900/20 to-amber-900/20 border-y border-amber-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-amber-200/80 mb-8">Join thousands of students already learning from our platform</p>
          <Link
            to="/videos"
            className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-300"
          >
            Get Started Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
