import { KanbanBoard } from './KanbanBoard';
import { LeadershipLibrary } from './LeadershipLibrary';

export function LeadershipDashboard() {
  // Mock data - in real app this would come from state/props
  const totalTasks = 8;
  const completedTasks = 2;

  return (
    <div className="space-y-6">
      <KanbanBoard />
      <LeadershipLibrary />
    </div>
  );
}