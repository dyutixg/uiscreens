import { useState, useRef, useEffect } from 'react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Checkbox } from './ui/checkbox';
import { Plus, Settings, Mic, ChevronLeft, ChevronRight } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface Session {
  id: string;
  name: string;
  date: string;
  messages: Message[];
}

export function AICoach() {
  const [sessions, setSessions] = useState<Session[]>([
    { id: '1', name: 'Session Name', date: 'Oct 21', messages: [] },
    { id: '2', name: 'Session Name', date: 'Oct 15', messages: [] },
    { id: '3', name: 'Session Name', date: 'Sep 15', messages: [] },
  ]);
  const [activeSession, setActiveSession] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hello! I'm your AI Leadership Coach. I'm here to help you develop your leadership skills, provide feedback on your progress, and discuss any challenges you're facing in your new role. How can I support you today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "That's a great question! As a leader, it's important to balance empathy with accountability. Let me share some strategies that can help...",
        "I understand this is a challenging situation. Based on your progress with team management, I'd recommend focusing on clear communication and setting expectations early.",
        "Excellent progress on your leadership journey! From what you've shared, you're showing strong growth in self-awareness. Let's discuss how you can apply this to your team dynamics.",
        "This is a common challenge for new leaders. Let me offer some perspective based on leadership best practices and how they might apply to your specific situation.",
      ];

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const suggestedPrompts = [
    "How can I improve team communication?",
    "What are effective delegation strategies?",
    "Help me with conflict resolution"
  ];

  return (
    <div className="flex h-[calc(100vh-10rem)] bg-black rounded border border-white/15 overflow-hidden">
      {/* Sidebar */}
      <div className={`${sidebarCollapsed ? 'w-0' : 'w-80'} transition-all duration-300 border-r border-white/15 flex flex-col bg-black relative overflow-hidden`}>
        {!sidebarCollapsed && (
          <>
            <div className="p-4 border-b border-white/15">
              <Button className="w-full bg-white text-black hover:bg-gray-200">
                <Plus className="w-4 h-4 mr-2" />
                Start a new session
              </Button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-2">
              {sessions.map((session) => (
                <button
                  key={session.id}
                  onClick={() => setActiveSession(session.id)}
                  className={`w-full text-left px-3 py-2 rounded hover:bg-white/10 transition-colors text-white ${
                    activeSession === session.id ? 'bg-white/10' : ''
                  }`}
                >
                  <div className="text-sm">{session.name} - {session.date}</div>
                </button>
              ))}
            </div>

            <div className="p-4 border-t border-white/15">
              <div className="mb-3">
                <div className="text-sm mb-3 text-white">AI Experiences</div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Checkbox id="exp1" />
                  <label htmlFor="exp1" className="text-sm cursor-pointer text-gray-300">AI Experience 1</label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox id="exp2" />
                  <label htmlFor="exp2" className="text-sm cursor-pointer text-gray-300">AI Experience 2</label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox id="exp3" />
                  <label htmlFor="exp3" className="text-sm cursor-pointer text-gray-300">AI Experience 3</label>
                </div>
              </div>
            </div>
          </>
        )}
        
        {/* Toggle Button */}
        <button
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-12 bg-black border border-white/15 rounded-r flex items-center justify-center hover:bg-white/5 z-10"
        >
          {sidebarCollapsed ? <ChevronRight className="w-4 h-4 text-white" /> : <ChevronLeft className="w-4 h-4 text-white" />}
        </button>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Welcome Message */}
        {messages.length === 1 && (
          <div className="flex-1 flex items-center justify-center p-8">
            <div className="max-w-3xl w-full text-center space-y-8">
              <div>
                <div className="text-3xl mb-4 text-white">
                  Welcome back, Candace
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                  dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>

              {/* Suggested Prompts */}
              <div className="flex gap-4 justify-center mt-8">
                {suggestedPrompts.map((prompt, index) => (
                  <button
                    key={index}
                    onClick={() => setInput(prompt)}
                    className="px-4 py-2 border border-white/30 rounded hover:border-white/50 hover:bg-white/5 transition-all text-sm text-white"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Messages */}
        {messages.length > 1 && (
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[70%] rounded p-4 ${
                    message.role === 'user'
                      ? 'bg-white text-black'
                      : 'bg-white/10 text-white border border-white/20'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{message.content}</p>
                  <span className="text-xs opacity-70 mt-2 block">
                    {message.timestamp.toLocaleTimeString()}
                  </span>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex gap-3">
                <div className="bg-white/10 border border-white/20 rounded p-4">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}

        {/* Input Area */}
        <div className="p-4 border-t border-white/15">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-end gap-3 bg-white/5 border border-white/20 rounded p-3">
              <button className="p-2 hover:bg-white/10 rounded transition-colors">
                <Settings className="w-5 h-5 text-gray-300" />
              </button>
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message here..."
                className="flex-1 min-h-[40px] max-h-[120px] border-0 focus-visible:ring-0 resize-none bg-transparent text-white placeholder:text-gray-500"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="p-2 hover:bg-white/10 rounded transition-colors disabled:opacity-50"
              >
                <Mic className="w-5 h-5 text-gray-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}