import { Link } from 'react-router-dom';

function PostCard({ post }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '15px',
      margin: '10px 0',
      borderRadius: '8px'
    }}>
      <Link to={`/post/${post.id}`} style={{ textDecoration: 'none', color: 'black' }}>
        <h2>{post.title}</h2>
      </Link>
      <p>{new Date(post.createdAt).toLocaleString()}</p>
      <p>👍 {post.upvotes}</p>
    </div>
  );
}

export default PostCard;
