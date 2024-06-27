import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { ArticleInterface } from "../../interfaces/articleInterface";
import { fetchArticleById, updateArticle } from "../../services/ArticleService";

const EditArticle: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [article, setArticle] = useState<ArticleInterface | null>(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const articleId = Number(id); // Convert the id to a number
      fetchArticleById(articleId)
        .then((fetchedArticle) => {
          setArticle(fetchedArticle);
          setTitle(fetchedArticle.title);
          setContent(fetchedArticle.content);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching article:", error);
          setLoading(false);
        });
    }
  }, [id]);

  const handleUpdate = async () => {
    if (article) {
      const updatedArticle = { ...article, title, content };
      try {
        await updateArticle(updatedArticle);
        // Redirect to the articles list or show a success message
        router.push("/home");
      } catch (error) {
        console.error("Error updating article:", error);
      }
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Edit Article</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleUpdate();
        }}
      >
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button type="submit">Update Article</button>
      </form>
    </div>
  );
};

export default EditArticle;
