import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contacto | MiSitio",
};

export default function ContactoPage() {
  return (
    <main className={styles.main}>
      <h1>Contacto</h1>
      <p>¿Tienes alguna pregunta? Escríbenos.</p>
      <form className={styles.form}>
        <label className={styles.field}>
          Nombre
          <input type="text" name="nombre" required />
        </label>
        <label className={styles.field}>
          Correo electrónico
          <input type="email" name="email" required />
        </label>
        <label className={styles.field}>
          Mensaje
          <textarea name="mensaje" rows={5} required />
        </label>
        <button type="submit" className={styles.submit}>
          Enviar
        </button>
      </form>
    </main>
  );
}
