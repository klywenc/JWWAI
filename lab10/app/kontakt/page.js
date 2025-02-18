import Link from "next/link";
import Button from "/app/components/Button";

export default function Kontakt() {
  return (
    <>
      <h1>Kontakt</h1>
      <form>
        <input type="email" placeholder="Twój email" />
        <textarea placeholder="Twoja wiadomość"></textarea>
        <button type="submit">Wyślij</button>
      </form>
      <Button href="/">Wróć na stronę główną</Button>
    </>
  );
}
