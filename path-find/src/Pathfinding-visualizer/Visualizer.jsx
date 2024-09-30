import { Component } from "react";

export default class PathfindingVisualizer extends Component {
  constructor() {
    super();
    this.state = {
      grid: [],
      mouthIsPressed: false,
    };
  }
  componentDidMount(){
    //you ensure that the grid is populated as soon as the component mounts, making it ready for rendering.
    const grid = getAllGrids()
    this.setState({grid})
  }

}
