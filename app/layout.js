import './globals.css';
import styles from './layout.module.css';
import Navbar from '../components/Navbar.js';

export const metadata = {
  title: 'Moja Strona',
  description: 'Next.js Projekt z Routingiem',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={styles.body}>
        <Navbar />
        <main className={styles.main}>{children}</main>
        <footer className={styles.footer}>
          &copy; {new Date().getFullYear()} Moja Strona. Wszelkie prawa zastrzeżone.
        </footer>
      </body>
    </html>
  );
}
