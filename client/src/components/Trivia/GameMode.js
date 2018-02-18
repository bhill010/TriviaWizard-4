import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { fetchQuestions, timerReset, pointsReset } from '../../actions';


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

    // setTimeout(() => {
      this.props.history.push("/challenge/questions");
    // }, 3000);

    // return (
    //   <div className="redirect-container">
    //     <div className="question-header">
    //       Setting up challenge mode...
    //     </div>
    //   </div>
    // )
  }



  render() {
    // if (!this.props.questions) {
    //   setTimeout(() => {
    //     this.props.history.push("/challenge/questions");
    //   }, 1000);
    //   return (
    //     <div className="redirect-container">
    //       <div className="question-header">
    //         Returning to questions index...
    //       </div>
    //     </div>
    //   )
    // }
    if (!this.props.questions) {
      return <div>Loading</div>;
    }
    return (
      <div className="index">
        <div className="index-header-container">
          <h3 className="index-header">
            Which game mode would you like to play?
          </h3>
          <div className="gamemode-description-section">
            <div className="gamemode-description-container gamemode-description-container-challenge">
              <div className="gamemode-button-container">
                <button
                  className="btn btn-info show-link gamemode-button"
                  onClick={this.setupChallengeMode}
                >
                  Challenge
                </button>
              </div>
              <ul className="gamemode-description">
                <li className="gamemode-description-item">45 second timer</li>
                <li className="gamemode-description-item">Points earned for every correct answer</li>
                <li className="gamemode-description-item">Cannot choose to have the answer revealed</li>
              </ul>
            </div>
            <div className="gamemode-description-container">
              <div className="gamemode-button-container">
                <Link className="btn btn-info index-button" to="/questions">
                  Casual
                </Link>
              </div>
              <ul className="gamemode-description">
                <li className="gamemode-description-item">Unlimited time</li>
                <li className="gamemode-description-item">No points, just brushing up your trivia knowledge</li>
                <li className="gamemode-description-item">Answel reveal option made available</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { questions: state.questions, timer: state.timer, auth: state.auth };
}

export default connect(mapStateToProps, { fetchQuestions, timerReset, pointsReset })(
GameMode
);
