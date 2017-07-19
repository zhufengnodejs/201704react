/**
 * 学习如何提交表单
 **/
import React from 'react';
import ReactDOM from 'react-dom';
class Form extends React.Component {
  handle = (event)=>{
    //所有的事件处理函数都 有一个参数
    event.preventDefault();
    //this.refs是一个对象，属性就是引用名，值是真实的DOM元素
    console.log(this.refs);
    let username = this.refs.username.value;
    let password = this.password.value;
    console.log(username,password);
  }
  render() {
    //ref=reference引用名,那么可以通过这个引用名得到这个input框的真实DOM
    //ref=函数 当此React元素转成真实的DOM元素并插入到页面中之后，会执行此箭头函数，ref就是真实的DOM元素
     return (
       <form onSubmit={this.handle}>
         用户名:<input ref="username" type="text" required={true}/><br/>
         密码:<input  ref={xxx=>{
         this.password=xxx;
       }} type="text" required={true}/><br/>
         <input type="submit"/>
       </form>
     )
  }
}
ReactDOM.render(<Form/>, document.querySelector('#root'));