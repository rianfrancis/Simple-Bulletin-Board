// components/ArticleCard.tsx
import React from "react";
import {
  Box,
  Card,
  CardContent,
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
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Article
          </Typography>
          <Typography variant="h5" component="div">
            {article.title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
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
        </CardActions>
      </Card>
    </Box>
  );
};

export default ArticleCard;
