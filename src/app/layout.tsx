import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Seu Site | Exemplo de Site Institucional",
  description: "Este é um exemplo de site institucional moderno e profissional. Demonstração de desenvolvimento web personalizado.",
  keywords: "site exemplo, site institucional, template, demonstração",
  authors: [{ name: "Seu Site" }],
  openGraph: {
    title: "Seu Site | Exemplo de Site Institucional",
    description: "Exemplo de site institucional moderno e profissional.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
