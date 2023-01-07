
import { useEffect } from 'react';
import { useState } from 'react';
function Api() {

    const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
       .then((response) => response.json())
       .then((data) => {
          console.log(data);
          setPosts(data);
       })
       .catch((err) => {
          console.log(err.message);
       });
 }, []);

//  const deletePost = async (id) => {
//     await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
//        method: 'DELETE',
//     }).then((response) => {
//        if (response.status === 200) {
//           setPosts(
//              posts.filter((post) => {
//                 return post.id !== id;
//              })
//           );
//        } else {
//           return;
//        }
//     });
//     };


//  const addPosts = async (title, body) => {
//     await fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//        title: title,
//        body: body,
//        userId: Math.random().toString(36).slice(2),
//     }),
//     headers: {
//        'Content-type': 'application/json; charset=UTF-8',
//     },
//     })
//     .then((response) => response.json())
//     .then((data) => {
//        setPosts((posts) => [data, ...posts]);
//        setTitle('');
//        setBody('');
//     })
//     .catch((err) => {
//        console.log(err.message);
//     });
//     };



  return (
        <div className="posts-container">
      {posts.map((post) => {
         return (
            <div className="post-card" key={post.id}>
               <h2 className="post-title">{post.title}</h2>
               <p className="post-body">{post.body}</p>
               <div className="button">
               <div className="delete-btn">Delete</div>
               </div>
            </div>
         );
      })}

</div>
  );
}

export default Api;
