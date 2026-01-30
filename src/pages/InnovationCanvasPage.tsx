import { Lightbulb, Target, Users, Zap } from 'lucide-react';

interface InnovationCanvasPageProps {
  onNavigate: (page: string) => void;
}

export default function InnovationCanvasPage({ onNavigate }: InnovationCanvasPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/30 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Innovation Canvas
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our strategic approach to revolutionizing archaeological documentation through 3D Gaussian Splatting
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden animate-fade-in-up animation-delay-200">
          <div className="aspect-video w-full bg-gray-100 flex items-center justify-center">
            <iframe
              src="https://www.canva.com/design/DAG1ru_8NvE/v4jIaYOJUSG2kIuHklWsqA/view?embed"
              className="w-full h-full"
              title="Innovation Canvas"
              allowFullScreen
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <div className="bg-white rounded-xl shadow-md border border-blue-100 p-6 hover:shadow-lg hover:-translate-y-1 transition-all transform animate-fade-in-up animation-delay-400">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Lightbulb className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Problem
            </h3>
            <p className="text-gray-600 text-sm">
              Archaeological sites are at risk of being lost forever due to climate change, conflict, and natural decay.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md border border-blue-100 p-6 hover:shadow-lg hover:-translate-y-1 transition-all transform animate-fade-in-up animation-delay-500">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Solution
            </h3>
            <p className="text-gray-600 text-sm">
              Crowdsourced 3D documentation using photos and videos transformed into permanent digital archives.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md border border-blue-100 p-6 hover:shadow-lg hover:-translate-y-1 transition-all transform animate-fade-in-up animation-delay-600">
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Users
            </h3>
            <p className="text-gray-600 text-sm">
              Archaeologists, researchers, heritage enthusiasts, and travelers who care about preserving history.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md border border-blue-100 p-6 hover:shadow-lg hover:-translate-y-1 transition-all transform animate-fade-in-up animation-delay-700">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Technology
            </h3>
            <p className="text-gray-600 text-sm">
              3D Gaussian Splatting and neural rendering for photorealistic reconstruction from simple photos.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center animate-fade-in-up animation-delay-800">
          <button
            onClick={() => onNavigate('robot-design')}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-xl transition-all hover:scale-105 transform"
          >
            View Robot Design →
          </button>
        </div>
      </div>
    </div>
  );
}
