import React from 'react';
import ReactDOM from 'react-dom';
class Clock extends React.Component{
  constructor(){
    super();
    this.state = {date:new Date().toLocaleString()};
  }
  componentDidMount(){
    this.timer = setInterval(()=>{
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
      </div>
    )
  }
}
ReactDOM.render(<ClockApp/>,document.querySelector('#root'));