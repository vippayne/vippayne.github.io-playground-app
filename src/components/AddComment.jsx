import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addNewComment } from './../actions/index';

class AddComment extends Component {

  constructor(props) {
    super(props);
    this.state = {
      comments: ''
    }
  }

  addNewComment() {
    this.refs.textarea.value = "";
    this.props.addNewComment(this.state);
  }

  componentDidUpdate() {
    this.props.updateAmout(this.props.comments);
  }

  componentWillMount() {
    this.props.updateAmout(this.props.comments);
  }

  render() {
    return (
      <form action="">
        <div className="comment-entry">
          <div className="comment-entry-header">
            <img alt="MyNick" src="http://i.playground.ru/i/00/00/00/00/user/default/icon.50x50.png"
                 className="avatar-image size32" /> MyNick
          </div>
          <div className="form-group">
            <textarea
              ref="textarea"
              className="form-control"
              name="text"
              placeholder="Put your shit here..."
              onChange={event => this.setState({comment: event.target.value})}
            >
            </textarea>
          </div>
          <div className="comment-entry-footer">
            <button
              type="button"
              className="btn btn-default btn-sm btn-block"
              onClick={() => this.addNewComment()}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    ) // return
  } // render
} // AddComment

function mapStateToProps(state) {
  return {
    comments: state
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addNewComment}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddComment);
