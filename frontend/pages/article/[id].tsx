import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import { format } from "date-fns";
import { ArticleInterface } from "../../interfaces/articleInterface";
import {
  deleteArticle,
  downvote,
  fetchArticleById,
  upvote,
} from "../../services/ArticleService";
import Navbar from "../../components/navbar";

const ArticlePage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [article, setArticle] = useState<ArticleInterface | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      if (typeof id === "string") {
        try {
          const fetchedArticle = await fetchArticleById(parseInt(id));
          setArticle(fetchedArticle);
        } catch (error) {
          console.error("Error fetching article:", error);
        }
      }
    };

    fetchArticle();
  }, [id]);

  const handleEdit = () => {
    if (article) {
      router.push(`/article/edit-article/${article.id}`);
    }
  };

  const handleUpvote = async () => {
    if (article) {
      try {
        await upvote(article.id);
        setArticle((prevArticle) => ({
          ...prevArticle!,
          votes: prevArticle!.votes + 1,
        }));
      } catch (error) {
        console.error("Error upvoting article:", error);
      }
    }
  };

  const handleDownvote = async () => {
    if (article) {
      try {
        await downvote(article.id);
        setArticle((prevArticle) => ({
          ...prevArticle!,
          votes: prevArticle!.votes - 1,
        }));
      } catch (error) {
        console.error("Error downvoting article:", error);
      }
    }
  };

  const handleDelete = async () => {
    if (article) {
      try {
        await deleteArticle(article.id);
        router.push("/home");
      } catch (error) {
        console.error("Error deleting article:", error);
      }
    }
  };

  if (!article) {
    return <Typography variant="body1">Loading article...</Typography>;
  }

  const formattedDate = format(new Date(article.createdDate), "MMMM dd, yyyy");

  return (
    <div>
      <Navbar />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "50vh" }}
      >
        <Grid item xs={12} md={8} lg={6}>
          <Card>
            <CardContent>
              <Typography
                variant="h5"
                gutterBottom
                align="center"
                sx={{
                  fontFamily: "montserrat",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                {article.title}
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                align="center"
                sx={{
                  fontFamily: "montserrat",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                {article.content}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                gutterBottom
                align="center"
                sx={{
                  fontFamily: "montserrat",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Created on: {formattedDate}
              </Typography>
              <Typography variant="body2" color="textSecondary" align="center">
                Votes: {article.votes}
              </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: "center" }}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleEdit}
                style={{ margin: "0 8px" }}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleUpvote}
                style={{ margin: "0 8px" }}
              >
                Upvote
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleDownvote}
                style={{ margin: "0 8px" }}
              >
                Downvote
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleDelete}
                style={{ margin: "0 8px" }}
              >
                Delete
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default ArticlePage;
