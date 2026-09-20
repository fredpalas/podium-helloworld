import styles from "./page.module.css";

// Fuerza renderizado dinámico en cada petición para demostrar el SSR.
export const dynamic = "force-dynamic";

export default function Home() {
  const renderedAt = new Date().toLocaleString("es-ES", {
    dateStyle: "long",
    timeStyle: "medium",
  });

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1>Bienvenido a MiSitio</h1>
        <p>
          Una página web genérica construida con Next.js, renderizada en el
          servidor en cada petición.
        </p>
        <p className={styles.timestamp}>
          Página generada en el servidor a las: <strong>{renderedAt}</strong>
        </p>
      </section>
    </main>
  );
}
