import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";

import "../../style/Trivia/GameMode.css";
import "../../style/App.css";
import "../../style/index.css";

class GameMode extends Component {
  render() {
    return (
      <div className="index">
        <h3 className="index-header">
          Which game mode would you like to play?
        </h3>
        <div className="gamemode-container">
          <div>
            <button className="btn btn-warning index-button">Challenge</button>
          </div>
          <div>
            <Link className="btn btn-info index-button" to="/questions">
              Casual
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default GameMode;
