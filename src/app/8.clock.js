import React from 'react';
import ReactDOM from 'react-dom';
class Clock extends React.Component{
  constructor(){
    super();
    this.state = {date:new Date().toLocaleString()};
  }
  componentDidMount(){
    this.setState({date:new Date().toLocaleString()});
    this.timer = setInterval(()=>{
      //setState(...): Can only update a mounted or mounting component. This usually means you called setState() on an unmounted component
      //如果一个组件被卸载了，那么就不能再调用它的setState方法了
      this.setState({date:new Date().toLocaleString()});
    },1000)
  }
  componentWillUnmount(){
    console.log('Clock componentWillUnmount');
    //clearInterval(this.timer);
  }
  render(){
    return <div>{this.state.date}</div>
  }
}
class ClockApp extends React.Component{
  constructor(){
    super();
    this.state = {count:0};
  }
  componentDidMount(){
    this.timer = setInterval(()=>{
      this.setState({count:this.state.count+1});
      console.log(this.state.count);
      this.setState({count:this.state.count+1});
      this.setState({count:this.state.count+1});

    },1000)
  }
  componentWillUnmount(){
    clearInterval(this.timer);
  }
  render(){
    return (
      <div>
        <p>{this.state.count}</p>
        {this.state.count<10?<Clock/>:null}
        {this.state.count<10?<Clock/>:null}
        {this.state.count<10?<Clock/>:null}
      </div>
    )
  }
}
ReactDOM.render(<ClockApp/>,document.querySelector('#root'));