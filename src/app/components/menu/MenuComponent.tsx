'use client'

import { useEffect, useRef, useState } from "react";

const Icone = () => (
  <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
  </svg>
);

export const MenuComponent = () => {

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
  }, []);

  return (
      <div className="relative" ref={dropdownRef}>
          <button 
            onClick={toggleMenu}
            className="flex items-center space-x-2 text-[#9d4edd] bg-[#f9f9f9] hover:text-[#3C096C] p-2 rounded-lg border border-transparent hover:border-gray-200 transition-colors focus:outline-none"
          >
            <span className="text-sm md:text-lg md:font-medium">Menu</span>
            <div className={`transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : ''}`}>
              <Icone />
            </div>
          </button>

          <div 
            className={`absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-30 transform transition-all duration-200 ease-in-out ${isOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}
          >
            <a href="#sobre" className="block px-4 py-2 text-sm text-[#9d4edd] hover:bg-gray-100 hover:text-[#3C096C]">Sobre</a>
            <a href="#servicos" className="block px-4 py-2 text-sm text-[#9d4edd] hover:bg-gray-100 hover:text-[#3C096C]">Serviços</a>
            <a href="#precos" className="block px-4 py-2 text-sm text-[#9d4edd] hover:bg-gray-100 hover:text-[#3C096C]">Preços</a>
            <a href="#horarios" className="block px-4 py-2 text-sm text-[#9d4edd] hover:bg-gray-100 hover:text-[#3C096C]">Horários</a>
            <a href="#contato" className="block px-4 py-2 text-sm text-[#9d4edd] hover:bg-gray-100 hover:text-[#3C096C]">Contatos</a>
          </div>
      </div>
    );
};