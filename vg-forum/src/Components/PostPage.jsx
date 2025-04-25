import { useState } from 'react';
import CommentSection from './CommentSection';

function PostPage({ post, setPosts, navigate }) {
  const [comment, setComment] = useState('');

  const handleUpvote = () => {
    setPosts(prev =>
      prev.map(p =>
        p.id === post.id ? { ...p, upvotes: p.upvotes + 1 } : p
      )
    );
  };

  const handleComment = () => {
    if (comment.trim() === '') return;
    setPosts(prev =>
      prev.map(p =>
        p.id === post.id
          ? { ...p, comments: [...p.comments, comment] }
          : p
      )
    );
    setComment('');
  };

  const handleDelete = () => {
    setPosts(prev => prev.filter(p => p.id !== post.id));
    navigate('/');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>{post.title}</h2>
      <p>{new Date(post.createdAt).toLocaleString()}</p>
      {post.imageUrl && (
        <img
          src={post.imageUrl}
          alt="Post"
          style={{ maxWidth: '100%', marginBottom: '10px' }}
        />
      )}
      <p>{post.content}</p>
      <p>👍 {post.upvotes}</p>
      <button onClick={handleUpvote}>Upvote</button>
      <button onClick={handleDelete} style={{ marginLeft: '10px' }}>
        Delete Post
      </button>

      <CommentSection comments={post.comments} />

      <div style={{ marginTop: '10px' }}>
        <input
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write a comment..."
          style={{ width: '70%', marginRight: '10px' }}
        />
        <button onClick={handleComment}>Post Comment</button>
      </div>
    </div>
  );
}

export default PostPage;
