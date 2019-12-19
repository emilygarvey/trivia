import React, { Component } from 'react';
// import components



class AnswerButton extends Component {
  
  render() {
    return (
      <div>
        {this.props.answerText}
      </div>
    );
  }
}

export default AnswerButton;