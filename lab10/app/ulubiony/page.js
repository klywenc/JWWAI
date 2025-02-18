import Link from "next/link";
import Header from "/app/components/Header";
import Button from "/app/components/Button";

export default function Ulubiony() {
  return (
    <>
      <h1>Ulubiony film i gra</h1>
      <p>Mój ulubiony film to „Your Name” (jp. Kimi no Na Wa), a gra to „Elden Ring”.</p>
      <Button href="/">Wróć na stronę główną</Button>
    </>
  );
}
