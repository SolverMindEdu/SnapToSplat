import { useEffect, useState } from 'react';
import { MapPin, Calendar, Eye, Loader2, Trash2, X, Clock } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { Contribution } from '../types';

interface ExplorePageProps {
  onNavigate: (page: string) => void;
}

export default function ExplorePage({ onNavigate }: ExplorePageProps) {
  const [contributions, setContributions] = useState<Contribution[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteModal, setDeleteModal] = useState<{
    isOpen: boolean;
    contribution: Contribution | null;
  }>({ isOpen: false, contribution: null });
  const [deleting, setDeleting] = useState(false);
  const [viewerModal, setViewerModal] = useState<{
    isOpen: boolean;
    contribution: Contribution | null;
  }>({ isOpen: false, contribution: null });

  useEffect(() => {
    fetchContributions();
  }, []);

  const fetchContributions = async () => {
    try {
      const { data, error } = await supabase
        .from('contributions')
        .select('*')
        .in('status', ['completed', 'processing'])
        .order('created_at', { ascending: false })
        .limit(12);

      if (error) throw error;
      setContributions(data || []);
    } catch (error) {
      console.error('Error fetching contributions:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteClick = (e: React.MouseEvent, contribution: Contribution) => {
    e.stopPropagation();
    setDeleteModal({ isOpen: true, contribution });
  };

  const handleDeleteConfirm = async () => {
    if (!deleteModal.contribution) return;

    setDeleting(true);
    try {
      const { error } = await supabase
        .from('contributions')
        .delete()
        .eq('id', deleteModal.contribution.id);

      if (error) throw error;

      setContributions(contributions.filter(c => c.id !== deleteModal.contribution!.id));
      setDeleteModal({ isOpen: false, contribution: null });
    } catch (error) {
      console.error('Error deleting contribution:', error);
      alert('Failed to delete reconstruction. Please try again.');
    } finally {
      setDeleting(false);
    }
  };

  const handleDeleteCancel = () => {
    setDeleteModal({ isOpen: false, contribution: null });
  };

  const handleViewClick = (contribution: Contribution) => {
    setViewerModal({ isOpen: true, contribution });
  };

  const handleViewerClose = () => {
    setViewerModal({ isOpen: false, contribution: null });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50/30 to-white flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-amber-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading archaeological archive...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/30 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Archaeological Archive
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore 3D splats of ancient sites, ruins, and artifacts from around the world.
          </p>
        </div>

        {/* Contributions Grid */}
        {contributions.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Eye className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No reconstructions yet
            </h3>
            <p className="text-gray-600 mb-6">
              Be the first to contribute photos and help preserve cultural heritage.
            </p>
            <button
              onClick={() => onNavigate('contribute')}
              className="px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold rounded-lg hover:from-amber-700 hover:to-orange-700 transition-all"
            >
              Document a Site
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contributions.map((contribution) => (
              <div
                key={contribution.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group relative"
              >
                {/* Delete Button */}
                <button
                  onClick={(e) => handleDeleteClick(e, contribution)}
                  className="absolute top-3 left-3 z-10 p-2 bg-red-600 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-700 shadow-lg"
                  title="Delete reconstruction"
                >
                  <Trash2 className="w-4 h-4" />
                </button>

                {/* Preview Image Placeholder */}
                <div
                  onClick={() => handleViewClick(contribution)}
                  className="aspect-video bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center relative cursor-pointer"
                >
                  <Eye className="w-12 h-12 text-amber-600 group-hover:scale-110 transition-transform" />
                  {contribution.status === 'processing' && (
                    <div className="absolute top-3 right-3 bg-amber-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Processing
                    </div>
                  )}
                  {contribution.model_preview_url && contribution.status === 'completed' && (
                    <div className="absolute top-3 right-3 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Splat Ready
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 text-lg mb-2 line-clamp-1">
                    {contribution.site_name ||
                      `${contribution.subject_type.charAt(0).toUpperCase() +
                        contribution.subject_type.slice(1)} in ${contribution.country}`}
                  </h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4 flex-shrink-0" />
                      <span className="truncate">
                        {contribution.city_region
                          ? `${contribution.city_region}, ${contribution.country}`
                          : contribution.country}
                      </span>
                    </div>

                    {contribution.capture_date && (
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4 flex-shrink-0" />
                        <span>
                          {new Date(contribution.capture_date).toLocaleDateString()}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="text-sm text-gray-500">
                      {contribution.photo_count} photos
                    </span>
                    <span className="text-sm font-medium text-amber-600 group-hover:text-amber-700">
                      View Splat →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 3D Model Viewer Modal */}
      {viewerModal.isOpen && viewerModal.contribution && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden relative">
            <button
              onClick={handleViewerClose}
              className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full text-gray-600 hover:text-gray-900 transition-colors shadow-lg"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {viewerModal.contribution.site_name ||
                  `${viewerModal.contribution.subject_type} in ${viewerModal.contribution.country}`}
              </h2>
              <p className="text-gray-600 mb-6">
                {viewerModal.contribution.city_region
                  ? `${viewerModal.contribution.city_region}, ${viewerModal.contribution.country}`
                  : viewerModal.contribution.country}
              </p>

              {viewerModal.contribution.model_preview_url ? (
                <div className="aspect-video w-full bg-gray-900 rounded-lg overflow-hidden">
                  <iframe
                    src={viewerModal.contribution.model_preview_url}
                    className="w-full h-full"
                    title="3D Model Viewer"
                    allow="camera; microphone; xr-spatial-tracking; fullscreen"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="aspect-video w-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Clock className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      3D Model Training In Progress
                    </h3>
                    <p className="text-gray-600 max-w-md">
                      This reconstruction is being processed. Check back soon to view the 3D model.
                    </p>
                  </div>
                </div>
              )}

              <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-gray-500 mb-1">Photos</p>
                  <p className="font-semibold text-gray-900">
                    {viewerModal.contribution.photo_count} images
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 mb-1">Capture Date</p>
                  <p className="font-semibold text-gray-900">
                    {viewerModal.contribution.capture_date
                      ? new Date(viewerModal.contribution.capture_date).toLocaleDateString()
                      : 'Not specified'}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 mb-1">Status</p>
                  <p className={`font-semibold ${
                    viewerModal.contribution.status === 'completed' ? 'text-green-600' : 'text-amber-600'
                  }`}>
                    {viewerModal.contribution.status === 'completed' ? 'Completed' : 'Processing'}
                  </p>
                </div>
              </div>

              {viewerModal.contribution.description && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-gray-700">{viewerModal.contribution.description}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteModal.isOpen && deleteModal.contribution && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative">
            <button
              onClick={handleDeleteCancel}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="mb-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trash2 className="w-8 h-8 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
                Delete Reconstruction?
              </h2>
              <p className="text-gray-600 text-center">
                Are you sure you want to delete this reconstruction? This action cannot be undone.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-gray-900 mb-1">
                {deleteModal.contribution.site_name ||
                  `${deleteModal.contribution.subject_type} in ${deleteModal.contribution.country}`}
              </h3>
              <p className="text-sm text-gray-600">
                {deleteModal.contribution.photo_count} photos •{' '}
                {deleteModal.contribution.city_region
                  ? `${deleteModal.contribution.city_region}, ${deleteModal.contribution.country}`
                  : deleteModal.contribution.country}
              </p>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={handleDeleteCancel}
                disabled={deleting}
                className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteConfirm}
                disabled={deleting}
                className="flex-1 px-4 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 flex items-center justify-center space-x-2"
              >
                {deleting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Deleting...</span>
                  </>
                ) : (
                  <span>Delete</span>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
