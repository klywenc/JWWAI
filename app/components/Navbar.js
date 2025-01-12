"use client";

import Link from 'next/link';
import styles from './navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li><Link href="/">O mnie</Link></li>
        <li><Link href="/interests">Zainteresowania</Link></li>
        <li><Link href="/movie">Ulubiony Film</Link></li>
        <li><Link href="/contact">Kontakt</Link></li>
      </ul>
    </nav>
  );
}
