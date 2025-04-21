import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Book, Palette, Landmark, Camera } from "lucide-react";

const ExplorePage = () => {
  const artPeriods = [
    {
      id: "renaissance",
      title: "Renaissance Art",
      description: "Explore the rebirth of classical art and humanism in Europe (14th-17th century)",
      icon: <Palette className="w-6 h-6" />,
      color: "from-blue-500/20 to-blue-600/20"
    },
    {
      id: "impressionism",
      title: "Impressionism",
      description: "Discover the revolutionary movement that captured light and atmosphere",
      icon: <Camera className="w-6 h-6" />,
      color: "from-purple-500/20 to-purple-600/20"
    },
    {
      id: "modern",
      title: "Modern Art",
      description: "Explore the diverse movements of the 20th century",
      icon: <Palette className="w-6 h-6" />,
      color: "from-pink-500/20 to-pink-600/20"
    },
    {
      id: "contemporary",
      title: "Contemporary Art",
      description: "Discover current artistic expressions and trends",
      icon: <Book className="w-6 h-6" />,
      color: "from-green-500/20 to-green-600/20"
    }
  ];

  const learningPaths = [
    {
      title: "Art History Basics",
      description: "Start your journey with fundamental art history concepts",
      icon: <Book className="w-6 h-6" />,
      link: "/learn/basics"
    },
    {
      title: "Famous Artists",
      description: "Learn about influential artists and their masterpieces",
      icon: <Palette className="w-6 h-6" />,
      link: "/learn/artists"
    },
    {
      title: "Art Movements",
      description: "Explore different art movements and their characteristics",
      icon: <Landmark className="w-6 h-6" />,
      link: "/learn/movements"
    },
    {
      title: "Art Techniques",
      description: "Understand various artistic techniques and styles",
      icon: <Camera className="w-6 h-6" />,
      link: "/learn/techniques"
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
              Your Art History Journey Begins Here
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Explore different art periods, learn about famous artists, and discover the stories behind masterpieces.
            </p>
            <Link to="/chatbot">
              <Button size="lg" className="bg-art-gold text-art-navy hover:bg-art-gold/90">
                Start with Art Guide
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Art Periods Section */}
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
              Explore Art Periods
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Journey through different eras of art history and discover their unique characteristics
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {artPeriods.map((period, index) => (
              <motion.div
                key={period.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={`/periods/${period.id}`}>
                  <div className={`group p-6 rounded-xl bg-gradient-to-br ${period.color} hover:shadow-lg transition-all duration-300 h-full flex flex-col`}>
                    <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {period.icon}
                    </div>
                    <h3 className="text-xl font-bold text-art-burgundy mb-2">{period.title}</h3>
                    <p className="text-gray-600">{period.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-art-burgundy mb-4">
              Learning Paths
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose your path to art knowledge and start learning today
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningPaths.map((path, index) => (
              <motion.div
                key={path.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={path.link}>
                  <div className="group p-6 rounded-xl bg-white hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                    <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300 text-art-burgundy">
                      {path.icon}
                    </div>
                    <h3 className="text-xl font-bold text-art-burgundy mb-2">{path.title}</h3>
                    <p className="text-gray-600">{path.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-art-burgundy mb-6">
              Ready to Start Your Art Journey?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Our AI art guide is here to help you explore and learn about art in an interactive way.
            </p>
            <Link to="/chatbot">
              <Button size="lg" className="bg-art-burgundy hover:bg-art-burgundy/90">
                Chat with Art Guide
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ExplorePage; 