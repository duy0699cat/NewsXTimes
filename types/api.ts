// types/api.ts
export interface NewsSource {
    id: string;
    name: string;
}

export interface Article {
    source: NewsSource;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export interface NewsResponse {
    status: string;
    totalResults: number;
    articles: Article[];
}

export default NewsResponse;
