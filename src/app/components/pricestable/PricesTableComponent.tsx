import { FaWhatsapp } from "react-icons/fa";
import { BotaoZapComponent } from "../buttons/ButtonsComponent";
import TopicComponent from "../topic/TopicComponent";
import { chakra_petch, major_mono_display } from "@/app/fonts/fonts";

function PricesTableComponent(){
  return(
    <section id="precos" className="p-6 flex gap-15 md:gap-24 flex-col md:justify-center md:items-center md:min-h-screen">
      <TopicComponent>Preços</TopicComponent>
      <span className={`text-sm text-center ${chakra_petch.className}`}>*promoção de 10% de desconto de segunda à quarta</span>

      {/* DESKTOP */}
      <div className="hidden md:flex w-2/3">

        <div className="grid grid-cols-4 gap-10 w-full border-b-1 border-dotted border-lime-600">

          <div className={`text-4xl text-slate-400 ${major_mono_display.className}`}>
            Tesoura
          </div>
          <div className={`text-4xl text-slate-400 ${major_mono_display.className}`}>
            Máquina
          </div>
          <div className={`text-4xl text-slate-400 ${major_mono_display.className}`}>
            Barba
          </div>
          <div className={`text-4xl text-slate-400 ${major_mono_display.className}`}>
            Combo
          </div>
          <div>
            <div className="flex justify-between py-4 text-xl">
              <span className={`text-base ${chakra_petch.className}`}>
                Corte feito todo na tesoura ou máquina e tesoura
              </span>
              <span>
                R$40
              </span>
            </div>
          </div>
          <div>
            <div className="flex justify-between py-4 text-xl">
              <span className={`text-base ${chakra_petch.className}`}>
                Corte feito todo na maquina (com ou sem degrade)
              </span>
              <span>
                R$35
              </span>
            </div>
          </div>
          <div>
            <div className="flex justify-between py-4 text-xl">
              <span className={`text-base ${chakra_petch.className}`}>
                Experiencia única e completa para sua barba: alinhamento, esfoliação, toalha quente e finalização com massagem
              </span>
              <span>
                R$40
              </span>
            </div>
          </div>
          <div>
            <div className="flex justify-between py-4 text-xl">
              <span className={`text-base ${chakra_petch.className}`}>
                Corte tesoura + barba terapia
              </span>
              <span>
                R$65
              </span>
            </div>
          </div>

        </div>

      </div>

      {/* MOBILE */}
      <div className="block md:hidden">
        <div>
          <div className={`text-4xl py-6 ${major_mono_display.className}`}>Tesoura</div>
          <div className="flex justify-between">
            <span className={`${chakra_petch.className}`}>Corte feito todo na tesoura ou máquina e tesoura</span>
            <span>R$40</span>
          </div>
        </div>
      </div>

      <div className="block md:hidden">
        <div>
          <div className={`text-4xl py-6 ${major_mono_display.className}`}>Máquina</div>
          <div className="flex justify-between">
            <span className={`${chakra_petch.className}`}>Corte feito todo na maquina (com ou sem degrade)</span>
            <span>R$35</span>
          </div>
        </div>
      </div>

      <div className="block md:hidden">
        <div>
          <div className={`text-4xl py-6 ${major_mono_display.className}`}>Barba</div>
          <div className="flex justify-between">
            <span className={`${chakra_petch.className}`}>Experiencia única e completa para sua barba: alinhamento, esfoliação, toalha quente e finalização com massagem</span>
            <span>R$40</span>
          </div>
        </div>
      </div>

      <div className="block md:hidden">
        <div>
          <div className={`text-4xl py-6 ${major_mono_display.className}`}>Combo</div>
          <div className="flex justify-between">
            <span className={`${chakra_petch.className}`}>Corte tesoura + barba terapia</span>
            <span>R$65</span>
          </div>
        </div>
      </div>

      <div className="flex justify-center my-20">
        <BotaoZapComponent>
          <div className="flex items-center justify-center gap-4">
            <FaWhatsapp />Entre em contato
          </div>
        </BotaoZapComponent>
      </div>

    </section>
  )
};

export default PricesTableComponent;