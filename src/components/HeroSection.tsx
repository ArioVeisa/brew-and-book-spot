
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Gallery, Image } from "lucide-react";

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

const GALLERY_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    alt: "Stylish coffee presentation",
  },
  {
    src: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    alt: "Warm coffee shop ambience",
  },
  {
    src: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    alt: "Cozy coffee corner",
  },
  {
    src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    alt: "Coffee shop decoration",
  },
];

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  const [api, setApi] = useState<any>(null);

  // Wait for client-side hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // Auto-scroll carousel
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  const scrollToReservation = () => {
    document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToGallery = () => {
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section className="relative h-[100svh] w-full flex flex-col items-center justify-center overflow-hidden">
        {/* Full width background overlay with reduced opacity */}
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        
        {/* Carousel */}
        <div className="absolute inset-0 w-full h-full">
          {mounted && (
            <Carousel className="w-full h-full" setApi={setApi} opts={{ loop: true }}>
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
              <CarouselPrevious className="left-4 md:left-8 z-20 bg-amber-50/30 hover:bg-amber-50/50 border-none text-amber-800" />
              <CarouselNext className="right-4 md:right-8 z-20 bg-amber-50/30 hover:bg-amber-50/50 border-none text-amber-800" />
            </Carousel>
          )}
        </div>
        
        {/* Content overlay - centered with max width for better mobile experience */}
        <div className="relative z-20 text-center px-4 sm:px-6 w-full max-w-3xl mx-auto">
          <div className="backdrop-blur-md bg-amber-800/40 p-6 sm:p-8 rounded-xl shadow-lg">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-amber-50 mb-4 sm:mb-6 animate-fade-in tracking-tight">
              dcofee.cup
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-amber-50 mb-6 sm:mb-8 font-light">
              Where every cup tells a story, and every moment feels like home
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToReservation}
                className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-5 sm:px-8 sm:py-6 text-base sm:text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-md"
              >
                Reserve a Table
              </Button>
              <Button 
                variant="outline" 
                onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-amber-50 bg-amber-50/30 text-amber-50 hover:bg-amber-50/40 px-6 py-5 sm:px-8 sm:py-6 text-base sm:text-lg font-medium rounded-full transition-all duration-300 shadow-md"
              >
                Explore Menu
              </Button>
            </div>
            <div className="mt-6">
              <Button
                variant="ghost" 
                onClick={scrollToGallery}
                className="text-amber-50 hover:bg-amber-50/20 px-4 py-2 text-sm font-medium rounded-full flex items-center gap-2 mx-auto"
              >
                <Gallery size={16} />
                View our Gallery
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <div className="w-6 h-10 border-2 border-amber-50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-amber-50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-amber-50/80">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">Our Gallery</h2>
            <p className="text-amber-800 text-lg max-w-2xl mx-auto">
              Step into the warm ambience of dcofee.cup through our gallery. Each image captures the essence of our café's unique atmosphere.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {GALLERY_IMAGES.map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group h-64 md:h-80">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-amber-50 font-light">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
