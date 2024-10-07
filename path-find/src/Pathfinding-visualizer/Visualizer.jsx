import Node from "./Node";


const grid = ( rows, cols) => {
  const nodes = [];
  for (let i = 0; i < rows; i++) {
    nodes[i] = [];
    for (let j = 0; j < cols; j++) {
      nodes[i][j] = [];
    }
  }
  return nodes;
};

 const PathfindingVisualizer = ( ) => {
  const rows = 2;
  const cols = 3;
  const Arr = grid( rows, cols);

  return (
    <div className="flex justify-center items-center  h-screen  ">
      <div className="grid  ">
      {Arr.map((row, rowIndex) => (
        <div key={rowIndex} className="grid-row-4 gap-2" >
          {row.map((col, colIndex) => (
            <div key={colIndex} className="grid-col-3 ">
              {col}
            </div>
          ))}
        </div>
      ))}
    </div>
    </div>
  );
};

export default PathfindingVisualizer