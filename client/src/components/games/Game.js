import React, { Component } from "react";
import { Layer, Circle, Rect } from "react-konva";
import Field from "./Field";
import Ball from "./Ball";
import KeyHandler, { KEYPRESS } from "react-key-handler";

export default class Game extends Component {
  state = {
    horizontal: 0,
    vertical: 0
  };

  keys = ["w", "a", "s", "d"];

  /* componentDidMount = () => {
    this.setState({
      horizontal: this.props.horizontal,
      vertical: this.props.vertical
    });
  }; */

  handleKeyDown = event => {
    switch (event.key) {
      case "w":
        this.props.changeMovement(
          this.props.game.id,
          this.state.horizontal,
          -10
        );
        break;
      case "s":
        this.props.changeMovement(
          this.props.game.id,
          this.state.horizontal,
          10
        );
        break;
      case "a":
        this.props.changeMovement(this.props.game.id, -10, this.state.vertical);
        break;
      case "d":
        this.props.changeMovement(this.props.game.id, 10, this.state.vertical);
        break;
      default:
        console.log("down: " + event.key);
    }
  };

  handleKeyUp = event => {
    switch (event.key) {
      case "w":
        this.props.changeMovement(this.props.game.id, this.state.horizontal, 0);
        break;
      case "s":
        this.props.changeMovement(this.props.game.id, this.state.horizontal, 0);
        break;
      case "a":
        this.props.changeMovement(this.props.game.id, 0, this.state.vertical);
        break;
      case "d":
        this.props.changeMovement(this.props.game.id, 0, this.state.vertical);
        break;
      default:
        console.log("up: " + event.key);
    }
  };

  /* componentDidUpdate = prevProps => {
    console.log(this.props);
    if (
      prevProps.movement.horizontal !== this.props.movement.horizontal ||
      prevProps.movement.vertical !== this.props.movement.vertical
    ) {
      console.log(this.props);
      this.setState({
        horizontal: this.props.game.horizontal,
        vertical: this.props.game.vertical
      });
    }
  }; */

  render() {
    console.log(this.props.game);
    return (
      <Layer>
        <Field />
        <Ball
          vertical={this.props.game.vertical || 0}
          horizontal={this.props.game.horizontal || 0}
        />
        {this.keys.map(key => (
          <KeyHandler
            keyEventName="keydown"
            key={key}
            keyValue={key}
            onKeyHandle={this.handleKeyDown}
          />
        ))}
        {this.keys.map(key => (
          <KeyHandler
            keyEventName="keyup"
            key={key}
            keyValue={key}
            onKeyHandle={this.handleKeyUp}
          />
        ))}
      </Layer>
    );
  }
}
