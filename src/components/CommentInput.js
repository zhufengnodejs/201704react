import React, {Component} from 'react';
export default class CommentInput extends Component {
  handleSubmit = (event)=>{
    event.preventDefault();
    let user = this.user.value;
    let content = this.content.value;
    this.props.addComment({user,content});
    this.content.value = '';
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="user" className="control-label">姓名</label>
          <input ref={input=>this.user = input} required={true} type="text" id="user" className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="content" className="control-label">内容</label>
          <textarea ref={input=>this.content = input} required={true} className="form-control" id="content" cols="30" rows="10"></textarea>
        </div>
        <div className="form-group">
          <input type="submit" className="btn btn-primary"/>
        </div>
      </form>
    )
  }
}