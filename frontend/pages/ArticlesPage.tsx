import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import ArticleCard from "../components/ArticleCard";
import { ArticleInterface } from "../interfaces/articleInterface";
import { fetchArticles } from "../services/ArticleService";

const ArticlesPage: React.FC = () => {
  const [articles, setArticles] = useState<ArticleInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchArticlesData() {
      try {
        const fetchedArticles = await fetchArticles();
        setArticles(fetchedArticles);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching articles:", error);
        setError("Failed to fetch articles. Please try again later.");
        setLoading(false);
      }
    }
    fetchArticlesData();
  }, []);

  if (loading) {
    return <Typography variant="h5">Loading...</Typography>;
  }

  if (error) {
    return <Typography variant="h5">{error}</Typography>;
  }

  return (
    <div>
      <h1>Articles</h1>
      <Grid container direction="column" spacing={3}>
        {articles.map((article) => (
          <Grid item key={article.id}>
            <ArticleCard article={article} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ArticlesPage;
