import "../scss/main.scss";

import React from "react";
import ReactDOM from "react-dom";

export default class App extends React.Component {
  render() {
    return (
      <div className="notification is-primary my-4" id="an-change">
        Hello, React.
      </div>
    );
  }
}

const domContainer = document.querySelector("#react-root");
ReactDOM.render(<App />, domContainer);
