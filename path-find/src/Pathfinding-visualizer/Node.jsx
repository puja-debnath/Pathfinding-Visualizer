import { Component } from "react";

export default class Node extends Component {
  render() {
    const {
      row,
      col,
      isFinish,
      isStart,
      isEnter,
      onMouseEnter,
      onMouseDown,
      onMouseUp,
    } = this.props;
    const classname = isFinish
      ? "node-finish"
      : isStart
      ? "node-start"
      : isEnter
      ? "node-enter"
      : " ";
    return (
      <div>
        id={`node-${row}-${col}`}
        classname = {`node-${classname}`}
        onMouseDown = {() => onMouseDown(row, col)}
        onMouseEnter = {() => onMouseEnter(row, col)}
        onMouseUp = {() => onMouseUp()}
      </div>
    );
  }
}
