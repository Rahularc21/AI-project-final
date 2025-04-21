import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FloatingActionButton = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <button
        onClick={() => navigate('/chatbot')}
        className="p-4 bg-art-burgundy text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="hidden sm:inline-block font-medium">Art Guide</span>
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden sm:inline-block"
        >
          →
        </motion.span>
      </button>
    </motion.div>
  );
};

export default FloatingActionButton; 