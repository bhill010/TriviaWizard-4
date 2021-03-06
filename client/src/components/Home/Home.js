import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import $ from "jquery";

import "../../style/App.css";
import "../../style/Trivia/TriviaIndex.css";
import "../../style/index.css";
import "../../style/Home/Home.css";



class Home extends Component {
  render() {
    if (!this.props.auth.loggedIn) {
      return (
        <div className="index">
          <div className="index-container">
            <h3 className="index-header home-animated-header">Welcome to Trivia Wizard!</h3>
            <h4 className="index-subheader home-animated-subheader">
              Please register or login to put your knowledge to the test!
            </h4>
            <Link
              className="btn btn-info index-button home-button"
              to="/register"
            >
              Let's get started!
            </Link>
          </div>
        </div>
      );
    } else {
      return (
        <div className="index">
          <div className="index-container">
            <h3 className="index-header home-animated-header">Welcome back!</h3>
            <h4 className="index-subheader home-animated-subheader">
              Why don't you try putting your knowledge to the test?
            </h4>
            <div>
              <Link
                className="btn btn-primary index-button index-link home-button"
                to="/gamemode"
              >
                Questions Page
              </Link>
            </div>
          </div>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps)(Home);
