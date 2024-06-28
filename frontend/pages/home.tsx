import React from "react";
import ArticlesPage from "./article/ArticlesPage";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import Navbar from "../components/navbar";

const Home: React.FC = () => {
  const router = useRouter();

  const handleCreateArticle = () => {
    router.push("/article/create-article");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Navbar />
      <ArticlesPage />
      <Button
        variant="contained"
        onClick={handleCreateArticle}
        sx={{
          background: "#b8a7ea",
          "&:hover": {
            background: "#7e61ab",
          },
        }}
      >
        Create New Article
      </Button>
    </div>
  );
};

export default Home;
