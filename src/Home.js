import React, { Component } from "react";
import styles from "./Home.module.css";
import Clock from "./components/Clock";

class Home extends Component {
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
