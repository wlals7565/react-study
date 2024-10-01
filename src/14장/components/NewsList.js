import React, { useEffect, useState } from 'react';
import '../styles/news-item.style.scss';
import NewsItem from './NewsItem';
import axios from '../../../node_modules/axios/index';

const NewsList = ({category}) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === 'all' ? '' : `&category=${category}`
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us${query}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`,
        );
        setArticles(response.data.articles);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);

  if (loading) {
    return <div className="news-list-container">대기 중...</div>;
  }

  if (!articles) {
    return null;
  }

  return (
    <div className="news-list-container">
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </div>
  );
};

export default NewsList;
