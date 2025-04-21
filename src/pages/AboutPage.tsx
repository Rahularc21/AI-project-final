import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Book, Palette, Landmark, Camera, Users, Sparkles } from "lucide-react";

const AboutPage = () => {
  const features = [
    {
      title: "Virtual Museum Tours",
      description: "Experience world-class museums and galleries from the comfort of your home. Our virtual tours provide high-resolution images and detailed information about each artwork.",
      icon: <Landmark className="w-6 h-6" />,
      color: "from-blue-500/20 to-blue-600/20"
    },
    {
      title: "Art History Education",
      description: "Learn about different art movements, techniques, and artists through our comprehensive guides and interactive content.",
      icon: <Book className="w-6 h-6" />,
      color: "from-purple-500/20 to-purple-600/20"
    },
    {
      title: "Interactive Learning",
      description: "Engage with art through quizzes, detailed analyses, and our AI-powered art guide that can answer your questions about any artwork.",
      icon: <Sparkles className="w-6 h-6" />,
      color: "from-pink-500/20 to-pink-600/20"
    },
    {
      title: "Curated Collections",
      description: "Discover carefully selected artworks organized by period, style, and theme, making it easy to explore art history systematically.",
      icon: <Palette className="w-6 h-6" />,
      color: "from-green-500/20 to-green-600/20"
    },
    {
      title: "High-Quality Images",
      description: "View artworks in stunning detail with our high-resolution images, allowing you to appreciate every brushstroke and texture.",
      icon: <Camera className="w-6 h-6" />,
      color: "from-yellow-500/20 to-yellow-600/20"
    },
    {
      title: "Art Community",
      description: "Join a community of art enthusiasts, share your thoughts, and discover new perspectives on art and art history.",
      icon: <Users className="w-6 h-6" />,
      color: "from-red-500/20 to-red-600/20"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-art-navy text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-art-burgundy/20 to-art-teal/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
              About ArtSpark
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Your gateway to the world of art, offering immersive virtual tours and expert guidance to help you explore and understand art history.
            </p>
            <Link to="/chatbot">
              <Button size="lg" className="bg-art-gold text-art-navy hover:bg-art-gold/90">
                Start Your Art Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-art-burgundy mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover a new way to experience and learn about art through our innovative platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`p-6 rounded-xl bg-gradient-to-br ${feature.color} hover:shadow-lg transition-all duration-300 h-full`}>
                  <div className="text-4xl mb-4 text-art-burgundy">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-art-burgundy mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-art-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-art-burgundy mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              At ArtSpark, we believe that art should be accessible to everyone. Our mission is to make art history engaging and approachable through technology, providing tools and resources that help people of all backgrounds explore and appreciate art.
            </p>
            <Link to="/explore">
              <Button size="lg" className="bg-art-burgundy hover:bg-art-burgundy/90">
                Start Exploring
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 