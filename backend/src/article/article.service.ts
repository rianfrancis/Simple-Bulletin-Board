import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateArticleDto, UpdateArticleDto } from './dtos/article.dto';
import { Article } from './article';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article)
    private readonly articleRepository: Repository<Article>,
  ) {}

  async create(
    createArticleDto: CreateArticleDto,
  ): Promise<{ message: string; article: Article }> {
    const article = this.articleRepository.create(createArticleDto);
    await this.articleRepository.save(article);
    return { message: 'Article created successfully', article };
  }

  async findAll(): Promise<Article[]> {
    return this.articleRepository.find();
  }

  async findOne(id: number): Promise<Article> {
    const article = await this.articleRepository.findOne({ where: { id } });
    if (!article) {
      throw new NotFoundException(`Article with ID ${id} not found`);
    }
    return article;
  }

  async update(
    id: number,
    updateArticleDto: UpdateArticleDto,
  ): Promise<{ message: string; article: Article }> {
    await this.articleRepository.update(id, updateArticleDto);
    const updatedArticle = await this.articleRepository.findOne({
      where: { id },
    });
    if (!updatedArticle) {
      throw new NotFoundException(`Article with ID ${id} not found`);
    }
    return { message: 'Article updated successfully', article: updatedArticle };
  }

  async remove(id: number): Promise<{ message: string }> {
    const result = await this.articleRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Article with ID ${id} not found`);
    }
    return { message: 'Article deleted successfully' };
  }

  async upvote(id: number): Promise<{ message: string; article: Article }> {
    const article = await this.articleRepository.findOne({ where: { id } });
    if (!article) {
      throw new NotFoundException(`Article with ID ${id} not found`);
    }
    article.votes++;
    await this.articleRepository.save(article);
    return { message: 'Article upvoted successfully', article };
  }

  async downvote(id: number): Promise<{ message: string; article: Article }> {
    const article = await this.articleRepository.findOne({ where: { id } });
    if (!article) {
      throw new NotFoundException(`Article with ID ${id} not found`);
    }
    article.votes--;
    await this.articleRepository.save(article);
    return { message: 'Article downvoted successfully', article };
  }
}
