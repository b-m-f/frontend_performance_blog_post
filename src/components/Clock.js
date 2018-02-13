import React from "react";
import api from "../lib/api";
import config from "../config/config";
import timer from "../lib/timer";

class Clock extends React.Component {
  state = {
    time: 0
  };

  getTime = async () => {
    try {
      const data = await api.get(config.TIME_API);
      const timeSinceStart = Date.now() - timer.start;
      this.setState({ time: new Date(data.date).toTimeString() });
      api.post(config.METRIC_SERVER, {
        component: "Clock loaded",
        time: timeSinceStart
      });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.getTime}> GET TIME </button>
        <h1>{this.state.time}</h1>
        CLOCK
      </div>
    );
  }
}

export default Clock;
