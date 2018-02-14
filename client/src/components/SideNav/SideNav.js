import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import "../../style/SideNav/SideNav.css";
import "../../style/App.css";
import "../../style/index.css";

class SideNav extends Component {
  render() {
    if (!this.props.auth.loggedIn) {
      return (
        <div className="sidenav__section">
          <div>
            <Link className="btn btn-success top_margin" to="/highscores">
              High Scores
            </Link>
          </div>
        </div>
      )
    } else {
      return (
        <div className="sidenav__section">
          <div>
            <Link className="btn btn-success top_margin" to="/dashboard">
              Dashboard
            </Link>
          </div>
          <div>
            <Link className="btn btn-success top_margin" to="/highscores">
              High Scores
            </Link>
          </div>
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default withRouter(connect(mapStateToProps)(SideNav));
