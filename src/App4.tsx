import { useState, useEffect } from 'react';

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

function App4() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const posts = await response.json();
      setPosts(posts);
    };
    fetchPost();
  }, [])

  return (
    <>
      <h1>Learn useEffect (4)</h1>
      <div>
        {
          posts.map(post => (
            <div key={post.id}>{post.title}</div>
          ))
        }
      </div>
    </>
  );
}

export default App4;
