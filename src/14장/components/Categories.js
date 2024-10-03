import React from 'react';
import '../styles/category.style.scss';
import { NavLink } from '../../../node_modules/react-router-dom/dist/index';

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
      {categories.map((c) => (
        <NavLink
          className={({ isActive }) =>
            isActive ? 'category active' : 'category'
          }
          key={c}
          to={c === 'all' ? '/' : `/${c}`}
        >
          {c}
        </NavLink>
      ))}
    </div>
  );
};
  /*
  return (
    <div className="category-container">
      {categories.map((c) => (
        <div key={c} className={category===c ? "selected-category category": "category" } onClick={()=>onSelect(c)}>{c}</div>
      ))}
    </div>
  );
  */


export default Categories;

//catergory: [business| entertainment| general| health| science| sports| technology]
