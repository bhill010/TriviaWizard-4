import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";

import "../../style/SideNav/SideNav.css";
import "../../style/App.css";
import "../../style/index.css";

class Dashboard extends Component {
  render() {
    return (
      <div className="index">
        <div>
          DASHBOARD PAGE
        </div>
        <Link className="btn btn-success top_margin" to="/">
          Back to /
        </Link>
      </div>
    )
  }
}

export default Dashboard;
