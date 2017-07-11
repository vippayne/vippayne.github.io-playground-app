import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { sortOldest } from './../actions/index';
import AddComment from './AddComment';
import RenderComments from './RenderComments';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      amount: 0
    }
    this.updateAmout = this.updateAmout.bind(this);
  }

  updateAmout(comments) {
    this.setState({amount: comments.filter(comment => comment.replyTo === null).length});
  }

  sortOldest() {
    this.props.sortOldest();
  }

  render() {

    return (
      <div className="comments-container">
        <div id="comments">
          <AddComment updateAmout={this.updateAmout}/>
          <div className="comments-flow">
            <div className="comments-header">
              <div className="pull-right">
                <a onClick={() => this.sortOldest()} className="text-muted">Best</a> |
                <a className="active">Newest</a> |
                <a className="text-muted">Oldest</a>
              </div>
              <b>{this.state.amount} Comments</b>
            </div>
            <RenderComments />
          </div>
          <button className="btn btn-block">More...</button>
        </div>
      </div>

    ) // return
  } // render
} // App

function mapStateToProps(state) {
  return {
    comments: state
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({sortOldest}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
