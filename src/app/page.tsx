import Image from "next/image";
import { FaArrowRight, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaRegCalendarCheck } from "react-icons/fa";
import { IconType } from "react-icons";
import ServicesComponent from "./components/services/ServicesComponent";
import PricesTableComponent from "./components/pricestable/PricesTableComponent";
import TopicComponent from "./components/topic/TopicComponent";
import ScheduleComponent from "./components/schedule/ScheduleComponent";
import TestimonialsComponent from "./components/testimonials/TestimonialsComponent";
import RevealComponent from "./components/reveal/RevealComponent";
import { BotaoZapComponent, ButtonLinkComponent } from "./components/buttons/ButtonsComponent";
import { ADDRESS_LINE_1, ADDRESS_LINE_2, BARBERS, INSTAGRAM_URL, MAPS_EMBED_URL, MAPS_URL, PHONE_DISPLAY, PHONE_TEL, SCHEDULE, TRINKS_URL } from "@/data/site";

const HIGHLIGHTS = [
  { value: "3", label: "barbeiros" },
  { value: "6", label: "dias por semana" },
  { value: "10%", label: "off seg a qua" },
];

const CONTACTS: { icon: IconType; label: string; value: string; href: string }[] = [
  { icon: FaPhoneAlt, label: "Telefone", value: PHONE_DISPLAY, href: `tel:${PHONE_TEL}` },
  { icon: FaRegCalendarCheck, label: "Agendamento", value: "Trinks", href: TRINKS_URL },
  { icon: FaInstagram, label: "Instagram", value: "@resenhabarber.club", href: INSTAGRAM_URL },
  { icon: FaMapMarkerAlt, label: "Endereço", value: `${ADDRESS_LINE_1} — ${ADDRESS_LINE_2}`, href: MAPS_URL },
];

const workingDays = (barberId: string) =>
  SCHEDULE.filter((day) => day.barbers.some((id) => id === barberId)).map((day) => day.short).join(" · ");

export default function Home() {
  return (
    <main id="inicio">

      {/* CAPA */}
      <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden grain">
        <Image src="/background-barbearia.jpg" alt="Interior da Resenha Barber Club com cadeiras roxas" fill priority sizes="100vw" className="-z-20 object-cover object-[70%_center] scale-105"/>
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/90 via-ink/40 to-transparent" />

        <div className="mx-auto w-full max-w-7xl px-5 pb-16 pt-32 md:px-8 md:pb-24">
          <p className="hero-in inline-flex items-center gap-3 text-[0.7rem] md:text-xs font-semibold uppercase tracking-[0.2em] md:tracking-[0.3em] text-lilac">
            <span className="h-px w-8 bg-lilac/60" aria-hidden />
            Barbearia · Praça da Bandeira, RJ
          </p>

          <h1 className="hero-in mt-6 font-display uppercase leading-[0.9] tracking-tight text-[clamp(3.5rem,11vw,9.5rem)]" style={{ "--delay": "120ms" } as React.CSSProperties}>
            Seu estilo<br/>
            <span className="font-serif normal-case italic font-normal tracking-normal text-lilac">ganha</span> voz.
          </h1>

          <p className="hero-in mt-6 max-w-xl text-lg text-cream/80 leading-relaxed" style={{ "--delay": "240ms" } as React.CSSProperties}>
            Tradição e inovação no mesmo lugar: corte, barba e coloração num ambiente onde todo atendimento vira uma boa resenha.
          </p>

          <div className="hero-in mt-10 flex flex-col gap-4 sm:flex-row" style={{ "--delay": "360ms" } as React.CSSProperties}>
            <ButtonLinkComponent href={TRINKS_URL}>
              Agendar horário <FaArrowRight aria-hidden className="transition-transform group-hover:translate-x-1" />
            </ButtonLinkComponent>
            <ButtonLinkComponent href="#precos" variant="outline">Ver preços</ButtonLinkComponent>
          </div>

          <dl className="hero-in mt-16 grid max-w-xl grid-cols-3 gap-6 border-t border-cream/15 pt-8" style={{ "--delay": "480ms" } as React.CSSProperties}>
            {HIGHLIGHTS.map((item) => (
              <div key={item.label}>
                <dt className="sr-only">{item.label}</dt>
                <dd className="font-display text-4xl md:text-5xl text-cream">{item.value}</dd>
                <dd className="mt-1 text-xs md:text-sm uppercase tracking-wider text-muted">{item.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <TopicComponent eyebrow="Sobre nós" align="left">
                Mais que <span className="font-serif normal-case italic font-normal text-lilac">um</span> corte
              </TopicComponent>
            </div>

            <RevealComponent delay={120} className="lg:col-span-7 flex flex-col gap-6 text-lg leading-relaxed text-cream/80">
              <p className="font-serif text-3xl md:text-4xl leading-tight text-cream">
                Na Resenha Barber Club, tradição e inovação se misturam para criar experiências únicas de cuidado e autoestima.
              </p>
              <p>
                Nossa equipe alia técnicas clássicas e novas tendências, garantindo cortes precisos, modelagem de barba personalizada e tratamentos de tintura e descoloração que cuidam e valorizam cada fio.
              </p>
              <p>
                O ambiente é descontraído e acolhedor — uma verdadeira resenha entre amigos. Agende seu horário e descubra por que somos o ponto de encontro de quem busca mais do que um simples corte.
              </p>
            </RevealComponent>
          </div>

          {/* BARBEIROS */}
          <div className="mt-28">
            <RevealComponent className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <h3 className="font-display text-4xl md:text-5xl uppercase tracking-tight">Nossos barbeiros</h3>
              <p className="text-muted">Toque na foto para ver o trabalho no Instagram.</p>
            </RevealComponent>

            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {BARBERS.map((barber, index) => (
                <RevealComponent key={barber.id} delay={index * 120}>
                  <a href={barber.instagram} target="_blank" rel="noopener noreferrer" className="group relative block overflow-hidden rounded-3xl border border-line">
                    <Image src={barber.photo} alt={`Barbeiro ${barber.name}`} width={298} height={397} sizes="(min-width: 640px) 33vw, 100vw" className="aspect-[3/4] w-full object-cover grayscale-[35%] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"/>
                    <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                      <div>
                        <div className="font-display text-3xl uppercase">{barber.name}</div>
                        <div className="mt-1 text-sm text-cream/70">{workingDays(barber.id)}</div>
                      </div>
                      <span className="grid h-11 w-11 place-items-center rounded-full bg-cream/10 text-xl backdrop-blur transition-colors group-hover:bg-brand">
                        <FaInstagram aria-label={`Instagram ${barber.handle}`} />
                      </span>
                    </div>
                  </a>
                </RevealComponent>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <ServicesComponent/>

      {/* TABELA PREÇOS */}
      <PricesTableComponent/>

      {/* HORÁRIOS */}
      <section id="horarios" className="relative overflow-hidden py-24 md:py-32">
        <div aria-hidden className="absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-brand/15 blur-[120px]" />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5 flex flex-col gap-10">
            <TopicComponent eyebrow="Funcionamento" align="left" description="Confira quem está na casa em cada dia e garanta seu horário com antecedência.">
              Horários
            </TopicComponent>

            <RevealComponent delay={120}>
              <a href={TRINKS_URL} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-6 rounded-3xl border border-line bg-surface p-7 transition-colors hover:border-brand">
                <div>
                  <div className="font-display text-2xl uppercase">Agende no Trinks</div>
                  <p className="mt-1 text-muted">Escolha o barbeiro, o serviço e o horário em poucos cliques.</p>
                </div>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand text-cream transition-transform group-hover:translate-x-1">
                  <FaArrowRight aria-hidden />
                </span>
              </a>
            </RevealComponent>
          </div>

          <RevealComponent delay={120} className="lg:col-span-7">
            <ScheduleComponent/>
          </RevealComponent>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <TestimonialsComponent/>

      {/* CONTATO */}
      <section id="contato" className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <TopicComponent eyebrow="Contato" description="Chama no WhatsApp, agenda pelo Trinks ou passa aqui pra tomar um café.">
            Vem pra resenha
          </TopicComponent>

          <div className="mt-16 grid gap-5 lg:grid-cols-12">
            <div className="lg:col-span-5 flex flex-col gap-4">
              {CONTACTS.map((contact, index) => (
                <RevealComponent key={contact.label} delay={index * 90}>
                  <a
                    href={contact.href}
                    {...(contact.href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                    className="group flex items-center gap-5 rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-brand"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand/15 text-lg text-lilac transition-colors group-hover:bg-brand group-hover:text-cream">
                      <contact.icon aria-hidden />
                    </span>
                    <span className="flex flex-col">
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">{contact.label}</span>
                      <span className="mt-0.5 font-semibold text-cream">{contact.value}</span>
                    </span>
                  </a>
                </RevealComponent>
              ))}
              <RevealComponent delay={400} className="pt-2">
                <BotaoZapComponent className="w-full sm:w-auto"/>
              </RevealComponent>
            </div>

            <RevealComponent delay={150} className="lg:col-span-7">
              <div className="h-full min-h-[360px] overflow-hidden rounded-3xl border border-line">
                <iframe
                  src={MAPS_EMBED_URL}
                  title="Mapa: Resenha Barber Club, Rua Barão de Ubá, 560"
                  className="map-dark h-full min-h-[360px] w-full"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </RevealComponent>
          </div>
        </div>
      </section>
    </main>
  );
}
