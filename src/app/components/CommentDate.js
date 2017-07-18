import React from 'react';
let CommentDate = props => (
  <div className="comment-date">
    {props.date.toLocaleString()}
  </div>
)
export default CommentDate;