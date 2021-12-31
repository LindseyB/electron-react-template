import "../scss/main.scss";

import React from "react";
import ReactDOM from "react-dom";
const { ipcRenderer } = require("electron");

export default class App extends React.Component {
  render() {
    console.log(ipcRenderer.sendSync("synchronous-message", "ping")); // prints "pong"
    return <div className="notification is-primary my-4">Hello, React.</div>;
  }
}

const domContainer = document.querySelector("#react-root");
ReactDOM.render(<App />, domContainer);
