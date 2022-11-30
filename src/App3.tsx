import { useState, useEffect } from 'react';

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

function App3() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setPosts(data)
      })
  }, [])


  return (
    <>
      <h1>Learn useEffect (3)</h1>
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

export default App3;
