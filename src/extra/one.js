import React, { Component } from "react";
import Konva from "konva";
import { render } from "react-dom";
import { Stage, Layer, Rect, Text } from "react-konva";

export default class HorizontalCard extends Component {
  state = {
    newTextObj: {
      textEditVisible: false,
      textX: 0,
      fill: "black",
      textY: 0,
      textValue: "double click to edit\n\nand enter to finish",
      fontSize: 8,
      width: 400,
      fontStyle: "normal",
      align: "left",
      id: 0
    }
  };

  handleTextareaKeyDown = e => {
   let { newTextObj } = this.state;
    newTextObj.textEditVisible = false;
      this.setState({
        newTextObj
      });
    }


  handleEdit = e => {
    let { newTextObj } = this.state;
    newTextObj.textValue = e.target.value;
    this.setState({
      newTextObj
    });
  };

  handleTextClick = e => {
    const absPos = e.target.getAbsolutePosition();
    let { newTextObj } = this.state;
    newTextObj.textEditVisible = true;
    newTextObj.textX = absPos.x;
    newTextObj.textY = absPos.y;
    this.setState({
      newTextObj
    });
  };
  render() {
    return (
      <div>
        <Stage width={window.innerWidth} height={window.innerHeight}>
          <Layer>
            <Text
              fontSize={20}
              align={"left"}
              fontStyle={20}
              draggable
              text={this.state.newTextObj.textValue}
              x={100}
              y={100}
              wrap="word"
              width={this.state.newTextObj.width}
              onDblClick={e => this.handleTextClick(e)}
            />
          </Layer>
        </Stage>
        <textarea
          value={this.state.newTextObj.textValue}
          style={{
            display: this.state.newTextObj.textEditVisible ? "block" : "none",
            position: "absolute",
            top: this.state.newTextObj.textY + "px",
            left: this.state.newTextObj.textX + "px",
            transform:""
          }}
          onChange={e => this.handleEdit(e)}
          onKeyDown={e => this.handleTextareaKeyDown(e)}
        />
      </div>
    );
  }
}

render(<HorizontalCard />, document.getElementById("root"));
