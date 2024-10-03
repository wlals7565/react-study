import React, { useState, useCallback } from 'react';
import NewsList from './components/NewsList';
import Categories from './components/Categories';
import { Route, Routes } from '../../node_modules/react-router-dom/dist/index';
import NewsPage from './components/NewsPage';

const App14 = () => {
  return (
    <Routes>
      <Route path="/" element={<NewsPage />}/>
      <Route path="/:category" element={<NewsPage />}/>
    </Routes>
  )
  /*
  const [category, setCategory] = useState('all');
  const onSelect = useCallback((category) => setCategory(category), []);

  return (
    <>
      <Categories category={category} onSelect={onSelect}/>
      <NewsList category={category} />
    </>
  );
  */
};

export default App14;
