
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToReservation = () => {
    document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-cafe-warm to-cafe-cream">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-cafe-brown mb-6 animate-fade-in">
          dcofee.cup
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 font-light">
          Where every cup tells a story, and every moment feels like home
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={scrollToReservation}
            className="bg-cafe-brown hover:bg-cafe-brown/90 text-white px-8 py-6 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Reserve a Table
          </Button>
          <Button 
            variant="outline" 
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-cafe-brown text-cafe-brown hover:bg-cafe-brown hover:text-white px-8 py-6 text-lg font-medium rounded-full transition-all duration-300"
          >
            Explore Menu
          </Button>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cafe-brown rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cafe-brown rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
