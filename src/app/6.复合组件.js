import React from 'react';
import ReactDOM from 'react-dom';
import './6.复合级件.css'
let avatar = require('./images/avatar.jpg');

function Comment(props) {//{comment:}
  // {user:{avatar,username},content,date}
  return (
    <div className="comment">
      <div className="comment-user">
        <img src={props.user.avatar}/>
        <div className="comment-username">
          {props.user.username}
        </div>
      </div>
      <div className="comment-text">
        {props.content}
      </div>
      <div className="comment-date">
        {props.date.toLocaleString()}
      </div>
    </div>
  )
}
let comment = {user:{avatar,username:'张三'},content:'今天天气真不错',date:new Date()};
//...展示运算符，表示把comment对象的所有属性全部展开传递给Comment
ReactDOM.render(<Comment user={{avatar,username:'张三'}} content='今天天气真不错' date={new Date()}/>,document.querySelector('#root'));