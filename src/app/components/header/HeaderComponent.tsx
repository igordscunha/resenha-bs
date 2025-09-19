'use client'

import { useEffect, useState } from "react";
import { MenuComponent } from "../menu/MenuComponent";
import Image from "next/image";

function HeaderComponent() {

  const [isScrolled, setIsScrolled] = useState(false);

  // useEffect para adicionar e remover o event listener de scroll
  useEffect(() => {
    const handleScroll = () => {
      // Se a posição de scroll Y for maior que 10, muda o estado
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Adiciona o listener quando o componente é montado
    window.addEventListener('scroll', handleScroll);

    // Remove o listener quando o componente é desmontado (limpeza)
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // O array vazio assegura que o efeito rode apenas na montagem/desmontagem

  // Classes dinâmicas baseadas no estado 'isScrolled'
  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-[#8b30bf] opacity-90 shadow-md' : 'bg-transparent'}`;
  const navLinkClasses = `transition-colors duration-300 ${isScrolled ? 'text-white hover:text-green-300' : 'text-white hover:text-green-300'}`;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <span><Image src="logo-com-texto-horizontal.png" alt="logo com texto horizontal" width={0} height={0} unoptimized className="w-1/6"/></span>
          
          {/* Menu de navegação para Desktop */}
          <nav className="hidden md:flex space-x-8">
            <a href="#sobre" className={navLinkClasses}>Sobre</a>
            <a href="#servicos" className={navLinkClasses}>Serviços</a>
            <a href="#precos" className={navLinkClasses}>Preços</a>
            <a href="#horarios" className={navLinkClasses}>Horários</a>
            <a href="#contato" className={navLinkClasses}>Contato</a>
          </nav>

          <div className="flex md:hidden">
            <MenuComponent />
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderComponent;
