/**
 * 如何修改UI 做一个时钟的案例
 **/
import React from 'react';
import ReactDOM from 'react-dom';
export  function tick(){
  let date = new Date();
  let second = date.getSeconds();
  let time = second%5==0?<p style={{color:'red'}}>{date.toString()+""}</p>:<span style={{color:'blue'}}>{date+''}</span>;
   let clock = <div>当前时间:{time}</div>;
   //DOM DIFF 每次重新渲染的时候会重新比较虚拟DOM的差异，只更新差异的部分
   ReactDOM.render(clock,document.querySelector('#root'));
}
