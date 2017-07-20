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
 * 1.类里能写构造函数 构造函数里放的是私有属性
 * 2.可以自定义的方法 自定义就属于公有的，所有的实例共享此方法
 * 3. age = new Object() 可以给实例增加属性
 * 4. static age = new Object() 可以给类增加属性  Animal.age
 *
 **/
/*
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
  static age = new Object()
  getAge = ()=>{
    console.log(this.age)
  }
  getName(){
    //super.可以调用父类的方法
      console.log(super.getName());
  }
}
let p1 = new Person('zfpx');
let p2 = new Person('zfpx');
console.log(Person.age);*/


/*
let obj = {};
let obj1 = obj || {name:'zpfx'};*/
/**
 * 解决this指向的三种方法
 * 1.bind
 * 2.箭头函数
 * 3. 自定义函数
 */
let obj = new Object();
class Counter extends React.Component{
  constructor(){
    super();
    this.age = 8;
  }
  home = obj
  handleClick(){
    //箭头函数中的this指向当前组件的实例
    console.log(this.age);
  }
  render(){//render和生命周期函数里的this都指向当前组件的实例
    return (
      <div>
        <p></p>
        <button onClick={this.getAge}>+</button>
      </div>
    )
  }
}
let c1 = new Counter();
let c2 = new Counter()
console.log(c1.home === c2.home);
ReactDOM.render(<Counter/>,document.querySelector('#root'));