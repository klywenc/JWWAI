import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>O mnie</h1>
      <p>Dzień dobry! Nazywam się Alan Kalkowski to moja strona laboratoryjna na JWAAI.</p>
      <Link href="/zainteresowania" className="button">Moje zainteresowania</Link>
      <Link href="/ulubiony" className="button">Ulubiony film/gra</Link>
      <Link href="/kontakt" className="button">Kontakt</Link>
    </>
  );
}
