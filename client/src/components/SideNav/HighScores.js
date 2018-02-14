import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";

import "../../style/SideNav/SideNav.css";
import "../../style/App.css";
import "../../style/index.css";

class HighScores extends Component {
  render() {
    return (
      <div className="index">
        <div>
          HIGHSCORES PAGE
        </div>
        <Link className="btn btn-success top_margin" to="/">
          Back to /
        </Link>
      </div>
    )
  }
}

export default HighScores;
