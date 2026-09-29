import { FaRegCalendarCheck } from "react-icons/fa";
import { BotaoZapComponent, ButtonLinkComponent } from "../buttons/ButtonsComponent";
import TopicComponent from "../topic/TopicComponent";
import RevealComponent from "../reveal/RevealComponent";
import { PRICES, TRINKS_URL } from "@/data/site";

function PricesTableComponent(){
  return(
    <section id="precos" className="relative py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-12 lg:gap-20">

        <div className="lg:col-span-5 flex flex-col gap-8 lg:sticky lg:top-28 lg:self-start">
          <TopicComponent eyebrow="Tabela" align="left" description="Preço justo, sem surpresa. Tintura e descoloração são avaliadas na hora — chama a gente pra um orçamento.">
            Preços
          </TopicComponent>

          <RevealComponent delay={100}>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand to-brand-dark p-7">
              <span className="font-display text-6xl leading-none text-cream">10% OFF</span>
              <p className="mt-2 font-serif text-2xl italic text-cream/90">de segunda a quarta-feira</p>
              <span aria-hidden className="absolute -bottom-8 -right-4 font-display text-[9rem] leading-none text-cream/10">%</span>
            </div>
          </RevealComponent>
        </div>

        <div className="lg:col-span-7">
          <ul className="flex flex-col">
            {PRICES.map((item, index) => (
              <li key={item.name}>
                <RevealComponent delay={index * 90}>
                  <div className="border-b border-line py-7">
                    <div className="flex items-end gap-4">
                      <h3 className="font-display text-2xl md:text-3xl uppercase tracking-tight">{item.name}</h3>
                      {item.highlight && (
                        <span className="mb-1 hidden sm:inline-block rounded-full bg-lilac/15 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wider text-lilac">
                          {item.highlight}
                        </span>
                      )}
                      <span className="leader" aria-hidden />
                      <span className="font-display text-3xl md:text-4xl text-lilac">
                        <span className="mr-1 align-top font-sans text-sm font-semibold text-muted">R$</span>{item.price}
                      </span>
                    </div>
                    <p className="mt-2 max-w-md text-muted">{item.description}</p>
                  </div>
                </RevealComponent>
              </li>
            ))}
          </ul>

          <RevealComponent delay={200} className="mt-10 flex flex-col sm:flex-row gap-4">
            <ButtonLinkComponent href={TRINKS_URL}>
              <FaRegCalendarCheck aria-hidden className="text-base" />Agendar no Trinks
            </ButtonLinkComponent>
            <BotaoZapComponent>Tirar dúvidas</BotaoZapComponent>
          </RevealComponent>
        </div>

      </div>
    </section>
  )
};

export default PricesTableComponent;
