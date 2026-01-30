import { Bot, Cpu, Layers, Zap, ExternalLink, ArrowRight, Play } from 'lucide-react';

interface RobotDesignPageProps {
  onNavigate: (page: string) => void;
}

export default function RobotDesignPage({ onNavigate }: RobotDesignPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50/30 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl mb-6 shadow-lg">
            <Bot className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Robot Design
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Autonomous systems for archaeological site documentation
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden mb-12 animate-fade-in-up animation-delay-200">
          <div className="bg-gradient-to-r from-slate-700 to-slate-900 p-6 text-white">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Design Documentation</h2>
              <a
                href="https://www.canva.com/design/DAG-QPkhC4M/NzFsxsb0nJNy-cNwtEEhoQ/view"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-all hover:scale-105 transform"
              >
                <span className="text-sm font-semibold">View Full Design</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="aspect-video w-full bg-gradient-to-br from-slate-50 to-gray-100 flex items-center justify-center p-8">
            <div className="text-center">
              <a
                href="https://www.canva.com/design/DAG-QPkhC4M/NzFsxsb0nJNy-cNwtEEhoQ/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-slate-700 to-slate-900 text-white font-semibold rounded-xl hover:shadow-lg transition-all hover:scale-105 transform"
              >
                <Bot className="w-5 h-5" />
                <span>Open Robot Design</span>
                <ExternalLink className="w-5 h-5" />
              </a>
              <p className="mt-4 text-gray-600 text-sm">Click to view our complete robot design documentation</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden mb-12 animate-fade-in-up animation-delay-300">
          <div className="bg-gradient-to-r from-red-600 to-rose-600 p-6 text-white">
            <div className="flex items-center justify-center gap-3">
              <Play className="w-6 h-6" />
              <h2 className="text-2xl font-bold">See It In Action</h2>
            </div>
          </div>
          <div className="aspect-video w-full bg-black">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/AoqryoRjqNc"
              title="Robot Design Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg border border-slate-100 p-6 hover:shadow-xl transition-all hover:scale-105 transform animate-fade-in-up animation-delay-400">
            <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
              <Cpu className="w-6 h-6 text-slate-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Intelligent Systems</h3>
            <p className="text-gray-600 text-sm">
              Advanced computer vision and AI for autonomous navigation and optimal photo capture angles.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-blue-100 p-6 hover:shadow-xl transition-all hover:scale-105 transform animate-fade-in-up animation-delay-500">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Layers className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Modular Design</h3>
            <p className="text-gray-600 text-sm">
              Adaptable architecture that can be configured for different terrain types and site conditions.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-emerald-100 p-6 hover:shadow-xl transition-all hover:scale-105 transform animate-fade-in-up animation-delay-600">
            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Rapid Deployment</h3>
            <p className="text-gray-600 text-sm">
              Quick setup and operation, designed for efficiency in remote archaeological locations.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-amber-100 p-6 hover:shadow-xl transition-all hover:scale-105 transform animate-fade-in-up animation-delay-700">
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
              <Bot className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Autonomous</h3>
            <p className="text-gray-600 text-sm">
              Self-sufficient operation with minimal human intervention for consistent documentation quality.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl p-8 text-white shadow-xl animate-fade-in-up animation-delay-800">
            <h3 className="text-2xl font-bold mb-4">Key Features</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span>360-degree camera system for comprehensive coverage</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span>GPS and SLAM for precise positioning and mapping</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span>Weather-resistant design for outdoor operation</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span>Real-time data processing and upload capabilities</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 animate-fade-in-up animation-delay-900">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Technical Specifications</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
                </div>
                <span className="text-gray-700">High-resolution multi-camera array</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <span className="text-gray-700">Embedded AI processing unit</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                </div>
                <span className="text-gray-700">All-terrain mobility system</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                </div>
                <span className="text-gray-700">Extended battery life for full-day operation</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-700 to-slate-900 rounded-2xl p-10 text-center text-white animate-fade-in-up animation-delay-1100 hover:shadow-2xl transition-shadow">
          <h2 className="text-3xl font-bold mb-4">
            The Journey Behind the Design
          </h2>
          <p className="text-slate-200 mb-8 max-w-2xl mx-auto text-lg">
            Discover how we built this incredible robot in just 10 days through teamwork, innovation, and determination.
          </p>
          <button
            onClick={() => onNavigate('journey')}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-800 font-semibold rounded-lg hover:bg-slate-50 transition-all shadow-lg hover:scale-105 transform"
          >
            <span>View Our Journey</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
