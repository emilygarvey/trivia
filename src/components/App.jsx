import React, { Component } from "react";
import "../css/App.css";
import sampleData from "../sample_data.json";
import Question from "./Question.jsx";
// import components

// 19-20 instructions
class App extends Component {
  render() {
    return (
      <div className="app">
        Trivia!
        <Question question={sampleData.question} />
      </div>
    );
  }
}

export default App;
