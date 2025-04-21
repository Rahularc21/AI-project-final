import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      welcome: 'Welcome to ArtSpark',
      explore: 'Explore Collections',
      startTour: 'Start Art Tour',
      virtualTours: 'Virtual Museum Tours',
      artHistory: 'Art History Insights',
      collections: 'Curated Collections',
      chatWithGuide: 'Chat with Art Guide',
      uploadImage: 'Upload Image for Recognition',
      listening: 'Listening...',
      stopListening: 'Stop Listening',
    },
  },
  es: {
    translation: {
      welcome: 'Bienvenido a ArtSpark',
      explore: 'Explorar Colecciones',
      startTour: 'Comenzar Tour de Arte',
      virtualTours: 'Tours Virtuales de Museos',
      artHistory: 'Información de Historia del Arte',
      collections: 'Colecciones Curadas',
      chatWithGuide: 'Chatear con Guía de Arte',
      uploadImage: 'Subir Imagen para Reconocimiento',
      listening: 'Escuchando...',
      stopListening: 'Dejar de Escuchar',
    },
  },
  fr: {
    translation: {
      welcome: 'Bienvenue sur ArtSpark',
      explore: 'Explorer les Collections',
      startTour: 'Commencer la Visite',
      virtualTours: 'Visites Virtuelles de Musées',
      artHistory: 'Informations sur l\'Histoire de l\'Art',
      collections: 'Collections Sélectionnées',
      chatWithGuide: 'Discuter avec le Guide d\'Art',
      uploadImage: 'Télécharger une Image pour la Reconnaissance',
      listening: 'Écoute...',
      stopListening: 'Arrêter l\'Écoute',
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n; 