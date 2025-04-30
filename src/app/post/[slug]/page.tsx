// Importação do tipo Metadata do Next.js para definir os metadados da página
import type { Metadata } from "next";

// Importação dos estilos CSS específicos para esta página
import styles from "./slug.module.scss";

// Importação do componente Hero, que representa a seção principal da página
import { Hero } from "@/components/hero";

// Importação da função que busca os dados de um item com base no slug da URL
import { getItemBySlug } from "@/utils/actions/get-data";

// Importação do tipo PostProps para tipagem dos dados recebidos
import { PostProps } from "@/utils/post.type";

// Importação do ícone de telefone da biblioteca Lucide
import { Phone } from "lucide-react";

// Importação do componente Container para organizar a estrutura da página
import { Container } from "@/components/container";

// Importação do componente de imagem otimizada do Next.js
import Image from "next/image";

// Função assíncrona que gera metadados dinâmicos para SEO da página
export async function generateMetadata({
  params: { slug }, // Obtém o parâmetro "slug" da URL
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    // Busca os dados do item correspondente ao slug informado
    const { objects }: PostProps = await getItemBySlug(slug).catch(() => {
      return {
        title: "DevMotors - Sua oficina especializada!", // Título padrão caso ocorra erro
        description: "Oficina automotiva especializada",
      };
    });

    return {
      title: `DevMotors - ${objects[0].title}`, // Define o título da página dinamicamente
      description: `${objects[0].metadata.description.text}`, // Define a descrição da página
      keywords: ["devmotors", "troca de oleo", "devmotors troca de oleo"], // Palavras-chave para SEO
      openGraph: {
        title: `DevMotors - ${objects[0].title}`, // Título para compartilhamento nas redes sociais
        images: [objects[0].metadata.banner.url], // Define a imagem de destaque para compartilhamento
      },
      robots: {
        index: true, // Permite que os mecanismos de busca indexem a página
        follow: true, // Permite que os links sejam seguidos pelos mecanismos de busca
        nocache: true, // Evita cacheamento da página
        googleBot: {
          index: true,
          follow: true,
          noimageindex: true, // Impede indexação de imagens pelo Googlebot
        },
      },
    };
  } catch (err) {
    // Em caso de erro, retorna metadados padrão
    return {
      title: "DevMotors - Sua oficina especializada!",
      description: "Oficina automotiva especializada",
    };
  }
}

// Definição do componente de página, que recebe um parâmetro da URL chamado "slug"
export default async function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  // Busca os dados do item correspondente ao slug informado
  const { objects }: PostProps = await getItemBySlug(slug);

  return (
    <>
      {/* Componente Hero que exibe informações principais do item */}
      <Hero
        heading={objects[0].title} // Define o título principal
        buttonTitle={objects[0].metadata.button.title} // Define o texto do botão
        buttonUrl={objects[0].metadata.button.url} // Define o link do botão
        bannerUrl={objects[0].metadata.banner.url} // Define a imagem de fundo do banner
        icon={<Phone size={24} color="#FFF" />} // Ícone de telefone ao lado do botão
      />

      <Container>
        {/* Seção sobre a descrição do item */}
        <section className={styles.about}>
          <article className={styles.innerAbout}>
            {/* Exibe o título da descrição */}
            <h1 className={styles.title}>
              {objects[0].metadata.description.title}
            </h1>

            {/* Exibe o texto da descrição */}
            <p>{objects[0].metadata.description.text}</p>

            {/* Verifica se o botão de ação deve ser exibido */}
            {objects[0].metadata.description.button_active && (
              <a
                href={objects[0].metadata.description.button_url as string} // Link do botão
                target="_blank" // Abre o link em uma nova aba
                className={styles.link}
              >
                <Phone size={24} color="#FFF" />
                {/*Texto do botão*/}
                {objects[0].metadata.description.button_title}{" "}
              </a>
            )}
          </article>

          {/* Exibe a imagem do item ao lado do texto */}
          <div className={styles.bannerAbout}>
            <Image
              className={styles.imageAbout}
              alt={objects[0].title} // Define o texto alternativo para acessibilidade
              quality={100} // Define a qualidade máxima da imagem
              fill={true} // Define que a imagem preenche totalmente o contêiner pai
              src={objects[0].metadata.description.banner.url} // Define o caminho da imagem
            />
          </div>
        </section>

        {/* Rodapé da página */}
        <footer className={styles.footer}>
          <p>
            {/* Exibe a mensagem de direitos autorais com o ano atualizado automaticamente */}
            Todos direitos reservados DevMotors @{`${new Date().getFullYear()}`}
          </p>
        </footer>
      </Container>
    </>
  );
}
