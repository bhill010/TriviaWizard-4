import _ from "lodash";
import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import { fetchHighScores } from "../../actions";
import { connect } from "react-redux";


import "../../style/SideNav/SideNav.css";
import "../../style/App.css";
import "../../style/index.css";

class HighScores extends Component {
  constructor(props) {
    super(props);

    this.sortHighScores = this.sortHighScores.bind(this);
  }

  componentWillMount() {
    this.props.fetchHighScores();
  }

  sortHighScores(highscores) {
    let sortedScores = _.orderBy(highscores, ['score'], ['desc']);
    console.log("sortedScores :", sortedScores);
    let filteredScores = _.uniqBy(sortedScores, 'username');
    console.log("filteredScores :", filteredScores);
    let finalScores = _.take(filteredScores, 5);
    console.log("final scores: ", finalScores);
    return finalScores;
  }

  render() {
    console.log("this.props.highscores :", this.props.highscores.highscores);
    let highscores = this.sortHighScores(this.props.highscores.highscores);

    return (
      <div className="index">
        <div>
          HIGHSCORES PAGE
        </div>
        <ul>
          { _.map(highscores, (score, idx) => {
            return (
              <div key={idx}>
                <h4>Username: { score.username }</h4>
                <h4>Score: { score.score }</h4>
              </div>
            )
          })}
        </ul>
        <Link className="btn btn-success top_margin" to="/">
          Back to /
        </Link>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { highscores: state.highscores };
}

export default connect(mapStateToProps, { fetchHighScores })(
HighScores
);
