/**
 * 我们可以把一个页面分成若干的部分，每个部分都会成为一个组件
 * 组件可复用，可组合，可维护
 * 定义组件有两种方式
 * 1. 函数式 通过函数的方式定义组件 接收一个props属性对象作为参数，返回一个React元素
 *   1. 组件的首字母必须大写
 *   2. 属性对象作为参数，此参数是使用此组件的时候传入的
 */
import React from 'react';
import ReactDOM from 'react-dom';
// {name:"zfpx",color:"red"}
function Welcome(props){
  //Unknown prop `xxx` on <h1> tag. Remove this prop from the element
  //React元素的属性名不能自定义，只能是DOM标签的真实属性
  return <h1 tabIndex={1} style={{color:props.color}}>{props.name}</h1>
}
/**
 * 1. 当使用组件的时候和使用React元素用法基本一样
 * 2. 把组件的属性包装成对象{name:'zfpx'}作为参数传递给函数
 * 3. 函数会返回一个React元素,render方法会把此React元素渲染到页面中
 */
ReactDOM.render(<Welcome name="zfpx" color="red"/>,document.querySelector('#root'));