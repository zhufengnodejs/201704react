import React, {Component} from 'react';
import Comment from "./Comment";
//组件状态只能内部初始化，内部改变，外部改变不了
export default class CommentList extends Component {
  render() {
    return (
      <ul className="list-group">
        {
          this.props.comments.map((item, index) => (
              <Comment key={item.id} comment={item}/>
          ))
        }
      </ul>
    )
  }
}