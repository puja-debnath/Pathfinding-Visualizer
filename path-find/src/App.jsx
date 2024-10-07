import { useState } from "react";

import "./App.css";
import PathfindingVisualizer from "./Pathfinding-visualizer/Visualizer";
function App() {
  const arr = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      <PathfindingVisualizer   />
    </div>
  );
}

export default App;
