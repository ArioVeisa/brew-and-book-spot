
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const CAROUSEL_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
    alt: "Coffee being poured into a cup",
  },
  {
    src: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56",
    alt: "Coffee shop interior",
  },
  {
    src: "https://images.unsplash.com/photo-1514066558159-fc8c737ef259",
    alt: "Coffee beans and brewing equipment",
  },
];

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  // Wait for client-side hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToReservation = () => {
    document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Full width background overlay with reduced opacity */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      
      {/* Carousel */}
      <div className="absolute inset-0 w-full h-full">
        {mounted && (
          <Carousel className="w-full h-full" opts={{ loop: true }}>
            <CarouselContent className="h-full">
              {CAROUSEL_IMAGES.map((image, index) => (
                <CarouselItem key={index} className="h-full">
                  <div className="h-full w-full">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 z-20 bg-white/20 hover:bg-white/40 border-none text-white" />
            <CarouselNext className="right-4 z-20 bg-white/20 hover:bg-white/40 border-none text-white" />
          </Carousel>
        )}
      </div>
      
      {/* Content overlay */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <div className="backdrop-blur-sm bg-black/20 p-8 rounded-xl">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 animate-fade-in tracking-tight">
            dcofee.cup
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8 font-light">
            Where every cup tells a story, and every moment feels like home
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToReservation}
              className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-6 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md"
            >
              Reserve a Table
            </Button>
            <Button 
              variant="outline" 
              onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white hover:bg-white/20 px-8 py-6 text-lg font-medium rounded-full transition-all duration-300 shadow-md"
            >
              Explore Menu
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
