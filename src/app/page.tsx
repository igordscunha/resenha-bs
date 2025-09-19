import ServicesComponent from "./components/services/ServicesComponent";
import { FaInstagram, FaMapPin, FaPhoneAlt } from "react-icons/fa";
import PricesTableComponent from "./components/pricestable/PricesTableComponent";
import TopicComponent from "./components/topic/TopicComponent";
import { AiOutlineSchedule } from "react-icons/ai";
import ScheduleComponent from "./components/schedule/ScheduleComponent";
import ColorfulBorderComponent from "./components/colorful_border/ColorfulBorderComponent";
import { chakra_petch, diplomata, major_mono_display } from "./fonts/fonts"
import CaruoselComponent from "./components/carousel/CarouselComponent";
import Image from "next/image";

export default function Home() {
  return (
    <main>

      {/* CAPA */}
      <section className="bg-[url(/background-barbearia.jpg)] bg-fixed min-h-screen bg-cover flex items-center justify-center">
        <div className="text-center text-white flex flex-col justify-center items-center gap-5">
          <Image src="/meu_icone.svg" alt="icone da barbearia" width={0} height={0} unoptimized className="w-2/5"/>
          <h2 className={`text-3xl ${diplomata.className}`}>Resenha Barber Club</h2>
        </div>
      </section>



      {/* SOBRE */}
      <section id="sobre" className="px-6 md:py-20 space-y-10 text-white md:min-h-screen md:flex md:flex-col md:items-center">
        <TopicComponent>Sobre</TopicComponent>
        <div className="md:w-2/3">
          <div className="py-3">
            <p className={`text-center md:text-xl md:pb-12 ${chakra_petch.className}`}>
              Na Resenha Barber Club, você encontra o lugar ideal para renovar seu estilo, onde tradição e inovação se misturam para criar experiências únicas de cuidado e autoestima.<br/><br/>

              Nossa equipe alia técnicas clássicas e inovação, garantindo cortes de cabelo precisos, modelagem de barba personalizada e tratamentos de tingimento e descoloração que cuidam e valorizam cada fio.<br/><br/>

              O ambiente descontraído e acolhedor convida a uma verdadeira resenha entre amigos.<br/><br/>

              Agende seu horário e descubra por que a Resenha Barber Club é o ponto de encontro ideal para quem busca mais do que um simples corte: aqui, seu estilo ganha voz.
            </p>
          </div>

          <div className={`text-center text-2xl py-12 ${major_mono_display.className}`}>Barbeiros</div>

          <div className={`flex gap-8 justify-evenly pb-12 text-xl font-semibold ${major_mono_display.className}`}>
            <div className="flex flex-col gap-2 items-center">
              <a href="https://instagram.com/allanreisbarbeiro" target="_blank">
              <Image src="/allan.jpg" alt="barbeiro allan" width={260} height={260} className="shadow-xl/30 rounded-sm transform hover:scale-105 transition-transform duration-300 ease-in-out"/>
              </a>
              <p>Allan</p>
            </div>

            <div className="flex flex-col gap-2 items-center">
              <a href="https://www.instagram.com/dg_allvez_/" target="_blank">
                <Image src="/dg.jpg" alt="barbeiro dg" width={260} height={260} className="shadow-xl/30 rounded-sm transform hover:scale-105 transition-transform duration-300 ease-in-out"/>
              </a>
              <p>Douglas (DG)</p>
            </div>

            <div className="flex flex-col gap-2 items-center">
              <a href="https://instagram.com/th_lobato.reis" target="_blank">
                <Image src="/thiago.jpg" alt="barbeiro thiago" width={260} height={260} className="shadow-xl/30 rounded-sm transform hover:scale-105 transition-transform duration-300 ease-in-out"/>
              </a>
              <p>Thiago</p>
            </div>
          </div>
        </div>
      </section>


      {/* SERVIÇOS */}

      <ServicesComponent/>

      {/* TABELA PREÇOS */}

      <PricesTableComponent/>

      {/* HORÁRIO */}

      <section id="horarios" className="p-6 py-15 md:py-24 md:flex md:flex-col md:items-center md:min-h-screen">
        <TopicComponent>Horários</TopicComponent>
        <div className="grid grid-cols-2 gap-2 text-center py-10 md:w-2/3">
          <ScheduleComponent dia="Segunda-feira" horario="10:00 às 20:00" barbeiro="Allan e Thiago"/>
          <ScheduleComponent dia="Terça-feira" horario="10:00 às 20:00" barbeiro="DG e Thiago"/>
          <ScheduleComponent dia="Quarta-feira" horario="10:00 às 20:00" barbeiro="Allan e DG"/>
          <ScheduleComponent dia="Quinta-feira" horario="10:00 às 20:00" barbeiro="Allan, DG e Thiago"/>
          <ScheduleComponent dia="Sexta-feira" horario="10:00 às 20:00" barbeiro="Allan, DG e Thiago"/>
          <ScheduleComponent dia="Sábado" horario="09:00 às 16:00" barbeiro="Allan, DG e Thiago"/>
        </div>

        <div><a href="https://www.trinks.com/resenhabarberclub" target="_blank">
          <ColorfulBorderComponent header="Agende no nosso Trinks" 
          content="Clique aqui para acessar nosso Trinks e agendar o quanto antes para ficar bonito!"/>
        </a></div>

      </section>

      {/* DEPOIMENTOS */}

      <CaruoselComponent/>

      {/* CONTATO */}

      <section id="contato" className="p-6 md:flex md:flex-col md:justify-center md:items-center md:min-h-screen">
        <TopicComponent>Contato</TopicComponent>
        <span className={`text-2xl hidden md:block text-center ${major_mono_display.className}`}>Entre em contato conosco</span>
        <div className="py-8 flex flex-col items-center text-center md:flex-row md:justify-center md:w-2/3 gap-10">
          <span className={`text-2xl md:hidden ${major_mono_display.className}`}>Entre em contato conosco</span>
          <div className={`flex flex-col gap-3 md:justify-center md:text-start ${chakra_petch.className}`}>
            <span className="flex items-center gap-3"><FaPhoneAlt /> <span>(21) 96566-3943</span></span>
            <span className="flex items-center gap-3"><AiOutlineSchedule /> <a href="https://www.trinks.com/resenhabarberclub" target="_blank"><span>Trinks Agendamento</span></a></span>
            <span className="flex items-center gap-3"><FaInstagram /><a href="https://www.instagram.com/resenhabarber.club/" target="_blank"><span>Instagram Resenha Barber Club</span></a></span>
            <span className="flex items-center gap-3"><FaMapPin /><span>Rua Barão de Ubá, 560, sala 901</span></span>
          </div>
          <div className="w-full">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.895016514632!2d-43.214149923984884!3d-22.917242779247687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997fab0e6d98e7%3A0x2265a7d9f69717e4!2sR.%20Bar%C3%A3o%20de%20Ub%C3%A1%2C%20560%20-%20Pra%C3%A7a%20da%20Bandeira%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2020260-050!5e0!3m2!1spt-BR!2sbr!4v1758033294055!5m2!1spt-BR!2sbr" className="w-full" height="450" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
