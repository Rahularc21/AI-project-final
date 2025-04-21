
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCategoryDetails, getArtworksByCategory } from '@/data/categories';
import { Button } from '@/components/ui/button';
import ArtCard, { ArtworkProps } from '@/components/ArtCard';
import { ArrowLeft } from 'lucide-react';

const CategoryDetailPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [category, setCategory] = useState<any>(null);
  const [artworks, setArtworks] = useState<ArtworkProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (categoryId) {
      const categoryData = getCategoryDetails(categoryId);
      const categoryArtworks = getArtworksByCategory(categoryId);
      
      setCategory(categoryData);
      setArtworks(categoryArtworks);
      setLoading(false);
    }
  }, [categoryId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-art-navy border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-art-navy">Loading...</p>
        </div>
      </div>
    );
  }

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-playfair mb-4">Category Not Found</h2>
          <p className="mb-6">The category you're looking for doesn't exist.</p>
          <Link to="/categories">
            <Button>Back to Categories</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-art-offwhite py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/categories" className="inline-flex items-center text-art-navy hover:text-art-burgundy mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to All Categories
        </Link>
        
        {/* Category header */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div 
            className="h-64 bg-cover bg-center"
            style={{ backgroundImage: `url(${category.imageUrl})` }}
          >
            <div className="h-full w-full bg-black/50 flex items-end">
              <div className="p-6 sm:p-10 text-white">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair">{category.name}</h1>
                <p className="text-lg mt-2">{category.period}</p>
              </div>
            </div>
          </div>
          
          <div className="p-6 sm:p-10">
            <p className="text-lg mb-6">{category.description}</p>
            
            <div className="mb-6">
              <h2 className="text-xl font-semibold font-playfair mb-3">Key Artists</h2>
              <div className="flex flex-wrap gap-2">
                {category.keyArtists.map((artist: string) => (
                  <span 
                    key={artist} 
                    className="bg-art-navy/10 text-art-navy px-3 py-1 rounded-full text-sm"
                  >
                    {artist}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Artworks in this category */}
        <h2 className="text-2xl sm:text-3xl font-bold font-playfair mb-8">
          Artworks in {category.name}
        </h2>
        
        {artworks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {artworks.map((artwork) => (
              <ArtCard key={artwork.id} {...artwork} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <p>No artworks found in this category yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryDetailPage;
