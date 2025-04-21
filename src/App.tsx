import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CategoriesPage from "./pages/CategoriesPage";
import CategoryDetailPage from "./pages/CategoryDetailPage";
import ArtworkDetailPage from "./pages/ArtworkDetailPage";
import ChatbotPage from "./pages/ChatbotPage";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingActionButton from "./components/FloatingActionButton";
import { ThemeProvider } from "./components/ThemeProvider";
import { ErrorBoundary } from "react-error-boundary";
import { AuthProvider } from './components/AuthProvider';
import './lib/i18n';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ExplorePage from './pages/ExplorePage';
import AboutPage from './pages/AboutPage';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import TestimonialsSection from './components/TestimonialsSection';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

function ErrorFallback({ error }: { error: Error }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center p-8">
        <h1 className="text-2xl font-bold text-foreground mb-4">Something went wrong</h1>
        <p className="text-muted-foreground mb-4">{error.message}</p>
        <button 
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

const App = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ThemeProvider defaultTheme="system" storageKey="artspark-theme">
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <Router>
                <div className="min-h-screen flex flex-col bg-background text-foreground">
                  <div className="fixed inset-0 bg-gradient-to-br from-art-gold/20 via-transparent to-art-burgundy/20 pointer-events-none" />
                  <div className="fixed inset-0 border-8 border-art-gold/20 pointer-events-none" />
                  <Navbar />
                  <main className="flex-grow relative z-10">
                    <Routes>
                      <Route path="/" element={
                        <>
                          <HeroSection />
                          <FeaturesSection />
                          <TestimonialsSection />
                          <HomePage />
                        </>
                      } />
                      <Route path="/categories" element={<CategoriesPage />} />
                      <Route path="/categories/:categoryId" element={<CategoryDetailPage />} />
                      <Route path="/artwork/:artworkId" element={<ArtworkDetailPage />} />
                      <Route path="/chatbot" element={<ChatbotPage />} />
                      <Route path="/category/:category" element={<CategoryPage />} />
                      <Route path="/explore" element={<ExplorePage />} />
                      <Route path="/about" element={<AboutPage />} />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </main>
                  <Footer />
                  <FloatingActionButton />
                </div>
              </Router>
            </TooltipProvider>
          </AuthProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;
