import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/ru';

class RenderTime extends Component {
  constructor(props){
    super(props);

    this.state = {
      renderTime: moment(this.props.time).fromNow()
    }
  } // constructor

  componentDidMount() {
    this.interval = setInterval(this.updateReminderTime.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateReminderTime() {
    this.setState({
      renderTime: moment(this.props.time).fromNow()
    })
  } // updateReminderTime

  render() {
    return <span style={{marginLeft: '5px'}}>{this.state.renderTime}</span>
  }

} // Reminder

export default RenderTime;
