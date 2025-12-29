import { useState } from 'react';
import { Button } from './ui/button';
import { X, Play, Volume2, Maximize, ExternalLink } from 'lucide-react';
import { Textarea } from './ui/textarea';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';

interface ActivityDetailProps {
  activity: {
    title: string;
    category: string;
    description: string;
  };
  onClose: () => void;
}

export function ActivityDetail({ activity, onClose }: ActivityDetailProps) {
  const [status, setStatus] = useState('todo');
  const [journal, setJournal] = useState('');

  return (
    <div className="fixed inset-0 bg-gray-100 z-50 overflow-y-auto">
      {/* Browser Chrome Header */}
      <div className="sticky top-0 bg-white border-b border-gray-300 px-6 py-3 flex items-center justify-between shadow-sm">
        <button
          onClick={onClose}
          className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="border-gray-300">Save</Button>
          <Button variant="link" className="text-blue-600">more actions</Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-8">
        <div className="grid lg:grid-cols-[1fr_300px] gap-8">
          {/* Main Content */}
          <div className="space-y-6">
            <div className="text-3xl">{activity.title}</div>

            {/* Video Player */}
            <div className="bg-white rounded border border-gray-300">
              <div className="aspect-video flex items-center justify-center bg-gray-50">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                    <Play className="w-8 h-8 text-gray-600" />
                  </div>
                </div>
              </div>
              <div className="bg-white border-t border-gray-300 p-3 flex items-center gap-3">
                <button className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-all">
                  <Play className="w-4 h-4" />
                </button>
                <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full w-0 bg-gray-400 rounded-full"></div>
                </div>
                <div className="flex gap-2">
                  <button className="w-7 h-7 flex items-center justify-center hover:bg-gray-100 rounded transition-colors">
                    <Volume2 className="w-4 h-4" />
                  </button>
                  <button className="w-7 h-7 flex items-center justify-center hover:bg-gray-100 rounded transition-colors">
                    <Maximize className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="mb-3">Description</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                {activity.description}
                {' '}This comprehensive training module will guide you through essential leadership concepts, 
                practical exercises, and real-world scenarios. You'll learn proven strategies to enhance your 
                communication skills, build stronger teams, and drive organizational success. Through interactive 
                content and guided practice, you'll develop the confidence and competence needed to excel in 
                your leadership role. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            {/* How to Guide */}
            <div>
              <h2 className="mb-3">How to Guide</h2>
              <div className="space-y-3 text-gray-600 text-sm">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                  voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                  anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
                  veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
                  consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam 
                  est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Templates */}
            <div className="bg-white rounded border border-gray-300 p-4">
              <h3 className="mb-3">Templates</h3>
              <a href="#" className="text-blue-600 hover:underline text-sm">
                a link
              </a>
            </div>

            {/* Pro Tips */}
            <div className="bg-white rounded border border-gray-300 p-4">
              <h3 className="mb-3">Pro Tips</h3>
              <p className="text-gray-600 text-sm italic leading-relaxed">
                <span className="block mb-1">xxxxxxxx xxxx xxxx xxxxxxxxxx</span>
                <span className="block mb-1">xxxxxxxx xxxx xxxx xxxxxxxxxx</span>
                <span className="block">xxxxxxxx xxxx xxxx xxxxxxxxxx</span>
              </p>
            </div>

            <hr className="border-gray-300" />

            {/* Status */}
            <div className="bg-white rounded border border-gray-300 p-4">
              <h3 className="mb-3">Status</h3>
              <RadioGroup value={status} onValueChange={setStatus}>
                <div className="flex items-center space-x-2 mb-2">
                  <RadioGroupItem value="todo" id="todo" />
                  <Label htmlFor="todo" className="cursor-pointer">To do</Label>
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <RadioGroupItem value="inprogress" id="inprogress" />
                  <Label htmlFor="inprogress" className="cursor-pointer">In Progress</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="done" id="done" />
                  <Label htmlFor="done" className="cursor-pointer">Done</Label>
                </div>
              </RadioGroup>
            </div>

            <hr className="border-gray-300" />

            {/* Activity Completion Journal */}
            <div className="bg-white rounded border border-gray-300 p-4">
              <h3 className="mb-3">Activity Completion Journal</h3>
              <Textarea
                placeholder=""
                value={journal}
                onChange={(e) => setJournal(e.target.value)}
                className="min-h-[120px] resize-none text-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}