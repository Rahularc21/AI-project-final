
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import CategoryCard from '@/components/CategoryCard';
import { categoriesData } from '@/data/categories';

const CategoriesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredCategories = categoriesData.filter(category => 
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-art-offwhite py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-4">Art Categories</h1>
          <p className="text-lg text-art-charcoal/80 max-w-2xl mx-auto">
            Explore the diverse movements and periods that have shaped the history of art.
          </p>
        </div>
        
        {/* Search bar */}
        <div className="max-w-md mx-auto mb-12 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <Input
            type="text"
            placeholder="Search categories..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        {/* Categories grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCategories.map((category) => (
            <CategoryCard key={category.id} {...category} />
          ))}
        </div>
        
        {filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">No categories found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoriesPage;
