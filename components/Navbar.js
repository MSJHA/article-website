import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#0070f3", color: "white" }}>
      <ul style={{ display: "flex", listStyle: "none", justifyContent: "center", gap: "20px" }}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/articles">Articles</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
