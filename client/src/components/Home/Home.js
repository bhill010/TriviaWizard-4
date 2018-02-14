import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        Home
        <div>
          <Link className="index-link" to="/questions">
            Questions Page
          </Link>
        </div>
      </div>
    )
  }
}

export default Home
