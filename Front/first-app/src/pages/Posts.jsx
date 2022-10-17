import React, { useEffect, useMemo, useRef, useState } from "react";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import PostFilter from "../components/PostFilter";

import "../styles/App.css";
import MyModalWindow from "../components/UI/MyModalWindow/MyModalWindow";
import MyButton from "../components/UI/button/MyButton";
import { usePosts } from "../hooks/usePost";
import PostsSevice from "../API/PostsService";
import Loader from "../Loader/Loader";
import {useFetching } from '../hooks/useFeatching';
import {getPageCount, getPagesArray} from '../utils/pages';
import Pagination from "../components/UI/pagination/Pagination";


function Posts() {

  const [posts, setPosts] = useState([]);
  const [filter,setFilter] = useState({sort:'',query:''});
  const [modal,setModal] = useState(false);
  const [totalPage,setTotalPage] = useState(0);
  const [limit,setLimit] = useState(10);
  const [page,setPage] = useState(1);
  const sortedAndSearchPosts = usePosts(posts,filter.sort,filter.query);
  const [fetchPosts,isPostLoading,postError] = useFetching(async () =>{
    const postsD = await PostsSevice.getAll(limit,page);
    setPosts([...posts,...postsD.data]);
    const totalCount = postsD.headers["x-total-count"];
    setTotalPage(getPageCount(totalCount,limit));
  });
  const lastElement = useRef();
  const observer = useRef();

  useEffect(()=>{
    if(isPostLoading) return;
    if(observer.current) observer.current.disconnect();
    var callback = function(entries,observer){
      if(entries[0].isIntersecting && page < totalPage){
        console.log(page);
        setPage(page+1);
      }
    }
    observer.current = new IntersectionObserver(callback);
    observer.current.observe(lastElement.current);

  },[isPostLoading]);

  useEffect(()=>{
    fetchPosts();
  },[page])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const changePage = (page) =>{
    setPage(page);
  }
  
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
      <PostList remove={removePost} posts={sortedAndSearchPosts} title="Список постов 1" />
      <div ref = {lastElement} style = {{height:'10px'}}></div>
      {isPostLoading &&
        <div style={{display: "flex", justifyContent:'center'}}><Loader/></div>
      }
      
      <br></br>
      <Pagination
      totalPage={totalPage}
      changePage = {changePage}
      page ={page}
      />
    </div>
  );
}

export default Posts;
