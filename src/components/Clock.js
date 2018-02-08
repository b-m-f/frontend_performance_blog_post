import React from "react";
import axios from "axios";

class Clock extends React.Component {
  state = {
    time: 0
  };

  getTime = async () => {
    try {
      const response = await axios.get("http://localhost:4000");
      const data = response.data;

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
