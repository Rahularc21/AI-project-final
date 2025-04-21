
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  artworkCount: number;
}

const CategoryCard = ({ id, name, description, imageUrl, artworkCount }: CategoryCardProps) => {
  return (
    <Link to={`/categories/${id}`} className="group animate-fade-in">
      <div className="art-card h-full flex flex-col">
        <div className="relative overflow-hidden">
          <img 
            src={imageUrl} 
            alt={name} 
            className="art-card-image h-48"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="font-playfair text-xl font-semibold mb-2 group-hover:text-art-burgundy transition-colors">{name}</h3>
          <p className="text-gray-600 text-sm mb-4">{description}</p>
          <div className="mt-auto">
            <span className="text-xs font-semibold text-art-navy">
              {artworkCount} artworks
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
