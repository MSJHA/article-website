import Link from "next/link";

const ArticleCard = ({ article }) => {
  return (
    <div style={styles.card}>
      <h3>{article.title}</h3>
      <p>{article.excerpt}</p>
      <Link href={`/article/${article.id}`}>Read More</Link>
    </div>
  );
};

const styles = {
  card: { border: "1px solid #ddd", padding: "1rem", borderRadius: "5px", marginBottom: "1rem" }
};

export default ArticleCard;
