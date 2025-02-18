import "/app/globals.css";
import Navbar from "/app/components/Navbar";
import Footer from "/app/components/Footer";

export default function Layout({ children }) {
  return (
    <html lang="pl">
      <head>
        <title>Moja Strona Next.js</title>
        <link rel="icon" href="/icon.png" />
      </head>
      <body>
        <Navbar />
        <div className="container">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
