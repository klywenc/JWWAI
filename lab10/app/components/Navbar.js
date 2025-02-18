import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Link href="/" className="button">O mnie</Link>
      <Link href="/zainteresowania" className="button">Zainteresowania</Link>
      <Link href="/ulubiony" className="button">Ulubiony film/gra</Link>
      <Link href="/kontakt" className="button">Kontakt</Link>
    </nav>
  );
}
