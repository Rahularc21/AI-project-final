import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative bg-art-navy text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-art-burgundy/20 to-art-teal/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
            Discover the World of Art
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Explore masterpieces from different eras, learn about art movements, and immerse yourself in the beauty of artistic expression.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/explore" 
              className="bg-art-gold text-art-navy px-8 py-3 rounded-lg font-semibold hover:bg-art-gold/90 transition-colors"
            >
              Start Exploring
            </Link>
            <Link 
              to="/about" 
              className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 