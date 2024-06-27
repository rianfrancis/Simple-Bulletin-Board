import { ArticleInterface } from "../interfaces/articleInterface";

export async function fetchArticles(): Promise<ArticleInterface[]> {
  const response = await fetch("http://localhost:3000/articles");
  if (!response.ok) {
    throw new Error("Failed to fetch articles");
  }
  return response.json();
}
