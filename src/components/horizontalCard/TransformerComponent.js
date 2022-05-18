import React, { Component } from "react";
import { render } from "react-dom";
import { Stage, Layer, Group, Text, Rect, Transformer } from "react-konva";

class TransformerComponent extends React.Component {
  componentDidMount() {
    this.checkNode();
  }
  componentDidUpdate() {
    this.checkNode();
  }

  onTransformStart(){
    console.log('onTransformStart');
  } 

  onTransform(){
    console.log('onTransform');
  } 

  onTransformEnd(){
    console.log('end transform');

}  
checkNode() {
    // here we need to manually attach or detach Transformer node
    const stage = this.transformer.getStage();
    const { selectedShapeName } = this.props;

    var selectedNode = stage.findOne("." + selectedShapeName);
    // do nothing if selected node is already attached
    if (selectedNode === this.transformer.node()) {
      return;
    }
    if (selectedNode) {
      const type = selectedNode.getType();
      if ( type != "Group") {
        selectedNode = selectedNode.findAncestor("Group");
      }
      // attach to another node
      this.transformer.attachTo(selectedNode);
    } else {
      // remove transformer
      this.transformer.detach();
    }

    this.transformer.getLayer().batchDraw();
  }
  render() {
    return (
      <Transformer
        ref={node => {
          this.transformer = node;
        }}
        transformstart={this.onTransformStart}
        transform={this.onTransform}
        transformend={this.onTransformEnd}
      />
    );
  }
}

export default TransformerComponent

class App extends Component {
  state = {
    selectedShapeName: ""
  };
  handleStageMouseDown = e => {
    // clicked on stage - cler selection
    if (e.target === e.target.getStage()) {
      this.setState({
        selectedShapeName: ""
      });
      return;
    }
    // clicked on transformer - do nothing
    const clickedOnTransformer =
      e.target.getParent().className === "Transformer";
    if (clickedOnTransformer) {
      return;
    }

    // find clicked rect by its name
    const name = e.target.name();
    // const rect = this.state.rectangles.find(r => r.name === name);
    if (name) {
      this.setState({
        selectedShapeName: name
      });
    } else {
      this.setState({
        selectedShapeName: ""
      });
    }
  };
  render() {
    return (
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseDown={this.handleStageMouseDown}
      >
        <Layer>
          <Group
            name="group"
            x={225}
            y={295}
            width={120}
            height={60}
            fill="red"
            draggable
          >
       
            <Text
              name="text"
              fontSize={16}
              fontFamily="Calibri"
              fill="#555"
              width={100}
              padding={15}
              align="center"
              text="some text"
            />
          </Group>
          <TransformerComponent
            selectedShapeName={this.state.selectedShapeName}
          />
        </Layer>
      </Stage>
    );
  }
}

render(<App />, document.getElementById("root"));
