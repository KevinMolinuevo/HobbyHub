function CommentSection({ comments }) {
    return (
      <div style={{ marginTop: '20px' }}>
        <h3>Comments</h3>
        {comments.length === 0 ? (
          <p>No comments yet. Be the first to share your thoughts!</p>
        ) : (
          <ul style={{ paddingLeft: '20px' }}>
            {comments.map((c, i) => (
              <li key={i} style={{ marginBottom: '8px' }}>{c}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
  
  export default CommentSection;
  