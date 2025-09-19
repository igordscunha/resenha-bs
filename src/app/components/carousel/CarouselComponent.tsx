'use client'

import { useCallback, useEffect, useRef, useState } from "react";
import testimonialsData from "../../../data/clientes.json" assert { type: 'json' };
import { chakra_petch, major_mono_display } from "@/app/fonts/fonts";

const ChevronLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const ChevronRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

function CaruoselComponent(){

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  }, []);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };
  
  const startAutoScroll = useCallback(() => {
    // Limpa qualquer intervalo existente antes de iniciar um novo
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(nextTestimonial, 5000); // Muda a cada 5 segundos
  }, [nextTestimonial]);

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    startAutoScroll();
    // Limpa o intervalo quando o componente é desmontado
    return () => stopAutoScroll();
  }, [startAutoScroll]);

  return(
    <div className="bg-gray-50 min-h-screen flex items-center justify-center font-sans p-4">
      <div 
        className="max-w-3xl w-full mx-auto"
        onMouseEnter={stopAutoScroll}
        onMouseLeave={startAutoScroll}
      >
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-bold text-gray-800 ${major_mono_display.className}`}>O Que Nossos Clientes Dizem</h2>
          <p className={`text-gray-600 mt-2 text-lg ${chakra_petch.className}`}>Depoimentos de quem confia em nosso trabalho</p>
        </div>
        
        <div className="relative rounded-2xl shadow-2xl bg-white overflow-hidden">
          {/* Slides Container */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonialsData.map((testimonial) => (
              <div key={testimonial.id} className="w-full flex-shrink-0 p-8 md:p-12 text-center">
                <img
                  src={testimonial.imageUrl}
                  alt={`Foto de ${testimonial.name}`}
                  className="w-24 h-24 rounded-full mx-auto mb-6 border-4 border-indigo-200 shadow-lg"
                  onError={(e) => (e.currentTarget.src = 'https://placehold.co/100x100?text=Erro')}
                />
                <p className="text-lg md:text-xl text-gray-600 italic leading-relaxed mb-6">
                  "{testimonial.testimonial}"
                </p>
                <div className="font-bold text-gray-800 text-lg">{testimonial.name}</div>
                {/* <div className="text-indigo-500 text-sm">{testimonial.role}</div> */}
              </div>
            ))}
          </div>

          {/* Botões de Navegação */}
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 bg-white/60 hover:bg-white rounded-full p-2 text-gray-700 hover:text-indigo-500 transition-all duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            aria-label="Depoimento anterior"
          >
            <ChevronLeftIcon />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 bg-white/60 hover:bg-white rounded-full p-2 text-gray-700 hover:text-indigo-500 transition-all duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            aria-label="Próximo depoimento"
          >
            <ChevronRightIcon />
          </button>
        </div>
        
        {/* Indicadores (Dots) */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index ? 'bg-indigo-500 scale-125' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Ir para o depoimento ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CaruoselComponent;