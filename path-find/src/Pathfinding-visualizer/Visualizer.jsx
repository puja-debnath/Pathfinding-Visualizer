import { useEffect, useState } from "react";
import { dijkstra, getNodesInShortestPathOrder } from "../Algorithms/Dijkstra";

const START_NODE_ROW = 10;
const START_NODE_COL = 15;
const FINISH_NODE_ROW = 10;
const FINISH_NODE_COL = 35;

export const PathfindingVisualizer = () => {
  const [grid, setGrid] = useState([])
  const [mouseIsPressed , setMouseIsPressed] = useState(false)

 useEffect(() =>{
    const  newgrid = getInitialGrid()
    setGrid(newgrid)
 } ,[])

 handleMouseDown = (row,col) =>{
  const newgrid = getNewGridWithWallToggled(grid,row,col)
  setGrid(newgrid)
setMouseIsPressed(true)
 }
  handleMouseEnter = (row,col) =>{
    if(!mouseIsPressed) return 
    const newGrid = getNewGridWithWallToggled(grid,row,col)
    setGrid(newGrid)
  }
  handleMouseUp = () =>{
   setMouseIsPressed(false)
  }
  const DijkstraVisualizer = ({ visitedNodesInOrder, nodesInShortestPathOrder }) => {
  
    useEffect(() => {
      const animateDijkstra = () => {
        for (let i = 0; i <= visitedNodesInOrder.length; i++) {
          if (i === visitedNodesInOrder.length) {
            setTimeout(() => {
              animateShortestPath(nodesInShortestPathOrder);
            }, 10 * i);
            return;
          }
          setTimeout(() => {
            const node = visitedNodesInOrder[i];
            const nodeElement = document.getElementById(`node-${node.row}-${node.col}`);
            if (nodeElement) {
              nodeElement.classList.add('node-visited'); // Tailwind class for visited nodes
            }
          }, 10 * i);
        }
      };
  
      animateDijkstra();
    }, [visitedNodesInOrder, nodesInShortestPathOrder]);


  const animateShortestPath = ({nodesInShortestPathOrder}) =>{
     useEffect(() =>{
      nodesInShortestPathOrder.forEach((node,index) =>{
        setTimeout(() => {
          const element = document.getElementById(`node-${node.row}-${node.col}`)
          if(element){
            element  ='node bg-blue-500'
          }
        }, 50 * index);
      })
     } ,[nodesInShortestPathOrder])
  }
  function visualizeDijkstra  () {
      const startNode = grid[START_NODE_ROW][START_NODE_COL]
      const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL]
      const visitedNodesInOrder = dijkstra(grid,startNode,finishNode)
      const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode)
      animateDijkstra(visitedNodesInOrder,nodesInShortestPathOrder)
  }
  return(

  )
}

const getInitialGrid = () =>{
  const nodes = []
  for(let i = 0 ; i< 20; i++){
    const row = []
    for(let j = 0 ; j < 50; j++ ){
      row.push(createNode(j,i))
    }
  }
  return nodes
}
const createNode = (col, row) => {
  return {
    col,
    row,
    isStart: row === START_NODE_ROW && col === START_NODE_COL,
    isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
    distance: Infinity,
    isVisited: false,
    isWall: false,
    previousNode: null,
  };
};

 const getNewGridWithWallToggled = (grid,row,col) =>{
    const newGrid = grid.slice()
    const Node = newGrid[row][col]
    const newNode = {
      ...Node,
      isWall: !Node.isWall
    }
    newGrid[row][col] = newNode
    return newGrid;
 }

 