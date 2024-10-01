import React from 'react';
import '../styles/category.style.scss'

const categories = [
  'all',
  'business',
  'entertainment',
  'general',
  'health',
  'science',
  'sports',
  'technology',
];

const Categories = () => {
  return (
    <div className="category-container">
      {categories.map((category) => (
        <div key={category} className="category">{category}</div>
      ))}
    </div>
  );
};

export default Categories;

//catergory: [business| entertainment| general| health| science| sports| technology]
