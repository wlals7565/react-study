import {
  Link,
  NavLink,
  Outlet,
} from "../../../node_modules/react-router-dom/dist/index";

const Article = () => {
  const activeStyle = {
    color: "green",
    fontSize: "3rem",
  };
  return (
    <ul>
      <li>
        <NavLink
          to="/articles/1"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          게시글 1
        </NavLink>
      </li>
      <li>
      <NavLink
          to="/articles/2"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          게시글 2
        </NavLink>
      </li>
      <li>
      <NavLink
          to="/articles/3"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          게시글 3
        </NavLink>
      </li>
      <Outlet />
    </ul>
  );
};

export default Article;
