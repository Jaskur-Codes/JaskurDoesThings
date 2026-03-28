import Image from "next/image";
import Link from "next/link";
import "./global.css";

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <img
          src="/images/banner.png"
          alt="Jaskur Does Things"
        />
      </header>

      <section className="sections flex flex-row">
        <h2>Journaling</h2>
        <h2>Videos</h2>
        <h2>Re:Affirm</h2>
        <h2>Apps</h2>
      </section>
    </main>
  );
}
