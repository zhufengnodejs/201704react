/**
 * JS和HTML互相嵌套的问题
 * 只有在HTML标签要嵌套表达式的时候才会需要用{},
 **/
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
//JS+HTML代码
/*class Hello extends React.Component {
  render() {
    return this.props.count > 0 ? <span>{this.props.count}</span> : null;
  }
}*/

/**
 * 在类中定义变量
 * 1.类里能写构造函数
 * 2.可以自定义的方法。
 **/
class Animal{
 constructor(name){
   console.log('Animal constructor');
   this.name = name;
 }
 getName(){return this.name}
}
class Person extends Animal{
  constructor(){
    //super()指的是调用父类的构造函数
    super();
  }
  //这是一个试验证性的ES7高级语法
  handleClick = ()=>{}
  age = '8'
  getAge = ()=>{
    console.log(this.age)
  }
  getName(){
    //super.可以调用父类的方法
      console.log(super.getName());
  }
}
let p = new Person('zfpx');
console.log(p.getAge());