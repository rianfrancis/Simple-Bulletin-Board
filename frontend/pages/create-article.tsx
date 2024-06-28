import React from "react";
import { Grid, Typography } from "@mui/material";
import CreateArticleForm from "../components/CreateArticleForm";

const CreateArticlePage: React.FC = () => {
  return (
    <Grid container justifyContent="center" spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" align="center" gutterBottom>
          Create New Article
        </Typography>
      </Grid>
      <Grid item xs={12} md={8}>
        <CreateArticleForm />
      </Grid>
    </Grid>
  );
};

export default CreateArticlePage;
