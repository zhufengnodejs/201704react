import React from 'react';
import ReactDOM from 'react-dom';
/**
 * 1.在jsx嵌套表达式
 * 什么叫表达式?一些变量和一些操作符的混合，表达式一定要求返回一个值
 * 'React' must be in scope when using JSX
 */

function formatUser(user){
 return user.firstName+user.lastName;
}

//把一个React元素赋给了一个变量,因为React元素更像是JS，所以要赋给一个变量，也可以作为方法的返回值，也可以做为方法的参数

//如果希望在html里面嵌套变量，则可以用{}包裹。{}里包裹的是JS的表达式 1+1 a+2   formatUser({})
let user = {
  firstName:'张',
  lastName:'三'
}
//如果想在JS中写html,直接用<开头就可以，如果想在html代码中读取JS变量或表达式，需要用{}包裹
/**
 * 因为这里的React元素并不是真实DOM元素
 * 1. 比如说增加类名 需要增加className属性
 * 2. 比如要增加行内样式
 *    style="background-color:blue"
 *    style应该等于一个JS对象
 *        属性名也要从-分隔的属性变成驼峰命名法
 *        属性名也是驼峰命名法
 * 3.属性的值或者用是字符串，用双引号包裹，如果是表达式用{}包裹，没有其它 写法，不能什么都不包
 */
let style = {backgroundColor:'blue'};
/*let hello = <h1 tabIndex={1} style={style} className="red"><span>{formatUser(user)}</span></h1>;*/
//Babel react
/*let hello = React.createElement('h1',{
  className:'red'
},'hello');*/
let str = '<h3>hello</h3>';
let hello = <div dangerouslySetInnerHTML={{__html:str}}></div>

ReactDOM.render(hello,document.querySelector('#root'));
/*

// React元素会经过JSX编译器的转义，转义后其实就是一个Javascript对象
let h1 = <h1 id="1">hello</h1>;
//创建React元素 标签名 属性对象 子元素
let h1 = createElement('h1',{id:1},'hello');
//createElement方法执行完成后会返回一个对象
let h1 = {type:'h1',props:{id:1},children:'hello'};
//render的时候会把此虚拟的DOM元素转成真实的DOM元素并插入到页面中

function createElement(type,props,children){
  return {type,props,children};
}
//把虚拟DOM转化成真实DOM
function render(element,container){
  //先创建一个真实DOM。
  let ele = document.createElement(element.type);
  //把属性对象的属性依次赋给真实DOM元素
  for(let attr in element.props){
    ele.setAttribute(attr,element.props[attr])
  }
  //把子元素也赋给真实DOM元素的innerHTML
  ele.innerHTML = element.children;
  //把转换后的真实DOM元素插入到容器的内部
  container.appendChild(ele);
}*/
