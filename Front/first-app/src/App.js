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


function App() {

  const [posts, setPosts] = useState([]);

  const [filter,setFilter] = useState({sort:'',query:''});
  const  [modal,setModal] = useState(false);
  const sortedAndSearchPosts = usePosts(posts,filter.sort,filter.query);


  useEffect(()=>{
    fetchPosts();
  },[])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  async function fetchPosts(){
     const posts = await PostsSevice.getAll();
     setPosts(posts);
  }

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <MyButton onClick={()=> fetchPosts()}>Get</MyButton>
      <MyButton style = {{marginTop:'30px'}} onClick = {() => setModal(true)}>
        Создать пост
      </MyButton>
      <MyModalWindow visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModalWindow>
      <hr style={{ margin: "20px" }} />
      <PostFilter filter={filter} setFilter={setFilter}/>
      {sortedAndSearchPosts.length !== 0 ? (
        <PostList remove={removePost} posts={sortedAndSearchPosts} title="Список постов 1" />
      ) : (
        <h1 style={{ textAlign: "center" }}>Записей нет</h1>
      )}
    </div>
  );
}

export default App;
