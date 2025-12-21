import { useState, useMemo } from "react";
import MainLayout from "../templates/MainLayout";
import Hero from "../organisms/Hero";
import CarouselSection from "../organisms/CarouselSection";
import MovieDetailModal from "../organisms/MovieDetailModal"; 
import PremiumModal from "../organisms/PremiumModal"; 
import VideoPlayer from "../organisms/VideoPlayer"; // IMPORT INI JANGAN LUPA
import movies from "../../data/movies";   

export default function Films() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [activeMovie, setActiveMovie] = useState(null); // Buat mutar film
  const [premiumTarget, setPremiumTarget] = useState(null); // Buat modal premium
  const [isUserPremium] = useState(false);

  // Filter film saja sesuai flow Group 3.jpg
  const allFilms = useMemo(() => {
    const combined = [...movies.trending, ...movies.newrelease, ...movies.toprated];
    return Array.from(new Map(combined.map(item => [item.id, item])).values())
      .filter(item => item.type === "film");
  }, []);

  const handleStartWatch = (movie) => {
    if (movie.isPremium && !isUserPremium) {
      setSelectedMovie(null);
      setPremiumTarget(movie);
    } else {
      setSelectedMovie(null);
      setActiveMovie(movie); 
    }
  };

  return (
    <MainLayout>
      <Hero />
      
      <div className="flex flex-col gap-6 md:gap-12 pb-10 px-4 md:px-0">
        <CarouselSection
          title="Film Layar Lebar"
          items={allFilms}
          onItemClick={(movie) => setSelectedMovie(movie)}
        />
        
        <CarouselSection
          title="Rilis Baru"
          items={allFilms.slice(0, 6)}
          onItemClick={(movie) => setSelectedMovie(movie)}
        />
      </div>

      
      {/* 1. Detail Modal */}
      {selectedMovie && (
        <MovieDetailModal 
          movie={selectedMovie} 
          onClose={() => setSelectedMovie(null)}
          onStartWatch={handleStartWatch} 
        />
      )}

      {premiumTarget && (
        <PremiumModal 
          movie={premiumTarget} 
          onClose={() => setPremiumTarget(null)} 
        />
      )}

      {activeMovie && (
        <VideoPlayer 
          movie={activeMovie} 
          onBack={() => setActiveMovie(null)} 
        />
      )}
    </MainLayout>
  );
}