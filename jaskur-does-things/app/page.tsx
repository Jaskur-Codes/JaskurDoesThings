import Link from "next/link";

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
        <Link href="/reaffirm">Re:Affirm</Link>
        <h2>Apps</h2>
      </section>
    </main>
  );
}
