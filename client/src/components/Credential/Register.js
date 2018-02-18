import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { register, clearAuthErrors } from "../../actions";

import "../../style/App.css";
import "../../style/Credential/Form.css";

class Register extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.errorHandler = this.errorHandler.bind(this);
  }

  componentWillUnmount() {
    this.props.clearAuthErrors();
  }

  onSubmit(event) {
    event.preventDefault();
    var username = event.target.querySelector(".form__username").value;
    var password = event.target.querySelector(".form__password").value;

    this.props.register(username, password, redirectPath => {
      this.props.history.push(redirectPath);
    });
  }

  errorHandler() {
    var error = "";
    if (this.props.auth.errorMessage.message) {
      error = this.props.auth.errorMessage.message;
      return error;
    } else if (this.props.auth.errorMessage) {
      error = this.props.auth.errorMessage;
    }

    return error;
  }

  render() {
    return (
      <div className="center_container index">
        <h3 className="index-header">Register Page</h3>
        <h4 className="index-subheader">{this.errorHandler()}</h4>
        <form className="form" onSubmit={this.onSubmit}>
          <input
            className="form-control form__input form__username right_margin"
            type="text"
            name="username"
            placeholder="username"
          />
          <input
            className="form-control form__input form__password right_margin"
            type="password"
            name="password"
            placeholder="password"
          />
          <input className="btn btn-primary form__submit" type="submit" />
        </form>
        <Link className="btn btn-success top_margin auth-button" to="/">
          Back to Home Page
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps, { register, clearAuthErrors })(
  Register
);
