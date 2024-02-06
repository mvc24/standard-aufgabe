import Link from 'next/link';

export default function NotFound() {
  return (
    <div>
      <h2>Ohje!</h2>
      <p>Die gewünschte Seite konnte leider nicht gefunden werden</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
