import React, {Component} from 'react';
export default class CommentInput extends Component {
  handleSubmit = (event)=>{
    event.preventDefault();//阻止默认提交事件,防止刷新页面
    let user = this.user.value;//获得用户名
    let content = this.content.value;//获得输入的内容
    this.props.addComment({user,content});//增加一条新的评论
    this.content.value = '';//清空内容输入框的内容
  }
  render() {
    //this.user 是给当前组件的实例上增加一个自定义属性
    //input是这个React元素对应的真实DOM元素
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