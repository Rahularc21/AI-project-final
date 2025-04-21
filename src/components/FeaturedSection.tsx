import { motion } from "framer-motion";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Star, X } from "lucide-react";
import { useState } from "react";

// Image paths
const waterLilies = "https://www.vdvelde.com/wp-content/uploads/2024/01/Blauwe-waterlelie.jpg";
const impressionSunrise = "https://www.claude-monet.com/assets/img/paintings/impression-sunrise.jpg";
const danceMoulin = "https://www.renoir.net/images/paintings/dance-at-le-moulin-de-la-galette.jpg";
const balMoulin = "https://www.renoir.net/images/paintings/bal-du-moulin-de-la-galette.jpg";
const luncheonBoating = "https://www.renoir.net/images/paintings/luncheon-of-the-boating-party.jpg";
const starryNight = "https://www.vangoghgallery.com/img/starry_night_full.jpg";
const cafeTerrace = "https://www.vangoghgallery.com/img/cafe-terrace-at-night.jpg";

const featuredItems = [
  {
    id: 1,
    title: "Water Lilies Collection",
    description: "Immerse yourself in Claude Monet's iconic Water Lilies series, a masterpiece of Impressionism",
    image: waterLilies,
    artworks: [
      {
        title: "Water Lilies",
        artist: "Claude Monet",
        year: "1916",
        image: waterLilies
      }
    ],
    link: "/categories/impressionism",
    featured: true
  },
  {
    id: 2,
    title: "Impression, Sunrise",
    description: "Experience Monet's groundbreaking work that gave birth to the Impressionist movement",
    image: impressionSunrise,
    artworks: [
      {
        title: "Impression, Sunrise",
        artist: "Claude Monet",
        year: "1872",
        image: impressionSunrise
      }
    ],
    link: "/categories/impressionism",
    featured: true
  },
  {
    id: 3,
    title: "Dance at Le Moulin de la Galette",
    description: "Discover Renoir's vibrant depiction of Parisian social life in the late 19th century",
    image: danceMoulin,
    artworks: [
      {
        title: "Dance at Le Moulin de la Galette",
        artist: "Pierre-Auguste Renoir",
        year: "1876",
        image: danceMoulin
      }
    ],
    link: "/categories/impressionism",
    featured: false
  },
  {
    id: 4,
    title: "Bal du moulin de la Galette",
    description: "Explore Renoir's masterpiece capturing the lively atmosphere of a Parisian dance hall",
    image: balMoulin,
    artworks: [
      {
        title: "Bal du moulin de la Galette",
        artist: "Pierre-Auguste Renoir",
        year: "1876",
        image: balMoulin
      }
    ],
    link: "/categories/impressionism",
    featured: false
  },
  {
    id: 5,
    title: "Luncheon of the Boating Party",
    description: "Experience Renoir's celebration of Parisian leisure and social gathering",
    image: luncheonBoating,
    artworks: [
      {
        title: "Luncheon of the Boating Party",
        artist: "Pierre-Auguste Renoir",
        year: "1881",
        image: luncheonBoating
      }
    ],
    link: "/categories/impressionism",
    featured: false
  },
  {
    id: 6,
    title: "Starry Night Collection",
    description: "Immerse yourself in Van Gogh's mesmerizing nightscapes and his unique style",
    image: starryNight,
    artworks: [
      {
        title: "Starry Night",
        artist: "Vincent van Gogh",
        year: "1889",
        image: starryNight
      }
    ],
    link: "/categories/post-impressionism",
    featured: false
  },
  {
    id: 7,
    title: "Café Terrace at Night",
    description: "Discover Van Gogh's vibrant night scene in Arles, France",
    image: cafeTerrace,
    artworks: [
      {
        title: "Café Terrace at Night",
        artist: "Vincent van Gogh",
        year: "1888",
        image: cafeTerrace
      }
    ],
    link: "/categories/post-impressionism",
    featured: false
  }
];

const FeaturedSection = () => {
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-art-burgundy/10 text-art-burgundy px-4 py-2 rounded-full mb-4">
            <Star className="w-5 h-5" />
            <span className="font-medium">Featured Collections</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-art-burgundy mb-4">
            Explore World-Class Art Collections
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Immerse yourself in our carefully curated selection of art collections from around the world
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="cursor-pointer"
            >
              <Card className={`group overflow-hidden h-full flex flex-col hover:shadow-xl transition-all duration-300 ${item.featured ? 'md:col-span-2 lg:col-span-2' : ''}`}>
                <div className="relative h-48 md:h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  {item.featured && (
                    <div className="absolute top-4 right-4 bg-art-burgundy text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured Collection
                    </div>
                  )}
                </div>
                <CardHeader>
                  <h3 className="text-xl font-bold text-art-burgundy group-hover:text-art-burgundy/80 transition-colors">
                    {item.title}
                  </h3>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="space-y-2">
                    {item.artworks.map((artwork, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        onClick={() => setSelectedArtwork(artwork)}
                      >
                        <img 
                          src={artwork.image} 
                          alt={artwork.title}
                          className="w-12 h-12 object-cover rounded"
                        />
                        <div>
                          <p className="font-medium text-sm">{artwork.title}</p>
                          <p className="text-xs text-gray-500">{artwork.artist} ({artwork.year})</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Link to={item.link} className="w-full">
                    <Button className="w-full bg-art-burgundy hover:bg-art-burgundy/90 flex items-center justify-center gap-2 group">
                      Explore Collection
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Artwork Preview Modal */}
        {selectedArtwork && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full mx-4">
              <div className="relative">
                <img 
                  src={selectedArtwork.image} 
                  alt={selectedArtwork.title}
                  className="w-full h-96 object-cover rounded-t-lg"
                />
                <button 
                  onClick={() => setSelectedArtwork(null)}
                  className="absolute top-4 right-4 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-art-burgundy mb-2">{selectedArtwork.title}</h3>
                <p className="text-gray-600 mb-1">{selectedArtwork.artist}</p>
                <p className="text-gray-500">{selectedArtwork.year}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedSection;
