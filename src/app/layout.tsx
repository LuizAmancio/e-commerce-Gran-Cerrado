import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LoadingProvider from "@/context/LoadingContext";
import CartProvider from "@/context/CartContext";
import { MenuBar } from "@/components/_ui/MenuBar";
import { Footer } from "@/components/_ui/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gran Cerrado - Produtos Naturais e Suplementação Esportiva",
  description: "Loja online de produtos naturais, suplementos e alimentos saudáveis do cerrado brasileiro.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/logoGran.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         {/* Header */}
        <LoadingProvider>
          <CartProvider>
            <MenuBar />
            <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
              {children}
            </div>
            <Footer />
          </CartProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}
