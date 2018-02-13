import React from "react";
import api from "../lib/api";

class Clock extends React.Component {
  state = {
    time: 0
  };

  getTime = async () => {
    try {
      const data = await api.get("http://localhost:4000");

      this.setState({ time: new Date(data.date).toTimeString() });
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
