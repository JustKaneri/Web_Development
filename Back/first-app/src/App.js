import React, { useRef, useState } from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MySelect from './components/UI/select/MySelect';

import './styles/App.css';

function App() {
    const [posts,setPosts] = useState([{id: 1, title:"JS",body: "discription" },
                                    {id: 2, title:"C#",body: "fiscription" },
                                    {id: 3, title:"C++",body: "ziscription" },
                                    {id: 4, title:"Rybu",body: "qiscription" }]);
    
    const [selectedSort,setSeleceteSort] = useState();

    const createPost = (newPost) =>{
        setPosts([...posts,newPost]);
    }

    const removePost = (post) =>{
        setPosts(posts.filter(p => p.id !== post.id));
    }

  const sortPosts = (sort) =>{
      setPosts([...posts].sort((a,b)=> a[sort].localeCompare(b[sort])));
  }

  return (
    <div className="App">
        <PostForm create={createPost}/>
        <hr style={{margin:'20px'}}/>
        <div>
            <MySelect
              onChange={sortPosts}
              value={selectedSort}
              options={[ 
                {value:'title', name:'По названию'},
                {value:'body', name:'По описанию'}
              ]}
              defaultValue="Сортировка"
            />
        </div>
        {posts.length !== 0
            ? <PostList remove={removePost} posts={posts}  title= "Список постов 1"/>   
            : <h1 style={{textAlign:'center'}}>Записей нет</h1>
        }
       
    </div>
  );
}

export default App;
