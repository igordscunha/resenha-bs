import type { Metadata } from "next";
import { geistMono, geistSans } from "./fonts/fonts";
import "./globals.css";
import HeaderComponent from "./components/header/HeaderComponent";
import FooterComponent from "./components/footer/FooterComponent";

export const metadata: Metadata = {
  title: "Resenha Barber Club",
  description: "Vem pra resenha!",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="pt-br">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <HeaderComponent/>
        {children}
        <FooterComponent/>
      </body>
    </html>
  );
}
