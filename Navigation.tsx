interface NavigationProps {
  activeTab: 'login' | 'home' | 'dashboard' | 'coach';
  onTabChange: (tab: 'login' | 'home' | 'dashboard' | 'coach') => void;
}

export function Navigation({ activeTab, onTabChange }: NavigationProps) {
  return (
    <nav className="bg-black border-b border-white/15">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <button 
              onClick={() => onTabChange('home')} 
              className="text-xl" 
              style={{ fontFamily: "'Brush Script MT', cursive" }}
            >
              freedom tunnel labs
            </button>
            <div className="flex items-center gap-6">
              <button
                onClick={() => onTabChange('dashboard')}
                className={`px-4 py-2 transition-colors ${
                  activeTab === 'dashboard'
                    ? 'text-white border-b-2 border-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                do stuff
              </button>
              <button
                onClick={() => onTabChange('coach')}
                className={`px-4 py-2 transition-colors ${
                  activeTab === 'coach'
                    ? 'text-white border-b-2 border-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                ai chat
              </button>
              <button
                className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
              >
                discord
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
