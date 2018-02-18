import _ from "lodash";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { fetchHighScores } from "../../actions";
import { connect } from "react-redux";

import "../../style/SideNav/SideNav.css";
import "../../style/App.css";
import "../../style/SideNav/HighScores.css";
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
    let sortedScores = _.orderBy(highscores, ["score"], ["desc"]);
    let filteredScores = _.uniqBy(sortedScores, "username");
    let finalScores = _.take(filteredScores, 5);
    return finalScores;
  }

  render() {
    let highscores = this.sortHighScores(this.props.highscores.highscores);

    return (
      <div className="index">
        <div className="index-header highscore-animated-header">Trivia Wizard Top 5 Scores</div>
        <ul className="list-group index-list highscore-animated-subheader">
          {_.map(highscores, (score, idx) => {
            return (
              <li
                className="list-group-item index-item highscore-item"
                key={idx}
              >
                <h4>Username: {score.username}</h4>
                <h4>Score: {score.score}</h4>
              </li>
            );
          })}
        </ul>
        <Link className="btn btn-primary index-button" to="/">
          Back to Homepage
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { highscores: state.highscores };
}

export default connect(mapStateToProps, { fetchHighScores })(HighScores);
