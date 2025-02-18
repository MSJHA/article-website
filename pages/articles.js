import Link from "next/link";

const articles = [
  { id: 1, title: "How to Learn Next.js", slug: "learn-nextjs" },
  { id: 2, title: "SEO Tips for Blogs", slug: "seo-tips" },
  { id: 3, title: "Best JavaScript Frameworks", slug: "js-frameworks" }
];

export default function Articles() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Latest Articles</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <Link href={`/articles/${article.slug}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
