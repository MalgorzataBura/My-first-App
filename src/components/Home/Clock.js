import React, {Component} from 'react';
import '../../scss/clock.scss';
class Clock extends Component {
  constructor (props) {
    super (props);
    this.state = {
      date: new Date (),
    };
  }
  componentDidMount () {
    this.interval = setInterval (() => {
      this.setState ({
        date: new Date (),
      });
    }, 1000);
  }
  componentWillUnmount () {
    clearInterval (this.interval);
  }
  render () {
    return (
      <div className="clock">
        <ClockTimeDate date={this.state.date} />
      </div>
    );
  }
}
class ClockTimeDate extends Component {
  render () {
    const {date} = this.props;
    return (
      <h1>
        {date.toLocaleDateString ()} {date.toLocaleTimeString ()}
      </h1>
    );
  }
}

export default Clock;
