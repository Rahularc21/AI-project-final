import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { artworksData } from "@/data/artworks";
import { categoriesData } from "@/data/categories";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const featuredArtworks = artworksData.slice(0, 6);
  const filteredArtworks = selectedCategory
    ? artworksData.filter((artwork) => artwork.category === selectedCategory)
    : featuredArtworks;

  return (
    <div className="min-h-screen bg-gradient-to-br from-art-burgundy/5 via-art-offwhite to-art-teal/5 pb-16">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-art-burgundy">
            Discover the World of Art
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore our curated collection of masterpieces from around the world
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link to="/categories">Start Exploring</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Categories Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-art-burgundy">Art Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoriesData.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card
                className={`cursor-pointer ${
                  selectedCategory === category.id ? "ring-2 ring-art-burgundy" : ""
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <CardHeader>
                  <img
                    src={category.imageUrl}
                    alt={category.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                  <p className="text-gray-600">{category.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full" asChild>
                    <Link to={`/categories/${category.id}`}>
                      View Collection <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Artworks Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center text-art-burgundy">Featured Artworks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArtworks.map((artwork) => (
            <motion.div
              key={artwork.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="overflow-hidden">
                <CardHeader className="p-0">
                  <img
                    src={artwork.id === "i1" 
                      ? "https://www.vdvelde.com/wp-content/uploads/2024/01/Blauwe-waterlelie.jpg" 
                      : artwork.id === "i2"
                      ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyL9DnssHdAhtB6JxnatYTXaiiVEYBbNFqnQ&s"
                      : artwork.id === "i3"
                      ? "https://www.meisterdrucke.uk/kunstwerke/1260px/Pierre_Auguste_Renoir_-_Dance_at_Le_Moulin_de_la_Galette_-_%28MeisterDrucke-1466458%29.jpg"
                      : artwork.id === "i4"
                      ? "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Pierre-Auguste_Renoir_-_Luncheon_of_the_Boating_Party_-_Google_Art_Project.jpg/500px-Pierre-Auguste_Renoir_-_Luncheon_of_the_Boating_Party_-_Google_Art_Project.jpg"
                      : artwork.id === "pi1"
                      ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDuXRsUi_vW5fZKRvlB41OoexUjhckdOrURQ&s"
                      : artwork.id === "pi2"
                      ? "https://cdn-ilcicad.nitrocdn.com/XkrZSjLEWZESHYCBxyjDOroGVfKxQUxt/assets/images/optimized/i0.wp.com/think.iafor.org/wp-content/uploads/2016/03/ff5eaae48798e2181cc9d3bb7caa529f.1.-Cafe-Terrace-on-the-Place-du-Forum-Arles-at-Night-van-Gogh.jpeg"
                      : artwork.image}
                    alt={artwork.title}
                    className="w-full h-64 object-cover"
                    onError={(e) => {
                      console.error(`Error loading image for ${artwork.title}:`, e);
                      e.currentTarget.src = "https://via.placeholder.com/400x300?text=Image+Not+Available";
                    }}
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{artwork.title}</h3>
                  <p className="text-gray-600 mb-2">{artwork.artist}</p>
                  <p className="text-sm text-gray-500">{artwork.year}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full" asChild>
                    <Link to={`/artwork/${artwork.id}`}>
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage; 