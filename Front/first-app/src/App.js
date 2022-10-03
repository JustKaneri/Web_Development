import React, { useEffect, useMemo, useRef, useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyInput from "./components/UI/input/MyInput";
import PostFilter from "./components/PostFilter";

import "./styles/App.css";
import MyModalWindow from "./components/UI/MyModalWindow/MyModalWindow";
import MyButton from "./components/UI/button/MyButton";
import { usePosts } from "./hooks/usePost";
import PostsSevice from "./API/PostsService";
import Loader from "./Loader/Loader";
import {useFetching } from './hooks/useFeatching';


function App() {

  const [posts, setPosts] = useState([]);
  const [filter,setFilter] = useState({sort:'',query:''});
  const  [modal,setModal] = useState(false);
  const sortedAndSearchPosts = usePosts(posts,filter.sort,filter.query);
  const [fetchPosts,isPostLoading,postError] = useFetching(async () =>{
    const posts = await PostsSevice.getAll();
    console.log(posts);
    setPosts(posts);
  });

  useEffect(()=>{
    fetchPosts();
  },[])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <MyButton onClick={()=> fetchPosts}>Get</MyButton>
      <MyButton style = {{marginTop:'30px'}} onClick = {() => setModal(true)}>
        Создать пост
      </MyButton>
      <MyModalWindow visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModalWindow>
      <hr style={{ margin: "20px" }} />
      <PostFilter filter={filter} setFilter={setFilter}/>
      {postError && 
        <h1>Произошла ошибка {postError}</h1>
      }
      {isPostLoading 
          ?<div style={{display: "flex", justifyContent:'center'}}><Loader/></div>
          :<PostList remove={removePost} posts={sortedAndSearchPosts} title="Список постов 1" />
      }
    </div>
  );
}

export default App;
