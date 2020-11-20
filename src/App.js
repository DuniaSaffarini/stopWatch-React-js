import "./App.css";
import { Component } from "react";
import Stopwatch from "./Stopwatch";

// eslint-disable-next-line no-unused-vars
import { fireEvent } from "@testing-library/react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Stopwatch />
      </div>
    );
  }
}
//import { format } from "prettier";

export default App;
