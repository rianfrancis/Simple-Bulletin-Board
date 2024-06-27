import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  ButtonBase,
} from "@mui/material";

import { ArticleInterface } from "../interfaces/articleInterface";

interface ArticleCardProps {
  article: ArticleInterface;
  onClick: () => void;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, onClick }) => {
  return (
    <ButtonBase onClick={onClick}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div">
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
          <Button size="small">View</Button>
        </CardActions>
      </Card>
    </ButtonBase>
  );
};

export default ArticleCard;
