// Importação do tipo ReactNode para suportar componentes como ícones dentro das props
import { ReactNode } from "react";
// Importação dos estilos específicos do componente
import styles from "./hero.module.scss";
// Importação do componente de imagem do Next.js para otimização automática
import Image from "next/image";

// Definição da interface para as propriedades do componente Hero
interface HeroProps {
  heading: string; // Título principal exibido no hero
  buttonUrl: string; // URL do botão que será renderizado como um link
  buttonTitle: string; // Texto do botão
  bannerUrl: string; // URL da imagem de fundo do hero
  icon: ReactNode; // Ícone que será renderizado ao lado do botão
}

// Definição do componente funcional Hero com desestruturação das propriedades
export function Hero({
  heading, // Título principal
  buttonUrl, // URL para onde o botão irá redirecionar
  buttonTitle, // Texto do botão
  bannerUrl, // URL da imagem de fundo
  icon, // Ícone do botão
}: HeroProps) {
  return (
    // Elemento principal da seção Hero
    <main className={styles.main}>
      {/* Container do conteúdo do Hero */}
      <div className={styles.containerHero}>
        {/* Título principal do Hero */}
        <h1 className={styles.title}>{heading}</h1>

        {/* Link estilizado como botão que abre em uma nova aba */}
        <a target="_blank" href={buttonUrl} className={styles.link}>
          {icon} {/* Exibe o ícone passado via props */}
          {buttonTitle} {/* Exibe o texto do botão */}
        </a>
      </div>

      {/* Container para a imagem de fundo do Hero */}
      <div className={styles.contentBanner}>
        <Image
          alt={heading} // Acessibilidade: o texto alternativo da imagem será o título do Hero
          src={bannerUrl} // URL da imagem do Hero
          priority={true} // Prioriza o carregamento da imagem para melhor performance
          quality={100} // Define a qualidade máxima da imagem
          fill={true} // Faz com que a imagem ocupe todo o container responsivamente
          className={styles.banner} // Aplica os estilos definidos para a imagem
        />
      </div>
    </main>
  );
}
