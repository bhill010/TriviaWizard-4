import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "../../style/App.css";
import "../../style/Trivia/TriviaIndex.css";
import "../../style/index.css";

class Home extends Component {
  render() {
    if (!this.props.auth.loggedIn) {
      return (
        <div className="index">
          <h3 className="index-header">
            Welcome to Trivia Wizard!
          </h3>
          <h4 className="index-subheader">
            Please register or login to put
            your knowledge to the test!
          </h4>
        </div>

      )
    } else {
      return (
        <div className="index">
          <h3 className="index-header">
            Welcome back!
          </h3>
          <h4 className="index-subheader">
            Why don't you try putting
            your knowledge to the test?
          </h4>
          <div>
            <Link className="btn btn-primary index-button index-link" to="/questions">
              Questions Page
            </Link>
          </div>
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps)(Home);
