import React, { Component } from 'react';

import RenderTime from './RenderTime';

class CommentItem extends Component {
  render() {
    return (
      <div className="comment-item">
        <div className="comment-header">
          <span className="comment-author">
            <a href="">
              <img alt="User1"
                   src={this.props.data.thumbnail}
                   className="avatar-image size32" />
              {this.props.data.name}
            </a>
          </span>
          <time className="comment-timestamp"><RenderTime time={this.props.data.time} /></time>
        </div>
        <div className="comment-body">
          {this.props.data.replyToUser !== null ? <span className="reply-target">@{this.props.data.replyToUser} </span> : null}
          {this.props.data.comment}
        </div>
        <div className="comment-actions">
          <div className="comment-voting">
            <button className="up"></button>
            <div className="score">{this.props.data.rating}</div>
            <button className="down"></button>
          </div>
          <button className="btn btn-xs btn-reply">reply</button>
        </div>
      </div>
    ) // return
  } // render
} // CommentItem

export default CommentItem;
