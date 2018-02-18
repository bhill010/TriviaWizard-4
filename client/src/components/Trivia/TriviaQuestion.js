import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchQuestion, deleteQuestion } from "../../actions";
import $ from "jquery";

import "../../style/App.css";
import "../../style/Trivia/TriviaQuestion.css";
import "../../style/index.css";

class TriviaQuestion extends Component {
  constructor(props) {
    super(props);
    this.answerCheck = this.answerCheck.bind(this);
    this.answerCheckAll = this.answerCheckAll.bind(this);
    this.renderAnswer = this.renderAnswer.bind(this);
    this.removeQuestion = this.removeQuestion.bind(this);
    this.revealAnswer = this.revealAnswer.bind(this);
  }

  componentDidMount() {
    if (!this.props.question) {
      const { id } = this.props.match.params;
      this.props.fetchQuestion(id);
    }
  }

  removeQuestion() {
    const { id } = this.props.match.params;
    this.props.deleteQuestion(id);
  }

  answerCheck(option) {
    const { question } = this.props;

    var listItems = $(".question-list li");
    listItems.each((idx, li) => {
      if ($(li).text() === option) {
        var possibleAnswer = $(li).text();

        if (
          possibleAnswer !==
          this.renderAnswer(
            question.answers,
            question.option1,
            question.option2,
            question.option3,
            question.option4
          )
        ) {
          $(li).addClass("wrong");
        } else {
          $(li).addClass("right");
          $(".question-back-button").addClass("shake");

          $(".choices-header")
            .fadeOut(function() {
              $(".choices-header").text(
                "Correct! Returning to questions index!"
              );
            })
            .fadeIn();

          setTimeout(() => {
            this.removeQuestion();
          }, 2200);
        }
      }
    });
  }

  answerCheckAll() {
    const { question } = this.props;

    var listItems = $(".question-list li");
    listItems.each((idx, li) => {
      var possibleAnswer = $(li).text();

      if (
        possibleAnswer !==
        this.renderAnswer(
          question.answers,
          question.option1,
          question.option2,
          question.option3,
          question.option4
        )
      ) {
        $(li).addClass("wrong");
      } else {
        $(li).addClass("right");
        $(".question-back-button").addClass("shake");

        $(".choices-header")
          .fadeOut(function() {
            $(".choices-header").text("Answer Revealed!");
          })
          .fadeIn();
      }
    });

    setTimeout(() => {
      this.removeQuestion();
    }, 2200);
  }

  renderAnswer(answer, ...choices) {
    var newAnswer = answer - 1;
    return choices[newAnswer];
  }

  revealAnswer() {
    document.getElementById("answer").classList.remove("hidden-answer");
    $(".question-back-button").addClass("shake");
  }

  render() {
    const { question } = this.props;

    if (!question) {
      setTimeout(() => {
        this.props.history.push("/questions");
      }, 2000);
      return (
        <div className="challenge-questions">
          <div className="redirect-container">
            <div className="question-header">Return to Questions Page...</div>
          </div>
        </div>
      );
    }

    return (
      <div className="question">
        <div className="question-container">
          <h3 className="question-header challenge-header">Question:</h3>
          <p className="question-paragraph">{question.question}</p>
          <h4 className="question-header choices-header challenge-header">
            Choices:
          </h4>
          <ul className="list-group question-list">
            <li
              onClick={event => {
                event.preventDefault();
                this.answerCheck(question.option1);
              }}
              className="list-group-item question-item"
            >
              {question.option1}
            </li>
            <li
              onClick={event => {
                event.preventDefault();
                this.answerCheck(question.option2);
              }}
              className="list-group-item question-item"
            >
              {question.option2}
            </li>
            <li
              onClick={event => {
                event.preventDefault();
                this.answerCheck(question.option3);
              }}
              className="list-group-item question-item"
            >
              {question.option3}
            </li>
            <li
              onClick={event => {
                event.preventDefault();
                this.answerCheck(question.option4);
              }}
              className="list-group-item question-item"
            >
              {question.option4}
            </li>
          </ul>
          <div className="casual-button-container">
            <button
              className="btn btn-primary question-button"
              onClick={this.answerCheckAll}
            >
              Answer
            </button>
            <Link
              to="/questions"
              className="btn btn-danger pull-xs-right question-back-button casual-back-button"
            >
              Back to index
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions }, ownProps) {
  return { question: questions[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchQuestion, deleteQuestion })(
  TriviaQuestion
);
