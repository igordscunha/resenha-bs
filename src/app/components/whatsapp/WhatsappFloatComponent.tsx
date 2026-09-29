import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_URL } from "@/data/site";

function WhatsappFloatComponent(){
  return(
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-3xl text-white shadow-xl shadow-black/40 transition-transform duration-300 hover:scale-110"
    >
      <FaWhatsapp />
    </a>
  )
}

export default WhatsappFloatComponent;
