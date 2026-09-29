import { ReactNode } from "react"
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_URL } from "@/data/site";

interface ButtonLinkComponentProps{
  href: string
  children: string | ReactNode
  variant?: "primary" | "outline" | "whatsapp"
  className?: string
}

const variants = {
  primary: "bg-brand text-cream hover:bg-[#8d4bb8] shadow-lg shadow-brand/30",
  outline: "border border-cream/30 text-cream hover:border-cream hover:bg-cream/5",
  whatsapp: "bg-whatsapp text-[#07361a] hover:brightness-110 shadow-lg shadow-whatsapp/20",
};

export function ButtonLinkComponent({href, children, variant = "primary", className = ""}: ButtonLinkComponentProps){
  const external = href.startsWith("http");

  return(
    <a
      href={href}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className={`group inline-flex items-center justify-center gap-3 rounded-full px-7 py-3.5 text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  )
};

export function BotaoZapComponent({children = "Chamar no WhatsApp", className = ""}: {children?: string | ReactNode, className?: string}){
  return(
    <ButtonLinkComponent href={WHATSAPP_URL} variant="whatsapp" className={className}>
      <FaWhatsapp className="text-lg" aria-hidden />{children}
    </ButtonLinkComponent>
  )
};
