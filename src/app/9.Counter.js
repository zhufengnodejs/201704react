import React from 'react';
import ReactDOM from 'react-dom';
/**
 * 1. 绑定事件的事件名称要用驼峰命名法 onClick
 * 2. 绑定的函数中的this默认指向null,所以需要bind(this)
 */
class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state = {count:0};
  }
  //用箭头函数定义的函数，一旦定义完成后就绑死了。不管谁来调用，都不会改变this
  //用普通函数定义的函数，this可能由于调用者的不同发生改变
  handleClick=()=>{
    //Cannot read property 'state' of null
    //在es6这些方法里，里面的this默认指向null
    //this.state = {count:this.state.count+1};
    console.log('1',this.state);
    //preState是之前状态
    this.setState(x=>(
      {count:x.count+2}
    ));
    console.log('2',this.state);
    this.setState(x=>(
      {count:x.count+3}
    ));
    console.log('3',this.state);

  }
  render(){
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.handleClick}>+</button>
      </div>
    )
  }
}
ReactDOM.render(<Counter/>,document.querySelector('#root'));