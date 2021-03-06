import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchQuestions, timerReset, pointsReset } from "../../actions";

import "../../style/Trivia/GameMode.css";
import "../../style/App.css";
import "../../style/index.css";

class GameMode extends Component {
  constructor(props) {
    super(props);

    this.setupChallengeMode = this.setupChallengeMode.bind(this);
  }

  setupChallengeMode() {
    this.props.fetchQuestions();
    this.props.timerReset();
    this.props.pointsReset();

    this.props.history.push("/challenge/questions");
  }

  render() {
    if (!this.props.questions) {
      return <div>Loading</div>;
    }
    return (
      <div className="index">
        <div className="index-header-container">
          <h3 className="index-header gamemode-animated-header">
            Which game mode would you like to play?
          </h3>
          <div className="gamemode-description-section">
            <div className="gamemode-description-container gamemode-description-container-challenge gamemode-animated-challenge">
              <div className="gamemode-button-container">
                <button
                  className="btn btn-info show-link gamemode-button"
                  onClick={this.setupChallengeMode}
                >
                  Challenge
                </button>
              </div>
              <ul className="gamemode-description">
                <li className="gamemode-description-item">
                  45 second timer
                </li>
                <li className="gamemode-description-item">
                  <span className="gamemode-points">Points earned</span> for every correct answer
                </li>
                <li className="gamemode-description-item">
                  Only one attempt allowed to answer question
                </li>
              </ul>
            </div>
            <div className="gamemode-description-container gamemode-animated-casual">
              <div className="gamemode-button-container">
                <Link className="btn btn-info index-button" to="/questions">
                  Casual
                </Link>
              </div>
              <ul className="gamemode-description">
                <li className="gamemode-description-item">Unlimited time</li>
                <li className="gamemode-description-item">
                  <span className="gamemode-points">No points</span>, just brushing up your trivia knowledge
                </li>
                <li className="gamemode-description-item">
                  Multiple attempts allowed to answer question
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { questions: state.questions, timer: state.timer, auth: state.auth };
}

export default connect(mapStateToProps, {
  fetchQuestions,
  timerReset,
  pointsReset
})(GameMode);
