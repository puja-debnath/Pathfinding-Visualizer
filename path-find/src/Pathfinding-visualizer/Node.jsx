import { Component } from "react";

export const  Node =  ({ row,
  col,
  isFinish,
  isStart,
  isEnter,
  onMouseEnter,
  onMouseDown,
  onMouseUp})   =>  {
  
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

