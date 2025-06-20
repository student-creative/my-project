import { useParams, Link } from "react-router-dom";

const SinglePost = ({ posts }) => {
  const { id } = useParams();
  const post = posts.find(p => p.id === parseInt(id));

  if (!post) return <h3>Post not found</h3>;

  return (
    <div className="card shadow p-4">
      <img src={post.image} alt={post.title} className="img-fluid mb-3" />
      <h2>{post.title}</h2>
      <p className="text-muted">By {post.author} | {post.date}</p>
      <p>{post.content}</p>
      <Link to="/" className="btn btn-secondary mt-3">← Back to Blog</Link>
    </div>
  );
};

export default SinglePost;
