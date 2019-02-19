import React, { Component } from "react";
import Game from "./components/Game";
import "./App.css";
import { Stage } from "react-konva";
import { connect } from "react-redux";
import { changeMovement } from "./actions/movement";

class App extends Component {
  render() {
    return (
      <Stage
        className="App"
        width={window.innerWidth}
        height={window.innerHeight}
      >
        <Game
          changeMovement={this.props.changeMovement}
          movement={this.props.movement}
        />
      </Stage>
    );
  }
}

const mapStateToProps = state => ({
  movement: state.movement
});

// Connecting Field.js to the Store causes an error concerning the Provider tags.
// We do not know why.
export default connect(
  mapStateToProps,
  { changeMovement }
)(App);
