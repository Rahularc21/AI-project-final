import ChatBot from '@/components/ChatBot';
import { motion } from 'framer-motion';

const ChatbotPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-art-burgundy/5 via-art-offwhite to-art-teal/5 py-12 overflow-auto">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold font-playfair mb-6 bg-gradient-to-r from-art-burgundy to-art-navy bg-clip-text text-transparent">
            Your Art History Guide
          </h1>
          <p className="text-xl text-art-charcoal/80 max-w-2xl mx-auto">
            Ask questions about art movements, famous artists, or specific masterpieces. 
            Our AI guide is here to help you explore the world of art.
          </p>
        </motion.div>
        
        {/* Larger container for the chatbot */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-[80vh] relative shadow-2xl rounded-xl overflow-hidden"
        >
          <ChatBot />
        </motion.div>
      </div>
    </div>
  );
};

export default ChatbotPage;
