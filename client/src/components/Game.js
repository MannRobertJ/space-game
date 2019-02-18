import React, { Component } from "react";
import { Layer, Circle, Rect } from "react-konva";
import Field from "./Field";
import Ball from "./Ball";
import KeyHandler, { KEYPRESS } from "react-key-handler";

export default class Game extends Component {
  state = { vertical: 0, horizontal: 0 };

  keys = ["w", "a", "s", "d"];

  handleKeyDown = event => {
    switch (event.key) {
      case "w":
        this.setState({ vertical: -10 });
        break;
      case "s":
        this.setState({ vertical: 10 });
        break;
      case "a":
        this.setState({ horizontal: -10 });
        break;
      case "d":
        this.setState({ horizontal: 10 });
        break;
      default:
        console.log("down: " + event.key);
    }
  };
  handleKeyUp = event => {
    switch (event.key) {
      case "w":
        this.setState({ vertical: 0 });
        break;
      case "s":
        this.setState({ vertical: 0 });
        break;
      case "a":
        this.setState({ horizontal: 0 });
        break;
      case "d":
        this.setState({ horizontal: 0 });
        break;
      default:
        console.log("up: " + event.key);
    }
  };
  render() {
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
