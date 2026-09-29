import type { Metadata, Viewport } from "next";
import { anton, instrumentSerif, manrope } from "./fonts/fonts";
import "./globals.css";
import HeaderComponent from "./components/header/HeaderComponent";
import FooterComponent from "./components/footer/FooterComponent";
import WhatsappFloatComponent from "./components/whatsapp/WhatsappFloatComponent";

export const metadata: Metadata = {
  title: "Resenha Barber Club · Barbearia na Praça da Bandeira, RJ",
  description: "Cortes na tesoura e na máquina, barboterapia, tintura e descoloração. Agende seu horário na Resenha Barber Club, Praça da Bandeira, Rio de Janeiro. Vem pra resenha!",
  keywords: ["barbearia", "Praça da Bandeira", "Rio de Janeiro", "corte masculino", "barba", "barboterapia", "Resenha Barber Club"],
  openGraph: {
    title: "Resenha Barber Club",
    description: "Aqui, seu estilo ganha voz. Agende seu horário!",
    images: ["/background-barbearia.jpg"],
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#100a11",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Sem JavaScript, o conteúdo aparece direto, sem animação */}
        <noscript><style>{`.reveal{opacity:1!important;transform:none!important}`}</style></noscript>
      </head>
      <body className={`${anton.variable} ${manrope.variable} ${instrumentSerif.variable} font-sans antialiased`}>
        <HeaderComponent/>
        {children}
        <FooterComponent/>
        <WhatsappFloatComponent/>
      </body>
    </html>
  );
}
