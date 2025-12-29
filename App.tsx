import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { LeadershipDashboard } from './components/LeadershipDashboard';
import { AICoach } from './components/AICoach';
import { Homepage } from './components/Homepage';
import { LoginPage } from './components/LoginPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'login' | 'dashboard' | 'coach'>('home');

  return (
    <div className="min-h-screen bg-black">
      {currentPage === 'login' && (
        <LoginPage onLogin={() => setCurrentPage('dashboard')} onBack={() => setCurrentPage('home')} />
      )}
      
      {currentPage === 'home' && (
        <Homepage 
          onGetStarted={() => setCurrentPage('dashboard')} 
          onLogin={() => setCurrentPage('login')}
        />
      )}
      
      {(currentPage === 'dashboard' || currentPage === 'coach') && (
        <div className="flex flex-col h-screen overflow-hidden">
          <Navigation activeTab={currentPage} onTabChange={setCurrentPage} />
          <main className="flex-1 overflow-y-auto bg-black">
            <div className="container mx-auto px-4 py-6 h-full">
              {currentPage === 'dashboard' ? <LeadershipDashboard /> : <AICoach />}
            </div>
          </main>
        </div>
      )}
    </div>
  );
}