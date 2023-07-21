import "../scss/main.scss";

import React from "react";
import { createRoot } from "react-dom/client";
const { ipcRenderer } = require("electron");

export default class App extends React.Component {
  render() {
    console.log(ipcRenderer.sendSync("synchronous-message", "ping")); // prints "pong"
    return <div className="notification is-primary my-4">Hello, React.</div>;
  }
}

const container = document.querySelector("#react-root");
const root = createRoot(container);
root.render(<App />);
