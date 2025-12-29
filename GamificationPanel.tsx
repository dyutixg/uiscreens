import { Trophy, Flame, Star, Award, Target, Zap } from 'lucide-react';

interface GamificationPanelProps {
  totalTasks: number;
  completedTasks: number;
}

export function GamificationPanel({ totalTasks, completedTasks }: GamificationPanelProps) {
  const currentXP = completedTasks * 150;
  const level = Math.floor(currentXP / 1000) + 1;
  const xpForNextLevel = level * 1000;
  const xpProgress = ((currentXP % 1000) / 1000) * 100;
  const streakDays = 7; // Mock data
  
  const achievements = [
    { id: 1, name: 'First Step', icon: Star, earned: completedTasks >= 1, color: 'yellow' },
    { id: 2, name: 'Getting Started', icon: Target, earned: completedTasks >= 3, color: 'pink' },
    { id: 3, name: 'On Fire', icon: Flame, earned: completedTasks >= 5, color: 'orange' },
    { id: 4, name: 'Champion', icon: Trophy, earned: completedTasks >= 10, color: 'blue' },
  ];

  const getColorClasses = (color: string, earned: boolean) => {
    if (!earned) return 'bg-gray-200 text-gray-400';
    
    switch (color) {
      case 'yellow':
        return 'bg-gradient-to-br from-yellow-400 to-yellow-500 text-white';
      case 'pink':
        return 'bg-gradient-to-br from-pink-400 to-pink-500 text-white';
      case 'orange':
        return 'bg-gradient-to-br from-orange-400 to-orange-500 text-white';
      case 'blue':
        return 'bg-gradient-to-br from-blue-400 to-blue-500 text-white';
      default:
        return 'bg-gray-200 text-gray-400';
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
      {/* Level & XP Card */}
      <div className="bg-white rounded-lg border-2 border-gray-200 p-5 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 via-pink-500 to-blue-500 rounded-full flex items-center justify-center">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl">Level {level}</span>
            </div>
            <p className="text-sm text-gray-500">Leadership Champion</p>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">XP Progress</span>
            <span className="text-gray-600">{currentXP} / {xpForNextLevel}</span>
          </div>
          <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${xpProgress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Streak Card */}
      <div className="bg-white rounded-lg border-2 border-orange-200 p-5 shadow-sm">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
            <Flame className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="text-2xl">{streakDays} Days</div>
            <p className="text-sm text-gray-500">Current Streak</p>
          </div>
        </div>
        <p className="text-xs text-gray-500">🔥 Keep completing tasks daily to maintain your streak!</p>
      </div>

      {/* Achievements Card */}
      <div className="bg-white rounded-lg border-2 border-gray-200 p-5 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <Award className="w-5 h-5 text-purple-600" />
          <h3 className="text-sm">Achievements</h3>
          <span className="ml-auto text-sm text-gray-500">
            {achievements.filter(a => a.earned).length}/{achievements.length}
          </span>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {achievements.map((achievement) => {
            const Icon = achievement.icon;
            return (
              <div
                key={achievement.id}
                className={`aspect-square rounded-lg flex items-center justify-center transition-all ${getColorClasses(achievement.color, achievement.earned)} ${
                  achievement.earned ? 'shadow-lg cursor-pointer hover:scale-110' : ''
                }`}
                title={achievement.name}
              >
                <Icon className="w-5 h-5" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
