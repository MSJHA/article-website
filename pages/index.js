import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Article Website</title>
        <meta name="description" content="Welcome to the Article Website, where you can find amazing articles on various topics." />
      </Head>

      <main style={{ textAlign: "center", padding: "50px" }}>
        <h1>Welcome to Article Website</h1>
        <p>Explore a wide range of articles and enhance your knowledge.</p>
      </main>
    </div>
  );
}
