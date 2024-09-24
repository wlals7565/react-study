import { Link, Outlet } from "../../../node_modules/react-router-dom/dist/index"

const Article = () => {
  return (
    <ul>
      <li>
        <Link to="/articles/1">게시글 1</Link>
      </li>
      <li>
        <Link to="/articles/2">게시글 2</Link>
      </li>
      <li>
        <Link to="/articles/3">게시글 3</Link>
      </li>
      <Outlet />
    </ul>
  )
}

export default Article;