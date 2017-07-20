import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import CommentInput from "./CommentInput";
import CommentList from "./CommentList";
export default class CommentApp extends Component{
  constructor(){
    super();
    //在两个子组件共同的父组件中定义一个状态对象。comments数组表示留言列表
    this.state = {comments:[
      {id:1,user:'张三',content:'今天天气真好!',createAt:new Date()},
      {id:2,user:'李四',content:'天气不错!',createAt:new Date()}
    ]};
  }
  render(){
    return (
      <div className="container" style={{marginTop:20}}>
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="text-center">欢迎来到珠峰留言版</h3>
              </div>
              <div className="panel-body">
                <CommentList comments = {this.state.comments}/>
              </div>
              <div className="panel-footer">
                <CommentInput/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}