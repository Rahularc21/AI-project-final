import { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, Loader2, Mic, MicOff, Image, FileText, Settings, X, Maximize2, Minimize2, ChevronLeft, MoreVertical } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import MarkdownFormatter from './MarkdownFormatter';
import { motion, AnimatePresence } from "framer-motion";
import { VoiceInteraction } from './voice-interaction';

type Message = {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
  isTyping?: boolean;
};

const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "👋 Hello! I'm your AI Art Guide, ready to take you on a journey through the fascinating world of art history! 🎨\n\nI can help you with:\n• Exploring different art movements\n• Learning about famous artists\n• Understanding specific artworks\n• Finding exhibitions near you\n• Discovering art techniques\n\nWhat would you like to explore today?",
      role: "assistant",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<'connected' | 'connecting' | 'error'>('connecting');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY || "AIzaSyBrFLoeq6dWCC3qSZpV0q56zwJ5YGS2rVc";
  
  // Add suggested questions
  const suggestedQuestions = [
    "Tell me about Impressionism",
    "Who was Vincent van Gogh?",
    "What is Cubism?",
    "Explain the Renaissance period",
    "What are the key characteristics of Baroque art?",
    "Tell me about modern art movements",
    "Who are the most influential female artists?",
    "What makes a masterpiece?"
  ];

  // Check connection status on component mount
  useEffect(() => {
    checkConnection();
  }, []);

  const checkConnection = async () => {
    try {
      setConnectionStatus('connecting');
      const response = await fetch('https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash-002:generateContent?key=' + apiKey, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            role: "user",
            parts: [{ text: "test" }]
          }]
        })
      });
      
      if (response.ok) {
        setConnectionStatus('connected');
      } else {
        setConnectionStatus('error');
        console.error('Connection test failed:', await response.text());
      }
    } catch (error) {
      setConnectionStatus('error');
      console.error('Connection error:', error);
    }
  };

  // Add debug logging for scroll events
  useEffect(() => {
    const chatContainer = chatContainerRef.current;
    if (chatContainer) {
      const handleScroll = () => {
        console.log('Scroll position:', chatContainer.scrollTop);
        console.log('Scroll height:', chatContainer.scrollHeight);
        console.log('Client height:', chatContainer.clientHeight);
      };
      
      chatContainer.addEventListener('scroll', handleScroll);
      return () => chatContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scrollToBottom = () => {
    console.log('Attempting to scroll to bottom');
    if (chatContainerRef.current) {
      const container = chatContainerRef.current;
      container.scrollTop = container.scrollHeight;
      console.log('Scrolled to:', container.scrollTop);
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSuggestedQuestion = (question: string) => {
    setInput(question);
  };

  const handleVoiceTranscript = (text: string) => {
    setInput(text);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const clearChat = () => {
    setMessages([
      {
        id: "welcome",
        content: "👋 Hello! I'm your AI Art Guide, ready to take you on a journey through the fascinating world of art history! 🎨\n\nI can help you with:\n• Exploring different art movements\n• Learning about famous artists\n• Understanding specific artworks\n• Finding exhibitions near you\n• Discovering art techniques\n\nWhat would you like to explore today?",
        role: "assistant",
        timestamp: new Date(),
      },
    ]);
  };

  const isArtRelatedQuery = (query: string, conversationHistory: Message[]): boolean => {
    const artKeywords = [
      'art', 'painting', 'sculpture', 'artist', 'museum', 'gallery',
      'renaissance', 'impressionism', 'cubism', 'modern art', 'contemporary art',
      'baroque', 'gothic', 'abstract', 'realism', 'surrealism', 'expressionism',
      'van gogh', 'picasso', 'monet', 'da vinci', 'michelangelo', 'rembrandt',
      'exhibition', 'artwork', 'masterpiece', 'art history', 'art movement',
      'art style', 'art technique', 'art period', 'art collection', 'art gallery',
      'art museum', 'art exhibition', 'art critic', 'art theory', 'art education'
    ];

    // Check current query
    const queryLower = query.toLowerCase();
    if (artKeywords.some(keyword => queryLower.includes(keyword))) {
      return true;
    }

    // Check conversation history for art-related context
    const recentMessages = conversationHistory.slice(-4); // Check last 4 messages
    for (const msg of recentMessages) {
      const msgLower = msg.content.toLowerCase();
      if (artKeywords.some(keyword => msgLower.includes(keyword))) {
        return true;
      }
    }

    return false;
  };

  const getNonArtResponse = (query: string): string => {
    const responses = [
      `While I specialize in art history, I'd love to help you explore the fascinating world of art! Your question about "${query}" is interesting, but I'm designed to focus on art-related topics. Would you like to know about any of these art topics instead?
      
      • The history of your favorite art movement
      • Famous artists and their masterpieces
      • Different art techniques and styles
      • Current art exhibitions and events
      • How to appreciate and understand art better`,
      
      `I'm your dedicated art history guide! While I can't answer questions about "${query}", I'd be thrilled to share my knowledge about:
      
      • The stories behind famous paintings
      • How different art movements evolved
      • The lives of influential artists
      • The meaning behind iconic artworks
      • Tips for visiting art museums`,
      
      `As an art history specialist, I focus on helping people discover and understand art. Your question about "${query}" is outside my expertise, but I'd be happy to:
      
      • Explain different art periods and styles
      • Recommend artists you might enjoy
      • Share interesting art history facts
      • Guide you through famous artworks
      • Help you develop your art appreciation skills`
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const isGreeting = (query: string): boolean => {
    const greetings = [
      'hello', 'hi', 'hey', 'good morning', 'good afternoon', 
      'good evening', 'greetings', 'howdy', 'hola', 'namaste'
    ];
    return greetings.some(greeting => query.toLowerCase().includes(greeting));
  };

  const getGreetingResponse = (): string => {
    const greetings = [
      "Welcome to ArtSpark! I'm your personal art guide, ready to take you on a fascinating journey through art history. What would you like to explore today? 🎨",
      
      "Greetings, art enthusiast! I'm here to help you discover the wonderful world of art. Would you like to learn about specific artists, art movements, or famous masterpieces? 🖼️",
      
      "Hello! I'm excited to be your art guide today. From Renaissance to Modern Art, I'm here to share fascinating stories about art history. What interests you most? 🏛️",
      
      "Welcome to our virtual art gallery! I'd love to help you explore different art movements, discover amazing artists, or understand specific artworks. What shall we explore first? 🎭"
    ];
    return greetings[Math.floor(Math.random() * greetings.length)];
  };

  const fetchGeminiResponse = async (prompt: string) => {
    try {
      // Check if the message is a greeting
      if (isGreeting(prompt)) {
        return getGreetingResponse();
      }

      // Check if the query is art-related using conversation history
      if (!isArtRelatedQuery(prompt, messages)) {
        return getNonArtResponse(prompt);
      }

      // Updated URL with the new model
      const url = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash-002:generateContent?key=${apiKey}`;
      
      // Create conversation history from previous messages
      const conversationHistory = messages
        .filter(msg => msg.role !== "assistant" || !msg.content.includes("👋 Hello!")) // Exclude welcome message
        .map(msg => ({
          role: msg.role,
          parts: [{ text: msg.content }]
        }));

      const payload = {
        contents: [
          ...conversationHistory,
          {
            role: "user",
            parts: [
              {
                text: `You are an AI virtual art history tour guide named ArtSpark.
                You are having a conversation about art history. Use the conversation history to maintain context.
                If the user refers to something mentioned in previous messages, acknowledge and respond accordingly.
                DO NOT introduce yourself or include greetings like "Hello", "Hi there", or "ArtSpark here" in your responses.
                Respond to this query in a warm, engaging, and conversational tone.
                Get straight to answering the question without any introduction.
                Share interesting and accurate information about art history, artists, 
                movements, techniques, and artworks. If appropriate, suggest related 
                artists or works that might interest the user based on their query.
                
                Previous conversation context:
                ${conversationHistory.map(msg => `${msg.role}: ${msg.parts[0].text}`).join('\n')}
                
                Current user query: ${prompt}`
              }
            ]
          }
        ],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 800,
        }
      };

      console.log("Sending request to Gemini:", url);
      
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("API error:", response.status, errorText);
        throw new Error(`API error: ${response.status} - ${errorText}`);
      }

      const data = await response.json();
      console.log("Gemini response:", data);
      
      // Check for the response in the expected format
      if (data.candidates && 
          data.candidates[0] && 
          data.candidates[0].content && 
          data.candidates[0].content.parts && 
          data.candidates[0].content.parts[0] && 
          data.candidates[0].content.parts[0].text) {
        return data.candidates[0].content.parts[0].text;
      } else {
        console.error("Unexpected response structure:", JSON.stringify(data));
        return "I'm sorry, I received an unexpected response format. Please try asking your question again.";
      }
    } catch (error) {
      console.error("Error fetching response from Gemini:", error);
      return "I'm sorry, I'm having trouble connecting to my knowledge base right now. Please try again in a moment.";
    }
  };

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    try {
      const userMessage: Message = {
        id: Date.now().toString(),
        content: input,
        role: "user",
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, userMessage]);
      setInput("");
      setIsLoading(true);
      
      const aiResponse = await fetchGeminiResponse(input);
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: typeof aiResponse === 'string' ? aiResponse : aiResponse.text,
        role: "assistant",
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, assistantMessage]);
      
    } catch (error) {
      console.error("Error in chat flow:", error);
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "I'm sorry, I encountered an error. Please try again.",
        role: "assistant",
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`flex flex-col h-full w-full bg-white overflow-hidden ${
        isFullscreen ? 'fixed inset-0 z-50 m-0' : ''
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-art-burgundy to-art-navy text-white">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10 bg-white flex items-center justify-center">
            <span className="text-sm font-bold text-art-burgundy">AI</span>
          </Avatar>
          <div>
            <p className="text-lg font-bold">ArtSpark Guide</p>
            <p className="text-xs text-white/80">
              {connectionStatus === 'connected' ? 'Online' : 
               connectionStatus === 'connecting' ? 'Connecting...' : 
               'Connection Error'}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {connectionStatus === 'error' && (
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={checkConnection}
              className="text-white hover:bg-white/10"
            >
              <Loader2 className="h-4 w-4 animate-spin" />
            </Button>
          )}
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      {/* Connection Error Message */}
      {connectionStatus === 'error' && (
        <div className="p-4 bg-red-50 text-red-600 border-b border-red-200">
          <p className="text-sm">
            Unable to connect to the AI service. Please check your internet connection and try again.
            <Button 
              variant="link" 
              className="text-red-600 hover:text-red-700 ml-2"
              onClick={checkConnection}
            >
              Retry
            </Button>
          </p>
        </div>
      )}
      
      {/* Chat Area */}
      <div 
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto bg-[#f0f2f5]"
        style={{ 
          height: "calc(100vh - 180px)",
          overflowY: "auto",
          WebkitOverflowScrolling: "touch",
          position: "relative"
        }}
      >
        <div className="p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.role === "assistant" ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={`rounded-2xl px-4 py-3 max-w-[80%] ${
                  message.role === "assistant"
                    ? "bg-white text-gray-800 rounded-tl-none"
                    : "bg-art-burgundy text-white rounded-tr-none"
                }`}
              >
                {message.role === "assistant" ? (
                  <div className="text-sm whitespace-pre-line">
                    <MarkdownFormatter content={message.content} />
                  </div>
                ) : (
                  <p className="text-sm">{message.content}</p>
                )}
                <p className="text-[10px] text-right mt-1 opacity-70">
                  {message.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="rounded-2xl px-4 py-2 bg-white rounded-tl-none">
                <div className="flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin text-art-burgundy" />
                  <p className="text-sm text-gray-600">Typing...</p>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} className="h-4" />
        </div>
      </div>
      
      {/* Input Area */}
      <div className="p-4 bg-white border-t">
        <div className="flex flex-wrap gap-2 mb-4">
          {suggestedQuestions.map((question) => (
            <motion.button
              key={question}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleSuggestedQuestion(question)}
              className="px-3 py-1.5 text-sm bg-art-burgundy/10 text-art-burgundy hover:bg-art-burgundy/20 rounded-full transition-colors"
            >
              {question}
            </motion.button>
          ))}
        </div>
        <form onSubmit={sendMessage} className="flex gap-2">
          <div className="flex-1 relative">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="pr-20 rounded-full bg-gray-100 border-none focus:bg-white focus:ring-2 focus:ring-art-burgundy/20"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
              <VoiceInteraction onTranscript={handleVoiceTranscript} />
              <Button type="button" variant="ghost" size="icon" className="text-gray-500 hover:text-art-burgundy">
                <Image className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <Button 
            type="submit" 
            disabled={isLoading} 
            className="bg-art-burgundy hover:bg-art-burgundy/90 rounded-full p-2"
          >
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </motion.div>
  );
};

export default ChatBot;
