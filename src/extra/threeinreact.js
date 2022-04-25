import React, { Component } from 'react'
import { Stage, Layer ,Text,Transformer,Group} from "react-konva";
import { Html } from 'react-konva-utils'

export class HorizontalCard extends Component {
    constructor(props) {
      super(props)
      this.state = {
        newTextObj: {
            text: 'Some text here',
            x: 50,
            y: 80,
            fontSize: 20,
            draggable: true,
            width: 200,
            textX: 0,
            fill: "black",
            textY: 0,
          },
      }
    }
    handleTextClick = (e) =>{
        const absPos = e.target.getAbsolutePosition();
        let { newTextObj } = this.state;
        newTextObj.textX = absPos.x;
        newTextObj.textY = absPos.y;
        this.setState({
          newTextObj
        });
      }

        handleTextareaKeyDown = e => {
          let { newTextObj } = this.state;
          //  newTextObj.textEditVisible = false;
             this.setState({
               newTextObj
             });
           }
           handleEdit = e => {
            let { newTextObj } = this.state;
            newTextObj.text = e.target.value;
            this.setState({
              newTextObj
            });
          };
        
  render() {
    return (
      <div>threeinreact
      <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
      <Text 
      onDblClick={e => this.handleTextClick(e)}
      onTransformEnd={(e) => {
       const node = shapeRef.current;
        const scaleX = node.scaleX();
        const scaleY = node.scaleY();
       node.scaleX(1);
        node.scaleY(1);
        onChange({
            ...shapeProps,
            rotation: node.rotation(),
            enabledAnchors: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
            keepRatio: true,
           x: node.x(),
          y: node.y(),
          width: Math.max(5, node.width() * scaleX),
          height: Math.max(node.height() * scaleY)
        //   width: node.width() * scaleX,
        //   height: node.height() * scaleY
       
       
        });
      }}
 />
 </Layer>
    </Stage>
      <div>
      <textarea
      key={index}
      value={item.textValue}
      style={{
        display: item.textEditVisible ? "block" : "none",
        position: "absolute",
        top: item.textYTextArea + "px",
        left: item.textXTextArea * zoom + "px",
        width: item.width * (1 / zoom),
        height: item.height * (1 / zoom),
        fontSize: item.fontSize * (1 / zoom),
        color: item.fill,
        fontStyle: item.fontStyle,
        fontWeight: item.fontStyle,
          marginTop: item.marginTop,
          opacity:item.opacity,
          offsetY:item.offsetY,
          offsetX:item.offsetX,
          textTransform:item.textTransform,
          lineHeight:item.lineHeight,
          textAlign:item.textAlign,
          textJustify:item.textJustify,
          fontFamily:item.fontFamily
       
      }}
      onChange={e => this.handleTextEdit(e, index)}
      onKeyDown={e => this.handleTextareaKeyDown(e)}
    />
    </div>
      </div>
    )
  }
}

export default HorizontalCard