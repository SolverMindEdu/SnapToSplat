import { Camera, Globe, Users, Zap, Sparkles, Box, Scissors } from 'lucide-react';

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
                Archaeologists and travelers capture sites from multiple angles using photos and videos, creating comprehensive datasets of ruins, artifacts, and inscriptions.
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
                Advanced neural rendering technology processes photos and videos into detailed 3D reconstructions, preserving textures and structural details.
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

        {/* What is 3D Gaussian Splatting */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg border border-blue-200 p-8 mb-12 animate-fade-in-up animation-delay-800">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What is 3D Gaussian Splatting?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            3D Gaussian Splatting (3DGS) is a revolutionary technique for real-time radiance field rendering. Instead of using neural networks like NeRF, it represents scenes as millions of 3D Gaussians that can be rendered extremely fast using rasterization.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Major tech companies are investing heavily in this technology because it enables photorealistic 3D content creation from just photos or videos, with applications in gaming, VR/AR, digital twins, and more.
          </p>
        </div>

        {/* 3D GS Trend */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center animate-fade-in-up animation-delay-1000">
            3D GS Trend
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-1000">
            Explore the leading companies and research teams pushing the boundaries of 3D Gaussian Splatting technology. From tech giants to specialized startups, see who's shaping the future of 3D reconstruction.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Microsoft TRELLIS 2 */}
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-xl hover:-translate-y-1 transition-all transform animate-fade-in-up animation-delay-1000">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Microsoft</h3>
                  <p className="text-sm text-gray-500">TRELLIS 2</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                AI that turns photos and videos into full 3D scenes. Best for rebuilding real environments with photorealistic quality.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>Photo-to-3D</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>Video-to-3D</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>Real environments</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>Full scene reconstruction</span>
                </div>
              </div>
            </div>

            {/* Apple Sharp 3D */}
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-xl hover:-translate-y-1 transition-all transform animate-fade-in-up animation-delay-1200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Box className="w-6 h-6 text-gray-700" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Apple</h3>
                  <p className="text-sm text-gray-500">Sharp 3D</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                AI that makes super clean, sharp 3D models. Best for high-quality meshes and product scans with exceptional detail.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
                  <span>High-quality meshes</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
                  <span>Product scans</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
                  <span>Sharp details</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
                  <span>Clean output</span>
                </div>
              </div>
            </div>

            {/* Meta SAM 3D */}
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-xl hover:-translate-y-1 transition-all transform animate-fade-in-up animation-delay-1400">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Scissors className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Meta</h3>
                  <p className="text-sm text-gray-500">SAM 3D</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                AI that selects and isolates objects in 3D. Best for cutting objects out of 3D scenes and precise object manipulation.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>3D object selection</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>Object isolation</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>Scene editing</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>Precise cutting</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 text-center text-white animate-fade-in-up animation-delay-1600 hover:shadow-2xl transition-shadow">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Document History?
          </h2>
          <p className="text-amber-50 mb-6 max-w-2xl mx-auto">
            Turn your site photos and videos into permanent 3D records. Join archaeologists and heritage enthusiasts preserving our shared past.
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
