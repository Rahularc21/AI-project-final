import { useNavigate, Link } from "react-router-dom";
import Hero from "@/components/Hero";
import FeaturedSection from "@/components/FeaturedSection";
import CategorySection from "@/components/CategorySection";
import { MessageCircle, Palette, Book, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen relative">
      {/* Background Frame */}
      <div className="fixed inset-0 border-[20px] border-double border-art-gold/10 pointer-events-none z-50" />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Hero />
        <FeaturedSection />
        <CategorySection />
        
        {/* Features Grid */}
        <section className="py-16 bg-gradient-to-br from-art-gold/5 via-transparent to-art-burgundy/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="feature-card text-center p-8">
                <Palette className="w-12 h-12 mx-auto mb-4 text-art-burgundy" />
                <h3 className="text-xl font-bold mb-2">Virtual Art Tours</h3>
                <p className="text-gray-600">Experience masterpieces from the comfort of your home</p>
              </div>
              <div className="feature-card text-center p-8">
                <Book className="w-12 h-12 mx-auto mb-4 text-art-burgundy" />
                <h3 className="text-xl font-bold mb-2">Art History</h3>
                <p className="text-gray-600">Learn about different art movements and their significance</p>
              </div>
              <div className="feature-card text-center p-8">
                <Camera className="w-12 h-12 mx-auto mb-4 text-art-burgundy" />
                <h3 className="text-xl font-bold mb-2">Interactive Experience</h3>
                <p className="text-gray-600">Engage with art through our AI-powered guide</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to action section */}
        <section className="py-16 bg-gradient-to-r from-art-burgundy to-art-navy text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809')] opacity-10" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
              Get a Personalized Art Tour
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Have questions about art history? Want recommendations based on your interests?
              Our AI art guide is here to help you explore the vast world of art.
            </p>
            <Link to="/chatbot">
              <Button size="lg" className="bg-white text-art-burgundy hover:bg-white/90 shadow-lg">
                Chat with Art Guide
              </Button>
            </Link>
          </div>
        </section>
      </div>

      {/* Floating Chatbot Icon */}
      <div 
        className="fixed bottom-6 right-6 p-4 bg-art-burgundy rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform z-50 group"
        onClick={() => navigate('/chatbot')}
      >
        <MessageCircle className="w-6 h-6 text-white group-hover:rotate-12 transition-transform" />
      </div>
    </div>
  );
};

export default Index;
