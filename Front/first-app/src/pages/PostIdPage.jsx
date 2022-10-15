import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import PostsSevice from '../API/PostsService';
import { useFetching } from '../hooks/useFeatching';
import Loader from "../Loader/Loader";

const PostIdPage = () => {

    const params = useParams();
    const [post,setPost] = useState({});
    const [comments,setComments] = useState([]);
    const [fetchPostById,isLoad,error] = useFetching(async ()=>{
        const responce = await PostsSevice.getPostById(params.id);
        setPost(responce.data);
    });

    const [fetchСoment,isLoadComent,errorComent] = useFetching(async ()=>{
        const responce = await PostsSevice.getComentsPost(params.id);
        setComments(responce.data);
    });

    useEffect(() => {
        fetchPostById();
        fetchСoment();
    },[]);

    return (
        <div>
            <h1>Страница поста {params.id}</h1>
            {isLoad
                ?   <div style={{display: "flex", justifyContent:'center'}}><Loader/></div>
                :   <h2>{post.id} {post.title}</h2>
            }
            <h1>Комментарии</h1>
            {isLoadComent
                ?   <div style={{display: "flex", justifyContent:'center'}}><Loader/></div>
                :   <div style={{marginTop:"10px"}}>
                        {comments.map((value)=>
                            <div key={value.id} style={{margin:'10px'}}>
                                <h5>{value.email}</h5>
                                <div>{value.body}</div>
                            </div>    
                        )}  
                     </div> 
            }
        </div>
    );
}

export default PostIdPage;
