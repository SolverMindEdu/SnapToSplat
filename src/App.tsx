import { useState } from 'react';
import Navigation from './components/Navigation';
import LandingPage from './pages/LandingPage';
import ExplorePage from './pages/ExplorePage';
import ContributionWizard from './pages/ContributionWizard';
import ResultsPage from './pages/ResultsPage';
import AboutPage from './pages/AboutPage';
import { ContributionFormData } from './types';

type Page = 'home' | 'explore' | 'contribute' | 'results' | 'about';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [contributionId, setContributionId] = useState<string>('');
  const [completedFormData, setCompletedFormData] = useState<ContributionFormData>({
    country: '',
    subjectType: ''
  });
  const [photoCount, setPhotoCount] = useState(0);

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
  };

  const handleContributionComplete = (
    id: string,
    formData: ContributionFormData,
    count: number
  ) => {
    setContributionId(id);
    setCompletedFormData(formData);
    setPhotoCount(count);
    setCurrentPage('results');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />

      {currentPage === 'home' && <LandingPage onNavigate={handleNavigate} />}

      {currentPage === 'explore' && <ExplorePage onNavigate={handleNavigate} />}

      {currentPage === 'contribute' && (
        <ContributionWizard onComplete={handleContributionComplete} />
      )}

      {currentPage === 'results' && (
        <ResultsPage
          contributionId={contributionId}
          formData={completedFormData}
          photoCount={photoCount}
          onNavigate={handleNavigate}
        />
      )}

      {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
    </div>
  );
}

export default App;
