import { artworksData } from './artworks';

// Image paths from public folder
const impressionSunriseImage = "https://www.claude-monet.com/assets/img/paintings/impression-sunrise.jpg";
const postImpressionismCover = "https://www.theartstory.org/images20/works/post_impressionism_1.jpg";
const cubismCover = "https://ichef.bbci.co.uk/images/ic/480xn/p0f9v2xb.jpg";
const surrealismCover = "https://media.istockphoto.com/id/1395681169/photo/surrealism_faceless_mirror.jpg?s=612x612&w=0&k=20&c=K0EelupiUFC_uUfYNR0GIifTb_jLo9BJ8USPTdIykSE=";
const renaissanceCover = "https://d3dqioy2sca31t.cloudfront.net/Projects/cms/production/000/025/196/medium/a8bd2a5522469e05aefaeefc60c832c8/italy-rome-vatican-museums-painting-013119.jpg";
const popArtCover = "https://m.media-amazon.com/images/I/61qDSynLkrL._AC_UF1000,1000_QL80_.jpg";
const expressionismCover = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL3kQ_H5uKNHTbw_c68w3Jw3faQTZr1R4dMw&s";
const abstractArtCover = "https://i.etsystatic.com/20070044/r/il/056a2a/5198052223/il_fullxfull.5198052223_ixnx.jpg";

export interface CategoryProps {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  artworkCount: number;
  period: string;
  keyArtists: string[];
}

export const categoriesData: CategoryProps[] = [
  {
    id: "impressionism",
    name: "Impressionism",
    description: "A 19th-century art movement characterized by small, thin brush strokes and emphasis on light and movement",
    imageUrl: impressionSunriseImage,
    artworkCount: 4,
    period: "1867-1886",
    keyArtists: ["Claude Monet", "Pierre-Auguste Renoir", "Edgar Degas", "Berthe Morisot"]
  },
  {
    id: "post-impressionism",
    name: "Post-Impressionism",
    description: "Emerged from Impressionism, extending its approach with more geometric forms and symbolic content.",
    imageUrl: postImpressionismCover,
    artworkCount: 4,
    period: "1886-1905",
    keyArtists: ["Vincent van Gogh", "Paul Cézanne", "Georges Seurat", "Paul Gauguin"]
  },
  {
    id: "cubism",
    name: "Cubism",
    description: "Revolutionary style using geometric shapes to depict objects from multiple viewpoints simultaneously.",
    imageUrl: cubismCover,
    artworkCount: 4,
    period: "1907-1914",
    keyArtists: ["Pablo Picasso", "Georges Braque", "Juan Gris", "Fernand Léger"]
  },
  {
    id: "surrealism",
    name: "Surrealism",
    description: "Featuring unexpected juxtapositions and dreamlike imagery influenced by theories of the unconscious.",
    imageUrl: surrealismCover,
    artworkCount: 4,
    period: "1924-1966",
    keyArtists: ["Salvador Dalí", "René Magritte", "Max Ernst", "Joan Miró"]
  },
  {
    id: "renaissance",
    name: "Renaissance",
    description: "Period of rebirth emphasizing realism, perspective, and classical themes in European art.",
    imageUrl: renaissanceCover,
    artworkCount: 4,
    period: "14th-17th century",
    keyArtists: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Sandro Botticelli"]
  },
  {
    id: "pop-art",
    name: "Pop Art",
    description: "Emerged in the 1950s, challenging traditions by including imagery from popular culture.",
    imageUrl: popArtCover,
    artworkCount: 4,
    period: "1950s-1970s",
    keyArtists: ["Andy Warhol", "Roy Lichtenstein", "Richard Hamilton", "Claes Oldenburg"]
  },
  {
    id: "expressionism",
    name: "Expressionism",
    description: "Movement emphasizing emotional experience over physical reality through distortion and exaggeration.",
    imageUrl: expressionismCover,
    artworkCount: 4,
    period: "Early 20th century",
    keyArtists: ["Edvard Munch", "Ernst Ludwig Kirchner", "Wassily Kandinsky", "Egon Schiele"]
  },
  {
    id: "abstract",
    name: "Abstract Art",
    description: "Non-representational art using shapes, colors, and forms to create compositions independent from visual references.",
    imageUrl: abstractArtCover,
    artworkCount: 4,
    period: "Early 20th century-present",
    keyArtists: ["Wassily Kandinsky", "Piet Mondrian", "Kazimir Malevich", "Jackson Pollock"]
  }
];

// Function to get artworks by category
export const getArtworksByCategory = (categoryId: string) => {
  // Find the category name from the ID
  const category = categoriesData.find(cat => cat.id === categoryId);
  
  if (!category) return [];
  
  // Filter artworks by category name, using case-insensitive comparison
  return artworksData.filter(artwork => 
    artwork.category.toLowerCase() === category.name.toLowerCase()
  );
};

// Function to get category details
export const getCategoryDetails = (categoryId: string) => {
  return categoriesData.find(category => category.id === categoryId) || null;
};
