import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p>© {new Date().getFullYear()} MiSitio. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
