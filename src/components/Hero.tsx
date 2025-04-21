import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Brush, Palette, Landmark, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-art-burgundy via-art-burgundy to-art-teal min-h-[90vh] flex items-center">
      {/* Floating art elements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-art-teal/20 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-art-burgundy/20 rounded-full blur-3xl"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mb-6"
          >
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Sparkles className="w-5 h-5 text-white" />
              <span className="text-white font-medium">Your Virtual Art Guide</span>
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-7xl font-bold font-playfair text-white mb-6 leading-tight"
          >
            Discover Art Like Never Before
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto"
          >
            Immerse yourself in the world of art through our interactive virtual tours, 
            AI-powered guides, and curated collections from around the globe.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link to="/categories">
              <Button size="lg" className="bg-white text-art-burgundy hover:bg-white/90 flex items-center gap-2">
                <Landmark className="w-5 h-5" />
                Explore Collections
              </Button>
            </Link>
            <Link to="/chatbot">
              <Button size="lg" className="bg-white text-art-burgundy hover:bg-white/90 flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300">
                <Palette className="w-5 h-5" />
                Start Art Tour
              </Button>
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-8 text-white/80"
          >
            <div className="flex items-center gap-2">
              <Brush className="w-5 h-5" />
              <span>Virtual Museum Tours</span>
            </div>
            <div className="flex items-center gap-2">
              <Palette className="w-5 h-5" />
              <span>Art History Insights</span>
            </div>
            <div className="flex items-center gap-2">
              <Landmark className="w-5 h-5" />
              <span>Curated Collections</span>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
};

export default Hero;
