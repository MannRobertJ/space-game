import React, { Component } from "react";
import { Layer, Circle, Rect } from "react-konva";
import Field from "./Field";
import Ball from "./Ball";
import KeyHandler, { KEYPRESS } from "react-key-handler";

export default class Game extends Component {
  state = {
    horizontal: this.props.movement.x,
    vertical: this.props.movement.y
  };

  keys = ["w", "a", "s", "d"];

  handleKeyDown = event => {
    switch (event.key) {
      case "w":
        this.props.changeMovement(this.state.horizontal, -10);
        break;
      case "s":
        this.props.changeMovement(this.state.horizontal, 10);
        break;
      case "a":
        this.props.changeMovement(-10, this.state.vertical);
        break;
      case "d":
        this.props.changeMovement(10, this.state.vertical);
        break;
      default:
        console.log("down: " + event.key);
    }
  };

  handleKeyUp = event => {
    switch (event.key) {
      case "w":
        this.props.changeMovement(this.state.horizontal, 0);
        break;
      case "s":
        this.props.changeMovement(this.state.horizontal, 0);
        break;
      case "a":
        this.props.changeMovement(0, this.state.vertical);
        break;
      case "d":
        this.props.changeMovement(0, this.state.vertical);
        break;
      default:
        console.log("up: " + event.key);
    }
  };

  componentDidUpdate = prevProps => {
    if (prevProps.movement !== this.props.movement) {
      this.setState({
        horizontal: this.props.movement.x,
        vertical: this.props.movement.y
      });
    }
  };

  render() {
    console.log(this.props.movement, this.state);
    return (
      <Layer>
        <Field />
        <Ball
          vertical={this.state.vertical}
          horizontal={this.state.horizontal}
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
