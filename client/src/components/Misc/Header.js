import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions";

import "../../style/Header.css";
import "../../style/App.css";
import "../../style/index.css";

class Header extends Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
  }

  logout(event) {
    event.preventDefault();
    this.props.logout(redirectPath => {
      this.props.history.push(redirectPath);
    });
  }

  render() {
    if (!this.props.auth.loggedIn) {
      return (
        <div className="route-container__header">
          <nav className="header">
            <div className="header__first">
              <Link className="logo pull-xs-left" to={"/"}>
                Trivia Wizard
              </Link>
            </div>
            <div className="header__second">
              <Link className="btn btn-info header__button" to="/register">
                REGISTER
              </Link>
              <Link className="btn btn-info header__button" to="/login">
                LOGIN
              </Link>
              <span className="">
                <a
                  className="btn btn-primary header__button"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/bhill010/TriviaWizard-4"
                >
                  Github
                </a>
              </span>
            </div>
          </nav>
        </div>
      );
    } else {
      return (
        <div className="route-container__header">
          <nav className="header">
            <div className="header__first">
              <Link className="logo pull-xs-left" to={"/"}>
                Trivia Wizard
              </Link>
            </div>
            <div className="header__second">
              <button
                className="btn btn-warning header__button"
                onClick={this.logout}
              >
                LOGOUT
              </button>
              <span className="">
                <a
                  className="btn btn-primary header__button"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/bhill010/TriviaWizard-4"
                >
                  Github
                </a>
              </span>
            </div>
          </nav>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default withRouter(connect(mapStateToProps, { logout })(Header));
