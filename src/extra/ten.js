

import React, { Component } from "react";
import { Stage, Layer, Text,Transformer } from "react-konva";

export default class HorizontalCard extends Component {
constructor(props) {
  super(props)
  this.shapeRef = React.createRef();
  this.trRef = React.createRef();
  this.state = {
    isSelected:false,
    selectedShapeName: "",
      newTextObj: {
      textX: 0,
      fill: "black",
      textY: 0,
      textValue: "double click to edit and enter to finish",
      fontSize: 8,
      width: 400,
      fontStyle: "normal",
      align: "left",
      id: 0
    }
  }
}
componentDidMount(){
  // if (this.state.isSelected === true && this.trRef.current !== null) {
    if (this.state.isSelected === true) {
    this.trRef.current.setNode(this.shapeRef.current);
    this.trRef.current.getLayer().batchDraw();
  }
 }

 handleEdit = e => {
    console.log("click1")
    let { newTextObj } = this.state;
    newTextObj.textValue = e.target.value;
    this.setState({
      newTextObj
    });
  };

  handleTextClick = e => {
    console.log("click2")
    const absPos = e.target.getAbsolutePosition();
    console.log(absPos)
    let { newTextObj } = this.state;
    newTextObj.textX = absPos.x;
    newTextObj.textY = absPos.y;
    this.setState({
      newTextObj,
      isSelected:true
    });
  };
  handleResize = (e) => {
    console.log("click3")
    if (this.shapeRef.current !== null) {
      const textNode = this.shapeRef.current;;
      const newWidth = textNode.width() * textNode.scaleX();
      const newHeight = textNode.height() * textNode.scaleY();
      textNode.setAttrs({
        width: newWidth,
        scaleX: 1
      });
  };

  const shape = this.shapeRef.current;
  // const shape = e.target;
  console.log(shape)
  shape.scaleX(1);
  shape.scaleY(1);
   this.props.onTransform({
    x: shape.x(),
    y: shape.y(),
    width: shape.width() * shape.scaleX(),
    height: shape.height() * shape.scaleY(),
    rotation: shape.rotation()
 });
}

handleResize1 = (e) => {
  console.log("click4")
  this.setState({
    // isDragging: false,
    x: e.target.x(),
    y: e.target.y(),
  });
}
  render() {
    console.log(this.state)
    return (
      <div>
        <Stage width={window.innerWidth} height={window.innerHeight}>
          <Layer>
            <Text
            ref={this.shapeRef}
            // x={this.props.x}
            // y={this.props.y}
            width={150}
            height={100}
           scaleX={1}
            scaleY={1}
              fontSize={20}
              align={"left"}
              fontStyle={20}
              draggable
              text={this.state.newTextObj.textValue}
              x={100}
              y={100}
              wrap="word"
              // width={this.state.newTextObj.width}
              onDblClick={e => this.handleTextClick(e)}
              onClick={(e) => this.setState({isSelected:true})}
              onTransformEnd={(e) => this.handleResize(e)}
              onDragEnd={(e) => this.handleResize1(e) }
              // onDragEnd={(e) => {

              // }}
            />
               
            {this.state.isSelected === true &&
           <Transformer
            ref={this.trRef}
            rotateEnabled={false}
            flipEnabled={false}
            enabledAnchors={["middle-left", "middle-right"]}
            boundBoxFunc={(oldBox, newBox) => {
              newBox.width = Math.max(30, newBox.width);
              return newBox;
            }} />
           }
         </Layer>
        </Stage>
        <textarea
          value={this.state.newTextObj.textValue}
          style={{
            position: "absolute",
            top: 10,
            left: 10,
            color:"black"
          }}
          onChange={e => this.handleEdit(e)}

        />
      </div>
    );
  }
}