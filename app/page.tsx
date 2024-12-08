import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Haushaltsbuch</h1>
      <nav>
        <ul>
          <li><Link href="/add">Neue Transaktion hinzufügen</Link></li>
          <li><Link href="/overview">Übersicht</Link></li>
        </ul>
      </nav>
    </div>
  );
}
