import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PostItem from '../components/PostItem';

function PostList({posts,title,remove}) {
  return (
    <div>
      {posts.length == 0
        ?<h1 style={{textAlign:'center'}}>Нет записей</h1>
        :<h1 style={{textAlign:'center'}}>{title}</h1>
      }
      
        <TransitionGroup>
          {posts.map((post,index) => 
              <CSSTransition
                key = {post.id}
                timeout={500}
                classNames="post"
              >
                 <PostItem remove={remove} number = {index+1} post = {post} />
              </CSSTransition>
          )}
        </TransitionGroup>
    </div>
  )
}

export default PostList