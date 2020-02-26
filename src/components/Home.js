import React, { useState, useEffect } from "react";
import Nav from "./Nav";

export default function Home() {
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    fetch("http://localhost:3000/api/v1/posts", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    })
      .then(res => res.json())
      .then(p => {
            // console.log(' we be fetching ', p)
            setPosts(p)
        });
  }, []);

  return (
    <div>
      <Nav />
      <div>
          
        {posts.map(post=>{
        return <h1>{post.content} - {post.users.map(user=> <h2>{user.username}</h2>)}</h1>
        })}
        
      </div>
    </div>
  );
}
