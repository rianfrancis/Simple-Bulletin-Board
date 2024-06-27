import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { useRouter } from "next/router";
import { ArticleInterface } from "../interfaces/articleInterface";

interface ArticleCardProps {
  article: ArticleInterface;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const router = useRouter();

  const handleEdit = () => {
    router.push(`/edit-article/${article.id}`);
  };

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
            Created on: {article.createdDate}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleEdit}>
            Edit Article
          </Button>
          <Button size="small">Upvote</Button>{" "}
          <Button size="small">Downvote</Button>{" "}
        </CardActions>
      </Card>
    </Box>
  );
};

export default ArticleCard;
