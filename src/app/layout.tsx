// Importação do tipo Metadata do Next.js para definir os metadados da página
import type { Metadata } from "next";

// Importação das fontes Geist e Geist_Mono do Google Fonts via Next.js
import { Geist, Geist_Mono } from "next/font/google";

// Importação dos estilos globais da aplicação
import "./globals.scss";

// Importação do componente Header, que representa o cabeçalho do site
import { Header } from "../components/header/index";

// Definição da fonte Geist Sans e atribuição de uma variável CSS personalizada
const geistSans = Geist({
  variable: "--font-geist-sans", // Define a variável CSS para uso no projeto
  subsets: ["latin"], // Especifica o subconjunto da fonte a ser carregado
});

// Definição da fonte Geist Mono e atribuição de uma variável CSS personalizada
const geistMono = Geist_Mono({
  variable: "--font-geist-mono", // Define a variável CSS para uso no projeto
  subsets: ["latin"], // Especifica o subconjunto da fonte a ser carregado
});

// Definição dos metadados da página, utilizados para SEO e redes sociais
export const metadata: Metadata = {
  title: "DevMotors - Sua Oficina especializada!", // Define o título da página
  description: "Oficina automotiva especializada", // Define a descrição da página
  keywords: [
    "oficina",
    "oficina carros",
    "ofina automotiva",
    "Manutenção automotiva",
    "Troca de óleo",
  ], // Define palavras-chave para otimização SEO
  openGraph: {
    title: "DevMotors - Sua Oficina especializada!", // Define o título para Open Graph (usado no compartilhamento em redes sociais)
    images: [`${process.env.NEXT_PUBLIC_URL}/logo.jpg`], // Define a imagem de destaque para Open Graph
  },
  robots: {
    index: true, // Permite que os motores de busca indexem a página
    follow: true, // Permite que os motores de busca sigam os links da página
    nocache: true, // Evita que os motores de busca armazenem uma cópia em cache da página
    googleBot: {
      index: true, // Permite que o Google indexe a página
      follow: true, // Permite que o Google siga os links da página
      noimageindex: true, // Impede que o Google indexe imagens da página
    },
  },
};

// Definição do layout raiz da aplicação, responsável pela estrutura principal da página
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode; // Define que o componente recebe um elemento React como filho
}>) {
  return (
    <html lang="pt-Br">
      {" "}
      {/* Define o idioma da página como português do Brasil */}
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {" "}
        {/* Aplica as fontes personalizadas ao corpo da página */}
        <Header /> {/* Renderiza o cabeçalho da aplicação */}
        {children} {/* Renderiza o conteúdo da página dinâmico */}
      </body>
    </html>
  );
}
