/**
 * 受控组件和非受控组件
 *  组件受状态控制
 *  组件不受状态控制
 */
import React from 'react';
import ReactDOM from 'react-dom';
class Form extends React.Component{
  constructor(){
    super();
    this.state = {username:'zhangsan'};
  }
  //事件处理函数有一个参数是事件对象，事件对象的target属性指向事件的事件源。是一个真实的DOM对象
  handleChange = (event)=>{
    //Form is changing a controlled input of type text to be uncontrolled. 表单正在从一个受控的input框变成一个非受控的input框
    // Input elements should not switch from controlled to uncontrolled (or vice versa). 输入元素不应该从一个受控组件变成一个变非控组件(反之也是一样)
    // Decide between using a controlled or uncontrolled input element for the lifetime of the component.请谨慎决定 你是要使用受控组件还是非受控件
     this.setState({
       username:event.target.value
     });
  }
  //You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. 你提供了一个value属性给一个表单元素，没有提供一个onChange事件处理函数。这将呈现出一个只读的字段
  //受控组件是input框的显示值由状态控制 .就是有value属性，但是如果value受状态控制，一定要配一个onChange处理函数，如果不配的话，则变成只读字段
  //非受控组件是input框的值不受状态控制 ，其实就是没有value属性
  handleSubmit = (event)=>{
    event.preventDefault();
    console.log(this.state.username);
  }
  reset = ()=>{
    this.setState({username:''});
  }
  render(){
     return (
       <form onSubmit={this.handleSubmit}>
         用户名 <input type="text" defaultValue="123" onChange={this.handleChange}/>
         <button onClick={this.reset}>重置</button>
       </form>
     )
   }
}
ReactDOM.render(<Form/>,document.querySelector('#root'));

