"use client";
import Link from "next/link";
import styles from "./error.module.scss";

export default function Error() {
  return (
    <div className={styles.error}>
      <h2>Ops!</h2>
      <h1>Página não encontrado...</h1>
      <Link href="/">Página inicial.</Link>
    </div>
  );
}
