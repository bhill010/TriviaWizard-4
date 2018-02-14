import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        Home
        <Link
            className="btn btn-success btn-bottom create-button"
            to={`/secret`}
          >
            SECRET
          </Link>
      </div>
    )
  }
}

export default Home
