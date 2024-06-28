import React from "react";
import ArticlesPage from "./ArticlesPage";
import { Button } from "@mui/material";
import { useRouter } from "next/router";

const Home: React.FC = () => {
  const router = useRouter();

  const handleCreateArticle = () => {
    router.push("/create-article");
  };

  return (
    <div>
      <ArticlesPage />
      <Button
        variant="contained"
        color="primary"
        onClick={handleCreateArticle}
        style={{ margin: "20px" }}
      >
        Create New Article
      </Button>
    </div>
  );
};

export default Home;
