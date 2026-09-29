'use client'

import { useEffect, useState } from "react";
import { BARBERS, SCHEDULE } from "@/data/site";

const barberName = (id: string) => BARBERS.find((barber) => barber.id === id)?.name.split(" ")[0] ?? id;

const toMinutes = (time: string) => {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
};

// Data/hora atual no fuso da barbearia, independente de onde o cliente está
function nowInRio(){
  const parts = new Intl.DateTimeFormat("en-US", { timeZone: "America/Sao_Paulo", weekday: "short", hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).formatToParts(new Date());
  const get = (type: string) => parts.find((part) => part.type === type)?.value ?? "";
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
  return { weekday, minutes: Number(get("hour")) * 60 + Number(get("minute")) };
}

function ScheduleComponent(){

  // Só calculado no cliente para evitar diferença entre servidor e navegador
  const [now, setNow] = useState<{ weekday: number; minutes: number } | null>(null);

  useEffect(() => {
    setNow(nowInRio());
    const interval = setInterval(() => setNow(nowInRio()), 60_000);
    return () => clearInterval(interval);
  }, []);

  const today = SCHEDULE.find((day) => day.weekday === now?.weekday);
  const isOpen = !!(now && today?.open && today.close && now.minutes >= toMinutes(today.open) && now.minutes < toMinutes(today.close));

  return(
    <div className="rounded-3xl border border-line bg-ink/60 p-2 backdrop-blur">
      <div className="flex items-center justify-between px-5 py-4">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">Semana</span>
        {now && (
          <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold ${isOpen ? 'bg-whatsapp/15 text-whatsapp' : 'bg-cream/10 text-muted'}`}>
            <span className={`h-2 w-2 rounded-full ${isOpen ? 'bg-whatsapp animate-pulse' : 'bg-muted'}`} />
            {isOpen ? "Aberto agora" : "Fechado agora"}
          </span>
        )}
      </div>

      <ul>
        {SCHEDULE.map((day) => {
          const isToday = day.weekday === now?.weekday;
          const closed = !day.open;
          return (
            <li
              key={day.day}
              aria-current={isToday ? "date" : undefined}
              className={`grid grid-cols-[4.5rem_1fr] sm:grid-cols-[10rem_8rem_1fr] items-center gap-x-4 gap-y-1 rounded-2xl px-5 py-4 transition-colors ${isToday ? 'bg-brand/20 ring-1 ring-brand' : 'hover:bg-surface-2'}`}
            >
              <span className={`font-semibold ${closed ? 'text-muted' : 'text-cream'}`}>
                <span className="sm:hidden">{day.short}</span>
                <span className="hidden sm:inline">{day.day}</span>
                {isToday && <span className="ml-2 align-middle rounded-full bg-lilac px-2 py-0.5 text-[0.65rem] font-bold uppercase text-ink">Hoje</span>}
              </span>
              <span className={`tabular-nums ${closed ? 'text-muted' : 'text-lilac font-semibold'}`}>
                {closed ? "Fechado" : `${day.open} – ${day.close}`}
              </span>
              <span className="col-start-2 sm:col-start-auto text-sm text-muted">
                {day.barbers.map(barberName).join(" · ")}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  )
};

export default ScheduleComponent;
