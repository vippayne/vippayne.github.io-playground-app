import React, { Component } from 'react';
import { connect } from 'react-redux';

import CommentItem from './CommentItem';

class RenderComments extends Component {

  commentsParse() {
    return this.props.comments.map((comment) => {
      if (comment.hasComments === true) {

        return (
          <div key={comment.id} className="comment-wrapper comment-wrapper-has-reply">
            <CommentItem  data={comment} />
            <div className="comment-reply">
              {this.props.comments.map(commentReply => {

                if (commentReply.replyTo === comment.id) {

                  return (
                    <CommentItem key={commentReply.id} data={commentReply} />
                  )
                }
                return null;
              })}
            </div>
          </div>
        ) // return
      } else {
        if (comment.replyTo === null) {

          return (
            <CommentItem key={comment.id} data={comment}/>
          )
        }
      } // if-else (comment.hasComments)
      return null;
    }); // this.props.comments.map()
  } // commentParse

  render() {
    console.log('this.props in RenderComments', this.props.comments);
    return (
      <div>
        {this.commentsParse()}
      </div>
    ) // return
  } // render
} // RenderComments

function mapStateToProps(state) {
  return {
    comments: state
  }
}

export default connect(mapStateToProps)(RenderComments);
