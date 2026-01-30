import { Bot, Cpu, Zap, ArrowRight } from 'lucide-react';

interface RobotDesignPageProps {
  onNavigate: (page: string) => void;
}

export default function RobotDesignPage({ onNavigate }: RobotDesignPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50/30 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-slate-600 to-slate-800 rounded-2xl mb-6 shadow-lg">
            <Bot className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Robot Design
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Engineering innovation through rapid prototyping and collaborative design
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden mb-12 animate-fade-in-up animation-delay-200">
          <div className="aspect-video w-full bg-gray-100 flex items-center justify-center">
            <iframe
              src="https://www.canva.com/design/DAG-QPkhC4M/NzFsxsb0nJNy-cNwtEEhoQ/view?embed"
              className="w-full h-full"
              title="Robot Design"
              allowFullScreen
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-md border border-slate-100 p-6 hover:shadow-lg hover:-translate-y-1 transition-all transform animate-fade-in-up animation-delay-400">
            <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
              <Cpu className="w-6 h-6 text-slate-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Intelligent Systems
            </h3>
            <p className="text-gray-600 text-sm">
              Advanced sensors and AI-powered navigation for autonomous archaeological site documentation.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md border border-slate-100 p-6 hover:shadow-lg hover:-translate-y-1 transition-all transform animate-fade-in-up animation-delay-500">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Bot className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Modular Architecture
            </h3>
            <p className="text-gray-600 text-sm">
              Flexible design allowing for quick adaptations to different terrain and documentation needs.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md border border-slate-100 p-6 hover:shadow-lg hover:-translate-y-1 transition-all transform animate-fade-in-up animation-delay-600">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Rapid Development
            </h3>
            <p className="text-gray-600 text-sm">
              Built in just 10 days through intense collaboration and innovative problem-solving.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-700 to-slate-900 rounded-2xl p-10 text-center text-white animate-fade-in-up animation-delay-700 hover:shadow-2xl transition-shadow">
          <h2 className="text-3xl font-bold mb-4">
            Want to See How We Built It?
          </h2>
          <p className="text-slate-200 mb-8 max-w-2xl mx-auto text-lg">
            Discover our journey from concept to reality. See how two teams collaborated to build a fully functional robot in just 10 days.
          </p>
          <button
            onClick={() => onNavigate('journey')}
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-slate-800 font-bold rounded-lg hover:bg-slate-50 transition-all shadow-lg hover:scale-105 transform text-lg"
          >
            View Our Journey
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
