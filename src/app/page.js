"use client";

import HeroSection from "./components/heroSection";
import FeaturedMovies from "./components/FeaturedMovies";
import Genres from "./components/Genres";
import MySlider from "./components/Swiper";



export default function Home() {
  

  return (
    <div className="flex flex-col text-red-500 flex-1 items-center justify-center bg-zinc-50 font-sans">
      <MySlider></MySlider>
      <HeroSection></HeroSection>
      <FeaturedMovies></FeaturedMovies>
      <Genres></Genres>
    </div>
  );
}
