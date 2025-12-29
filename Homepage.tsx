import { Button } from './ui/button';

interface HomepageProps {
  onGetStarted: () => void;
  onLogin: () => void;
}

export function Homepage({ onGetStarted, onLogin }: HomepageProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Navigation Bar */}
      <nav className="border-b border-white/15">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl" style={{ fontFamily: "'Brush Script MT', cursive" }}>
              freedom tunnel labs
            </div>
            <Button 
              variant="outline" 
              onClick={onGetStarted}
              className="border border-white/30 bg-transparent hover:bg-white/10 text-white"
            >
              join for free
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-16 max-w-4xl">
        {/* Quote Section */}
        <div className="text-center mb-20">
          <p className="text-lg mb-2">
            we are creating a future where we each feel our own power
          </p>
          <p className="text-sm text-gray-400">
            - adrienne maree brown.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="space-y-8 mb-20">
          <h1 className="text-2xl">freedom tunnel labs is:</h1>
          
          <div className="space-y-6 text-base leading-relaxed">
            <p>
              a place for people who are trying to figure out what real 
              leadership looks like
            </p>
            
            <p>
              a new school where we unlearn what isn't serving us
            </p>
            
            <p>
              where we use systems thinking to understand the world and 
              make change that matters
            </p>
            
            <p>
              where we use AI in ways that benefit us and our communities
            </p>
            
            <p>
              a place where we figure things out together by doing, 
              experimenting, and trying things out — not just talking about 
              them
            </p>
            
            <p className="text-gray-400 text-sm pt-4">
              - niteesh elias & brooke shaffner
            </p>
          </div>
        </div>

        {/* Video Section */}
        <div className="space-y-6">
          <div className="text-center">
            <p className="text-lg">watch video to learn more</p>
          </div>
          
          <div className="bg-gray-900 rounded-lg overflow-hidden aspect-video flex items-center justify-center border border-white/10">
            <p className="text-gray-500">Video player</p>
          </div>
        </div>
      </div>
    </div>
  );
}