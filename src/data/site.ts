export const TRINKS_URL = "https://www.trinks.com/resenhabarberclub";
export const INSTAGRAM_URL = "https://www.instagram.com/resenhabarber.club/";
export const PHONE_DISPLAY = "(21) 96566-3943";
export const PHONE_TEL = "+5521965663943";
export const WHATSAPP_URL = `https://wa.me/5521965663943?text=${encodeURIComponent("Olá! Vim pelo site e gostaria de agendar um horário.")}`;
export const ADDRESS_LINE_1 = "Rua Barão de Ubá, 560 · Sala 901";
export const ADDRESS_LINE_2 = "Praça da Bandeira · Rio de Janeiro/RJ";
export const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Rua+Bar%C3%A3o+de+Ub%C3%A1+560+Pra%C3%A7a+da+Bandeira+Rio+de+Janeiro";
export const MAPS_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.895016514632!2d-43.214149923984884!3d-22.917242779247687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997fab0e6d98e7%3A0x2265a7d9f69717e4!2sR.%20Bar%C3%A3o%20de%20Ub%C3%A1%2C%20560%20-%20Pra%C3%A7a%20da%20Bandeira%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2020260-050!5e0!3m2!1spt-BR!2sbr!4v1758033294055!5m2!1spt-BR!2sbr";

export const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#precos", label: "Preços" },
  { href: "#horarios", label: "Horários" },
  { href: "#contato", label: "Contato" },
];

export type BarberId = "allan" | "dg" | "thiago";

export const BARBERS: { id: BarberId; name: string; photo: string; instagram: string; handle: string }[] = [
  { id: "allan", name: "Allan", photo: "/allan.jpg", instagram: "https://instagram.com/allanreisbarbeiro", handle: "@allanreisbarbeiro" },
  { id: "dg", name: "Douglas (DG)", photo: "/dg.jpg", instagram: "https://www.instagram.com/dg_allvez_/", handle: "@dg_allvez_" },
  { id: "thiago", name: "Thiago", photo: "/thiago.jpg", instagram: "https://instagram.com/th_lobato.reis", handle: "@th_lobato.reis" },
];

// weekday segue Date.getDay(): 0 = domingo
export const SCHEDULE: { weekday: number; day: string; short: string; open?: string; close?: string; barbers: BarberId[] }[] = [
  { weekday: 1, day: "Segunda-feira", short: "Seg", open: "10:00", close: "20:00", barbers: ["allan", "thiago"] },
  { weekday: 2, day: "Terça-feira", short: "Ter", open: "10:00", close: "20:00", barbers: ["dg", "thiago"] },
  { weekday: 3, day: "Quarta-feira", short: "Qua", open: "10:00", close: "20:00", barbers: ["allan", "dg"] },
  { weekday: 4, day: "Quinta-feira", short: "Qui", open: "10:00", close: "20:00", barbers: ["allan", "dg", "thiago"] },
  { weekday: 5, day: "Sexta-feira", short: "Sex", open: "10:00", close: "20:00", barbers: ["allan", "dg", "thiago"] },
  { weekday: 6, day: "Sábado", short: "Sáb", open: "09:00", close: "16:00", barbers: ["allan", "dg", "thiago"] },
  { weekday: 0, day: "Domingo", short: "Dom", barbers: [] },
];

export const PRICES = [
  { name: "Corte na tesoura", description: "Corte feito todo na tesoura, ou máquina e tesoura.", price: 40 },
  { name: "Corte na máquina", description: "Corte feito todo na máquina, com ou sem degradê.", price: 35 },
  { name: "Barboterapia", description: "Alinhamento, esfoliação, toalha quente e finalização com massagem.", price: 40 },
  { name: "Combo", description: "Corte na tesoura + barboterapia.", price: 65, highlight: "Economize R$15" },
];

export const SERVICES = [
  {
    id: "cabelo",
    title: "Cabelo",
    description: "Cortes personalizados que combinam a precisão da tesoura com a rapidez da máquina. Cada estilo é pensado para o formato do seu rosto e o seu dia a dia, com acabamento impecável.",
  },
  {
    id: "barba",
    title: "Barba",
    description: "Experiência completa para a sua barba: alinhamento, esfoliação, toalha quente e finalização com massagem. É pra sair bonito e relaxado.",
  },
  {
    id: "coloracao",
    title: "Tinta & Descoloração",
    description: "Correção de cor, cobertura de fios brancos, mechas e luzes. Produtos de alta qualidade e tratamento reconstrutor para garantir tom uniforme e brilho natural.",
  },
] as const;
