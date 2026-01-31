import { Calendar, Users, CheckCircle, Rocket } from 'lucide-react';

interface JourneyPageProps {
  onNavigate: (page: string) => void;
}

export default function JourneyPage({ onNavigate }: JourneyPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50/30 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl mb-6 shadow-lg">
            <Rocket className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Robot in 10 Days
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            An incredible journey of innovation, collaboration, and determination
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center animate-fade-in-up animation-delay-200">
            The Timeline
          </h2>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-emerald-500 to-teal-600"></div>

            <div className="space-y-12">
              <div className="relative animate-fade-in-up animation-delay-400">
                <div className="flex items-center justify-between">
                  <div className="w-5/12 text-right pr-8">
                    <div className="bg-white rounded-xl shadow-md border border-emerald-100 p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-center justify-end gap-2 mb-2">
                        <h3 className="text-xl font-bold text-gray-900">Day 1-2</h3>
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

              <div className="relative animate-fade-in-up animation-delay-500">
                <div className="flex items-center justify-between">
                  <div className="w-5/12"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-teal-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                    <Rocket className="w-4 h-4 text-white" />
                  </div>
                  <div className="w-5/12 pl-8">
                    <div className="bg-white rounded-xl shadow-md border border-teal-100 p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-5 h-5 text-teal-600" />
                        <h3 className="text-xl font-bold text-gray-900">Day 3-7</h3>
                      </div>
                      <p className="text-gray-600">
                        Rapid prototyping and development. Both teams worked in parallel on mechanical systems, electronics, and software integration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative animate-fade-in-up animation-delay-600">
                <div className="flex items-center justify-between">
                  <div className="w-5/12 text-right pr-8">
                    <div className="bg-white rounded-xl shadow-md border border-emerald-100 p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-center justify-end gap-2 mb-2">
                        <h3 className="text-xl font-bold text-gray-900">Day 8-9</h3>
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

              <div className="relative animate-fade-in-up animation-delay-700">
                <div className="flex items-center justify-between">
                  <div className="w-5/12"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full border-4 border-white shadow-xl flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-5/12 pl-8">
                    <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-5 h-5" />
                        <h3 className="text-xl font-bold">Day 10</h3>
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

        <div className="mb-12 animate-fade-in-up animation-delay-800">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Team Presentations
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold">Solversmind</h3>
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
                    <h3 className="text-xl font-bold">Solversmine</h3>
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

        <div className="mb-12 animate-fade-in-up animation-delay-900">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Overall Robot Design
          </h2>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-shadow max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold">Solvers of X and Y Robot Design</h3>
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

        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-10 text-center text-white animate-fade-in-up animation-delay-1000 hover:shadow-2xl transition-shadow">
          <h2 className="text-3xl font-bold mb-4">
            The Power of Collaboration
          </h2>
          <p className="text-emerald-50 mb-8 max-w-2xl mx-auto text-lg">
            What seemed impossible became reality through teamwork, determination, and innovative thinking. This same spirit drives our mission to preserve archaeological heritage.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => onNavigate('robot-design')}
              className="px-8 py-4 bg-white text-emerald-700 font-semibold rounded-lg hover:bg-emerald-50 transition-all shadow-lg hover:scale-105 transform"
            >
              ← Back to Design
            </button>
            <button
              onClick={() => onNavigate('contribute')}
              className="px-8 py-4 bg-emerald-800 text-white font-semibold rounded-lg hover:bg-emerald-900 transition-all shadow-lg hover:scale-105 transform"
            >
              Join Our Mission →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
