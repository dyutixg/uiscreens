import { useState } from 'react';
import { GripVertical, Plus } from 'lucide-react';

interface Task {
  id: string;
  content: string;
  status: 'todo' | 'doing' | 'done';
}

export function KanbanBoard() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', content: 'write my leadership narrative', status: 'todo' },
    { id: '2', content: 'setup conversations with team', status: 'todo' },
    { id: '3', content: 'form my leadership focus areas', status: 'todo' },
    { id: '4', content: 'identify my leadership style', status: 'doing' },
    { id: '5', content: 'watch video on emergent strategy', status: 'done' },
  ]);

  const graffitiOrange = 'https://images.unsplash.com/photo-1583112042152-c9323a32fa0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFmZml0aSUyMHdhbGwlMjBhcnQlMjBvcmFuZ2V8ZW58MXx8fHwxNzY1NDk1MzQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';
  const graffitiBlue = 'https://images.unsplash.com/photo-1632611868953-5b9f8d36787e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFmZml0aSUyMHdhbGwlMjBhcnQlMjBibHVlfGVufDF8fHx8MTc2NTQ5NTM0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';
  const graffitiColorful = 'https://images.unsplash.com/photo-1759915737900-908dc2f14a71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFmZml0aSUyMHdhbGwlMjBhcnQlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NjU0OTUzNDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';

  const columns = [
    { id: 'todo', title: 'to do', color: 'orange', bgImage: graffitiOrange },
    { id: 'doing', title: 'doing', color: 'blue', bgImage: graffitiBlue },
    { id: 'done', title: 'done!', color: 'green', bgImage: graffitiColorful },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 h-[500px]">
      {columns.map((column) => (
        <div 
          key={column.id} 
          className="border border-white/15 rounded relative overflow-hidden"
          style={{
            backgroundImage: `url(${column.bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
          <div className="relative z-10 p-4 h-full flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 
                className={`${
                  column.id === 'todo' 
                    ? 'text-orange-400' 
                    : column.id === 'doing' 
                    ? 'text-blue-400' 
                    : 'text-green-400'
                }`}
              >
                {column.title}
              </h3>
              <button className="w-6 h-6 flex items-center justify-center bg-white/10 rounded hover:bg-white/20 transition-colors">
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-2 flex-1 overflow-y-auto">
              {tasks
                .filter((task) => task.status === column.id)
                .map((task) => (
                  <div
                    key={task.id}
                    className="bg-black/80 border border-white/20 rounded p-3 flex items-start gap-2 hover:bg-black/90 transition-all cursor-move"
                  >
                    <GripVertical className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span className="flex-1 text-sm text-white">{task.content}</span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
