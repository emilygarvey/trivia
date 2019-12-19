import React, { Component } from 'react';
// import components
import QuestionText from './QuestionText.jsx';
import AnswerButton from './AnswerButton.jsx';


class Question extends Component {
  
  render() {
    console.log(this.props.question);
    return (
      <div>
        <QuestionText questionText={this.props.question.question_text} />
        <AnswerButton answerText={this.props.question.choices[0]} />
        <AnswerButton answerText={this.props.question.choices[1]} />
        <AnswerButton answerText={this.props.question.choices[2]} />
        <AnswerButton answerText={this.props.question.choices[3]} />
      </div>
    );
  }
}

export default Question;