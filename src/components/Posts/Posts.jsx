
import Post from "../Post/Post";
import "./Posts.css";
import Blog1 from '../Assets/Blog1.jpg'

export default function Posts() {
  return (
    <div className="posts">
      <Post img={Blog1} />
    </div>
  );
}
