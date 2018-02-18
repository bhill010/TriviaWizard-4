import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchQuestions, deleteQuestion, timerStart, timerStop, timerReset, pointsReset } from "../../actions";
import $ from "jquery";

import "../../style/App.css";
import "../../style/Trivia/TriviaIndex.css";
import "../../style/Trivia/ChallengeTriviaIndex.css";
import "../../style/index.css";


$(document).on("click", "#test", function() {
  $(this)
    .siblings()
    .fadeOut(500, function() {
      $(this)
        .siblings()
        .addClass("hidden");
    });

  $(this).fadeOut(500, function() {
    $(this).addClass("hidden");
  });
});

var count = 0;

class ChallengeTriviaIndex extends Component {
  constructor(props) {
    super(props);
    this.newQuestions = this.newQuestions.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  componentDidMount() {
    $('.sidenav__section > .sidenav__container').addClass('hidden');

    // if (count === 0) {
    //   this.props.fetchQuestions();
    //   count++;
    // }
    //
    // if (this.props.timer === 0) {
    //   console.log("timer reset and points reset!");
    //   this.props.timerReset();
    //   this.props.pointsReset();
    // }

    setTimeout(() => {
      if (this.props.timer === 30) {
        this.props.timerStart();
      }
    }, 800);
  }

  componentWillUnmount() {
    $('.sidenav__section > .sidenav__container').removeClass('hidden');

    // if (this.props.timer <= 0) {
    //   console.log("unmount timer reset");
    //   this.props.timerReset();
    // }
  }

  onDeleteClick(id) {
    setTimeout(() => {
      this.props.deleteQuestion(id);
    }, 800);
  }

  newQuestions() {
    let pageNumber = Math.floor(Math.random() * 2000);
    this.props.fetchQuestions(pageNumber);
  }

  renderQuestions() {
    if (!this.props.questions) {
      return <div>Loading...</div>;
    }

    return _.map(this.props.questions, (question, index) => {
      if (index === "undefined") {
        return;
      }

      return (
        <div key={question.id} className="index-item-container">
          <span
            id="test"
            onClick={event => {
              event.preventDefault();
              this.onDeleteClick(question.id);
            }}
          >
            <i className="fa fa-check-square" aria-hidden="true" />
          </span>
          <Link className="index-link" to={`/challenge/questions/${question.id}`}>
            <li className="list-group-item index-item">
              {question.category.name}
            </li>
          </Link>
        </div>
      );
    });
  }

  render() {
    if (this.props.timer < 0) {
      this.props.timerStop();
      this.props.history.push("/challengeover");
    }
    return (
      <div className="challenge-index">
        <div className="challenge-info">
          <div className="challenge-scoreboard">
            <h4 className="index-header challenge-header">Timer: {this.props.timer}</h4>
            <h4 className="index-header challenge-header">Points: {this.props.points}</h4>
            <h4 className="index-header challenge-header">High Score: {this.props.auth.user.highscore}</h4>
          </div>
        </div>
        <div className="challenge-questions">
          <div className="challenge-questions-container">
            <h3 className="index-header challenge-header">Challenge Question Categories</h3>
            <ul className="list-group index-list">{this.renderQuestions()}</ul>
            <button
              className="btn btn-primary index-button"
              onClick={this.newQuestions}
            >
              Generate New Questions
            </button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { questions: state.questions, timer: state.timer, points: state.points, auth: state.auth };
}

export default connect(mapStateToProps, { fetchQuestions, deleteQuestion, timerStart, timerStop, timerReset, pointsReset })(
ChallengeTriviaIndex
);
