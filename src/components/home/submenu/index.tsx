"use client"; // Define que este componente deve ser executado no lado do cliente

import { useState, useEffect } from "react"; // Importação dos hooks useState e useEffect do React
import Link from "next/link"; // Importação do componente Link do Next.js para navegação
import styles from "./subMenu.module.scss"; // Importação dos estilos CSS
import { X, Menu } from "lucide-react"; // Importação dos ícones X (fechar) e Menu (hambúrguer)
import { MenuProps } from "@/utils/menu.types"; // Importação do tipo MenuProps

// Definição da interface para as propriedades do componente
interface subMenuProps {
  menu: MenuProps; // O menu é um objeto do tipo MenuProps
}

export function SubMenu({ menu }: subMenuProps) {
  // Estado para controlar se o menu está aberto ou fechado
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Função para verificar a largura da tela e fechar o menu se for maior que 768px
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false); // Fecha o menu automaticamente em telas grandes
      }
    };

    // Adiciona um listener para o evento de redimensionamento da tela
    window.addEventListener("resize", handleResize);

    // Remove o listener ao desmontar o componente para evitar vazamento de memória
    return () => window.removeEventListener("resize", handleResize);
  }, []); // O array vazio faz com que esse efeito seja executado apenas uma vez após a montagem do componente

  // Função para alternar entre abrir e fechar o menu
  function toggleMenu() {
    setIsOpen(!isOpen); // Inverte o estado atual do menu
  }

  return (
    <section className={styles.submenu}>
      {/* Ícone do menu para abrir/fechar */}
      <div className={styles.submenuIcon} onClick={toggleMenu}>
        <Menu size={34} color="#121212" />
        Menu
      </div>

      {/* Lista de links do submenu */}
      <ul className={`${styles.ul} ${isOpen ? styles.open : ""}`}>
        {/* Se o menu estiver aberto, exibe o botão de fechar */}
        {isOpen && (
          <button onClick={toggleMenu} className={styles.closeButton}>
            <X size={54} color="#121212" />
          </button>
        )}

        {/* Mapeia os itens do menu para gerar os links de navegação */}
        {menu.objects.map((item) => (
          <li key={item.title}>
            <Link href={`/post/${item.slug}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
