import axios from 'axios';
import {NEWS_API_KEY} from '@env';

const api = axios.create({
  baseURL: 'https://newsapi.org/v2/',
});

export const getNewsFromAPI = async (params: String) => {
  try {
    const key = NEWS_API_KEY;
    const response = await api.get(`top-headlines?${params}&apiKey=${key}`);
    const filteredArticles = response.data.articles.filter(
      (article: any) => article.title !== '[Removed]',
    );
    return {...response, data: {...response.data, articles: filteredArticles}};
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default api;
