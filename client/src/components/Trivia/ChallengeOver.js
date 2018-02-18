import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { pointsReset, updateHighScore, fetchQuestions, createHighScore, timerReset } from "../../actions";

import "../../style/Trivia/GameMode.css";
import "../../style/App.css";
import "../../style/index.css";
import "../../style/SideNav/HighScores.css";


class ChallengeOver extends Component {
  constructor(props) {
    super(props);

    this.gameOverMessage = this.gameOverMessage.bind(this);
  }

  componentWillMount() {
    let pageNumber = Math.floor(Math.random() * 2000);
    this.props.fetchQuestions(pageNumber);
  }

  componentWillUnmount() {
    this.props.timerReset();
    this.props.pointsReset();
    if ( this.props.points > this.props.auth.user.highscore ) {
      console.log("sending action to update high score...");
      this.props.updateHighScore(this.props.points, this.props.auth.user._id);
      this.props.createHighScore(this.props.points, this.props.auth.user._id, this.props.auth.user.username);
    }
  }

  gameOverMessage() {
    if ( this.props.points > this.props.auth.user.highscore ) {
      return (
        <div>
          <h3 className="index-header">
            Great job!! You scored <span className="index-points gameover-points">{ this.props.points }</span> points!
          </h3>
          <h4 className="index-subheader">
            You beat your previous
            high score of { this.props.auth.user.highscore } points!
          </h4>
        </div>
      )
    } else {
      return (
        <div>
          <h3 className="index-header">
            You scored { this.props.points } points!
          </h3>
          <h4 className="index-subheader">
            Play again to try beating your
            high score of <span className="index-points gameover-points">{ this.props.auth.user.highscore }</span> points!
          </h4>
        </div>
      )
    }
  }

  render() {
    console.log("this.props.auth.user.highscore :", this.props.auth.user.highscore);
    return (
      <div className="index">
        <div className="index-header-container">
          { this.gameOverMessage() }
          <div className="gamemode-container challenge-over-container">
            <h4 className="index-subheader">
              Would you like to play again?
            </h4>
            <div className="challenge-button-container">
              <div>
                <Link className="btn btn-info gamemode-button" to="/challenge/questions">
                  Challenge!
                </Link>
              </div>
              <div>
                <Link className="btn btn-info index-button" to="/questions">
                  Casual
                </Link>
              </div>
              <div>
                <Link className="btn btn-warning index-button" to="/">
                  My brain needs to recover!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { points: state.points, auth: state.auth };
}

export default connect(mapStateToProps, { pointsReset, updateHighScore, fetchQuestions, createHighScore, timerReset })(
ChallengeOver
);
