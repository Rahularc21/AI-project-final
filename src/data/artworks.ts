import { ArtworkProps } from '@/components/ArtCard';

// Image paths from public folder
const waterLilies = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQihj4up5l2a7M_pQaBiwKWh64K-3fVb20Vqg&s";
const impressionSunrise = "https://collectionapi.metmuseum.org/api/collection/v1/iiif/438002/796389/main-image";
const danceMoulin = "https://collectionapi.metmuseum.org/api/collection/v1/iiif/437314/796067/main-image";
const balMoulin = "https://images.metmuseum.org/CRDImages/ep/original/DT1927.jpg";
const luncheonBoating = "https://images.metmuseum.org/CRDImages/ep/original/DT1947.jpg";
const starryNight = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScTAVsBEHGi8-BMXUQb2WdELu_uf4nFocudg&s";
const cafeTerrace = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoWkuN69aXjlU78trGUM23XLKpwqV_4o9j9A&s";
const birthOfVenus = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjNYRuGZFWIjmz_CZEIwzDXdkWZElZHyRZtA&s";
const monaLisa = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCl-xqZxo2QggMs2wtQEGVme7Qh9A0lS8BCA&s";
const lastSupper = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/%C3%9Altima_Cena_-_Da_Vinci_5.jpg/1200px-%C3%9Altima_Cena_-_Da_Vinci_5.jpg";
const guernica = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK1JSPYC0Xrxfgw7B8h_TDOsMv2vMFtF1P7Q&s";
const weepingWoman = "https://upload.wikimedia.org/wikipedia/en/1/14/Picasso_The_Weeping_Woman_Tate_identifier_T05010_10.jpg";
const persistenceOfMemory = "https://www.thefunartselection.com/cdn/shop/articles/0612ILTS08-web.jpg?v=1652830410";
const greatWave = "/images/artworks/great-wave.jpg";
const bambooForest = "/images/artworks/bamboo-forest.jpg";

export const artworksData: ArtworkProps[] = [
  // Impressionism artworks
  {
    id: "i1",
    title: "Water Lilies",
    artist: "Claude Monet",
    year: "1919",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQihj4up5l2a7M_pQaBiwKWh64K-3fVb20Vqg&s",
    category: "Impressionism"
  },
  {
    id: "i2",
    title: "Impression, Sunrise",
    artist: "Claude Monet",
    year: "1872",
    imageUrl: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/438002/796389/main-image",
    category: "Impressionism"
  },
  {
    id: "i3",
    title: "Dance at Le Moulin de la Galette",
    artist: "Pierre-Auguste Renoir",
    year: "1876",
    imageUrl: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/437314/796067/main-image",
    category: "Impressionism"
  },
  {
    id: "i4",
    title: "Luncheon of the Boating Party",
    artist: "Pierre-Auguste Renoir",
    year: "1881",
    imageUrl: "https://images.metmuseum.org/CRDImages/ep/original/DT1947.jpg",
    category: "Impressionism"
  },

  // Post-Impressionism artworks
  {
    id: "pi1",
    title: "Starry Night",
    artist: "Vincent van Gogh",
    year: "1889",
    imageUrl: starryNight,
    category: "Post-Impressionism"
  },
  {
    id: "pi2",
    title: "Café Terrace at Night",
    artist: "Vincent van Gogh",
    year: "1888",
    imageUrl: cafeTerrace,
    category: "Post-Impressionism"
  },

  // Renaissance artworks
  {
    id: "r1",
    title: "The Birth of Venus",
    artist: "Sandro Botticelli",
    year: "1485",
    imageUrl: birthOfVenus,
    category: "Renaissance"
  },
  {
    id: "r2",
    title: "Mona Lisa",
    artist: "Leonardo da Vinci",
    year: "1503",
    imageUrl: monaLisa,
    category: "Renaissance"
  },
  {
    id: "r3",
    title: "The Last Supper",
    artist: "Leonardo da Vinci",
    year: "1498",
    imageUrl: lastSupper,
    category: "Renaissance"
  },

  // Cubism artworks
  {
    id: "c1",
    title: "Guernica",
    artist: "Pablo Picasso",
    year: "1937",
    imageUrl: guernica,
    category: "Cubism"
  },
  {
    id: "c2",
    title: "The Weeping Woman",
    artist: "Pablo Picasso",
    year: "1937",
    imageUrl: weepingWoman,
    category: "Cubism"
  },

  // Surrealism artworks
  {
    id: "s1",
    title: "The Persistence of Memory",
    artist: "Salvador Dalí",
    year: "1931",
    imageUrl: persistenceOfMemory,
    category: "Surrealism"
  },

  // Asian Art
  {
    id: "a1",
    title: "The Great Wave off Kanagawa",
    artist: "Katsushika Hokusai",
    year: "1831",
    imageUrl: greatWave,
    category: "Asian Art"
  },
  {
    id: "a2",
    title: "Bamboo Forest",
    artist: "Zheng Xie",
    year: "1750",
    imageUrl: bambooForest,
    category: "Asian Art"
  }
];

// Additional artwork details for the detailed view
export const getArtworkDetails = (id: string) => {
  const artwork = artworksData.find(art => art.id === id);
  
  if (!artwork) return null;
  
  const details: Record<string, Record<string, string>> = {
    "i1": {
      description: "Water Lilies is a series of approximately 250 oil paintings by French Impressionist Claude Monet. The paintings depict Monet's flower garden at his home in Giverny, with a focus on the water lily pond.",
      medium: "Oil on canvas",
      dimensions: "200 × 180 cm (78.7 × 70.9 in)",
      location: "Multiple museums worldwide, including the Museum of Modern Art, New York",
      significance: "Part of Monet's extensive Water Lilies series, these paintings represent the culmination of his artistic vision and his deep connection to his garden at Giverny."
    },
    "pi1": {
      description: "The Starry Night is an oil on canvas painting by Dutch Post-Impressionist painter Vincent van Gogh. Painted in June 1889, it depicts the view from the east-facing window of his asylum room at Saint-Rémy-de-Provence, just before sunrise, with the addition of an imaginary village.",
      medium: "Oil on canvas",
      dimensions: "73.7 × 92.1 cm (29.0 × 36.3 in)",
      location: "Museum of Modern Art, New York City",
      significance: "One of Van Gogh's most famous works, The Starry Night is among the most recognized paintings in Western culture. It has been widely referenced in film, music, literature, and popular culture."
    },
    "c1": {
      description: "Les Demoiselles d'Avignon is a large oil painting by Spanish artist Pablo Picasso. The work portrays five nude female prostitutes from a brothel on Carrer d'Avinyó in Barcelona. The women are depicted in a confrontational manner and none are conventionally feminine.",
      medium: "Oil on canvas",
      dimensions: "243.9 × 233.7 cm (96.0 × 92.0 in)",
      location: "Museum of Modern Art, New York City",
      significance: "Considered one of the most influential works of early modern art and a pioneering work of Cubism, challenging traditional perspectives and introducing a new artistic language."
    },
    "s1": {
      description: "The Persistence of Memory is a 1931 painting by artist Salvador Dalí and one of the most recognizable works of Surrealism. It depicts melting pocket watches in a desert landscape, suggesting the fluidity and relativity of time.",
      medium: "Oil on canvas",
      dimensions: "24.1 × 33 cm (9.5 × 13 in)",
      location: "Museum of Modern Art, New York City",
      significance: "One of the most famous surrealist paintings, it explores concepts of time, reality, and the subconscious through dreamlike imagery that has become iconic in popular culture."
    },
    "r1": {
      description: "The Birth of Venus depicts the goddess Venus arriving at the shore after her birth, when she had emerged from the sea. The painting is in the Uffizi Gallery in Florence, Italy.",
      medium: "Tempera on canvas",
      dimensions: "172.5 × 278.5 cm (67.9 × 109.6 in)",
      location: "Uffizi Gallery, Florence, Italy",
      significance: "One of the most famous paintings from the Renaissance period, it symbolizes love and beauty and showcases the revival of classical mythology in Renaissance art."
    },
    // Add more detailed descriptions for other key artworks
  };
  
  return {
    ...artwork,
    details: details[id] || {
      description: "This masterpiece showcases the artist's unique style and technical prowess, capturing the essence of the " + artwork.category + " movement.",
      medium: "Oil on canvas",
      dimensions: "Approximately 100 × 80 cm",
      location: "Major art museum collection",
      significance: "An iconic work that exemplifies " + artwork.artist + "'s contribution to art history."
    }
  };
};
