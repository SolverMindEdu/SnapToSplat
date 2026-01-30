import { Upload, Compass, Cpu, Bot, Cog, Zap } from 'lucide-react';

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

export default function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Split Hero Section */}
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left Half - Archaeological Preservation */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center p-8 lg:p-12">
          <div className="max-w-xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-up">
              From snapshots to
              <br />
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                3D archaeological splats
              </span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 animate-fade-in-up animation-delay-200">
              Document ancient ruins, artifacts, and heritage sites with photos and videos. We digitally preserve them using Gaussian Splatting technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
              <button
                onClick={() => onNavigate('contribute')}
                className="px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold rounded-lg hover:from-amber-700 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 transform"
              >
                Start Documenting
              </button>
              <button
                onClick={() => onNavigate('explore')}
                className="px-8 py-4 bg-white text-amber-700 font-semibold rounded-lg hover:bg-amber-50 transition-all border-2 border-amber-600 hover:scale-105 transform"
              >
                Explore Archive
              </button>
            </div>

            {/* Archaeological Process Cards */}
            <div className="mt-12 space-y-4">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md hover:shadow-lg transition-all">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Upload className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Capture Sites</h3>
                    <p className="text-sm text-gray-600">30-80 photos/videos from all angles</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md hover:shadow-lg transition-all">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Compass className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Upload + Catalog</h3>
                    <p className="text-sm text-gray-600">Auto-extract GPS and metadata</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md hover:shadow-lg transition-all">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Cpu className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Generate 3D Splat</h3>
                    <p className="text-sm text-gray-600">AI-powered reconstruction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Half - Robot Design */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-8 lg:p-12 text-white">
          <div className="max-w-xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight animate-fade-in-up">
              Design & visualize
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                advanced robotics
              </span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 animate-fade-in-up animation-delay-200">
              Create, simulate, and prototype robotic systems with precision. From concept to reality using cutting-edge design tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
              <button
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 transform"
              >
                Start Designing
              </button>
              <button
                className="px-8 py-4 bg-slate-800 text-cyan-400 font-semibold rounded-lg hover:bg-slate-700 transition-all border-2 border-cyan-500 hover:scale-105 transform"
              >
                View Gallery
              </button>
            </div>

            {/* Robot Design Process Cards */}
            <div className="mt-12 space-y-4">
              <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-4 shadow-md hover:shadow-lg transition-all border border-slate-700">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Bot className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">CAD Modeling</h3>
                    <p className="text-sm text-slate-400">Precise 3D mechanical design</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-4 shadow-md hover:shadow-lg transition-all border border-slate-700">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Cog className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Kinematics Simulation</h3>
                    <p className="text-sm text-slate-400">Test movement and physics</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-4 shadow-md hover:shadow-lg transition-all border border-slate-700">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Deploy & Control</h3>
                    <p className="text-sm text-slate-400">Real-time system integration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Two powerful platforms, one mission
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Preserve cultural heritage through 3D scanning or design the future with advanced robotics tools
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Archaeological Feature */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border-2 border-amber-200 hover:border-amber-400 transition-all hover:shadow-xl">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center">
                <Upload className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Heritage Preservation</h3>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Join a global community documenting archaeological sites before they're lost to time. Every photo helps preserve our shared history.
            </p>
            <button
              onClick={() => onNavigate('about')}
              className="text-amber-700 font-semibold hover:text-amber-800 transition-colors inline-flex items-center"
            >
              Learn more about our mission →
            </button>
          </div>

          {/* Robotics Feature */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border-2 border-slate-700 hover:border-cyan-500 transition-all hover:shadow-xl">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Robot Innovation</h3>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Design, simulate, and prototype robotic systems with professional-grade CAD tools and real-time physics simulation.
            </p>
            <button
              className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors inline-flex items-center"
            >
              Explore robotics tools →
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-600 text-sm">
              &copy; 2026 Dual Innovation Platform. Heritage preservation & robotic design.
            </p>
            <div className="flex space-x-6">
              <button
                onClick={() => onNavigate('about')}
                className="text-sm text-gray-600 hover:text-amber-700 transition-colors"
              >
                About
              </button>
              <button className="text-sm text-gray-600 hover:text-cyan-600 transition-colors">
                Robotics
              </button>
              <button className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Privacy
              </button>
              <button className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
