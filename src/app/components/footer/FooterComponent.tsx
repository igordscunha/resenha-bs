import Image from "next/image";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { ADDRESS_LINE_1, ADDRESS_LINE_2, INSTAGRAM_URL, MAPS_URL, NAV_LINKS, PHONE_DISPLAY, PHONE_TEL, TRINKS_URL, WHATSAPP_URL } from "@/data/site";

function FooterComponent(){
  return(
    <footer className="border-t border-line/60 bg-surface">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5 flex flex-col gap-5">
          <Image src="/logo-com-texto-horizontal.png" alt="Resenha Barber Club" width={1706} height={374} className="h-9 w-auto self-start"/>
          <p className="max-w-sm text-muted leading-relaxed">
            Tradição e inovação no cuidado masculino. Aqui, seu estilo ganha voz — <span className="font-serif italic text-cream text-lg">vem pra resenha.</span>
          </p>
          <div className="flex gap-3">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid h-11 w-11 place-items-center rounded-full border border-line text-lg text-cream transition hover:border-lilac hover:text-lilac">
              <FaInstagram />
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="grid h-11 w-11 place-items-center rounded-full border border-line text-lg text-cream transition hover:border-whatsapp hover:text-whatsapp">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div className="md:col-span-3">
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-muted">Navegação</h3>
          <ul className="flex flex-col gap-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}><a href={link.href} className="text-cream/85 transition hover:text-lilac">{link.label}</a></li>
            ))}
            <li><a href={TRINKS_URL} target="_blank" rel="noopener noreferrer" className="text-cream/85 transition hover:text-lilac">Agendamento (Trinks)</a></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-muted">Visite a gente</h3>
          <address className="not-italic flex flex-col gap-2.5 text-cream/85">
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="transition hover:text-lilac">{ADDRESS_LINE_1}<br/>{ADDRESS_LINE_2}</a>
            <a href={`tel:${PHONE_TEL}`} className="transition hover:text-lilac">{PHONE_DISPLAY}</a>
            <span className="text-muted text-sm">Seg a Sex 10h–20h · Sáb 9h–16h</span>
          </address>
        </div>
      </div>

      <div className="border-t border-line/60">
        <div className="mx-auto max-w-7xl px-5 py-6 pr-24 text-xs text-muted md:px-8">
          © {new Date().getFullYear()} Resenha Barber Club. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}

export default FooterComponent;
