import { useParams } from "../../../node_modules/react-router-dom/dist/index"

const Article = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>게시글 {id}</h2>
    </div>
  )
}

export default Article;