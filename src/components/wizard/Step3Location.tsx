import { useState, useEffect, useRef } from 'react';
import { MapPin, Search } from 'lucide-react';
import { PhotoFile, ContributionFormData, LocationCandidate } from '../../types';

interface Step3LocationProps {
  photos: PhotoFile[];
  formData: ContributionFormData;
  onLocationConfirm: (location: { latitude: number; longitude: number; name: string }) => void;
  onBack: () => void;
}

declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

export default function Step3Location({
  photos,
  formData,
  onLocationConfirm,
  onBack
}: Step3LocationProps) {
  const [candidates, setCandidates] = useState<LocationCandidate[]>([]);
  const [selectedCandidate, setSelectedCandidate] = useState<string | null>(null);
  const [showCustomSearch, setShowCustomSearch] = useState(false);
  const [customLocation, setCustomLocation] = useState('');
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markerRef = useRef<any>(null);

  useEffect(() => {
    generateLocationCandidates();
    loadGoogleMaps();
  }, []);

  useEffect(() => {
    if (mapLoaded && selectedCandidate) {
      const selected = candidates.find(c => c.id === selectedCandidate);
      if (selected) {
        updateMap(selected.latitude, selected.longitude);
      }
    }
  }, [selectedCandidate, mapLoaded, candidates]);

  const loadGoogleMaps = () => {
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

    if (!apiKey || apiKey === 'YOUR_GOOGLE_MAPS_API_KEY') {
      console.warn('Google Maps API key not configured');
      setMapLoaded(true);
      return;
    }

    if (window.google) {
      setMapLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
    script.async = true;
    script.defer = true;
    script.onload = () => setMapLoaded(true);
    document.head.appendChild(script);
  };

  const updateMap = (lat: number, lng: number) => {
    if (!mapRef.current || !window.google) return;

    if (!mapInstanceRef.current) {
      mapInstanceRef.current = new window.google.maps.Map(mapRef.current, {
        center: { lat, lng },
        zoom: 15,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
      });
    } else {
      mapInstanceRef.current.setCenter({ lat, lng });
    }

    if (markerRef.current) {
      markerRef.current.setMap(null);
    }

    markerRef.current = new window.google.maps.Marker({
      position: { lat, lng },
      map: mapInstanceRef.current,
      title: 'Heritage Site Location',
    });
  };

  const generateLocationCandidates = () => {
    const photosWithGPS = photos.filter(
      p => p.metadata?.latitude && p.metadata?.longitude
    );

    const mockCandidates: LocationCandidate[] = [];

    if (photosWithGPS.length > 0) {
      const avgLat = photosWithGPS.reduce((sum, p) => sum + (p.metadata?.latitude || 0), 0) / photosWithGPS.length;
      const avgLng = photosWithGPS.reduce((sum, p) => sum + (p.metadata?.longitude || 0), 0) / photosWithGPS.length;

      mockCandidates.push({
        id: '1',
        name: formData.siteName || `Historical Site in ${formData.cityRegion || formData.country}`,
        address: `${formData.cityRegion ? formData.cityRegion + ', ' : ''}${formData.country}`,
        latitude: avgLat,
        longitude: avgLng,
        confidence: 95
      });

      mockCandidates.push({
        id: '2',
        name: `${formData.subjectType} near ${formData.cityRegion || formData.country}`,
        address: `${formData.cityRegion ? formData.cityRegion + ', ' : ''}${formData.country}`,
        latitude: avgLat + 0.001,
        longitude: avgLng + 0.001,
        confidence: 78
      });
    } else {
      mockCandidates.push({
        id: '1',
        name: formData.siteName || `Site in ${formData.country}`,
        address: `${formData.cityRegion ? formData.cityRegion + ', ' : ''}${formData.country}`,
        latitude: 41.8902,
        longitude: 12.4922,
        confidence: 65
      });
    }

    setCandidates(mockCandidates);
    if (mockCandidates.length > 0) {
      setSelectedCandidate(mockCandidates[0].id);
    }
  };

  const handleConfirm = () => {
    if (selectedCandidate) {
      const selected = candidates.find(c => c.id === selectedCandidate);
      if (selected) {
        onLocationConfirm({
          latitude: selected.latitude,
          longitude: selected.longitude,
          name: selected.name
        });
      }
    }
  };

  const handleCustomSearch = () => {
    if (customLocation.trim()) {
      const customCandidate: LocationCandidate = {
        id: 'custom',
        name: customLocation,
        address: `${formData.cityRegion ? formData.cityRegion + ', ' : ''}${formData.country}`,
        latitude: 41.8902,
        longitude: 12.4922,
        confidence: 100
      };
      setCandidates([customCandidate, ...candidates]);
      setSelectedCandidate('custom');
      setShowCustomSearch(false);
      setCustomLocation('');
    }
  };

  const handleCandidateSelect = (id: string) => {
    setSelectedCandidate(id);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Confirm Location</h2>
        <p className="text-gray-600">
          We've identified possible matches for your site. Please select the correct location.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Map Panel */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {mapLoaded && window.google ? (
            <div ref={mapRef} className="h-80 w-full" />
          ) : (
            <div className="h-80 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center relative">
              <MapPin className="w-16 h-16 text-blue-600" />
              <div className="absolute bottom-4 left-4 bg-white px-3 py-1.5 rounded-lg shadow-md text-sm font-medium">
                {!mapLoaded ? 'Loading Map...' : 'Map Preview'}
              </div>
            </div>
          )}
        </div>

        {/* Location Candidates */}
        <div className="space-y-4">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 space-y-3 max-h-80 overflow-y-auto">
            {candidates.map((candidate) => (
              <label
                key={candidate.id}
                className={`block p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  selectedCandidate === candidate.id
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <input
                  type="radio"
                  name="location"
                  value={candidate.id}
                  checked={selectedCandidate === candidate.id}
                  onChange={() => handleCandidateSelect(candidate.id)}
                  className="sr-only"
                />
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {candidate.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {candidate.address}
                    </p>
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full transition-all"
                          style={{ width: `${candidate.confidence}%` }}
                        />
                      </div>
                      <span className="text-xs font-medium text-gray-600">
                        {candidate.confidence}%
                      </span>
                    </div>
                  </div>
                </div>
              </label>
            ))}

            {!showCustomSearch ? (
              <button
                onClick={() => setShowCustomSearch(true)}
                className="w-full p-4 rounded-lg border-2 border-dashed border-gray-300 text-gray-600 hover:border-blue-400 hover:text-blue-600 transition-colors font-medium"
              >
                None of these - Search manually
              </button>
            ) : (
              <div className="p-4 rounded-lg border-2 border-blue-400 bg-blue-50">
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Enter location name
                </label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={customLocation}
                    onChange={(e) => setCustomLocation(e.target.value)}
                    placeholder="Search for a place..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    onKeyPress={(e) => e.key === 'Enter' && handleCustomSearch()}
                  />
                  <button
                    onClick={handleCustomSearch}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Search className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-8 flex justify-between">
        <button
          onClick={onBack}
          className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
        >
          Back
        </button>
        <button
          onClick={handleConfirm}
          disabled={!selectedCandidate}
          className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
            !selectedCandidate
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          Confirm Location
        </button>
      </div>
    </div>
  );
}
