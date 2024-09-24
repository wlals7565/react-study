import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>first show page</p>
      <ul>
        <li>
          <Link to="/about">intro</Link>
        </li>
        <li>
          <Link to="/profiles/james">james's profile</Link>
        </li>
        <li>
          <Link to="/profiles/jime">jime's profile</Link>
        </li>
        <li>
          <Link to="/articles">게시글 목록</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
