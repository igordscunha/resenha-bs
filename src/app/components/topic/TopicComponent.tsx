import { ReactNode } from "react";
import RevealComponent from "../reveal/RevealComponent";

interface TopicComponentProps{
  eyebrow: string
  children: string | ReactNode
  description?: string | ReactNode
  align?: "center" | "left"
}

function TopicComponent({eyebrow, children, description, align = "center"}: TopicComponentProps){
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return(
    <RevealComponent className={`flex flex-col gap-4 max-w-2xl ${alignment}`}>
      <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-lilac">
        <span className="h-px w-8 bg-lilac/60" aria-hidden />
        {eyebrow}
      </span>
      <h2 className="font-display uppercase text-5xl md:text-7xl leading-[0.95] tracking-tight text-cream">
        {children}
      </h2>
      {description && <p className="text-muted text-base md:text-lg leading-relaxed">{description}</p>}
    </RevealComponent>
  )
}

export default TopicComponent;
