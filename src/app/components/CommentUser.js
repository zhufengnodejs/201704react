import React from 'react';
let CommentUserAvatar = props =>(
  <img src={props.avatar}/>
)
let CommentUserName = props=>(
  <div className="comment-username">
    {props.username}
  </div>
)
//组件的返回值有且只能有一个顶级react元素
let CommentUser = props=>(// {username,avatar}
  <div className="comment-user">
    <CommentUserAvatar avatar = {props.avatar}/>
    <CommentUserName username={props.username}/>
  </div>
)
export  default CommentUser;