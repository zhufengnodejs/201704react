import React,{Component} from 'react';
export default class Comment extends Component{
    render(){
      //把每个评论对象进行解构，解构出来id user content createAt
        let {id,user,content,createAt} = this.props.comment;
        return (
          <li key={id} className="list-group-item">
            {user}:{content}
              <span className="pull-right">
                {createAt.toLocaleString()}
                </span>
          </li>
        )
    }
}