

import React, { Component } from "react";
import Konva from "konva";
import { Stage, Layer } from "react-konva";
import { DropImage } from "../DropImage";
import Draggable from 'react-draggable'
// import uuidv1 from 'uuid/v1';
// import KeyboardEventHandler from "react-keyboard-event-handler";
import {Retangulo,Triangulo,Texto,Circulo,Imagem,Background,Squareo,Lineo,Arrowo} from "../Formas";
import "./Editor.css";
import ColorPickerPalette from '../ColorPickerPalette'
import { CirclePicker } from 'react-color'
// imagens
import Bold from "../../assets/icons-editor-bar/bold.png";
import FillColor from "../../assets/icons-editor-bar/fill-color.png";
import BackgroundIcon from "../../assets/icons-editor-bar/background.png";
import Italic from "../../assets/icons-editor-bar/italics.png";
import Circle from "../../assets/icons-editor-bar/circle.png";
import Rectangle from "../../assets/icons-editor-bar/rectangle.png";
import InsertText from "../../assets/icons-editor-bar/insert-text.png";
import Image from "../../assets/icons-editor-bar/image.png";
import Triangule from "../../assets/icons-editor-bar/triangule.png";
import Desfazer from "../../assets/icons-editor-bar/desfazer.png";
import Refazer from "../../assets/icons-editor-bar/refazer.png";
import Save from "../../assets/icons-editor-bar/save.png";
import Underline from "../../assets/icons-editor-bar/underline.png";


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
    this.trRef = React.createRef(null);
    this.groupRef = React.createRef(null);
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
    selectQr : "1",
    qremail:"",
   qrtext:"",
   qrnumber:"",
   qrurl:"",
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
    newCircleObj: {
      y: 100,
      x: 100,
      radius: 50,
      fill: "#637EF7",
      id: 0,
      type: 'circle',
    },
    newImageObj: {
      x: 100,
      image: null,
      id: 50,
      type: 'image',
    },
    newSquareObj: {
      y: 100,
      x: 100,
      width: 100,
      height: 50,
      fill: "#637EF7",
      id: 0,
      type: 'square',
    },
    newRectangleObj: {
      y: 100,
      x: 100,
      width: 150,
      height: 100,
      fill: "#637EF7",
      id: 0,
      type: 'rectangle',
    },
    newTriangleObj: {
      y: 100,
      x: 100,
      sides: 3,
      radius: 80,
      fill: "#637EF7",
      id: 0,
      type: 'triangule',
    },

    newLineObj: {
      // y: 100,
      // x: 100,
      width: 50,
      height: 50,
      points: [10, 10, 10, 10, 10, 10, 100, 100],
      fill: "black",
      stroke:'black',
      // tension:0.5,
     strokeWidth:1,
      id: 0,
      type: 'line',
    },
    newArrowObj: {
      y: 100,
      x: 100,
      width: 50,
      height: 50,
      points: [10, 10, 10, 10, 10, 10, 100, 100],
      fill: "black",
      stroke:'black',
      // tension:0.5,
     strokeWidth:1,
      id: 0,
      type: 'arrow',
    },
    // state draggable stuff
    activeDrags: 0,
    deltaPosition: {
      x: 0, y: 0
    },
    controlledPosition: {
      x: -400, y: 200
    }
  };

  // handleDragStart = e => {
  //   e.target.setAttrs({
  //     shadowOffset: {
  //       x: 15,
  //       y: 15
  //     },
  //     scaleX: 1.1,
  //     scaleY: 1.1
  //   });
  // };

  // handleDragEnd = e => {
  //   e.target.to({
  //     duration: 0.5,
  //     easing: Konva.Easings.ElasticEaseOut,
  //     scaleX: 1,
  //     scaleY: 1,
  //     shadowOffsetX: 5,
  //     shadowOffsetY: 5
  //   });
  // };

  // saveEverything = async () => {
  //   await localStorage.setItem("stateSaved", JSON.stringify(this.state));
  // };

  // deleteSavedState = async () => {
  //   await localStorage.removeItem("stateSaved");
  //   const state = await localStorage.getItem("defaultState");
  //   if (state) this.setState(JSON.parse(state));
  // };


  async componentDidMount() {
    console.log("Called when component did mount ", this.trRef);
    console.log("Called when component did mount1 ", this.trRef.current.nodes([this.groupRef.current])); 
   saveHistory(this.state.arrayObjectsLayer)
    await localStorage.setItem("defaultState", JSON.stringify(this.state));
    const state = await localStorage.getItem("stateSaved");
    if (state) this.setState(JSON.parse(state))
    else this.setState({ selectedObject: this.state.arrayObjectsLayer[0] })

  }

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

  // handleSelect = index => {
  //   this.setState({
  //     indexTextSelected: index
  //   });
  // };

  changeStyle = style => {
    let { arrayObjectsLayer, indexTextSelected } = this.state;
    if (arrayObjectsLayer[indexTextSelected])
      arrayObjectsLayer[indexTextSelected].fontStyle = style;
    saveHistory(arrayObjectsLayer)
    this.setState({
      arrayObjectsLayer,
    });
  };
 
  setUnderline = underline => {
    let { arrayObjectsLayer, indexTextSelected } = this.state;
    if (arrayObjectsLayer[indexTextSelected])
      arrayObjectsLayer[indexTextSelected].textDecoration = underline;
    saveHistory(arrayObjectsLayer)
 this.setState({
      arrayObjectsLayer,
    });
  };
  setTextTransformLowercase = lowercase => {
    let { arrayObjectsLayer, indexTextSelected } = this.state;
    if (arrayObjectsLayer[indexTextSelected])
      arrayObjectsLayer[indexTextSelected].textTransform = lowercase;
    saveHistory(arrayObjectsLayer)
 this.setState({
      arrayObjectsLayer,
    });
  };
  setTextTransformUppercase = uppercase => {
    let { arrayObjectsLayer, indexTextSelected } = this.state;
    if (arrayObjectsLayer[indexTextSelected])
      arrayObjectsLayer[indexTextSelected].textTransform = uppercase;
    saveHistory(arrayObjectsLayer)
 this.setState({
      arrayObjectsLayer,
    });
  };
  setTextTransformCapitalize = capitalize => {
    let { arrayObjectsLayer, indexTextSelected } = this.state;
    if (arrayObjectsLayer[indexTextSelected])
      arrayObjectsLayer[indexTextSelected].textTransform = capitalize;
    saveHistory(arrayObjectsLayer)
 this.setState({
      arrayObjectsLayer,
    });
  };
  changeLineHeight = event => {
    let { arrayObjectsLayer, indexTextSelected } = this.state;
    arrayObjectsLayer[indexTextSelected].lineHeight = parseInt(event.target.value);
    saveHistory(arrayObjectsLayer)
    this.setState({
      arrayObjectsLayer,
    });
  };
  changeWidth = event => {
    let { arrayObjectsLayer, indexTextSelected } = this.state;
    if (arrayObjectsLayer[indexTextSelected])
      arrayObjectsLayer[indexTextSelected].width = parseInt(event.target.value);;
   saveHistory(arrayObjectsLayer)
    this.setState({
      arrayObjectsLayer,
    });
  };
  changeHeight = event => {
    let { arrayObjectsLayer, indexTextSelected } = this.state;
    if (arrayObjectsLayer[indexTextSelected])
      arrayObjectsLayer[indexTextSelected].height = parseInt(event.target.value);;
    saveHistory(arrayObjectsLayer)
    this.setState({
      arrayObjectsLayer,
    });
  };
  changeOpacity = event => {
    let { arrayObjectsLayer, indexTextSelected } = this.state;
    if (arrayObjectsLayer[indexTextSelected])
      arrayObjectsLayer[indexTextSelected].opacity = (event.target.value);;
    saveHistory(arrayObjectsLayer)
    this.setState({
      arrayObjectsLayer,
    });
  };
  changeTop = event => {
    let { arrayObjectsLayer, indexTextSelected } = this.state;
    if (arrayObjectsLayer[indexTextSelected])
      arrayObjectsLayer[indexTextSelected].offsetY = parseInt(event.target.value);;
    saveHistory(arrayObjectsLayer)
    this.setState({
      arrayObjectsLayer,
    });
  };
  changeLeft = event => {
    let { arrayObjectsLayer, indexTextSelected } = this.state;
    if (arrayObjectsLayer[indexTextSelected])
      arrayObjectsLayer[indexTextSelected].offsetX = parseInt(event.target.value);;
    saveHistory(arrayObjectsLayer)
    this.setState({
      arrayObjectsLayer,
    });
  };
  changeFontSize = event => {
    let { arrayObjectsLayer, indexTextSelected } = this.state;
    arrayObjectsLayer[indexTextSelected].fontSize = parseInt(event.target.value);
    saveHistory(arrayObjectsLayer)
    this.setState({
      arrayObjectsLayer,
    });
  };
  setTextAlignRight = right => {
    let { arrayObjectsLayer, indexTextSelected } = this.state;
    if (arrayObjectsLayer[indexTextSelected])
      arrayObjectsLayer[indexTextSelected].textAlign = right;
    saveHistory(arrayObjectsLayer)
 this.setState({
      arrayObjectsLayer,
    });
  };
  setTextAlignLeft = left => {
    let { arrayObjectsLayer, indexTextSelected } = this.state;
    if (arrayObjectsLayer[indexTextSelected])
      arrayObjectsLayer[indexTextSelected].textAlign = left;
    saveHistory(arrayObjectsLayer)
 this.setState({
      arrayObjectsLayer,
    });
  };
  setTextAlignCenter = center => {
    let { arrayObjectsLayer, indexTextSelected } = this.state;
    if (arrayObjectsLayer[indexTextSelected])
      arrayObjectsLayer[indexTextSelected].textAlign = center;
    saveHistory(arrayObjectsLayer)
 this.setState({
      arrayObjectsLayer,
    });
  };
  setTextAlignJustify = style => {
    let { arrayObjectsLayer, indexTextSelected } = this.state;
    if (arrayObjectsLayer[indexTextSelected])
      arrayObjectsLayer[indexTextSelected].textJustify = style;
    saveHistory(arrayObjectsLayer)
 this.setState({
      arrayObjectsLayer,
    });
  };
  changeFontFamily = event => {
    let { arrayObjectsLayer, indexTextSelected } = this.state;
    arrayObjectsLayer[indexTextSelected].fontFamily = event.target.value;
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
  addNewTriangle = () => {
    let { arrayObjectsLayer } = this.state;
    let newTriangleObj = Object.assign({}, this.state.newTriangleObj);
    newTriangleObj.id = Math.round(Math.random() * 10000);
    let selectedObject = newTriangleObj;
    arrayObjectsLayer.push(newTriangleObj);
    saveHistory(arrayObjectsLayer)
    this.setState({
      arrayObjectsLayer,
      selectedObject
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

  addNewSquare = () => {
    let { arrayObjectsLayer } = this.state;
    let newSquareObj = Object.assign({}, this.state.newSquareObj);
    newSquareObj.id = Math.round(Math.random() * 10000);
    let selectedObject = newSquareObj;
    arrayObjectsLayer.push(newSquareObj);
    saveHistory(arrayObjectsLayer)
    this.setState({
      arrayObjectsLayer,
      selectedObject
    });
  };

  addNewRectangle = () => {
    let { arrayObjectsLayer } = this.state;
    let newRectangleObj = Object.assign({}, this.state.newRectangleObj);
    newRectangleObj.id = Math.round(Math.random() * 10000);
    let selectedObject = newRectangleObj;
    arrayObjectsLayer.push(newRectangleObj);
    saveHistory(arrayObjectsLayer)
    this.setState({
      arrayObjectsLayer,
      selectedObject
    });
  };
  addNewLine = () => {
    let { arrayObjectsLayer } = this.state;
    let newLineObj = Object.assign({}, this.state.newLineObj);
    newLineObj.id = Math.round(Math.random() * 10000);
    let selectedObject = newLineObj;
    arrayObjectsLayer.push(newLineObj);
    saveHistory(arrayObjectsLayer)
    this.setState({
      arrayObjectsLayer,
      selectedObject
    });
  };
  addNewArrow = () => {
    let { arrayObjectsLayer } = this.state;
    let newArrowObj = Object.assign({}, this.state.newArrowObj);
    newArrowObj.id = Math.round(Math.random() * 10000);
    let selectedObject = newArrowObj;
    arrayObjectsLayer.push(newArrowObj);
    saveHistory(arrayObjectsLayer)
    this.setState({
      arrayObjectsLayer,
      selectedObject
    });
  };
  addNewCircle = () => {
    let { arrayObjectsLayer } = this.state;
    let newCircleObj = Object.assign({}, this.state.newCircleObj);
    newCircleObj.id = Math.round(Math.random() * 10000);
    let selectedObject = newCircleObj;
    arrayObjectsLayer.push(newCircleObj);
    saveHistory(arrayObjectsLayer)

    this.setState({
      arrayObjectsLayer,
      selectedObject
    });
  };

  addNewImage = image => {
    let { arrayObjectsLayer, newImageObj } = this.state;
    newImageObj.id = Math.round(Math.random() * 10000);
    newImageObj.image = image;
    arrayObjectsLayer.push(newImageObj);
    saveHistory(arrayObjectsLayer)

    this.setState({
      arrayObjectsLayer,
    });
  };
  tooglePallet = () => {
    if (this.state.selectedObject)
      this.setState({
        showPallet: !this.state.showPallet
      });
  };
  loadImage = base64 => {
    var image = new window.Image();
    image.src = `data:image/png;base64,${base64}`;
    image.addEventListener("load", this.addNewImage(image));
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

  desfazer = () => {
    POSITION = POSITION === 0 ? POSITION : POSITION - 1
    const history = revertHistory()
    this.setState({
      arrayObjectsLayer: history.slice(0),
    })
  }

  refazer = () => {
    POSITION = POSITION < HISTORY.length - 1 ? POSITION + 1 : POSITION
    const history = revertHistory()
    this.setState({
      arrayObjectsLayer: history.slice(0),
    })
  }

  setArrayObject = arrayObjectsLayer => {
    saveHistory(arrayObjectsLayer)

    this.setState({
      arrayObjectsLayer,
    });
  };
  setObjColor = color => {
    let arrayObjectsLayer = this.state.arrayObjectsLayer;
    let selectedObject = { ...this.state.selectedObject };

    for (let i = 0; i < arrayObjectsLayer.length; i++) {
      if (selectedObject.id === arrayObjectsLayer[i].id) {
        if (typeof color === 'string') {
          arrayObjectsLayer[i].fill = color;
        } else {
          arrayObjectsLayer[i].fill = color.hex;
        }
      }
    }
    saveHistory(arrayObjectsLayer)

    this.setState({
      selectedObject,
      arrayObjectsLayer,
    });
  };
 

 




  deleteNodeSelected = () => {
    let { selectedObject, arrayObjectsLayer } = this.state
    if (arrayObjectsLayer.length > 0) {
      for (let i = 0; i < arrayObjectsLayer.length; i++) {
        if (arrayObjectsLayer[i].type === 'text') arrayObjectsLayer[i].textEditVisible = false;
        if (selectedObject.id === arrayObjectsLayer[i].id) {
          arrayObjectsLayer.splice(i, 1);
        }
      }
      saveHistory(arrayObjectsLayer)

      this.setState({
        arrayObjectsLayer,
      });
    }
  };

  b64toBlob = b64Data => {
    const contentType = 'image/png';
    const sliceSize = 512;
    let byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      let slice = byteCharacters.slice(offset, offset + sliceSize);

      let byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);

      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    this.savePng(blob)
  }
  imageToBlob = () => {
    const { zoom } = this.state
    this.setState({
      selectedObject: {},
      showBackground: true
    })
    setTimeout(() => {
      const base64Image = this.stageRef.current.getStage().toDataURL({
        pixelRatio: zoom // qualidade da imagem
      })
      // Split the base64 string in data and contentType
      const block = base64Image.split(";");
      // Get the content type of the image
      const contentType = block[0].split(":")[1];// In this case "image/gif"
      // get the real base64 content of the file
      const realData = block[1].split(",")[1];// In this case "R0lGODlhPQBEAPeoAJosM...."
      this.setState({
        showBackground: false
      })
      // Convert it to a blob to upload
      return this.b64toBlob(realData, contentType);
    }, 200);
  }

  savePng = async blob => {
    var formData = new FormData();
    formData.append('profile', 'display')
    // formData.append('uuid', uuidv1())
    formData.append('filename', `${Math.floor(Math.random() * 1000)}.png`)
    formData.append('totalfilesize', blob.size)
    formData.append('file', blob)

    fetch(process.env.REACT_APP_IMAGE_UPLOAD, {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(function (json) {
        if (json.success) {
          setTimeout(() => {
            window.open(json.files[0].url, "_blank")
          }, 500);
        }
      },
        error => {
          return error;
        }
      )
  }
  handleDrag = (e, ui) => {
    e.stopPropagation();
    const { x, y } = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      }
    });
  };
 


  // functions de arrastar o trem da cor
  onStart = () => {
    this.setState({ activeDrags: ++this.state.activeDrags });
  };

  onStop = () => {
    this.setState({ activeDrags: --this.state.activeDrags });
  };

  // For controlled component
  adjustXPos = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const { x, y } = this.state.controlledPosition;
    this.setState({ controlledPosition: { x: x - 10, y } });
  };

  adjustYPos = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const { controlledPosition } = this.state;
    const { x, y } = controlledPosition;
    this.setState({ controlledPosition: { x, y: y - 10 } });
  };

  onControlledDrag = (e, position) => {
    const { x, y } = position;
    this.setState({ controlledPosition: { x, y } });
  };

  onControlledDragStop = (e, position) => {
    this.onControlledDrag(e, position);
    this.onStop();
  };
  backgroundToogle = () => {
    this.setState({
      backgroundOn: !this.state.backgroundOn
    })
  };
 
  // fim functions de arrastar o trem da cor

  render() {
    const {
      selectedObject,
      arrayObjectsLayer,
      indexTextSelected,
      showPallet,
      widthKanvas,
      heightKanvas,
      backgroundOn,
      showBackground,
      zoom
    } = this.state;
    const width = (widthKanvas) / zoom// cm to pixel
    const height = (heightKanvas) / zoom// cm to pixel

    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
    return (
      <div>
      <div className='input-class'>
      <select name="selectQr" value={this.state.selectQr}  className='text-field' onChange={this.handleChange} >
           <option value="1" >Email</option>
           <option value="2" >Text</option>
           <option value="3" >Number</option>
           <option value="4" >URL</option>
           </select>
             </div>
     {this.state.selectQr === "1" &&
             <div className='label-text'>
             <span style={{color:"white"}}>Email Address</span>
             </div>
     }
     {this.state.selectQr === "1" &&
             <div className='input-class'>
             <input type="email" className='text-field' placeholder='Enter Email Address' name="qremail" value={this.state.qremail} onChange={this.handleChange}/>
             </div>
     }
     {this.state.selectQr === "2" &&
           <div className='label-text'>
           <span style={{color:"white"}}>Text</span>
           </div>
     }
     {this.state.selectQr === "2" &&
           <div className='input-class'>
           <input type="text" className='text-field' placeholder='Enter Text' name="qrtext" value={this.state.qrtext} onChange={this.handleChange}/>
           </div>
     }
     {this.state.selectQr === "3" &&
           <div className='label-text'>
           <span style={{color:"white"}}>Number</span>
           </div>
     }
     {this.state.selectQr === "3" &&
           <div className='input-class'>
           <input type="number" className='text-field' placeholder='Enter Number' name="qrnumber" value={this.state.qrnumber} onChange={this.handleChange}/>
           </div>
     }
     {this.state.selectQr === "4" &&
           <div className='label-text'>
           <span style={{color:"white"}}>URL</span>
           </div>
     }
     {this.state.selectQr === "4" &&
           <div className='input-class'>
           <input type="url" className='text-field' placeholder='Enter Url' name="qrurl" value={this.state.qrurl} onChange={this.handleChange}/>
           </div>
     }
     
        <div className="containerCanvas" ref={this.containerCanvas}>
          <div className="containerToolbar">
            <div
              className="containerIconeToolbar"
              onClick={this.imageToBlob}
            >
              <img className="img" src={Save} title="Save as png"></img>
            </div>
         
            
          
          
      
    
  <div className="containerIconeToolbar" onClick={() => this.backgroundToogle()}>
  <img className="img" src={BackgroundIcon} title="Background"
    style={
      !backgroundOn ? { backgroundColor: "grey" }
        : {}
    }></img>
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
                        item.type === 'square' ?
                          <Retangulo
                            key={index}
                            shapeProps={item}
                            isSelected={
                              selectedObject && item.id === selectedObject.id
                            }
                            onSelect={() => {
                              this.selectShape(item);
                            }}
                            onChange={newAttrs => {
                              const item = arrayObjectsLayer.slice();
                              item[index] = newAttrs;
                              this.setArrayObject(item);
                            }}
                          />
                          :
                          item.type === 'triangule' ?
                            <Triangulo
                              key={index}
                              shapeProps={item}
                              isSelected={
                                selectedObject && item.id === selectedObject.id
                              }
                              onSelect={() => {
                                this.selectShape(item);
                              }}
                              onChange={newAttrs => {
                                const item = arrayObjectsLayer.slice();
                                item[index] = newAttrs;
                                this.setArrayObject(item);
                              }}
                            />
                            :
                            item.type === 'line' ?
                            <Lineo
                              key={index}
                              shapeProps={item}
                              isSelected={
                                selectedObject && item.id === selectedObject.id
                              }
                              onSelect={() => {
                                this.selectShape(item);
                              }}
                              onChange={newAttrs => {
                                const item = arrayObjectsLayer.slice();
                                item[index] = newAttrs;
                                this.setArrayObject(item);
                              }}
                            />
                            :
                            item.type === 'circle' ?
                              <Circulo
                                key={index}
                                shapeProps={item}
                                isSelected={
                                  selectedObject && item.id === selectedObject.id
                                }
                                onSelect={() => {
                                  this.selectShape(item);
                                }}
                                onChange={newAttrs => {
                                  const item = arrayObjectsLayer.slice();
                                  item[index] = newAttrs;
                                  this.setArrayObject(item);
                                }}
                              />
                              :
                              item.type === 'arrow' ?
                              <Arrowo
                                key={index}
                                shapeProps={item}
                                isSelected={
                                  selectedObject && item.id === selectedObject.id
                                }
                                onSelect={() => {
                                  this.selectShape(item);
                                }}
                                onChange={newAttrs => {
                                  const item = arrayObjectsLayer.slice();
                                  item[index] = newAttrs;
                                  this.setArrayObject(item);
                                }}
                              />
                              :
                              item.type === 'rectangle' ?
                              <Squareo
                                key={index}
                                shapeProps={item}
                                isSelected={
                                  selectedObject && item.id === selectedObject.id
                                }
                                onSelect={() => {
                                  this.selectShape(item);
                                }}
                                onChange={newAttrs => {
                                  const item = arrayObjectsLayer.slice();
                                  item[index] = newAttrs;
                                  this.setArrayObject(item);
                                }}
                              />
                              :
                              item.type === 'image' ?
                                <Imagem
                                  key={index}
                                  shapeProps={item}
                                  isSelected={
                                    selectedObject && item.id === selectedObject.id
                                  }
                                  onSelect={() => {
                                    this.selectShape(item);
                                  }}
                                  onChange={newAttrs => {
                                    const item = arrayObjectsLayer.slice();
                                    item[index] = newAttrs;
                                    this.setArrayObject(item);
                                  }}
                                />
                                :
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
                  <Group ref={this.groupRef} draggable x={20} y={20}>
                  <Html transform={true}  divProps={{ style: {border:"2px solid black",} }}>
                  <div style={{display:"flex",justifyContent:"center" }}> {this.state.selectQr === "1" && <QRCode value={this.state.qremail} />}  </div>
                 </Html>
                  <Rect width={260} height={260} fill="" />
                </Group>
                  <Transformer ref={this.trRef} />
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
      </div>
    );
  }
}
