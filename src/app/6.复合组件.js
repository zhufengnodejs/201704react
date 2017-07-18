import React from 'react';
import ReactDOM from 'react-dom';
import './6.复合级件.css'
import Comment from './components/Comment';
let avatar = require('./images/avatar.jpg');
let comment = {user:{avatar,username:'张三'},content:'今天天气真不错',date:new Date()};
//...展示运算符，表示把comment对象的所有属性全部展开传递给Comment
ReactDOM.render(<Comment {...comment}/>,document.querySelector('#root'));

//module.exports  require  commonjs
//export import  es6 module default