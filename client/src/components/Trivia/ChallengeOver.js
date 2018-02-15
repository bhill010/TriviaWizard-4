import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { pointsReset } from "../../actions";

import "../../style/Trivia/GameMode.css";
import "../../style/App.css";
import "../../style/index.css";

class ChallengeOver extends Component {
  componentWillUnmount() {
    this.props.pointsReset();
  }

  render() {
    return (
      <div className="index">
        <h3 className="index-header">
          You scored { this.props.points } points!
        </h3>
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
  return { points: state.points };
}

export default connect(mapStateToProps, { pointsReset })(
ChallengeOver
);
