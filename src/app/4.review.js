/**
 * 1. react是什么？
 * 2. create-react-app
 * 3. 如何使用react
 * <ul><li>张三</li>
 * <li>李四</li>
 * <li>王五</li></ul>
 */
import React from 'react';
import ReactDOM from 'react-dom';
let names = ['张三','李四','王五'];
//Warning:
// Each child in an array or iterator should have a unique "key" prop.
//在表达式内部，可以放React元素，可以放React元素数组，还可以放字符串或数字.
let lis = names.map(function(item,index){
  return <li key={index}>{item}</li>
});
ReactDOM.render(
  <ul>
    {
      lis
    }
  </ul>
  ,document.querySelector('#root')
);

