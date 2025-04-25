import { useState } from 'react';

function CreatePostForm({ setPosts }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now().toString(),
      title,
      content,
      imageUrl,
      upvotes: 0,
      createdAt: new Date().toISOString(),
      comments: [],
    };
    setPosts(prev => [newPost, ...prev]);
    setTitle('');
    setContent('');
    setImageUrl('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post Title"
        required
        style={{ display: 'block', marginBottom: '10px', width: '100%' }}
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your thoughts..."
        rows={4}
        style={{ display: 'block', marginBottom: '10px', width: '100%' }}
      />
      <input
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        placeholder="Image URL (optional)"
        style={{ display: 'block', marginBottom: '10px', width: '100%' }}
      />
      <button type="submit">Create Post</button>
    </form>
  );
}

export default CreatePostForm;
