import React from 'react';
import ReactDOM from 'react-dom';
class Counter extends React.Component {
  //1.获得默认属性对象
  static defaultProps = {
    name:'计数器'
  }
  constructor() {
    super();
    //2.获取初始状态
    this.state = {number: 0};
  }
  handleClick = () => {
    this.setState((prevState)=>({number: prevState.number + 1}));
  }
  componentWillMount(){
    console.log('3. 组件将要挂载 componentWillMount');
  }
  render() {
    console.log('4. 挂载 render');
    return (
      <div>
        <p>{this.props.name}:{this.state.number}</p>
        <button onClick={this.handleClick}>+</button>
        <button onClick={this.killMySelf}>自杀</button>
      </div>
    )
  }
  killMySelf = ()=>{
    ReactDOM.unmountComponentAtNode(document.querySelector('#root'));
  }
  componentDidMount(){
    console.log('5.组件挂载完成 componentDidMount');
  }
  //当状态发生改变之后，询问组件是否需要更新，也就是说是否需要调用render
  shouldComponentUpdate(props,newState){
    console.log('6.shouldComponentUpdate');
    if(newState.number%2==0){
      return true;//可以重新render
    }else{
      return false;
    }
  }
  componentWillUpdate(){
    console.log('7.组件将要更新');
  }
  componentDidUpdate(){
    console.log('8.组件更新结束');
  }
  componentWillUnmount(){
    console.log('9.组件将要被销毁');
  }
}
ReactDOM.render(<Counter name="我的计数器"/>,document.querySelector('#root'));