import React from 'react';
import ReactDOM from 'react-dom';
function Clock(props){
  return <h1>{props.date}</h1>
}
/**
 * 1.声明一个继承自React.Component的类
 * 2.在类的内部编写一个render方法 Clock.prototype.render
 *    1. 是类的还是实例上的？ 是实例共有的还是私有的？
 * 3.把原函数体拷贝过来，并且把props改变成this.props
 *   this是当前组件的实例
 */
/**
 * 类级组件的渲染过程
 * 1. 在ReactDOM.render的时候会创建类的实例
 *  1. 先把属性包装成props对象 props={date}
 *  2. 创建一个Clock类的实例 let clock = new Clock(props)
 *  3. 调用clock.render方法得到返回的React元素
 *  4. 把React元素转变成真实的DOM元素并插入到页面中
 */
class Clock extends React.Component{
  //第个类都有一个构造函数，在构造函数里可以初始化私有属性 super指向是父类的构造函数
  constructor(props){
    //在子类的构造函数中，必须先调用父类的构造函数
    super(props);//super指向是父类的构造函数
    // this props = props this是当前实例
  }
  render(){
    return <h1>{this.props.date}</h1>
  }
}
/**
 * 1. 先把传递给组件的属性封装成一个对象props
 * 2. 执行Clock函数并把props对象传入，返回一个React元素
 * 3. 把此React元素转成真实DOM并插入容器内部
 */
ReactDOM.render(<Clock date={new Date().toLocaleString()}/>,document.querySelector('#root'));