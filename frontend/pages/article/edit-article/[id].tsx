import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
  fetchArticleById,
  updateArticle,
} from "../../../services/ArticleService";
import { ArticleInterface } from "../../../interfaces/articleInterface";
import {
  Typography,
  TextField,
  Button,
  CircularProgress,
  Container,
  Box,
  Paper,
  Grid,
} from "@mui/material";
import Navbar from "../../../components/navbar";

const EditArticle: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [article, setArticle] = useState<ArticleInterface | null>(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const articleId = Number(id);
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
        router.push(`/article/${article.id}`);
      } catch (error) {
        console.error("Error updating article:", error);
      }
    }
  };

  if (loading) return <CircularProgress />;

  return (
    <div>
      <Navbar />
      <Container maxWidth="md">
        <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
          <Typography variant="h4" gutterBottom>
            Edit Article
          </Typography>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleUpdate();
            }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Content"
                  multiline
                  rows={8}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  size="large"
                >
                  Update Article
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default EditArticle;
