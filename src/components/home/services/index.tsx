// Importa o tipo HomeProps para definir a estrutura dos dados recebidos como propriedade
import { HomeProps } from "@/utils/home.type";
// Importa os estilos específicos do componente Services
import styles from "./services.module.scss";
// Importa o componente Image do Next.js para otimização de imagens
import Image from "next/image";

// Define o componente Services que recebe um objeto do tipo HomeProps como propriedade
export function Services({ object }: HomeProps) {
  return (
    <>
      {/* Seção de apresentação sobre a empresa */}
      <section className={styles.containerAbout} id="servicos">
        <article className={styles.innerAbout}>
          {/* Título da seção "Sobre" */}
          <h1 className={styles.title}>Sobre</h1>
          {/* Parágrafo exibindo a descrição sobre a empresa, vinda do objeto metadata */}
          <p>{object.metadata.about.description}</p>
        </article>

        {/* Container para a imagem ilustrativa da empresa */}
        <div className={styles.bannerAbout}>
          <Image
            className={styles.imageAbout} // Aplica a classe de estilos na imagem
            alt="Imagem ilustrativa sobre a empresa" // Texto alternativo para acessibilidade
            quality={100} // Define a qualidade máxima da imagem
            fill={true} // Faz a imagem preencher o container
            src={object.metadata.about.banner.url} // Obtém a URL da imagem a partir dos dados fornecidos
          />
        </div>
      </section>

      {/* Título para a seção de serviços */}
      <h2 className={styles.servicesTitle}>Conheça nossos serviços</h2>

      {/* Seção que exibe a lista de serviços */}
      <section className={styles.services}>
        {/* Mapeia a lista de serviços do objeto metadata e cria um artigo para cada serviço */}
        {object.metadata.services.map((service) => (
          <article key={service.description} className={styles.service}>
            {/* Container da imagem do serviço */}
            <div className={styles.innerService}>
              <Image
                className={styles.imageService} // Aplica estilos específicos para a imagem do serviço
                alt="Imagem do serviço" // Texto alternativo para acessibilidade
                quality={100} // Define a qualidade máxima da imagem
                fill={true} // Faz a imagem preencher o container
                src={service.image.url} // Obtém a URL da imagem do serviço
              />
            </div>

            {/* Descrição do serviço */}
            <p>{service.description}</p>
          </article>
        ))}
      </section>
    </>
  );
}
