import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchQuestions, deleteQuestion } from "../../actions";
import $ from "jquery";

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

class TriviaIndex extends Component {
  constructor(props) {
    super(props);
    this.newQuestions = this.newQuestions.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  componentDidMount() {
    if (count === 0) {
      this.props.fetchQuestions();
      count++;
    }
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

      console.log(question.id);

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
          <Link className="index-link" to={`/questions/${question.id}`}>
            <li className="list-group-item index-item">
              {question.category.name}
            </li>
          </Link>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="index">
        <h2 className="logo pull-xs-left">Trivia Wizard</h2>
        <h3 className="index-header">Question Categories</h3>
        <ul className="list-group index-list">{this.renderQuestions()}</ul>
        <button
          className="btn btn-primary index-button"
          onClick={this.newQuestions}
        >
          Generate New Questions
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { questions: state.questions };
}

export default connect(mapStateToProps, { fetchQuestions, deleteQuestion })(
TriviaIndex
);
