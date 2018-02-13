import React, { Component } from "react";
import styles from "./Home.module.css";
import Clock from "./components/Clock";
import api from "./lib/api";
import timer from "./lib/timer.js";
import config from "./config/config.js";

class Home extends Component {
  async componentDidMount() {
    try {
      const timeSinceStart = Date.now() - timer.start;
      await api.post(config.METRIC_SERVER, `HomeLoadTime:${timeSinceStart}|ms`);
      console.log(timer);
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    return (
      <div className={styles.home}>
        <h1>HOMEPAGE</h1>
        <Clock />
      </div>
    );
  }
}

export default Home;
