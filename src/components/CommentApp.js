import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import CommentInput from "./CommentInput";
import CommentList from "./CommentList";
export default class CommentApp extends Component{
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
                <CommentList/>
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