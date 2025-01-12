'use client';

import Link from 'next/link';
import styles from './page.module.css'; // Główny plik CSS strony
import Navbar from '@/components/Navbar';  // Import komponentu Navbar

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Navbar /> {/* Wstawienie komponentu Navbar */}

      <header className={styles.header}>
        <h1>Witaj na Mojej Stronie</h1>
        <p>Odkryj moje laboratoria i projekty!</p>
      </header>

      <main className={styles.main}>
        <h2>Strony</h2>
        <nav>
          <ul className={styles.navList}>
            <li>
              <Link href="/lab7">Laboratorium 7</Link>
            </li>
            <li>
              <Link href="/lab8">Laboratorium 8</Link>
            </li>
            <li>
              <Link href="/lab9">Laboratorium 9</Link>
            </li>
            <li>
              <Link href="/contact">Kontakt</Link>
            </li>
          </ul>
        </nav>
      </main>
    </div>
  );
}
