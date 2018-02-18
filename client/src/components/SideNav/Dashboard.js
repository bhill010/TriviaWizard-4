import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import "../../style/SideNav/SideNav.css";
import "../../style/App.css";
import "../../style/index.css";
import "../../style/SideNav/HighScores.css";

class Dashboard extends Component {
  render() {
    return (
      <div className="index">
        <div className="index-container">
          <div className="index-header">
            { this.props.auth.user.username }'s Dashboard
          </div>
          <div className="index-subheader">
            Your High Score is <span className="index-points">{ this.props.auth.user.highscore } </span> points
          </div>
          <Link className="btn btn-primary index-button" to="/">
            Back to Homepage
          </Link>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { points: state.points, auth: state.auth };
}

export default connect(mapStateToProps)(
Dashboard
);
