import { Link } from 'react-router-dom'
import { Video, BookOpen, Anchor, Waves, Ship, Award, ArrowRight, Sparkles } from 'lucide-react'

export default function Home() {
  const features = [
    {
      icon: <Video className="w-12 h-12" />,
      title: 'Video Lectures',
      description: 'Comprehensive video tutorials covering all aspects of marine engineering',
      link: '/videos',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: 'Study Materials',
      description: 'Curated PDFs, notes, and reference materials for your studies',
      link: '/materials',
      gradient: 'from-rust to-anchor',
    },
  ]

  const stats = [
    { icon: <Video />, value: '100+', label: 'Video Lectures' },
    { icon: <BookOpen />, value: '50+', label: 'Study Materials' },
    { icon: <Award />, value: '1000+', label: 'Students' },
    { icon: <Ship />, value: '24/7', label: 'Access' },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ocean-deep via-ocean-mid to-ocean-bright opacity-50"></div>
        <Waves className="absolute top-20 right-10 w-64 h-64 text-foam/10 animate-pulse" />
        <Ship className="absolute bottom-10 left-10 w-96 h-96 text-ocean-bright/10 animate-float" />
        
        <div className="relative max-w-7xl mx-auto px-6 py-32">
          <div className="text-center space-y-8 animate-fadeInUp">
            <div className="inline-block">
              <div className="flex items-center gap-3 bg-rust/20 backdrop-blur-sm px-6 py-3 rounded-full border border-rust/50 mb-6">
                <Sparkles className="w-5 h-5 text-sand" />
                <span className="text-sand font-semibold tracking-wide">Welcome to Marine Engineering Hub</span>
              </div>
            </div>
            
            <h1 className="font-bebas text-7xl md:text-8xl tracking-wider leading-tight">
              <span className="block text-sand drop-shadow-2xl">Navigate Your</span>
              <span className="block text-gradient text-8xl md:text-9xl">Future</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-foam max-w-3xl mx-auto leading-relaxed font-light">
              Your comprehensive resource for marine engineering education. Access premium video lectures and study materials designed for aspiring marine engineers.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Link
                to="/videos"
                className="group px-10 py-5 bg-gradient-to-r from-rust to-anchor rounded-full font-bold text-lg uppercase tracking-wider shadow-2xl shadow-rust/50 hover:shadow-rust/70 transition-all duration-300 hover:scale-110 flex items-center justify-center gap-3"
              >
                Watch Videos
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link
                to="/materials"
                className="group px-10 py-5 bg-ocean-bright/20 backdrop-blur-sm border-2 border-foam rounded-full font-bold text-lg uppercase tracking-wider hover:bg-foam hover:text-ocean-deep transition-all duration-300 hover:scale-110 flex items-center justify-center gap-3"
              >
                Study Materials
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-ocean-mid/30 to-ocean-bright/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center space-y-4 p-6 rounded-2xl bg-ocean-deep/50 backdrop-blur-sm border border-foam/20 hover:border-rust transition-all duration-300 hover:scale-110 card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-rust to-anchor rounded-2xl flex items-center justify-center text-white shadow-lg shadow-rust/50">
                  {stat.icon}
                </div>
                <div className="font-bebas text-5xl text-sand">{stat.value}</div>
                <div className="text-foam font-semibold tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="font-bebas text-6xl text-sand mb-4 tracking-wider">
              Explore Resources
            </h2>
            <p className="text-xl text-foam">Everything you need to excel in marine engineering</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-ocean-mid/40 to-ocean-bright/40 backdrop-blur-sm border-2 border-foam/30 hover:border-rust transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-rust/30"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-rust/0 to-anchor/0 group-hover:from-rust/20 group-hover:to-anchor/20 transition-all duration-500"></div>
                
                <div className="relative p-12 space-y-6">
                  <div className={`w-24 h-24 bg-gradient-to-br ${feature.gradient} rounded-3xl flex items-center justify-center text-white shadow-xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500`}>
                    {feature.icon}
                  </div>
                  
                  <h3 className="font-bebas text-4xl text-sand tracking-wide">
                    {feature.title}
                  </h3>
                  
                  <p className="text-lg text-foam leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="flex items-center gap-3 text-rust font-bold group-hover:gap-5 transition-all duration-300">
                    <span className="uppercase tracking-wider">Explore Now</span>
                    <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gradient-to-br from-ocean-deep/50 to-ocean-mid/50 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-br from-ocean-bright/20 to-ocean-mid/20 backdrop-blur-xl rounded-3xl p-12 border-2 border-foam/30 shadow-2xl">
            <div className="flex items-center gap-4 mb-8">
              <Anchor className="w-12 h-12 text-rust" />
              <h2 className="font-bebas text-5xl text-sand tracking-wider">About This Hub</h2>
            </div>
            
            <div className="space-y-6 text-lg text-foam leading-relaxed">
              <p>
                Welcome to the <span className="text-sand font-semibold">Marine Engineering Hub</span>, your comprehensive resource for marine engineering education. This platform is designed specifically for students in marine colleges, providing curated video lectures and essential study materials to support your journey toward becoming a skilled marine engineer.
              </p>
              <p>
                All content is regularly updated to reflect the latest industry standards, regulations, and technological advances in maritime engineering. Navigate through our organized sections to find exactly what you need for your studies.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <span className="px-6 py-3 bg-rust/20 border border-rust/50 rounded-full text-sand font-semibold">
                Industry Standards
              </span>
              <span className="px-6 py-3 bg-rust/20 border border-rust/50 rounded-full text-sand font-semibold">
                Latest Technology
              </span>
              <span className="px-6 py-3 bg-rust/20 border border-rust/50 rounded-full text-sand font-semibold">
                Expert Curated
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
