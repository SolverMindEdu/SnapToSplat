import { Bot, Cpu, Layers, Zap, ExternalLink, Play, Calendar, Users, CheckCircle, Rocket } from 'lucide-react';

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
                <span className="text-sm font-semibold">View Fullscreen</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="w-full bg-white overflow-hidden" style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
            <iframe
              loading="lazy"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
              src="https://www.canva.com/design/DAG-QPkhC4M/view?embed"
              allowFullScreen
              allow="fullscreen"
            />
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

        <div className="mt-20 mb-16">
          <div className="text-center mb-12 animate-fade-in-up animation-delay-1100">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl mb-4 shadow-lg">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              The Journey Behind the Design
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we built this incredible robot in just 10 days through teamwork, innovation, and determination
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              The Timeline
            </h3>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-emerald-500 to-teal-600"></div>

              <div className="space-y-12">
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="w-5/12 text-right pr-8">
                      <div className="bg-white rounded-xl shadow-md border border-emerald-100 p-6 hover:shadow-lg transition-shadow">
                        <div className="flex items-center justify-end gap-2 mb-2">
                          <h4 className="text-xl font-bold text-gray-900">Day 1-2</h4>
                          <Calendar className="w-5 h-5 text-emerald-600" />
                        </div>
                        <p className="text-gray-600">
                          Team formation and strategy planning. Split into two specialized teams to tackle different components simultaneously.
                        </p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-emerald-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <div className="w-5/12"></div>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="w-5/12"></div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-teal-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                      <Rocket className="w-4 h-4 text-white" />
                    </div>
                    <div className="w-5/12 pl-8">
                      <div className="bg-white rounded-xl shadow-md border border-teal-100 p-6 hover:shadow-lg transition-shadow">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="w-5 h-5 text-teal-600" />
                          <h4 className="text-xl font-bold text-gray-900">Day 3-7</h4>
                        </div>
                        <p className="text-gray-600">
                          Rapid prototyping and development. Both teams worked in parallel on mechanical systems, electronics, and software integration.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="w-5/12 text-right pr-8">
                      <div className="bg-white rounded-xl shadow-md border border-emerald-100 p-6 hover:shadow-lg transition-shadow">
                        <div className="flex items-center justify-end gap-2 mb-2">
                          <h4 className="text-xl font-bold text-gray-900">Day 8-9</h4>
                          <Calendar className="w-5 h-5 text-emerald-600" />
                        </div>
                        <p className="text-gray-600">
                          Testing, debugging, and refinement. Integration of both team's work and rigorous testing in real-world conditions.
                        </p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-emerald-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div className="w-5/12"></div>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="w-5/12"></div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full border-4 border-white shadow-xl flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div className="w-5/12 pl-8">
                      <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow text-white">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="w-5 h-5" />
                          <h4 className="text-xl font-bold">Day 10</h4>
                        </div>
                        <p className="text-emerald-50">
                          Final presentation and demonstration! Successfully completed a fully functional robot ready for field testing.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Team Presentations
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-4 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xl font-bold">Solversmind</h4>
                    </div>
                    <a
                      href="https://www.canva.com/design/DAGxNpFBbgs/Q7keAV9kze4vUdh055TSkQ/view"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-1.5 bg-white/20 hover:bg-white/30 rounded-lg transition-all"
                    >
                      <span className="text-xs font-semibold">View</span>
                    </a>
                  </div>
                </div>
                <div className="aspect-video w-full bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center p-6">
                  <a
                    href="https://www.canva.com/design/DAGxNpFBbgs/Q7keAV9kze4vUdh055TSkQ/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all hover:scale-105 transform"
                  >
                    <span>Open Presentation</span>
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 p-4 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xl font-bold">Solversmine</h4>
                    </div>
                    <a
                      href="https://www.canva.com/design/DAGw1r2Ykxw/hB13zw-aTUVcAwD03nsyRQ/view"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-1.5 bg-white/20 hover:bg-white/30 rounded-lg transition-all"
                    >
                      <span className="text-xs font-semibold">View</span>
                    </a>
                  </div>
                </div>
                <div className="aspect-video w-full bg-gradient-to-br from-violet-50 to-fuchsia-50 flex items-center justify-center p-6">
                  <a
                    href="https://www.canva.com/design/DAGw1r2Ykxw/hB13zw-aTUVcAwD03nsyRQ/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all hover:scale-105 transform"
                  >
                    <span>Open Presentation</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Overall Robot Design
            </h3>

            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-shadow max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xl font-bold">Solvers of X and Y Robot Design</h4>
                  </div>
                  <a
                    href="https://www.canva.com/design/DAG-QPkhC4M/GBV6xcfoEsWCCcwjb7eTGA/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-1.5 bg-white/20 hover:bg-white/30 rounded-lg transition-all"
                  >
                    <span className="text-xs font-semibold">View</span>
                  </a>
                </div>
              </div>
              <div className="aspect-video w-full bg-gradient-to-br from-orange-50 to-red-50 flex items-center justify-center p-6">
                <a
                  href="https://www.canva.com/design/DAG-QPkhC4M/GBV6xcfoEsWCCcwjb7eTGA/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all hover:scale-105 transform"
                >
                  <span>Open Presentation</span>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-10 text-center text-white hover:shadow-2xl transition-shadow">
            <h3 className="text-3xl font-bold mb-4">
              The Power of Collaboration
            </h3>
            <p className="text-emerald-50 mb-0 max-w-2xl mx-auto text-lg">
              What seemed impossible became reality through teamwork, determination, and innovative thinking. This same spirit drives our mission to preserve archaeological heritage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
