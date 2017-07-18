import React from 'react';
import CommentUser from './CommentUser';
import CommentText from './CommentText';
import CommentDate from './CommentDate';

export default function Comment(props) {//{comment:}
  // {user:{avatar,username},content,date}
  return (
    <div className="comment">
      <CommentUser {...props.user}/>
      <CommentText content={props.content}/>
      <CommentDate date={props.date}/>
    </div>
  )
}