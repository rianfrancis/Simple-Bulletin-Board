import { ArticleInterface } from "../interfaces/articleInterface";

const API_URL = "http://localhost:3000/articles";

export const fetchArticles = async (): Promise<ArticleInterface[]> => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch articles");
  }
  return response.json();
};

export const fetchArticleById = async (
  id: number
): Promise<ArticleInterface> => {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch article");
  }
  return response.json();
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
    throw error; // Rethrow the error to handle it upstream
  }
};
