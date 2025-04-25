import { useState } from 'react';
import { posts as samplePosts } from '../data/sampleData';
import PostList from '../Components/PostList';
import CreatePostForm from '../Components/CreatePostForm';

function Home() {
  const [posts, setPosts] = useState(samplePosts);
  const [sort, setSort] = useState("time");
  const [search, setSearch] = useState("");

  const sortedPosts = [...posts]
    .filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) =>
      sort === "upvotes"
        ? b.upvotes - a.upvotes
        : new Date(b.createdAt) - new Date(a.createdAt)
    );

  return (
    <div style={{ padding: '20px' }}>
      <h1>🎮 Video Game Forum</h1>
      <CreatePostForm setPosts={setPosts} />

      <div style={{ marginTop: '20px' }}>
        <input
          placeholder="Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <select onChange={(e) => setSort(e.target.value)} value={sort}>
          <option value="time">Newest</option>
          <option value="upvotes">Top</option>
        </select>
      </div>

      <PostList posts={sortedPosts} />
    </div>
  );
}

export default Home;
