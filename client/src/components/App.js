import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { connect } from "react-redux";
// import { fetchUsers } from "../actions";
// import logo from './logo.svg';

import Header from "./Misc/Header";
import Home from "./Home/Home";
import TriviaIndex from "./Trivia/TriviaIndex";
import TriviaQuestion from "./Trivia/TriviaQuestion";
import PrivateRoute from "./Misc/PrivateRoute";
import SideNav from "./SideNav/SideNav";

import Register from "./Credential/Register";
import Login from "./Credential/Login";

import '../style/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
            <div className="route-container">
              <Header />
              <div className="route-container__section">
                <SideNav />
                <Switch>
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/" component={Home} />
                  <PrivateRoute
                    authed={this.props.auth.loggedIn}
                    path="/questions/:id"
                    component={TriviaQuestion}
                  />
                  <PrivateRoute
                    authed={this.props.auth.loggedIn}
                    path="/questions"
                    component={TriviaIndex}
                  />
                </Switch>
              </div>
            </div>
          </BrowserRouter>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.users, auth: state.auth };
}

export default connect(mapStateToProps)(App);
