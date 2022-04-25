What do you need it? What do you have for your HTML component?
Probably you will have to implement it manually.

listen mousedown on html element
listen mousemove on window
update html element position based inside mousemove event


<image ontransformend="{(e)" ==""> {
    const scaleX = e.target.scaleX();
    const scaleY = e.target.scaleY();
    }} />

    Hi. How do I add text inside a Circle? Do I just do something like


<group>
  <circle/>
  <text/>
</group>

https://github.com/konvajs/react-konva-utils/blob/master/src/editable-text.tsx


king example: https://codesandbox.io/s/l90qyxr3jl (click on a rectangle to create a new one... or simply click and hold to drag the currently selected rectangle around the canvas)

components/App.js

import React, { Component } from "react";
import Konva from "konva";
import { Stage, Layer, Rect } from "react-konva";


export default class HorizontalCard extends Component {
  // initializing state with a canvas JSON Array with a default rectangle
  state = {
    canvas: [
      {
        x: 250,
        y: 25,
        width: 50,
        height: 100
      }
    ]
  };

  // when clicking on a rectangle, it creates a new rectangle by spreading out previous canvas values and adding a new set of values
  handleClick = () => {
    this.setState(prevState => ({
      canvas: [...prevState.canvas]
    }));
  };

  // handles rectangle dragging
  handleDragStart = e => {
    e.target.setAttrs({
      shadowOffset: {
        x: 15,
        y: 15
      },
      scaleX: 1.1,
      scaleY: 1.1
    });
  };

  // handles rectangle dropping
  handleDragEnd = e => {
    e.target.to({
      duration: 0.5,
      easing: Konva.Easings.ElasticEaseOut,
      scaleX: 1,
      scaleY: 1,
      shadowOffsetX: 5,
      shadowOffsetY: 5
    });
  };

  render = () => (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        {this.state.canvas.map(({ height, width, x, y }, key) => ( // like a "for loop", this maps over this.state.canvas objects and pulls out the height, width, x, y properties to be used below
          <Rect
            key={key}
            x={x}
            y={y}
            width={width}
            height={height}
            stroke="grey"
            draggable
            fill="blue"
            shadowOffset={{ x: 5, y: 5 }}
            onDragStart={this.handleDragStart}
            onDragEnd={this.handleDragEnd}
            onClick={this.handleClick}
          />
        ))}
      </Layer>
    </Stage>
  );
}