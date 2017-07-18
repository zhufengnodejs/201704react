import React from 'react';
import ReactDOM from 'react-dom';
import './6.复合级件.css'
let avatar = require('./images/avatar.jpg');
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
function CommentText(props){
  return (
    <div className="comment-text">
      {props.content}
    </div>
  )
}
let CommentDate = props => (
  <div className="comment-date">
    {props.date.toLocaleString()}
  </div>
)
function Comment(props) {//{comment:}
  // {user:{avatar,username},content,date}
  return (
    <div className="comment">
      <CommentUser {...props.user}/>
      <CommentText content={props.content}/>
      <CommentDate date={props.date}/>
    </div>
  )
}
let comment = {user:{avatar,username:'张三'},content:'今天天气真不错',date:new Date()};
//...展示运算符，表示把comment对象的所有属性全部展开传递给Comment
ReactDOM.render(<Comment {...comment}/>,document.querySelector('#root'));

//module.exports  require  commonjs
//export import  es6 module default