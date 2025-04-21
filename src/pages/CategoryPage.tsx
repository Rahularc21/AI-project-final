import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { artworksData } from '@/data/artworks';
import ArtCard from '@/components/ArtCard';

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();

  const categoryArtworks = artworksData.filter(
    (artwork) => artwork.category.toLowerCase() === category?.toLowerCase()
  );

  if (!categoryArtworks.length) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">No artworks found in this category</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 capitalize">{category} Artworks</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categoryArtworks.map((artwork) => (
          <div key={artwork.id} onClick={() => navigate(`/artwork/${artwork.id}`)}>
            <ArtCard artwork={artwork} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage; 