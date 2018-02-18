import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import "../../style/SideNav/SideNav.css";
import "../../style/App.css";
import "../../style/index.css";
import "../../style/SideNav/HighScores.css";
import "../../style/SideNav/Dashboard.css";

class Dashboard extends Component {
  render() {
    return (
      <div className="index">
        <div className="dashboard-container">
          <div className="dashboard-section dashboard-section-info">
            <div className="index-header dashboard-header">
              { this.props.auth.user.username }'s Dashboard
            </div>
            <div className="index-subheader">
              Your High Score is <span className="index-points">{ this.props.auth.user.highscore } </span> points
            </div>
          </div>
          <div className="dashboard-section dashboard-section-button">
            <Link className="btn btn-primary index-button" to="/">
              Back to Homepage
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

export default connect(mapStateToProps)(
Dashboard
);
