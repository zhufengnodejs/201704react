/**
 * 定义一个组件的时候，属性+状态
 * 属性是由父组件传入的，组件只能读不能改
 * 状态是一个组件内部的变量，状态只能由组件内部初始化，而且也只能由组件内部改变。
 * 单向数据流，数据的流行是单向的，只能从父组件传入子组件，然后一直往下传。
 */
import React from 'react';
import ReactDOM from 'react-dom';
class Person extends React.Component{
  constructor(props){
    super(props);//先调用父类的构造函数
    //如果原始的状态对象有很多属性，那么你调用setState时候传进来的对象会合并到当前状态对象
    //setState会覆盖同名属性，还会增加新的属性
    this.state = {happy:true,age:8};//默认开心
  }
  handleClick = ()=>{
    console.log(this);
    this.setState({
      happy:true,
      home:'北京'
    });

    //React 为了优化性能，有可能会将多个 setState() 调用合并为一次更新(render)。
  }
  //render方法的返回值 描述了组件的模样
  render(){
    console.log('render');
    let heart = this.state.happy?'开心':'伤心';
     return (
       <div>
         <p>姓名:{this.props.name} 性别:{this.props.gender} 年龄{this.state.age}家乡 {this.state.home}</p>
         <p>{heart}</p>
         <button onClick={this.handleClick}>变心</button>
       </div>
     )
  }
}
/**
 * 1.把属性封装成一个对象 {name:'zfpx',gender:'男'}
 * 2.实例化Person,调用它的render方法返回React元素
 * 3.render元素描述了组件效果，在里面可以读到属性对象
 */
ReactDOM.render(<Person name="zfpx" gender="男"
/>,document.querySelector('#root'));
