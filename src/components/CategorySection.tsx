import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const categories = [
  {
    id: 1,
    name: "Renaissance",
    description: "14th to 17th century European art",
    icon: "🎨",
    color: "from-blue-500/20 to-blue-600/20"
  },
  {
    id: 2,
    name: "Modern Art",
    description: "20th century artistic movements",
    icon: "🖼️",
    color: "from-purple-500/20 to-purple-600/20"
  },
  {
    id: 3,
    name: "Contemporary",
    description: "Current artistic expressions",
    icon: "🎭",
    color: "from-pink-500/20 to-pink-600/20"
  },
  {
    id: 4,
    name: "Asian Art",
    description: "Traditional and modern Asian works",
    icon: "🏮",
    color: "from-red-500/20 to-red-600/20"
  },
  {
    id: 5,
    name: "Sculpture",
    description: "Three-dimensional artistic forms",
    icon: "🗿",
    color: "from-green-500/20 to-green-600/20"
  },
  {
    id: 6,
    name: "Photography",
    description: "Captured moments in time",
    icon: "📸",
    color: "from-yellow-500/20 to-yellow-600/20"
  }
];

const CategorySection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-art-burgundy mb-4">
            Art Categories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore art through different periods, styles, and mediums
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link to={`/categories/${category.id}`}>
                <div className={`group p-6 rounded-xl bg-gradient-to-br ${category.color} hover:shadow-lg transition-all duration-300 h-full flex flex-col`}>
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-art-burgundy mb-2">{category.name}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="mt-auto">
                    <Button variant="ghost" className="text-art-burgundy hover:bg-white/20">
                      Explore →
                    </Button>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
