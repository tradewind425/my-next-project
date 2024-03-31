import React, { useEffect, useState } from 'react';

export default function StrapiPage() {
  // useStateを使用してposts状態とsetPosts関数を定義
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:4000/posts');
      const data = await response.json();
      console.log(data); // データの確認
      setPosts(data); // ここでsetPostsを呼び出してposts状態を更新
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Strapi Articles</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
