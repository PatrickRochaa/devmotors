// Importando componentes e funções necessárias para a página inicial
import { SubMenu } from "@/components/home/submenu"; // Componente para o menu superior
import { Hero } from "@/components/hero/index"; // Componente Hero, geralmente usado para destacar informações principais
import { getDataHome, subMenu } from "@/utils/actions/get-data"; // Função que busca os dados da página inicial
import { HomeProps } from "@/utils/home.type"; // Tipagem para os dados que serão passados para os componentes

import { MenuProps } from "@/utils/menu.types"; // Tipagem para os dados que serão passados para os componentes
import { Phone } from "lucide-react"; // Ícone de telefone proveniente da biblioteca 'lucide-react'
import { Services } from "@/components/home/services"; // Componente para exibir os serviços oferecidos
import { Footer } from "@/components/home/footer/index"; // Componente para o rodapé da página
import { Container } from "@/components/container/index"; // Componente para centralizar o conteúdo na página

// Função assíncrona responsável por renderizar a página principal
export default async function Home() {
  // Chamando a função 'getDataHome' para obter os dados necessários para a página
  const { object }: HomeProps = await getDataHome(); // A resposta é desestruturada para pegar o 'object' com os dados

  const menu: MenuProps = await subMenu();

  return (
    <main>
      {/* Componente SubMenu: Exibe um menu de navegação */}
      {menu.objects.length > 0 && <SubMenu menu={menu} />}

      {/* Componente Hero: Exibe uma seção com destaque para uma mensagem principal */}
      <Hero
        heading={object.metadata.heading} // Título do Hero
        buttonTitle={object.metadata.cta_button.title} // Texto do botão do Hero
        buttonUrl={object.metadata.cta_button.url} // URL do botão do Hero
        bannerUrl={object.metadata.banner.url} // URL da imagem do banner no Hero
        icon={<Phone size={24} color="#fff" />} // Ícone de telefone utilizado no botão, com tamanho 24 e cor branca
      />

      {/* Componente Container: Serve para centralizar os conteúdos da página */}
      <Container>
        {/* Componente Services: Exibe os serviços oferecidos, passando os dados obtidos */}
        <Services object={object} />

        {/* Componente Footer: Exibe o rodapé da página */}
        <Footer object={object} />
      </Container>
    </main>
  );
}
