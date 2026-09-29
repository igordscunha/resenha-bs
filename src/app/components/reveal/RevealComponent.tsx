'use client'

import { CSSProperties, ReactNode, useEffect, useRef, useState } from "react";

interface RevealComponentProps{
  children: ReactNode
  delay?: number
  className?: string
}

// Faz o conteúdo surgir suavemente quando entra na tela
function RevealComponent({children, delay = 0, className = ""}: RevealComponentProps){
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return(
    <div ref={ref} data-visible={visible} className={`reveal ${className}`} style={{ "--delay": `${delay}ms` } as CSSProperties}>
      {children}
    </div>
  )
}

export default RevealComponent;
