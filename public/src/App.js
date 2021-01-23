import "./App.css";
import React, { Component } from "react";
import GetInfo from "./sections/GetInfo";
import Forms from "./components/views/Forms";

class App extends Component {
  render() {
    return (
      <div className="App">
        <GetInfo />
        {/* <Forms /> */}
      </div>
    );
  }
}

export default App;
