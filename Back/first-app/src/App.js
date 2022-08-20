import React, { useState } from 'react';
import PostList from './components/PostList';
import './styles/App.css';

function App() {
  const [posts,setPost] = useState([{id: 1, title:"JS",body: "discription" },
                                    {id: 2, title:"C#",body: "discription" },
                                    {id: 3, title:"C++",body: "discription" },
                                    {id: 4, title:"Rybu",body: "discription" }]);

  const [posts2,setPost2] = useState([{id: 1, title:"Python",body: "discription" },
                                    {id: 2, title:"Python",body: "discription" },
                                    {id: 3, title:"Python",body: "discription" },
                                    {id: 4, title:"Python",body: "discription" }])

  return (
    <div className="App">
        <PostList posts={posts} title= "Список постов 1"/>
        <PostList posts={posts2} title= "Список постов 2"/>    
    </div>
  );
}

export default App;
