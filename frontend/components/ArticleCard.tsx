import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { useRouter } from "next/router";
import { format } from "date-fns";
import { ArticleInterface } from "../interfaces/articleInterface";
import { upvote, downvote } from "../services/ArticleService"; // Import upvote and downvote functions

interface ArticleCardProps {
  article: ArticleInterface;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const router = useRouter();
  const [votes, setVotes] = useState(article.votes);

  const handleEdit = () => {
    router.push(`/edit-article/${article.id}`);
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
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {article.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {article.content}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Created on: {formattedDate}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Votes: {votes}
          </Typography>
        </CardContent>
        <CardActions>
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
    </Box>
  );
};

export default ArticleCard;
