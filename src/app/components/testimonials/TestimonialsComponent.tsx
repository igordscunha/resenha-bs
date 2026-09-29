import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import testimonialsData from "../../../data/clientes.json";
import TopicComponent from "../topic/TopicComponent";
import RevealComponent from "../reveal/RevealComponent";

function TestimonialsComponent(){
  return(
    <section id="depoimentos" className="relative overflow-hidden bg-surface py-24 md:py-32">
      <div aria-hidden className="absolute left-1/2 top-0 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-brand/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <TopicComponent eyebrow="Depoimentos" description="Quem senta na cadeira volta — e traz os amigos.">
          Quem já veio
        </TopicComponent>

        {/* Rolagem horizontal no mobile, grade no desktop */}
        <ul className="mt-16 -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 md:mx-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:px-0 [scrollbar-width:none]">
          {testimonialsData.map((testimonial, index) => (
            <li key={testimonial.id} className="w-[85%] shrink-0 snap-center md:w-auto">
              <RevealComponent delay={(index % 3) * 120} className="h-full">
                <figure className="flex h-full flex-col justify-between gap-8 rounded-3xl border border-line bg-ink p-8 transition-colors duration-500 hover:border-brand">
                  <div>
                    <FaQuoteLeft aria-hidden className="text-2xl text-brand" />
                    <blockquote className="mt-5 font-serif text-2xl leading-snug text-cream">
                      {testimonial.testimonial}
                    </blockquote>
                  </div>
                  <figcaption className="flex items-center gap-4">
                    <Image src={`/${testimonial.imageUrl}`} alt="" width={48} height={48} className="h-12 w-12 rounded-full object-cover ring-2 ring-brand/60"/>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted">Cliente</div>
                    </div>
                  </figcaption>
                </figure>
              </RevealComponent>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default TestimonialsComponent;
