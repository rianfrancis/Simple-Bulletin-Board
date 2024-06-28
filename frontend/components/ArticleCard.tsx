import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardActionArea,
} from "@mui/material";
import { useRouter } from "next/router";
import { format } from "date-fns";
import { ArticleInterface } from "../interfaces/articleInterface";
import { upvote, downvote } from "../services/ArticleService";
import Link from "next/link";

interface ArticleCardProps {
  article: ArticleInterface;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const router = useRouter();
  const [votes, setVotes] = useState(article.votes);

  const handleEdit = () => {
    router.push(`/article/edit-article/${article.id}`);
  };

  const handleUpvote = async () => {
    try {
      await upvote(article.id);
      setVotes(votes + 1);
    } catch (error) {
      console.error("Error upvoting article:", error);
    }
  };

  const handleDownvote = async () => {
    try {
      await downvote(article.id);
      setVotes(votes - 1);
    } catch (error) {
      console.error("Error downvoting article:", error);
    }
  };

  const formattedDate = format(new Date(article.createdDate), "MMMM dd, yyyy");

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "& a": {
          textDecoration: "none",
          color: "inherit",
        },
      }}
    >
      <Link href={`/article/${article.id}`} passHref>
        <Card
          sx={{
            width: 345,

            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardActionArea sx={{ flexGrow: 1 }}>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  fontFamily: "montserrat",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                {article.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                gutterBottom
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
                color="text.secondary"
                gutterBottom
                sx={{
                  fontFamily: "montserrat",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Created on: {formattedDate}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                gutterBottom
                sx={{
                  fontFamily: "montserrat",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Votes: {votes}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions sx={{ justifyContent: "center" }}>
            <Button size="small" onClick={handleEdit}>
              Edit Article
            </Button>
            <Button size="small" onClick={handleUpvote}>
              Upvote
            </Button>
            <Button size="small" onClick={handleDownvote}>
              Downvote
            </Button>
          </CardActions>
        </Card>
      </Link>
    </Box>
  );
};

export default ArticleCard;
