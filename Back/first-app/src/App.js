import React, { useMemo, useRef, useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyInput from "./components/UI/input/MyInput";
import PostFilter from "./components/PostFilter";
import MySelect from "./components/UI/select/MySelect";

import "./styles/App.css";

function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: "JS", body: "discription" },
    { id: 2, title: "C#", body: "fiscription" },
    { id: 3, title: "C++", body: "ziscription" },
    { id: 4, title: "Rybu", body: "qiscription" },
  ]);

  const [filter,setFilter] = useState({sort:'',query:''});

  const sortedPost = useMemo(()=>{
    if(filter.sort){
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    else{
      return posts;
    }
  },[filter.sort,posts]);

  const sortedAndSearch = useMemo(()=>{
      return sortedPost.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()));
  },[filter.query,sortedPost]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "20px" }} />
      <PostFilter filter={filter} setFilter={setFilter}/>
      {sortedAndSearch.length !== 0 ? (
        <PostList remove={removePost} posts={sortedAndSearch} title="Список постов 1" />
      ) : (
        <h1 style={{ textAlign: "center" }}>Записей нет</h1>
      )}
    </div>
  );
}

export default App;
