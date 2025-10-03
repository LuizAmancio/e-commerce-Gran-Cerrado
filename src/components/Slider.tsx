"use client";

import { LoadingContext } from "@/context/LoadingContext";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useContext, useEffect, useState } from "react";

export const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const {isLoading} = useContext(LoadingContext);

     const slides = [
        {
        image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=1200&h=400&fit=crop',
        title: 'Proteínas Premium',
        subtitle: 'Até 30% OFF em toda linha'
        },
        {
        image: 'https://images.unsplash.com/photo-1608797178974-15b35a64ede9?w=1200&h=400&fit=crop',
        title: 'Castanhas do Cerrado',
        subtitle: 'Naturais e nutritivas'
        },
        {
        image: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=1200&h=400&fit=crop',
        title: 'Superalimentos',
        subtitle: 'Energia natural para seus treinos'
        }
    ];

    const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (!isLoading) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);

      return () => clearInterval(timer);
    }
  }, [isLoading, slides.length]);

    return(
        <div className="slider max-w-7xl mx-auto px-4 mt-6">
        <div className="relative rounded-2xl overflow-hidden shadow-xl">
          <div className="relative h-64 md:h-80">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex flex-col justify-center px-8 md:px-16">
                  <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-2">
                    {slide.title}
                  </h2>
                  <p className="text-lg md:text-xl text-green-300 font-semibold">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Slider Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-1 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition"
          >
            <ChevronLeft className="text-green-700" size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-1 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition"
          >
            <ChevronRight className="text-green-700" size={24} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition ${
                  index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    );
}