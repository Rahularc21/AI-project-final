import { Link } from 'react-router-dom';
import { useState } from 'react';

export interface ArtworkProps {
  id: string;
  title: string;
  artist: string;
  year: string;
  imageUrl: string;
  category: string;
}

const ArtCard = ({ id, title, artist, year, imageUrl, category }: ArtworkProps) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  
  // Fallback image based on category
  const getFallbackImage = () => {
    const fallbackImages: Record<string, string> = {
      "Impressionism": "https://images.metmuseum.org/CRDImages/ep/original/DP-20101-001.jpg",
      "Post-Impressionism": "https://images.metmuseum.org/CRDImages/ep/original/DP346474.jpg",
      "Cubism": "https://images.metmuseum.org/CRDImages/ma/original/DP273789.jpg",
      "Surrealism": "https://images.metmuseum.org/CRDImages/ep/original/DP-16761-001.jpg",
      "Renaissance": "https://images.metmuseum.org/CRDImages/ep/original/DP-14286-001.jpg",
      "Modern Art": "https://images.metmuseum.org/CRDImages/ma/original/DP251139.jpg"
    };
    
    return fallbackImages[category] || "https://images.metmuseum.org/CRDImages/ep/original/DP-20101-001.jpg";
  };

  const handleImageError = () => {
    console.error(`Failed to load image for artwork: ${title} (${imageUrl})`);
    setImageError(true);
    setImageLoading(false);
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  return (
    <Link to={`/artwork/${id}`} className="art-card group animate-fade-in">
      <div className="art-card-image-container relative overflow-hidden rounded-t-lg">
        {imageLoading && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
        )}
        <img 
          src={imageError ? getFallbackImage() : imageUrl} 
          alt={title} 
          className={`art-card-image w-full h-64 object-cover transition-opacity duration-300 ${
            imageLoading ? 'opacity-0' : 'opacity-100'
          }`}
          onError={handleImageError}
          onLoad={handleImageLoad}
          loading="lazy"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white transform translate-y-0 transition-transform duration-300 ease-in-out">
          <h3 className="font-playfair text-lg font-semibold">{title}</h3>
          <p className="text-sm opacity-90">{artist}, {year}</p>
        </div>
      </div>
      <div className="p-4">
        <span className="inline-block bg-art-gold/20 text-art-navy text-xs font-semibold px-2.5 py-1 rounded">
          {category}
        </span>
      </div>
    </Link>
  );
};

export default ArtCard;
