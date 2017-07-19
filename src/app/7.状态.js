import React from 'react';
import ReactDOM from 'react-dom';
/*function Clock(props){
  return <h1>{props.date}</h1>
}*/
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
  componentWillUnmount(){
    console.log('Clock componentWillUnmount');
  }
  render(){
    return (
      <div>
        {this.props.date}
      </div>
    )
  }
}
class ClockApp extends React.Component{
  //第个类都有一个构造函数，在构造函数里可以初始化私有属性 super指向是父类的构造函数
  constructor(){
    //在子类的构造函数中，必须先调用父类的构造函数
    super();//super指向是父类的构造函数
    // this props = props this是当前实例
    //在当前的实例上挂载一个私有属性 这个对象叫状态对象
    this.state = {count:0,date:new Date().toLocaleString()};
  }
  componentWillMount(){
    console.log('组件将要挂载');
    //必须写成箭头函数，否则 this不再指向当前实例
    //把定时器对象作为属性挂载到当前的实例上去
    this.timer = setInterval(()=>{
      //用一个新的状态对象来更新状态
      //setState 1.用新状态替换老状态 2. 会重新调用render方法进行渲染视图
      //this.state = {date:new Date().toLocaleString()};
     let before = this.state.count;
     //setState修改前和修改后不一定会改变 setState是异步操作
      //setState不是简单的同步异步
     this.setState({count:this.state.count+1});
     console.log('修改',before,this.state.count);
    },1000);
  }
  //组件装载完成之后 当我们第一次把一个组件(组件内的React元素)转成真实的DOM结构并且插入到容器内部这后会自动调用此方法
  componentDidMount(){
    console.log('组件挂载完成');
  }
  //组件将要从页面中移除的时候执行此函数
  componentWillUnmount(){
    console.log('componentWillUnmount');
    clearInterval(this.timer)
  }
  render(){
    if(this.state.count<10){
      return (
        <div>
          <p>{this.state.count}</p>
          <Clock date={this.state.date}/>
        </div>
      )
    }else{
      return (
        <div>
          <p>{this.state.count}</p>
        </div>
      )
    }

  }
}
/**
 * 1. 先把传递给组件的属性封装成一个对象props
 * 2. 执行Clock函数并把props对象传入，返回一个React元素
 * 3. 把此React元素转成真实DOM并插入容器内部
 */
ReactDOM.render(<ClockApp/>,document.querySelector('#root'));