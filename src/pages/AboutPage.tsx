import { Camera, Globe, Users, Zap } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/30 to-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About Snap to Splat
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Documenting archaeological heritage through crowdsourced photogrammetry and 3D Gaussian Splatting.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-amber-200 p-8 mb-12 animate-fade-in-up animation-delay-200 hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Archaeological sites worldwide face threats from climate change, conflict, and natural decay. Snap to Splat empowers archaeologists, travelers, and heritage enthusiasts to create lasting digital records.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Your photographs become permanent 3D archives that researchers, educators, and future archaeologists can study, regardless of what happens to the physical site.
          </p>
        </div>

        {/* How It Works */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center animate-fade-in-up animation-delay-400">
            The Technology Behind Snap to Splat
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-md border border-amber-100 p-6 hover:shadow-lg hover:-translate-y-1 transition-all transform animate-fade-in-up animation-delay-400">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Camera className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Field Documentation
              </h3>
              <p className="text-gray-600">
                Archaeologists and travelers capture sites from multiple angles, creating comprehensive photographic datasets of ruins, artifacts, and inscriptions.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-amber-100 p-6 hover:shadow-lg hover:-translate-y-1 transition-all transform animate-fade-in-up animation-delay-400">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Gaussian Splatting
              </h3>
              <p className="text-gray-600">
                Advanced neural rendering technology processes photographs into detailed 3D reconstructions, preserving textures and structural details.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-amber-100 p-6 hover:shadow-lg hover:-translate-y-1 transition-all transform animate-fade-in-up animation-delay-600">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Digital Archive
              </h3>
              <p className="text-gray-600">
                All splats are cataloged by location and date, creating a searchable global database of archaeological heritage.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-amber-100 p-6 hover:shadow-lg hover:-translate-y-1 transition-all transform animate-fade-in-up animation-delay-600">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Community Driven
              </h3>
              <p className="text-gray-600">
                From professional archaeologists to curious travelers, everyone contributes to building the world's archaeological memory.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 text-center text-white animate-fade-in-up animation-delay-600 hover:shadow-2xl transition-shadow">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Document History?
          </h2>
          <p className="text-amber-50 mb-6 max-w-2xl mx-auto">
            Turn your site photographs into permanent 3D records. Join archaeologists and heritage enthusiasts preserving our shared past.
          </p>
          <button
            onClick={() => onNavigate('contribute')}
            className="px-8 py-4 bg-white text-amber-700 font-semibold rounded-lg hover:bg-amber-50 transition-all shadow-lg hover:scale-105 transform"
          >
            Start Documenting
          </button>
        </div>
      </div>
    </div>
  );
}
