import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { posts as samplePosts } from '../data/sampleData';
import PostPage from '../Components/PostPage';

function Post() {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [posts, setPosts] = useState(samplePosts);

  const post = posts.find(p => p.id === postId);

  if (!post) return <h2>Post not found</h2>;

  return (
    <PostPage post={post} setPosts={setPosts} navigate={navigate} />
  );
}

export default Post;
