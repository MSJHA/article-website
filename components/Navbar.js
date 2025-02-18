import Link from "next/link";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h2>📰 Article Website</h2>
      <ul style={styles.navLinks}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: { display: "flex", justifyContent: "space-between", padding: "1rem", background: "#333", color: "#fff" },
  navLinks: { listStyle: "none", display: "flex", gap: "1rem" }
};

export default Navbar;
