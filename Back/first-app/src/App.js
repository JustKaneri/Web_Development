import React, { useRef, useState } from 'react';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import './styles/App.css';

function App() {
  const [posts,setPost] = useState([{id: 1, title:"JS",body: "discription" },
                                    {id: 2, title:"C#",body: "discription" },
                                    {id: 3, title:"C++",body: "discription" },
                                    {id: 4, title:"Rybu",body: "discription" }]);

  const [title,setTitle] = useState('');
  const [body,setBody] = useState('');
  
  const addNewPost = (e) =>{
      e.preventDefault();
      const newPost = {
          id: Date.now(),
          title,
          body
      }
      console.log(newPost);
      setPost([...posts, newPost]);
  }

  return (
    <div className="App">
        <form>
            {/*Управляемый компонент */}
            <MyInput 
                  type="text" 
                  placeholder='Название' 
                  value = {title}
                  onChange= {e => setTitle(e.target.value)}
            />
            <MyInput 
                type="text" 
                placeholder='Описание'
                value = {body}
                onChange = {e => setBody(e.target.value)}/>
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
        <PostList posts={posts} title= "Список постов 1"/>   
    </div>
  );
}

export default App;
