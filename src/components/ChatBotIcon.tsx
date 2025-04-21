import { MessageSquare } from 'lucide-react';
import Link from 'next/link';

interface ChatBotIconProps {
  categoryName?: string;
}

const ChatBotIcon = ({ categoryName }: ChatBotIconProps) => {
  return (
    <Link href="/chatbot" passHref>
      <div 
        className="fixed bottom-6 right-6 bg-art-burgundy text-white p-3 rounded-full shadow-lg cursor-pointer hover:bg-art-burgundy/90 transition-all duration-300 z-50 flex items-center justify-center group"
        aria-label="Open ArtSpark Chat"
      >
        <MessageSquare size={24} />
        <span className="absolute right-full mr-3 bg-white text-art-burgundy px-3 py-2 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          {categoryName 
            ? `Ask about ${categoryName}`
            : 'Chat with ArtSpark'}
        </span>
      </div>
    </Link>
  );
};

export default ChatBotIcon;
