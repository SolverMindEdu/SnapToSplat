import { Upload, Compass, Cpu, Lightbulb, Bot } from 'lucide-react';

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

export default function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/30 to-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-up">
            From snapshots to
            <br />
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              3D archaeological splats
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Document ancient ruins, artifacts, and heritage sites with photos and videos. We digitally preserve them using Gaussian Splatting technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
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
        </div>
      </div>

      {/* How It Works Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 animate-fade-in-up">
          Document archaeological sites in three steps
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all border border-amber-100 hover:-translate-y-2 transform animate-fade-in-up animation-delay-200">
            <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Upload className="w-7 h-7 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Capture the Site
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Take 30-80 photos or videos from multiple angles. Circle the ruins, artifacts, or carvings to document every detail.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all border border-amber-100 hover:-translate-y-2 transform animate-fade-in-up animation-delay-400">
            <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Compass className="w-7 h-7 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Upload + Catalog
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Upload your photos and videos, then verify the location. We automatically extract GPS coordinates and capture dates.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all border border-amber-100 hover:-translate-y-2 transform animate-fade-in-up animation-delay-600">
            <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Cpu className="w-7 h-7 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              We Create a Splat
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our system generates a 3D Gaussian Splat reconstruction, preserving the site digitally for future generations.
            </p>
          </div>
        </div>
      </div>

      {/* Two Presentation Canvases */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Innovation Presentation */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-12 shadow-2xl hover:shadow-3xl transition-all hover:-translate-y-1 transform min-h-[500px] flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Innovation
              </h2>
              <p className="text-blue-100 text-lg leading-relaxed mb-8">
                Pioneering new technologies and methodologies for cultural preservation. Our Gaussian Splatting approach revolutionizes how we capture and store archaeological data.
              </p>
              <ul className="space-y-4 text-blue-50">
                <li className="flex items-start">
                  <span className="mr-3 text-2xl">•</span>
                  <span>AI-powered 3D reconstruction from 2D images</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-2xl">•</span>
                  <span>Real-time processing and cloud storage</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-2xl">•</span>
                  <span>Open-source collaboration framework</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-2xl">•</span>
                  <span>Accessible to researchers worldwide</span>
                </li>
              </ul>
            </div>
            <button className="mt-8 px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-all self-start">
              Learn More
            </button>
          </div>

          {/* Robot Design Presentation */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-12 shadow-2xl hover:shadow-3xl transition-all hover:-translate-y-1 transform min-h-[500px] flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm border border-cyan-500/30">
                <Bot className="w-8 h-8 text-cyan-400" />
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Robot Design
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                Advanced robotics for automated site documentation. Our autonomous systems can navigate challenging terrain and capture comprehensive archaeological data.
              </p>
              <ul className="space-y-4 text-slate-200">
                <li className="flex items-start">
                  <span className="mr-3 text-2xl text-cyan-400">•</span>
                  <span>Autonomous navigation and mapping</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-2xl text-cyan-400">•</span>
                  <span>Multi-sensor data collection systems</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-2xl text-cyan-400">•</span>
                  <span>Precision movement for optimal angles</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-2xl text-cyan-400">•</span>
                  <span>Weather-resistant field deployment</span>
                </li>
              </ul>
            </div>
            <button className="mt-8 px-6 py-3 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition-all self-start">
              View Designs
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-amber-200 mt-20 bg-gradient-to-b from-white to-amber-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-600 text-sm">
              &copy; 2026 Snap to Splat. Digitally preserving archaeological heritage.
            </p>
            <div className="flex space-x-6">
              <button
                onClick={() => onNavigate('about')}
                className="text-sm text-gray-600 hover:text-amber-700 transition-colors"
              >
                About
              </button>
              <button className="text-sm text-gray-600 hover:text-amber-700 transition-colors">
                Privacy
              </button>
              <button className="text-sm text-gray-600 hover:text-amber-700 transition-colors">
                Contact
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
