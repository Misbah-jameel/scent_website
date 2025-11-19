import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "11.11 MEGA SALE",
      subtitle: "UP TO 50% OFF",
      description: "Discover luxury fragrances at unbeatable prices"
    },
    {
      title: "NEW ARRIVALS",
      subtitle: "FRESH SCENTS",
      description: "Explore our latest collection of premium perfumes"
    },
    {
      title: "BUNDLE DEALS",
      subtitle: "SAVE MORE",
      description: "Mix and match your favorite fragrances"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative bg-gradient-to-b from-black to-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center relative">
          <div className="mb-6">
            <span className="text-[#c19e66] text-sm font-semibold tracking-widest uppercase">
              {slides[currentSlide].subtitle}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            {slides[currentSlide].title}
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            {slides[currentSlide].description}
          </p>
          <button className="bg-[#c19e66] text-black px-8 py-4 rounded-sm font-semibold hover:bg-[#d4b479] transition-colors">
            Shop Now
          </button>

          <div className="flex gap-2 justify-center mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide ? 'bg-[#c19e66] w-8' : 'bg-gray-600'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
