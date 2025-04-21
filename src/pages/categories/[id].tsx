import { useRouter } from 'next/router';
import { getCategoryDetails, getArtworksByCategory } from '@/data/categories';
import ChatBotIcon from '@/components/ChatBotIcon';

const CategoryPage = () => {
  const router = useRouter();
  const { id } = router.query;
  
  const category = getCategoryDetails(id as string);
  const artworks = getArtworksByCategory(id as string);
  
  return (
    <div className="min-h-screen bg-art-offwhite py-12">
      {/* Add ChatBotIcon with the category name */}
      {category && <ChatBotIcon categoryName={category.name} />}
    </div>
  );
};

export default CategoryPage;