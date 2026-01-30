import { Lightbulb, Target, Users, TrendingUp, ExternalLink, ArrowRight } from 'lucide-react';

interface InnovationCanvasPageProps {
  onNavigate: (page: string) => void;
}

export default function InnovationCanvasPage({ onNavigate }: InnovationCanvasPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/30 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl mb-6 shadow-lg">
            <Lightbulb className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Innovation Canvas
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our strategic approach to preserving archaeological heritage through technology
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden mb-12 animate-fade-in-up animation-delay-200">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-6 text-white">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Strategic Overview</h2>
              <a
                href="https://www.canva.com/design/DAG1ru_8NvE/v4jIaYOJUSG2kIuHklWsqA/view"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-all hover:scale-105 transform"
              >
                <span className="text-sm font-semibold">View Full Canvas</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="aspect-video w-full bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center p-8">
            <div className="text-center">
              <a
                href="https://www.canva.com/design/DAG1ru_8NvE/v4jIaYOJUSG2kIuHklWsqA/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all hover:scale-105 transform"
              >
                <Lightbulb className="w-5 h-5" />
                <span>Open Innovation Canvas</span>
                <ExternalLink className="w-5 h-5" />
              </a>
              <p className="mt-4 text-gray-600 text-sm">Click to view our complete innovation strategy</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg border border-blue-100 p-6 hover:shadow-xl transition-all hover:scale-105 transform animate-fade-in-up animation-delay-300">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Problem</h3>
            <p className="text-gray-600 text-sm">
              Archaeological sites worldwide face deterioration and loss. Traditional documentation methods are time-consuming and limited.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-cyan-100 p-6 hover:shadow-xl transition-all hover:scale-105 transform animate-fade-in-up animation-delay-400">
            <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
              <Lightbulb className="w-6 h-6 text-cyan-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Solution</h3>
            <p className="text-gray-600 text-sm">
              Crowdsourced 3D documentation using photogrammetry and Gaussian Splatting to create immersive digital twins.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-emerald-100 p-6 hover:shadow-xl transition-all hover:scale-105 transform animate-fade-in-up animation-delay-500">
            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Community</h3>
            <p className="text-gray-600 text-sm">
              Engaging tourists, archaeologists, and heritage enthusiasts worldwide to contribute to preservation efforts.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-amber-100 p-6 hover:shadow-xl transition-all hover:scale-105 transform animate-fade-in-up animation-delay-600">
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Impact</h3>
            <p className="text-gray-600 text-sm">
              Creating accessible digital archives that preserve cultural heritage for future generations and enable virtual exploration.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-8 text-white shadow-xl animate-fade-in-up animation-delay-700">
            <h3 className="text-2xl font-bold mb-4">Key Benefits</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span>Democratize heritage preservation through crowdsourcing</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span>Create high-fidelity 3D models accessible from anywhere</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span>Enable research and education without physical site visits</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span>Preserve cultural heritage against natural deterioration</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 animate-fade-in-up animation-delay-800">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Technology Stack</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <span className="text-gray-700">Photogrammetry for 3D reconstruction</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                </div>
                <span className="text-gray-700">Gaussian Splatting for real-time rendering</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                </div>
                <span className="text-gray-700">Cloud processing and storage infrastructure</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                </div>
                <span className="text-gray-700">Web-based platform for global accessibility</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-10 text-center text-white animate-fade-in-up animation-delay-1000 hover:shadow-2xl transition-shadow">
          <h2 className="text-3xl font-bold mb-4">
            From Innovation to Implementation
          </h2>
          <p className="text-blue-50 mb-8 max-w-2xl mx-auto text-lg">
            Our strategic vision led to the development of advanced robotics for automated site documentation. Discover how we turned this concept into reality.
          </p>
          <button
            onClick={() => onNavigate('robot-design')}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-all shadow-lg hover:scale-105 transform"
          >
            <span>Explore Robot Design</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
