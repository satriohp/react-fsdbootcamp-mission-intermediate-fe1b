import MainLayout from "../templates/MainLayout";
import Hero from "../organisms/Hero";
import CarouselSection from "../organisms/CarouselSection";
import movies from "../../data/movies";  

// Pastikan gambar berada di folder 'public/assets/' untuk diakses dengan path seperti ini
import leftArrow from "/assets/frame72.png";  
import rightArrow from "/assets/frame71.png";

export default function Home() {
  return (
    <MainLayout>
      <Hero />

      <CarouselSection
        title="Melanjutkan Tonton"
        items={movies.continue}  // Tidak perlu optional chaining
        leftArrowSrc={leftArrow}  
        rightArrowSrc={rightArrow} 
      />
      <CarouselSection
        title="Top Rating Hari Ini"
        items={movies.toprated}  // Tidak perlu optional chaining
        leftArrowSrc={leftArrow}  
        rightArrowSrc={rightArrow} 
      />
      <CarouselSection
        title="Film Trending"
        items={movies.trending}  // Tidak perlu optional chaining
        leftArrowSrc={leftArrow}  
        rightArrowSrc={rightArrow} 
      />
      <CarouselSection
        title="Rilis Baru"
        items={movies.newrelease}  // Tidak perlu optional chaining
        leftArrowSrc={leftArrow}  
        rightArrowSrc={rightArrow} 
      />
    </MainLayout>
  );
}
