import { useRouter } from "next/router";

const articles = {
  "learn-nextjs": { title: "How to Learn Next.js", content: "Next.js is a great framework for React developers..." },
  "seo-tips": { title: "SEO Tips for Blogs", content: "SEO is important for driving organic traffic to your website..." },
  "js-frameworks": { title: "Best JavaScript Frameworks", content: "React, Vue, and Angular are the most popular frameworks..." }
};

export default function ArticleDetail() {
  const router = useRouter();
  const { slug } = router.query;

  if (!articles[slug]) return <h1>Article Not Found</h1>;

  const article = articles[slug];

  return (
    <div style={{ padding: "20px" }}>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
}
