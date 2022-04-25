

import React, { Component } from "react";
import Konva from "konva";
import { Stage, Layer } from "react-konva";
import { DropImage } from "components/DropImage";
import uuidv1 from 'uuid/v1';
import KeyboardEventHandler from "react-keyboard-event-handler";
import {
  Retangulo,
  Triangulo,
  Texto,
  Circulo,
  Imagem,
  Background,
  Squareo,
  Lineo,
  Arrowo
} from "components/Formas";
import "./Editor.css";

// imagens
import Bold from "assets/icons-editor-bar/bold.png";
import FillColor from "assets/icons-editor-bar/fill-color.png";
import BackgroundIcon from "assets/icons-editor-bar/background.png";
import Italic from "assets/icons-editor-bar/italics.png";
import Circle from "assets/icons-editor-bar/circle.png";
import Rectangle from "assets/icons-editor-bar/rectangle.png";
import InsertText from "assets/icons-editor-bar/insert-text.png";
import Image from "assets/icons-editor-bar/image.png";
import Triangule from "assets/icons-editor-bar/triangule.png";
import Desfazer from "assets/icons-editor-bar/desfazer.png";
import Refazer from "assets/icons-editor-bar/refazer.png";
import Save from "assets/icons-editor-bar/save.png";
import Underline from "assets/icons-editor-bar/underline.png";


var HISTORY = []

var POSITION = 0

function saveHistory(history) {
  var remove = (HISTORY.length - 1) - POSITION;
  HISTORY = HISTORY.slice(0, HISTORY.length - remove);
  HISTORY.push(history.slice(0))
  POSITION = HISTORY.length - 1
}

function revertHistory() {
  return HISTORY[POSITION]
}

const Btn = props => {
  return (
    <div className="proximo-btn" onClick={props.onClick}>
      {props.title}
    </div >
  )
}

export default class Editor extends Component {
  constructor(props) {
    super(props);
    this.stageRef = React.createRef();
    this.containerCanvas = React.createRef();
  }
  state = {
    arrayObjectsLayer: [],
    family:["Tahoma","Verdana","Georgia","Times New Roman","Arial","Helvetica","Impact","Courier New","serif","sans-serif","cursive","fantasy","monospace"],
    kanvasWidth: 18.9,
    kanvasHeight: 10,
    widthKanvas: 1600,
    heightKanvas: 800,
    showPallet: false,
    selectedObject: {},
    showBackground: false,
    backgroundOn: true,
    indexTextSelected: 0,
    zoom: 2,
    imgBase64: undefined,
    newTextObj: {
      textEditVisible: false,
      fill: "black",
      textX: 0,
      textY: 0,
      textYTextArea: 0,
      textXTextArea: 0,
      textValue: "Two clicks to edit",
      fontSize: 28,
      width: 250,
      y: 100,
      x: 100,
      height: 150,
      fontStyle: "normal",
      align: "left",
      id: 0,
      type: 'text',
      opacity: 1,
      offsetY:0,
      offsetX:0
    },

  };

  handleTextDblClick = (e, index) => {
    const absPos = e.target.getAbsolutePosition();
    const stageBox = this.stageRef.current.container().getBoundingClientRect();
    let { arrayObjectsLayer, widthKanvas } = this.state;
    for (let i; i < arrayObjectsLayer.length; i++) {
      arrayObjectsLayer[i].textEditVisible = false;
    }
    arrayObjectsLayer[index].textEditVisible = true;
    // arrayObjectsLayer[index].marginTop = parseInt(e.target.value);
    arrayObjectsLayer[index].textXTextArea =
      (stageBox.left + absPos.x + this.containerCanvas.current.scrollLeft) / this.state.zoom;
    arrayObjectsLayer[index].textYTextArea =
      stageBox.bottom + absPos.y - stageBox.height + 40 + this.containerCanvas.current.scrollTop;
    saveHistory(arrayObjectsLayer)
     this.setState({
      arrayObjectsLayer,
    });
  };

  
  handleTextEdit = (e, index) => {
    let { arrayObjectsLayer } = this.state;
    arrayObjectsLayer[index].textValue = e.target.value;
    saveHistory(arrayObjectsLayer)
   this.setState({
      arrayObjectsLayer,
    });
  };
  
  addNewText = () => {
    let { arrayObjectsLayer, newTextObj } = this.state;
    newTextObj.id = Math.round(Math.random() * 10000);
    arrayObjectsLayer.push(newTextObj);
    let selectedObject = newTextObj;
    saveHistory(arrayObjectsLayer)

    this.setState({
      arrayObjectsLayer, selectedObject,
    });
  };

  selectShape = (selectedObject, index = undefined) => {
    console.log('dentro')
    let { arrayObjectsLayer, indexTextSelected } = this.state;
    // fecha a text area do texto
    for (let i; i < arrayObjectsLayer.length; i++) {
      arrayObjectsLayer[i].textEditVisible = false;
    }
    if (index) {
      indexTextSelected = index - 1;
      arrayObjectsLayer[indexTextSelected].textEditVisible = false;
    } else {
      if (arrayObjectsLayer[indexTextSelected]) {
        arrayObjectsLayer[indexTextSelected].textEditVisible = false;
        indexTextSelected = undefined;
      }
    }
    this.setState({
      selectedObject,
      arrayObjectsLayer,
      indexTextSelected,
    });
  };

  setArrayObject = arrayObjectsLayer => {
    saveHistory(arrayObjectsLayer)

    this.setState({
      arrayObjectsLayer,
    });
  };
 

  render() {
    const {
      selectedObject,
      arrayObjectsLayer,
     widthKanvas,
      heightKanvas,
      backgroundOn,
      showBackground,
      zoom
    } = this.state;
    const width = (widthKanvas) / zoom// cm to pixel
    const height = (heightKanvas) / zoom// cm to pixel
 return (
      <div>
        <div className="containerCanvas" ref={this.containerCanvas}>
          <div className="containerToolbar">
          
          
      <div className="containerIconeToolbar" onClick={this.addNewText}>
      <img className="img" src={InsertText} title="Criar texto"></img>
    </div>
   

</div>
          </div>
          <div>
            <div className={`container-area`}>
              <Stage
                scaleY={1 / zoom}
                scaleX={1 / zoom}
                ref={this.stageRef}
                width={width}
                height={height}
                onMouseDown={e => {
                  // deselect when clicked on empty area
                  console.log(e.target)
                  console.log(e.target.getStage())
                  const clickedOnEmpty = e.target === e.target.getStage();
                  if (clickedOnEmpty) {
                    this.selectShape(null);
                  }
                }}
              >
                <Layer>
                  {(showBackground && backgroundOn) && <Background width={5000} height={5000} />}
                  {
                    arrayObjectsLayer &&
                    arrayObjectsLayer.map((item, index) => {
                      return (
                         item.type === 'text' ?
                                  <Texto
                                    key={index}
                                    onSelect={() => {
                                      this.selectShape(item, index + 1);
                                    }}
                                    shapeProps={item}
                                 isSelected={
                                      selectedObject && item.id === selectedObject.id
                                    }
                                    handleTextDblClick={e =>
                                      this.handleTextDblClick(e, index)
                                    }
                                    onChange={newAttrs => {
                                      const item = arrayObjectsLayer.slice();
                                      item[index] = newAttrs;
                                      this.setArrayObject(item);
                                    }}
                                  />
                                  :
                                  false
                      )
                    }
                    )
                  }
                </Layer>
              </Stage>
            </div>
            <div className="containerBtnExportar">
            </div>
            {arrayObjectsLayer &&
              arrayObjectsLayer.map((item, index) => {
                return item ? (
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
                  />
                ) : (
                    false
                  );
              })}
          </div>
        
        </div>
      
    );
  }
}
