import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Card, CardContent } from './ui/card';
import { BookOpen, Users, Building2, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { ActivityDetail } from './ActivityDetail';

interface LibraryCard {
  id: string;
  title: string;
  description: string;
  icon: 'book' | 'users' | 'building';
  category: string;
}

export function LeadershipLibrary() {
  const [selectedCard, setSelectedCard] = useState<LibraryCard | null>(null);
  const [showFullDetail, setShowFullDetail] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const cardImage = 'https://images.unsplash.com/photo-1705254613723-776cb9dc93d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGFydCUyMGNvbG9yZnVsfGVufDF8fHx8MTc2NTM4MjcwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';

  const libraryContent = {
    self: [
      { id: '1', title: 'whats my leadership narrative?', description: 'understand who you are as a person and what is the journey you are embarking on that makes everything else meaningful', icon: 'book' as const, category: 'understanding the self' },
      { id: '2', title: 'listening to your body weather', description: 'self awareness begins in the body. leaders who can feel themselves can help tap into a calm presence, not adrenaline or fear', icon: 'book' as const, category: 'understanding the self' },
      { id: '3', title: 'power audit (decolonized leadership)', description: 'liberatory leadership requires understanding how power lives in us, around us, beside us. it is overpowered and where it is underpowered', icon: 'book' as const, category: 'understanding the self' },
    ],
    team: [
      { id: '7', title: 'whats my leadership narrative?', description: 'understand who you are as a person and what is the journey you are embarking on that makes everything else meaningful', icon: 'users' as const, category: 'understanding the people around us' },
      { id: '8', title: 'listening to your body weather', description: 'self awareness begins in the body. leaders who can feel themselves can help tap into a calm presence, not adrenaline or fear', icon: 'users' as const, category: 'understanding the people around us' },
      { id: '9', title: 'power audit (decolonized leadership)', description: 'liberatory leadership requires understanding how power lives in us, around us, beside us. it is overpowered and where it is underpowered', icon: 'users' as const, category: 'understanding the people around us' },
    ],
    organization: [
      { id: '13', title: 'whats my leadership narrative?', description: 'understand who you are as a person and what is the journey you are embarking on that makes everything else meaningful', icon: 'building' as const, category: 'understanding the ecosystem we operate in' },
      { id: '14', title: 'listening to your body weather', description: 'self awareness begins in the body. leaders who can feel themselves can help tap into a calm presence, not adrenaline or fear', icon: 'building' as const, category: 'understanding the ecosystem we operate in' },
      { id: '15', title: 'power audit (decolonized leadership)', description: 'liberatory leadership requires understanding how power lives in us, around us, beside us. it is overpowered and where it is underpowered', icon: 'building' as const, category: 'understanding the ecosystem we operate in' },
    ],
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'book':
        return <BookOpen className="w-6 h-6" />;
      case 'users':
        return <Users className="w-6 h-6" />;
      case 'building':
        return <Building2 className="w-6 h-6" />;
      default:
        return <BookOpen className="w-6 h-6" />;
    }
  };

  const handleCardClick = (card: LibraryCard) => {
    setSelectedCard(card);
    setShowPreview(true);
    setShowFullDetail(false);
  };

  const handleExpandClick = () => {
    setShowPreview(false);
    setTimeout(() => {
      setShowFullDetail(true);
    }, 100);
  };

  const handleClosePreview = () => {
    setShowPreview(false);
    setTimeout(() => {
      setSelectedCard(null);
    }, 200);
  };

  return (
    <>
      <div className="bg-black border border-white/15 rounded p-6">
        <h3 className="mb-6 text-white">library</h3>
        <Tabs defaultValue="self" className="w-full">
          <TabsList className="w-full justify-start bg-transparent border-b border-white/15">
            <TabsTrigger 
              value="self" 
              className="data-[state=active]:bg-gray-800 data-[state=active]:text-white text-gray-400"
            >
              understanding the self
            </TabsTrigger>
            <TabsTrigger 
              value="team"
              className="data-[state=active]:bg-gray-800 data-[state=active]:text-white text-gray-400"
            >
              understanding the people around us
            </TabsTrigger>
            <TabsTrigger 
              value="organization"
              className="data-[state=active]:bg-gray-800 data-[state=active]:text-white text-gray-400"
            >
              understanding the ecosystem we operate in
            </TabsTrigger>
          </TabsList>

          <TabsContent value="self" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {libraryContent.self.map((card) => (
                <Card 
                  key={card.id} 
                  className="cursor-pointer hover:border-white/30 transition-all bg-black border-white/15 overflow-hidden"
                  onClick={() => handleCardClick(card)}
                >
                  <div 
                    className="h-24 relative"
                    style={{
                      backgroundImage: `url(${cardImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <div className="absolute inset-0 bg-black/50"></div>
                  </div>
                  <CardContent className="p-4">
                    <h4 className="mb-2 text-white text-sm">{card.title}</h4>
                    <p className="text-gray-400 text-xs">{card.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="team" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {libraryContent.team.map((card) => (
                <Card 
                  key={card.id} 
                  className="cursor-pointer hover:border-white/30 transition-all bg-black border-white/15 overflow-hidden"
                  onClick={() => handleCardClick(card)}
                >
                  <div 
                    className="h-24 relative"
                    style={{
                      backgroundImage: `url(${cardImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <div className="absolute inset-0 bg-black/50"></div>
                  </div>
                  <CardContent className="p-4">
                    <h4 className="mb-2 text-white text-sm">{card.title}</h4>
                    <p className="text-gray-400 text-xs">{card.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="organization" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {libraryContent.organization.map((card) => (
                <Card 
                  key={card.id} 
                  className="cursor-pointer hover:border-white/30 transition-all bg-black border-white/15 overflow-hidden"
                  onClick={() => handleCardClick(card)}
                >
                  <div 
                    className="h-24 relative"
                    style={{
                      backgroundImage: `url(${cardImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <div className="absolute inset-0 bg-black/50"></div>
                  </div>
                  <CardContent className="p-4">
                    <h4 className="mb-2 text-white text-sm">{card.title}</h4>
                    <p className="text-gray-400 text-xs">{card.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Quick Preview Dialog */}
      {selectedCard && showPreview && (
        <Dialog open={showPreview} onOpenChange={(open) => {
          if (!open) handleClosePreview();
        }}>
          <DialogContent className="max-w-md bg-black border-white/15">
            <DialogHeader>
              <DialogTitle className="text-white">{selectedCard.title}</DialogTitle>
              <DialogDescription className="text-gray-400">{selectedCard.category}</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-blue-500 rounded flex items-center justify-center text-white">
                  {getIcon(selectedCard.icon)}
                </div>
                <div className="text-white">{selectedCard.title}</div>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-2">Overview</p>
                <p className="text-gray-300 text-sm">{selectedCard.description}</p>
              </div>
              <div className="bg-white/5 p-4 rounded border border-white/10">
                <p className="text-sm text-gray-300">
                  This activity includes video content, templates, exercises, and guided learning to help you master {selectedCard.title.toLowerCase()}.
                </p>
              </div>
              <Button 
                onClick={handleExpandClick}
                className="w-full bg-white text-black hover:bg-gray-200"
              >
                View Full Activity
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Full Detail View */}
      {showFullDetail && selectedCard && (
        <ActivityDetail 
          activity={selectedCard}
          onClose={() => {
            setShowFullDetail(false);
            setSelectedCard(null);
          }}
        />
      )}
    </>
  );
}
