import React, { Component } from "react";
import Game from "./components/Game";
import "./App.css";
import { Stage } from "react-konva";
import { connect } from "react-redux";
import { getGames } from "./actions/games";

class App extends Component {
  render() {
    return (
      <Stage
        className="App"
        width={window.innerWidth}
        height={window.innerHeight}
      >
        <Game getGames={this.props.getGames} />
      </Stage>
    );
  }
}

const mapStateToProps = state => ({
  games: state.games
});

export default connect(
  null,
  { getGames }
)(App);
