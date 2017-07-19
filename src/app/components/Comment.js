import React from 'react';
import CommentUser from './CommentUser';
import CommentText from './CommentText';
import CommentDate from './CommentDate';
/**
 * props属性对象是由外界传入，父级组件传入的
 * 在组件内部只能读取，不能修改
 *
 */
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