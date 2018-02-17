import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { pointsReset, updateHighScore, fetchQuestions } from "../../actions";

import "../../style/Trivia/GameMode.css";
import "../../style/App.css";
import "../../style/index.css";

class ChallengeOver extends Component {
  constructor(props) {
    super(props);

    this.gameOverMessage = this.gameOverMessage.bind(this);
  }

  componentWillMount() {
    // if ( this.props.points > this.props.auth.user.highscore ) {
    //   console.log("sending action to update high score...");
    //   this.props.updateHighScore(this.props.points, this.props.auth.user._id);
    // }
    let pageNumber = Math.floor(Math.random() * 2000);
    this.props.fetchQuestions(pageNumber);
  }

  componentWillUnmount() {
    this.props.pointsReset();
    if ( this.props.points > this.props.auth.user.highscore ) {
      console.log("sending action to update high score...");
      this.props.updateHighScore(this.props.points, this.props.auth.user._id);
    }
  }

  gameOverMessage() {
    if ( this.props.points > this.props.auth.user.highscore ) {
      return (
        <h3 className="index-header">
          Great job!! You scored { this.props.points } points and beat your previous
          high score of { this.props.auth.user.highscore } points!
        </h3>
      )
    } else {
      return (
        <h3 className="index-header">
          You scored { this.props.points } points! Play again to try beating your
          high score of { this.props.auth.user.highscore } points!
        </h3>
      )
    }
  }

  render() {
    console.log("this.props.auth.user.highscore :", this.props.auth.user.highscore);
    return (
      <div className="index">
        { this.gameOverMessage() }
        <div className="gamemode-container">
          <div>
            <h4 className="index-subheader">
              Would you like to play again?
            </h4>
            <Link className="btn btn-info index-button" to="/challenge/questions">
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
    )
  }
}

function mapStateToProps(state) {
  return { points: state.points, auth: state.auth };
}

export default connect(mapStateToProps, { pointsReset, updateHighScore, fetchQuestions })(
ChallengeOver
);
