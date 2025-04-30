"use client"; // Indica que este componente deve ser executado no lado do cliente

import { useState, useEffect } from "react"; // Importa os hooks useState e useEffect do React
import styles from "./header.module.scss"; // Importa os estilos do módulo SCSS
import Link from "next/link"; // Importa o componente Link do Next.js para navegação

export function Header() {
  // Estado para verificar se o usuário está no topo da página
  const [top, setTop] = useState(true);

  // Função que verifica a posição do scroll e altera o estado
  const scrollHandler = () => {
    window.scrollY > 10 ? setTop(false) : setTop(true);
  };

  // useEffect para adicionar e remover o event listener de scroll
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler); // Adiciona o evento de scroll

    return () => window.removeEventListener("scroll", scrollHandler); // Remove o evento ao desmontar o componente
  }, [top]); // Dependência 'top' para atualizar a cada mudança no estado

  return (
    <header
      className={`${styles.header} ${!top ? styles.fixed : styles.background}`} // Aplica uma classe condicional dependendo da posição do scroll
    >
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Logotipo com link para a página inicial */}
          <div className={styles.contentLogo}>
            <Link href="/">Dev Motors</Link>
          </div>

          {/* Navegação do site */}
          <nav className={styles.nav}>
            <Link href="/">HOME</Link>
            <Link href="/#servicos">SERVIÇOS</Link>
            <Link href="/#contatos">CONTATOS</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
