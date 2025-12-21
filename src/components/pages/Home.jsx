import { useState } from "react";
import MainLayout from "../templates/MainLayout";
import Hero from "../organisms/Hero";
import ContinueWatchCarousel from "../organisms/ContinueWatchCarousel";
import CarouselSection from "../organisms/CarouselSection";
import MovieDetailModal from "../organisms/MovieDetailModal"; 
import PremiumModal from "../organisms/PremiumModal"; 
import VideoPlayer from "../organisms/VideoPlayer"; 
import movies from "../../data/movies";   

import leftArrow from "/assets/frame72.png";  
import rightArrow from "/assets/frame71.png";

export default function Home() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showPremiumModal, setShowPremiumModal] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null); 
  const [pendingMovie, setPendingMovie] = useState(null); 
  
  const [isUserPremium] = useState(false);

  const handleItemClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleStartWatch = (movie) => {
    if (movie.isPremium && !isUserPremium) {
      setPendingMovie(movie); 
      setSelectedMovie(null);
      setShowPremiumModal(true); 
      document.body.style.overflow = "hidden";
    } else {
      setSelectedMovie(null);
      setActiveVideo(movie); 
      document.body.style.overflow = "hidden";
    }
  };

  const handleBackFromPlayer = () => {
    setActiveVideo(null);
    document.body.style.overflow = "auto";
  };

  const handleClosePremium = () => {
    setShowPremiumModal(false);
    setPendingMovie(null);
    document.body.style.overflow = "auto";
  };

  return (
    <MainLayout>
      {activeVideo && (
        <VideoPlayer 
          movie={activeVideo} 
          onBack={handleBackFromPlayer} 
        />
      )}

      {showPremiumModal && (
  <PremiumModal 
    movie={pendingMovie} 
    onClose={handleClosePremium} 
  />
)}

      <Hero />
      
      <div className="flex flex-col gap-4 sm:gap-8 pb-10">
        <ContinueWatchCarousel
          title="Melanjutkan Tonton"
          items={movies.continue}
          leftArrowSrc={leftArrow}  
          rightArrowSrc={rightArrow} 
          onItemClick={handleItemClick} 
        />

        <CarouselSection
          title="Top Rating Hari Ini"
          items={movies.toprated}
          leftArrowSrc={leftArrow}  
          rightArrowSrc={rightArrow} 
          onItemClick={handleItemClick}
        />

        <CarouselSection
          title="Film Trending"
          items={movies.trending}
          leftArrowSrc={leftArrow}  
          rightArrowSrc={rightArrow} 
          onItemClick={handleItemClick}
        />

        <CarouselSection
          title="Rilis Baru"
          items={movies.newrelease}
          leftArrowSrc={leftArrow}  
          rightArrowSrc={rightArrow} 
          onItemClick={handleItemClick}
        />
      </div>

      {selectedMovie && (
        <MovieDetailModal 
          movie={selectedMovie} 
          onClose={() => setSelectedMovie(null)}
          onStartWatch={handleStartWatch} 
        />
      )}
    </MainLayout>
  );
}