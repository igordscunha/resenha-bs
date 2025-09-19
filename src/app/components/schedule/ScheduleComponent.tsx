import { chakra_petch } from "@/app/fonts/fonts";

interface ScheduleComponentProps{
  dia: string
  horario: string
  barbeiro: string
}

function ScheduleComponent({dia, horario, barbeiro}: ScheduleComponentProps){
  return(
    <div className={`p-3 flex flex-col gap-3 border-2 border-slate-300 rounded-2xl ${chakra_petch.className}`}>
      <span>🗓️ {dia}</span>
      <span>🕘 {horario}</span>
      <span>💈 {barbeiro}</span>
    </div>
  )
};

export default ScheduleComponent;