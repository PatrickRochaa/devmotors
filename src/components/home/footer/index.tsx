// Importação da tipagem necessária para os dados da página inicial
import { HomeProps } from "@/utils/home.type";
// Importação dos estilos do arquivo SCSS para estilização do rodapé
import styles from "./footer.module.scss";

// Importação de ícones da biblioteca 'lucide-react'
import { Mail, Map, Phone, Clock } from "lucide-react";

// Definição do componente Footer que recebe os dados do tipo HomeProps
export function Footer({ object }: HomeProps) {
  return (
    // Elemento <footer> que define o rodapé da página
    <footer id="contatos" className={styles.footer}>
      {/* Seção contendo as informações de contato */}
      <section className={styles.section}>
        <h2 className={styles.title}>Contatos</h2>

        {/* Container que agrupa todos os itens de contato */}
        <div className={styles.content}>

          {/* Item de contato: E-mail */}
          <div className={styles.item}>
            <Mail size={28} color="#FFF" /> {/* Ícone de e-mail */}
            <div>
              <strong>Email</strong> {/* Título do contato */}
              <p>{object.metadata.contact.email}</p> {/* Exibição do e-mail dinâmico */}
            </div>
          </div>

          {/* Item de contato: Telefone */}
          <div className={styles.item}>
            <Phone size={28} color="#FFF" /> {/* Ícone de telefone */}
            <div>
              <strong>Telefone</strong> {/* Título do contato */}
              <p>{object.metadata.contact.phone}</p> {/* Exibição do telefone dinâmico */}
            </div>
          </div>

          {/* Item de contato: Endereço */}
          <div className={styles.item}>
            <Map size={28} color="#FFF" /> {/* Ícone de mapa/endereço */}
            <div>
              <strong>Endereço</strong> {/* Título do contato */}
              <p>{object.metadata.contact.address}</p> {/* Exibição do endereço dinâmico */}
            </div>
          </div>

          {/* Item de contato: Horário de funcionamento */}
          <div className={styles.item}>
            <Clock size={28} color="#FFF" /> {/* Ícone de relógio */}
            <div>
              <strong>Horário</strong> {/* Título do contato */}
              <p>{object.metadata.contact.time}</p> {/* Exibição do horário de funcionamento dinâmico */}
            </div>
          </div>

        </div>
      </section>

      {/* Botão de ação que redireciona para um link externo */}
      <a
        href={object.metadata.cta_button.url} // URL dinâmica do botão
        target="_blank" // Abre o link em uma nova aba
        className={styles.link} // Classe CSS para estilização
      >
        <Phone size={24} color="#FFF" /> {/* Ícone do botão */}
        {object.metadata.cta_button.title} {/* Texto do botão dinâmico */}
      </a>

      {/* Texto de direitos autorais no rodapé */}
      <p className={styles.copyText}>
        Todos direitos reservados {object.title} @
        {`${new Date().getFullYear()}`} {/* Exibe o ano atual dinamicamente */}
      </p>
    </footer>
  );
}
