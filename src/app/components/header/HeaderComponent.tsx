'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { NAV_LINKS, TRINKS_URL } from "@/data/site";

function HeaderComponent() {

  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fecha o menu mobile com a tecla Esc e trava a rolagem enquanto aberto
  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => event.key === "Escape" && setIsOpen(false);
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen]);

  const solid = isScrolled || isOpen;

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${solid ? 'bg-ink/85 backdrop-blur-lg border-b border-line/60' : 'bg-transparent border-b border-transparent'}`}>
      <div className="mx-auto flex h-16 md:h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#inicio" aria-label="Resenha Barber Club — início" onClick={() => setIsOpen(false)}>
          <Image src="/logo-com-texto-horizontal.png" alt="Resenha Barber Club" width={1706} height={374} priority className="h-7 md:h-8 w-auto"/>
        </a>

        {/* Menu de navegação para Desktop */}
        <nav className="hidden md:flex items-center gap-9" aria-label="Principal">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="relative text-sm font-medium text-cream/80 transition-colors hover:text-cream after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-lilac after:transition-transform hover:after:scale-x-100">
              {link.label}
            </a>
          ))}
          <a href={TRINKS_URL} target="_blank" rel="noopener noreferrer" className="rounded-full bg-brand px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-cream transition hover:bg-[#8d4bb8]">
            Agendar
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden -mr-2 p-2 text-3xl text-cream"
          aria-expanded={isOpen}
          aria-controls="menu-mobile"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <HiXMark /> : <HiBars3 />}
        </button>
      </div>

      {/* Menu de navegação para Mobile */}
      <nav
        id="menu-mobile"
        aria-label="Principal"
        className={`md:hidden fixed inset-x-0 top-16 h-[calc(100dvh-4rem)] bg-ink px-5 pt-8 pb-10 flex flex-col transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
      >
        <ul className="flex flex-col">
          {NAV_LINKS.map((link, index) => (
            <li key={link.href} className={`border-b border-line/60 transition-all duration-500 ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`} style={{ transitionDelay: isOpen ? `${index * 50}ms` : "0ms" }}>
              <a href={link.href} onClick={() => setIsOpen(false)} className="flex items-center justify-between py-5 font-display text-4xl uppercase text-cream">
                {link.label}
                <span className="font-sans text-sm text-muted">0{index + 1}</span>
              </a>
            </li>
          ))}
        </ul>
        <a href={TRINKS_URL} target="_blank" rel="noopener noreferrer" className="mt-auto rounded-full bg-brand py-4 text-center text-sm font-bold uppercase tracking-wider text-cream">
          Agendar horário
        </a>
      </nav>
    </header>
  )
}

export default HeaderComponent;
