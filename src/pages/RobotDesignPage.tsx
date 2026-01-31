import { Bot, ExternalLink, Play, Calendar, Users, CheckCircle, Rocket } from 'lucide-react';

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
                href="https://www.canva.com/design/DAG-QPkhC4M/GBV6xcfoEsWCCcwjb7eTGA/view?utm_content=DAG-QPkhC4M&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-all hover:scale-105 transform"
              >
                <span className="text-sm font-semibold">View Fullscreen</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="w-full bg-white overflow-hidden" style={{ position: 'relative', width: '100%', height: 0, paddingTop: '56.25%', paddingBottom: 0, boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', marginTop: '1.6em', marginBottom: '0.9em', borderRadius: '8px' }}>
            <iframe
              loading="lazy"
              style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, border: 'none', padding: 0, margin: 0 }}
              src="https://www.canva.com/design/DAG-QPkhC4M/GBV6xcfoEsWCCcwjb7eTGA/view?embed"
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
                          Rapid prototyping and development along with PID calibration and testing
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
                          Continued testing, and finalization
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
                          Final presentation and demonstration! Successfully completed a fully functional alpha and beta bot!
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
                    <h4 className="text-xl font-bold">Robot Design</h4>
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

        <div className="mt-16 pb-8 flex flex-col items-center justify-center gap-4">
          <img
            src="/52736_solvers_of_x&y_logo.png"
            alt="Solvers of X and Y Logo"
            className="w-32 h-32 object-contain"
          />
          <p className="text-gray-600 text-lg font-medium">
            Made by Team 52777 Solvers of X & Y
          </p>
        </div>
      </div>
    </div>
  );
}
