import React,{Component} from 'react';
export default class Comment extends Component{
    render(){
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