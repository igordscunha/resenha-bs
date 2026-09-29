import { GiBeard, GiPaintBrush, GiScissors } from "react-icons/gi";
import { IconType } from "react-icons";
import TopicComponent from "../topic/TopicComponent";
import RevealComponent from "../reveal/RevealComponent";
import { SERVICES } from "@/data/site";

const icons: Record<(typeof SERVICES)[number]["id"], IconType> = {
  cabelo: GiScissors,
  barba: GiBeard,
  coloracao: GiPaintBrush,
};

function ServicesComponent(){
  return(
    <section id="servicos" className="relative bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <TopicComponent eyebrow="O que fazemos" description="Do corte clássico à transformação completa, cada atendimento é feito sem pressa e com atenção aos detalhes.">
          Serviços
        </TopicComponent>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = icons[service.id];
            return (
              <RevealComponent key={service.id} delay={index * 120} className="h-full">
                <article className="group relative h-full overflow-hidden rounded-3xl border border-line bg-ink p-8 md:p-10 transition-colors duration-500 hover:border-brand">
                  <div aria-hidden className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand/0 blur-3xl transition-all duration-700 group-hover:bg-brand/30" />
                  <span className="font-display text-7xl text-line transition-colors duration-500 group-hover:text-brand-dark">0{index + 1}</span>
                  <div className="mt-6 grid h-14 w-14 place-items-center rounded-2xl bg-brand/15 text-3xl text-lilac">
                    <Icon aria-hidden />
                  </div>
                  <h3 className="mt-6 font-display text-3xl uppercase tracking-tight">{service.title}</h3>
                  <p className="mt-4 text-muted leading-relaxed">{service.description}</p>
                </article>
              </RevealComponent>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesComponent;
