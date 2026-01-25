import { Camera } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  return (
    <nav className="bg-white shadow-sm border-b border-amber-100 animate-slide-down">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-2 text-xl font-semibold text-gray-900 hover:text-amber-700 transition-all hover:scale-105 transform"
          >
            <Camera className="w-6 h-6 text-amber-600 transition-transform hover:rotate-12" />
            <span className="bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent">
              Snap to Splat
            </span>
          </button>

          <div className="flex space-x-6">
            <button
              onClick={() => onNavigate('explore')}
              className={`text-sm font-medium transition-all hover:scale-110 transform ${
                currentPage === 'explore'
                  ? 'text-amber-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Explore
            </button>
            <button
              onClick={() => onNavigate('contribute')}
              className={`text-sm font-medium transition-all hover:scale-110 transform ${
                currentPage === 'contribute'
                  ? 'text-amber-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Contribute
            </button>
            <button
              onClick={() => onNavigate('about')}
              className={`text-sm font-medium transition-all hover:scale-110 transform ${
                currentPage === 'about'
                  ? 'text-amber-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              About
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
