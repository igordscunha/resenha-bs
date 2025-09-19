"use client";

import { useState } from "react";
import TopicComponent from "../topic/TopicComponent";
import { chakra_petch, major_mono_display } from "@/app/fonts/fonts";

function ServicesComponent(){

  const [ativo, setAtivo] = useState('tesoura');

  function renderConteudo(){
    switch(ativo){
      case 'tesoura':
        return(
          <div className="md:text-center md:flex md:flex-col md:gap-10 md:py-6">
            <h3 className={`text-2xl md:text-5xl font-semibold text-gray-800 mb-3 ${major_mono_display.className}`}>Cabelo</h3>
            <p className="text-gray-600 md:text-xl">
              Oferecemos cortes personalizados que combinam a precisão da tesoura com a rapidez da máquina. Cada estilo é planejado conforme o formato do seu rosto e seu estilo de vida, garantindo um acabamento impecável.
            </p>
          </div>
        );
      case 'maquina':
        return(
          <div className="md:text-center md:flex md:flex-col md:gap-10 md:py-6">
            <h3 className={`text-2xl md:text-5xl font-semibold text-gray-800 mb-3 ${major_mono_display.className}`}>Barba</h3>
            <p className="text-gray-600 md:text-xl">
              Experiência única e completa para sua barba: alinhamento, esfoliação, toalha quente e finalização com massagem. É pra sair bonito e relaxado.
            </p>
          </div>
        );
      case 'tinta':
        return(
          <div className="md:text-center md:flex md:flex-col md:gap-10 md:py-6">
            <h3 className={`text-2xl md:text-5xl font-semibold text-gray-800 mb-3 ${major_mono_display.className}`}>Tinta / Descoloração</h3>
            <p className={`text-gray-600 md:text-xl ${chakra_petch.className}`}>
              Realizamos correção de cor, cobertura de fios brancos e processos criativos de destaque, como mechas e luzes. Usamos produtos de alta qualidade que protegem a estrutura dos fios, com tratamentos reconstrutores após o procedimento. Seja para uma mudança sutil ou um visual radical, garantimos uniformidade de tom e brilho natural.
            </p>
          </div>
        );
    }
  };

  function estilizacaoBotoes(conteudo: string){
    const baseClass = "px-6 py-2 rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500";
    if (ativo === conteudo) {
      return `${baseClass} bg-[#8b30bfCC] opacity-90 text-white shadow`;
    }
    return `${baseClass} bg-gray-200 text-gray-700 hover:bg-gray-300`;
  };

  return(
    <section id="servicos" className="p-6 md:pt-24 md:flex md:justify-center w-full md:min-h-screen">
      <div className="md:w-2/3 flex flex-col gap-15 md:gap-24">
        <TopicComponent>Serviços</TopicComponent>
        <div className="flex gap-6 md:justify-center">
          <div className="p-4">
            <button onClick={() => setAtivo('tesoura')} className={estilizacaoBotoes('tesoura')}>
              <img src="tesouras.png" alt="tesouras" className="md:scale-125 md:p-3"/>
            </button>
          </div>

          <div className="p-4">
            <button onClick={() => setAtivo('maquina')} className={estilizacaoBotoes('maquina')}>
              <img src="barba.png" alt="maquina de cortar cabelo" className="md:scale-125 md:p-3"/>
            </button>
          </div>

          <div className="p-4">
            <button onClick={() => setAtivo('tinta')} className={estilizacaoBotoes('tinta')}>
              <img src="pincel-para-tingir-cabelo.png" alt="pincel para tingir cabelo" className="md:scale-125 md:p-3"/>
            </button>
          </div>
        </div>

        <div className="p-6 bg-linear-to-b from-stone-100 to-stone-300 border border-gray-200 rounded-lg shadow-xl/20 mt-4">
          {renderConteudo()}
        </div>

      </div>
    </section>
  );
};

export default ServicesComponent;