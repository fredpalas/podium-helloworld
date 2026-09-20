import Link from "next/link";
import styles from "./Header.module.css";

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/acerca-de", label: "Acerca de" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand}>
          Hello World Nuevo
        </Link>
        <nav className={styles.nav}>
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
