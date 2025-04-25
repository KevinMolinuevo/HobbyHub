import PostCard from './PostCard';

function PostList({ posts }) {
  return (
    <div style={{ marginTop: '20px' }}>
      {posts.length === 0 ? (
        <p>No posts yet. Be the first to share your thoughts!</p>
      ) : (
        posts.map((post) => <PostCard key={post.id} post={post} />)
      )}
    </div>
  );
}

export default PostList;
