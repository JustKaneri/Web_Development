import React, { useRef, useState } from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';

import './styles/App.css';

function App() {
  const [posts,setPosts] = useState([{id: 1, title:"JS",body: "discription" },
                                    {id: 2, title:"C#",body: "discription" },
                                    {id: 3, title:"C++",body: "discription" },
                                    {id: 4, title:"Rybu",body: "discription" }]);

    const createPost = (newPost) =>{
        setPosts([...posts,newPost]);
    }

    const removePost = (post) =>{
        setPosts(posts.filter(p => p.id !== post.id));
    }

  return (
    <div className="App">
        <PostForm create={createPost}/>
        {posts.length !== 0
            ? <PostList remove={removePost} posts={posts}  title= "Список постов 1"/>   
            : <div>Посты не найдены</div>
        }
       
    </div>
  );
}

export default App;
