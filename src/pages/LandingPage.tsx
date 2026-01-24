import { Upload, Compass, Cpu } from 'lucide-react';

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

export default function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/30 to-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            From snapshots to
            <br />
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              3D archaeological splats
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Document ancient ruins, artifacts, and heritage sites. We digitally preserve them using Gaussian Splatting technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('contribute')}
              className="px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold rounded-lg hover:from-amber-700 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl"
            >
              Start Documenting
            </button>
            <button
              onClick={() => onNavigate('explore')}
              className="px-8 py-4 bg-white text-amber-700 font-semibold rounded-lg hover:bg-amber-50 transition-colors border-2 border-amber-600"
            >
              Explore Archive
            </button>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Document archaeological sites in three steps
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow border border-amber-100">
            <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
              <Upload className="w-7 h-7 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Photograph the Site
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Capture 30-80 photos from multiple angles. Circle the ruins, artifacts, or carvings to document every detail.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow border border-amber-100">
            <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
              <Compass className="w-7 h-7 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Upload + Catalog
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Upload your photos and verify the location. We automatically extract GPS coordinates and capture dates.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow border border-amber-100">
            <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
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
