import AdComponent from "../components/AdComponent";

const ArticleDetail = () => {
  return (
    <div>
      <h1>Article Title</h1>
      <p>Article content goes here...</p>

      {/* Ad Show Here */}
      <AdComponent />

      <p>More content...</p>

      {/* Another Ad Below */}
      <AdComponent />
    </div>
  );
};

export default ArticleDetail;
