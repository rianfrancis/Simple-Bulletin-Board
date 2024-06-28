import { ArticleInterface } from "../interfaces/articleInterface";

const API_URL = "http://localhost:3000/articles";

export const fetchArticles = async (): Promise<ArticleInterface[]> => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch articles");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
};

export const fetchArticleById = async (
  id: number
): Promise<ArticleInterface> => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch article");
    }
    return response.json();
  } catch (error) {
    console.error(`Error fetching article with id ${id}:`, error);
    throw error;
  }
};

export const updateArticle = async (
  article: ArticleInterface
): Promise<void> => {
  try {
    const response = await fetch(`${API_URL}/${article.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(article),
    });

    if (!response.ok) {
      throw new Error("Failed to update article");
    }

    console.log("Article updated successfully:", article);
  } catch (error) {
    console.error("Error updating article:", error);
    throw error;
  }
};

export const upvote = async (id: number): Promise<void> => {
  try {
    const response = await fetch(`${API_URL}/upvote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to upvote article");
    }

    console.log("Article upvoted successfully:", id);
  } catch (error) {
    console.error("Error upvoting article:", error);
    throw error;
  }
};

export const downvote = async (id: number): Promise<void> => {
  try {
    const response = await fetch(`${API_URL}/downvote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to downvote article");
    }

    console.log("Article downvoted successfully:", id);
  } catch (error) {
    console.error("Error downvoting article:", error);
    throw error;
  }
};
