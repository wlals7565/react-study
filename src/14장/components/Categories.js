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

const Categories = ({category, onSelect}) => {
  return (
    <div className="category-container">
      {categories.map((c) => (
        <div key={c} className={category===c ? "selected-category category": "category" } onClick={()=>onSelect(c)}>{c}</div>
      ))}
    </div>
  );
};

export default Categories;

//catergory: [business| entertainment| general| health| science| sports| technology]
