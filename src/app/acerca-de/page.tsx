import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Acerca de | MiSitio",
};

export default function AcercaDePage() {
  return (
    <main className={styles.main}>
      <h1>Acerca de</h1>
      <p>
        MiSitio es un ejemplo de página web genérica construida con Next.js
        usando el App Router, con renderizado del lado del servidor (SSR).
      </p>
    </main>
  );
}
