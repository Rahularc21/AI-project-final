
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getArtworkDetails } from '@/data/artworks';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const ArtworkDetailPage = () => {
  const { artworkId } = useParams<{ artworkId: string }>();
  const [artwork, setArtwork] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (artworkId) {
      const artworkData = getArtworkDetails(artworkId);
      setArtwork(artworkData);
      setLoading(false);
    }
  }, [artworkId]);

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

  if (!artwork) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-playfair mb-4">Artwork Not Found</h2>
          <p className="mb-6">The artwork you're looking for doesn't exist.</p>
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-art-offwhite py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center text-art-navy hover:text-art-burgundy mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Gallery
        </Link>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Artwork image */}
            <div className="relative h-[400px] lg:h-auto">
              <img 
                src={artwork.imageUrl} 
                alt={artwork.title} 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Artwork info */}
            <div className="p-6 sm:p-10">
              <div className="mb-6">
                <h1 className="text-3xl font-bold font-playfair mb-2">{artwork.title}</h1>
                <p className="text-xl">{artwork.artist}, {artwork.year}</p>
                <div className="mt-2">
                  <span className="inline-block bg-art-gold/20 text-art-navy text-sm font-semibold px-2.5 py-1 rounded">
                    {artwork.category}
                  </span>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold font-playfair mb-2">Description</h2>
                  <p className="text-gray-700">{artwork.details?.description}</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold mb-1">Medium</h3>
                    <p className="text-gray-700">{artwork.details?.medium}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Dimensions</h3>
                    <p className="text-gray-700">{artwork.details?.dimensions}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Current Location</h3>
                    <p className="text-gray-700">{artwork.details?.location}</p>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-xl font-semibold font-playfair mb-2">Significance</h2>
                  <p className="text-gray-700">{artwork.details?.significance}</p>
                </div>
              </div>
              
              <div className="mt-8">
                <Link to="/chatbot">
                  <Button className="bg-art-navy hover:bg-art-navy/90">
                    Ask Our Art Guide About This Piece
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtworkDetailPage;
