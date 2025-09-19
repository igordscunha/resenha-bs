import { ReactNode } from "react"

interface BotaoZapComponentProps{
  children: string | ReactNode
};

export function BotaoZapComponent({children}: BotaoZapComponentProps){
  return(
    <button className="py-4 px-6 text-xl font-semibold shadow-lg/20 bg-linear-to-b from-[#25D366] to-[#1dc25b] rounded-4xl border border-slate-100 hover:scale-115 hover:text-white active:scale-125">
      {children}
    </button>
  )
};