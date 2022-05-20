

// import React, { Component } from 'react'
// // import './HorizontalCard.css'

// import TemplateList from "./TemplateList"
// import Template from "./responsiveVerticalCard/Template"
// import  "./Image.css"
// import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
// import AddSharpIcon from '@mui/icons-material/AddSharp';
// import ClearSharpIcon from '@mui/icons-material/ClearSharp';
// import ContactsIcon from '@mui/icons-material/Contacts';
// import AddCardIcon from '@mui/icons-material/AddCard';
// import TagIcon from '@mui/icons-material/Tag';
// import UndoIcon from '@mui/icons-material/Undo';
// import RedoIcon from '@mui/icons-material/Redo';
// import Crop169Icon from '@mui/icons-material/Crop169';
// import CropPortraitIcon from '@mui/icons-material/CropPortrait';
// import Slider from '@mui/material/Slider';
// import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
// import { Stage, Layer,Group, Rect, Transformer } from "react-konva";
// import Konva from "konva";
// import ColorPickerPalette from './ColorPickerPalette'
// import { CirclePicker } from 'react-color'
// import { DropImage } from "./DropImage";
// import Draggable from 'react-draggable'
// import {Retangulo,Triangulo,Texto,Circulo,Imagem,Background,Squareo,Lineo,Arrowo} from "./Formas";
// import QRCode from 'react-qr-code'
// import { Html } from 'react-konva-utils'

// var HISTORY = []

// var POSITION = 0

// function saveHistory(history) {
//   var remove = (HISTORY.length - 1) - POSITION;
//   HISTORY = HISTORY.slice(0, HISTORY.length - remove);
//   HISTORY.push(history.slice(0))
//   POSITION = HISTORY.length - 1
// }

// function revertHistory() {
//   return HISTORY[POSITION]
// }


// export class BackVerticalCard extends Component {
//     constructor(props) {
//       super(props)
//       this.stageRef = React.createRef();
//       this.containerCanvas = React.createRef();
//       this.trRef = React.createRef(null);
//       this.groupRef = React.createRef(null);
//      this.state = {
//        new:true,
//        choose:"",
//          number:6,
//          arrayObjectsLayer: [],
//          family:["Tahoma","Verdana","Georgia","Times New Roman","Arial","Helvetica","Impact","Courier New","serif","sans-serif","cursive","fantasy","monospace"],
//          kanvasWidth: 18.9,
//          kanvasHeight: 10,
//          widthKanvas: 700,
//          heightKanvas: 850,
//          showPallet: false,
//          selectedObject: {},
//          showBackground: false,
//          backgroundOn: true,
//          indexTextSelected: 0,
//          zoom: 2,
//          selectQr : "1",
//          qremail:"",
//         qrtext:"",
//         qrnumber:"",
//         qrurl:"",
//          imgBase64: undefined,
//          newTextObj: {
//            textEditVisible: true,
//            fill: "black",
//            textX: 0,
//            textY: 0,
//            textYTextArea: 0,
//            textXTextArea: 0,
//            textValue: "Two clicks to edit",
//            fontSize: 28,
//            width: 250,
//            y: 100,
//            x: 100,
//            height: 150,
//            fontStyle: "normal",
//            align: "left",
//            id: 0,
//            type: 'text',
//            opacity: 1,
//            offsetY:0,
//            offsetX:0,
//            textTransform:"lowercase"
//          },
//          newCircleObj: {
//            y: 100,
//            x: 100,
//            radius: 50,
//           //  fill: "#637EF7",
//           stroke:'black',
//           tension:1,
//         strokeWidth: 1,
//            id: 0,
//            type: 'circle',
//          },
//          newImageObj: {
//            x: 100,
//            image: null,
//            id: 50,
//            type: 'image',
//          },
//          newSquareObj: {
//            y: 100,
//            x: 100,
//            width: 100,
//            height: 50,
//           //  fill: "#637EF7",
//            id: 0,
//            stroke:'black',
//            tension:1,
//          strokeWidth: 1,
//            type: 'square',
//          },
//          newRectangleObj: {
//            y: 100,
//            x: 100,
//            width: 150,
//            height: 100,
//           //  fill: "#637EF7",
//           stroke:'black',
//           tension:1,
//         strokeWidth: 1,
//            id: 0,
//            type: 'rectangle',
//          },
//          newTriangleObj: {
//            y: 100,
//            x: 100,
//            sides: 3,
//            radius: 80,
//           //  fill: "#637EF7",
//           stroke:'black',
//           tension:1,
//         strokeWidth: 1,
//            id: 0,
//            type: 'triangule',
//          },
     
//          newLineObj: {
//            y: 100,
//            x: 100,
//            width: 50,
//            height: 5,
//           //  points: [10, 10, 10, 10, 10, 10, 100, 100],
//           points:[0, 0, 0, 0, 350, 0],
//            fill: "black",
//            stroke:'black',
//           //  tension:0.5,
//           strokeWidth:1,
//            id: 0,
//            type: 'line',
//          },
//          newArrowObj: {
//            y: 100,
//            x: 100,
//            width: 50,
//            height: 50,
//           //  points: [10, 10, 10, 10, 10, 10, 100, 100],
//           points:[0, 0, 0, 0, 350, 0],
//            fill: "black",
//            stroke:'black',
//            tension:0.5,
//           strokeWidth:1,
//            id: 0,
//            type: 'arrow',
//          },
//          // state draggable stuff
//          activeDrags: 0,
//          deltaPosition: {
//            x: 0, y: 0
//          },
//          controlledPosition: {
//            x: -400, y: 200
//          },
//          imagesrc :[
//            {
//              id:"1",
//              src:"/images/CardDesign/Horizontal/Card1+.jpg"
//          },
//          {
//           id:"2",
//           src:"/images/CardDesign/Horizontal/Card1.jpg"
//       },
//       {
//         id:"3",
//         src:"/images/CardDesign/Horizontal/Card2.jpg"
//     },
//     {
//       id:"4",
//       src:"/images/CardDesign/Horizontal/Card2+.jpg"
//   }
//          ]
//       }
//     }
//     async componentDidMount() {
//       console.log("Called when component did mount ", this.trRef);
//       console.log("Called when component did mount1 ", this.trRef.current.nodes([this.groupRef.current])); 
//      saveHistory(this.state.arrayObjectsLayer)
//       await localStorage.setItem("defaultState", JSON.stringify(this.state));
//       const state = await localStorage.getItem("stateSaved");
//       if (state) this.setState(JSON.parse(state))
//       else this.setState({ selectedObject: this.state.arrayObjectsLayer[0] })
  
//     }
//     // TEXT EDITOR FUNCTIONALITY
//     handleTextDblClick = (e, index) => {
//       const absPos = e.target.getAbsolutePosition();
//       const stageBox = this.stageRef.current.container().getBoundingClientRect();
//       let { arrayObjectsLayer, widthKanvas } = this.state;
//       for (let i; i < arrayObjectsLayer.length; i++) {
//         arrayObjectsLayer[i].textEditVisible = false;
//       }
//       arrayObjectsLayer[index].textEditVisible = true;
//       // arrayObjectsLayer[index].marginTop = parseInt(e.target.value);
//       arrayObjectsLayer[index].textXTextArea =
//         (stageBox.left + absPos.x + this.containerCanvas.current.scrollLeft) / this.state.zoom;
//       arrayObjectsLayer[index].textYTextArea =
//         stageBox.bottom + absPos.y - stageBox.height + 40 + this.containerCanvas.current.scrollTop;
//       saveHistory(arrayObjectsLayer)
//        this.setState({
//         arrayObjectsLayer,
//       });
//     };

//     changeStyle = style => {
//       let { arrayObjectsLayer, indexTextSelected } = this.state;
//       if (arrayObjectsLayer[indexTextSelected])
//         arrayObjectsLayer[indexTextSelected].fontStyle = style;
//       saveHistory(arrayObjectsLayer)
//       this.setState({
//         arrayObjectsLayer,
//       });
//     };
   
//     setUnderline = underline => {
//       let { arrayObjectsLayer, indexTextSelected } = this.state;
//       if (arrayObjectsLayer[indexTextSelected])
//         arrayObjectsLayer[indexTextSelected].textDecoration = underline;
//       saveHistory(arrayObjectsLayer)
//    this.setState({
//         arrayObjectsLayer,
//       });
//     };
//     setTextTransformLowercase = lowercase => {
//       let { arrayObjectsLayer, indexTextSelected } = this.state;
//       if (arrayObjectsLayer[indexTextSelected])
//         arrayObjectsLayer[indexTextSelected].textTransform = lowercase;
//       saveHistory(arrayObjectsLayer)
//    this.setState({
//         arrayObjectsLayer,
//       });
//     };
//     setTextTransformUppercase = uppercase => {
//       let { arrayObjectsLayer, indexTextSelected } = this.state;
//       if (arrayObjectsLayer[indexTextSelected])
//         arrayObjectsLayer[indexTextSelected].textTransform = uppercase;
//       saveHistory(arrayObjectsLayer)
//    this.setState({
//         arrayObjectsLayer,
//       });
//     };
//     setTextTransformCapitalize = capitalize => {
//       let { arrayObjectsLayer, indexTextSelected } = this.state;
//       if (arrayObjectsLayer[indexTextSelected])
//         arrayObjectsLayer[indexTextSelected].textTransform = capitalize;
//       saveHistory(arrayObjectsLayer)
//    this.setState({
//         arrayObjectsLayer,
//       });
//     };
//     changeLineHeight = event => {
//       let { arrayObjectsLayer, indexTextSelected } = this.state;
//       arrayObjectsLayer[indexTextSelected].lineHeight = parseInt(event.target.value);
//       saveHistory(arrayObjectsLayer)
//       this.setState({
//         arrayObjectsLayer,
//       });
//     };
//     changeWidth = event => {
//       let { arrayObjectsLayer, indexTextSelected } = this.state;
//       if (arrayObjectsLayer[indexTextSelected])
//         arrayObjectsLayer[indexTextSelected].width = parseInt(event.target.value);;
//      saveHistory(arrayObjectsLayer)
//       this.setState({
//         arrayObjectsLayer,
//       });
//     };
//     changeHeight = event => {
//       let { arrayObjectsLayer, indexTextSelected } = this.state;
//       if (arrayObjectsLayer[indexTextSelected])
//         arrayObjectsLayer[indexTextSelected].height = parseInt(event.target.value);;
//       saveHistory(arrayObjectsLayer)
//       this.setState({
//         arrayObjectsLayer,
//       });
//     };
//     changeOpacity = event => {
//       let { arrayObjectsLayer, indexTextSelected } = this.state;
//       if (arrayObjectsLayer[indexTextSelected])
//         arrayObjectsLayer[indexTextSelected].opacity = (event.target.value);;
//         console.log(event.target.value)
//       saveHistory(arrayObjectsLayer)
//       this.setState({
//         arrayObjectsLayer,
//       });
//     };
//     changeTop = event => {
//       let { arrayObjectsLayer, indexTextSelected } = this.state;
//       if (arrayObjectsLayer[indexTextSelected])
//         arrayObjectsLayer[indexTextSelected].offsetY = parseInt(event.target.value);;
//       saveHistory(arrayObjectsLayer)
//       this.setState({
//         arrayObjectsLayer,
//       });
//     };
//     changeLeft = event => {
//       let { arrayObjectsLayer, indexTextSelected } = this.state;
//       if (arrayObjectsLayer[indexTextSelected])
//         arrayObjectsLayer[indexTextSelected].offsetX = parseInt(event.target.value);;
//       saveHistory(arrayObjectsLayer)
//       this.setState({
//         arrayObjectsLayer,
//       });
//     };
//     changeFontSize = event => {
//       let { arrayObjectsLayer, indexTextSelected } = this.state;
//       arrayObjectsLayer[indexTextSelected].fontSize = parseInt(event.target.value);
//       saveHistory(arrayObjectsLayer)
//       this.setState({
//         arrayObjectsLayer,
//       });
//     };
//     setTextAlignRight = right => {
//       let { arrayObjectsLayer, indexTextSelected } = this.state;
//       if (arrayObjectsLayer[indexTextSelected])
//         arrayObjectsLayer[indexTextSelected].textAlign = right;
//       saveHistory(arrayObjectsLayer)
//    this.setState({
//         arrayObjectsLayer,
//       });
//     };
//     setTextAlignLeft = left => {
//       let { arrayObjectsLayer, indexTextSelected } = this.state;
//       if (arrayObjectsLayer[indexTextSelected])
//         arrayObjectsLayer[indexTextSelected].textAlign = left;
//       saveHistory(arrayObjectsLayer)
//    this.setState({
//         arrayObjectsLayer,
//       });
//     };
//     setTextAlignCenter = center => {
//       let { arrayObjectsLayer, indexTextSelected } = this.state;
//       if (arrayObjectsLayer[indexTextSelected])
//         arrayObjectsLayer[indexTextSelected].textAlign = center;
//       saveHistory(arrayObjectsLayer)
//    this.setState({
//         arrayObjectsLayer,
//       });
//     };
//     setTextAlignJustify = justify => {
//       let { arrayObjectsLayer, indexTextSelected } = this.state;
//       if (arrayObjectsLayer[indexTextSelected])
//         arrayObjectsLayer[indexTextSelected].textAlign = justify;
//       saveHistory(arrayObjectsLayer)
//    this.setState({
//         arrayObjectsLayer,
//       });
//     };
//     changeFontFamily = event => {
//       let { arrayObjectsLayer, indexTextSelected } = this.state;
//       arrayObjectsLayer[indexTextSelected].fontFamily = event.target.value;
//       saveHistory(arrayObjectsLayer)
//       this.setState({
//         arrayObjectsLayer,
//       });
//     };
//     handleTextEdit = (e, index) => {
//       let { arrayObjectsLayer } = this.state;
//       arrayObjectsLayer[index].textValue = e.target.value;
//       saveHistory(arrayObjectsLayer)
  
//       this.setState({
//         arrayObjectsLayer,
//       });
//     };
//     addNewText = () => {
//       let { arrayObjectsLayer, newTextObj } = this.state;
//       newTextObj.id = Math.round(Math.random() * 10000);
//       arrayObjectsLayer.push(newTextObj);
//       let selectedObject = newTextObj;
//       saveHistory(arrayObjectsLayer)
  
//       this.setState({
//         arrayObjectsLayer, selectedObject,
//         number:2
//       });
//     };
//     //-------------------------- SHAPES
//     addNewTriangle = () => {
//       let { arrayObjectsLayer } = this.state;
//       let newTriangleObj = Object.assign({}, this.state.newTriangleObj);
//       newTriangleObj.id = Math.round(Math.random() * 10000);
//       let selectedObject = newTriangleObj;
//       arrayObjectsLayer.push(newTriangleObj);
//       saveHistory(arrayObjectsLayer)
//       this.setState({
//         arrayObjectsLayer,
//         selectedObject
//       });
//     };
//     addNewSquare = () => {
//       let { arrayObjectsLayer } = this.state;
//       let newSquareObj = Object.assign({}, this.state.newSquareObj);
//       newSquareObj.id = Math.round(Math.random() * 10000);
//       let selectedObject = newSquareObj;
//       arrayObjectsLayer.push(newSquareObj);
//       saveHistory(arrayObjectsLayer)
//       this.setState({
//         arrayObjectsLayer,
//         selectedObject
//       });
//     };
  
//     addNewRectangle = () => {
//       let { arrayObjectsLayer } = this.state;
//       let newRectangleObj = Object.assign({}, this.state.newRectangleObj);
//       newRectangleObj.id = Math.round(Math.random() * 10000);
//       let selectedObject = newRectangleObj;
//       arrayObjectsLayer.push(newRectangleObj);
//       saveHistory(arrayObjectsLayer)
//       this.setState({
//         arrayObjectsLayer,
//         selectedObject
//       });
//     };
//     addNewLine = () => {
//       let { arrayObjectsLayer } = this.state;
//       let newLineObj = Object.assign({}, this.state.newLineObj);
//       newLineObj.id = Math.round(Math.random() * 10000);
//       let selectedObject = newLineObj;
//       arrayObjectsLayer.push(newLineObj);
//       saveHistory(arrayObjectsLayer)
//       this.setState({
//         arrayObjectsLayer,
//         selectedObject
//       });
//     };
//     addNewArrow = () => {
//       let { arrayObjectsLayer } = this.state;
//       let newArrowObj = Object.assign({}, this.state.newArrowObj);
//       newArrowObj.id = Math.round(Math.random() * 10000);
//       let selectedObject = newArrowObj;
//       arrayObjectsLayer.push(newArrowObj);
//       saveHistory(arrayObjectsLayer)
//       this.setState({
//         arrayObjectsLayer,
//         selectedObject
//       });
//     };
//     addNewCircle = () => {
//       let { arrayObjectsLayer } = this.state;
//       let newCircleObj = Object.assign({}, this.state.newCircleObj);
//       newCircleObj.id = Math.round(Math.random() * 10000);
//       let selectedObject = newCircleObj;
//       arrayObjectsLayer.push(newCircleObj);
//       saveHistory(arrayObjectsLayer)
  
//       this.setState({
//         arrayObjectsLayer,
//         selectedObject
//       });
//     };
//     selectShape = (selectedObject, index = undefined) => {
//       console.log('dentro')
//       let { arrayObjectsLayer, indexTextSelected } = this.state;
//       // fecha a text area do texto
//       for (let i; i < arrayObjectsLayer.length; i++) {
//         arrayObjectsLayer[i].textEditVisible = false;
//       }
//       if (index) {
//         indexTextSelected = index - 1;
//         arrayObjectsLayer[indexTextSelected].textEditVisible = false;
//       } else {
//         if (arrayObjectsLayer[indexTextSelected]) {
//           arrayObjectsLayer[indexTextSelected].textEditVisible = false;
//           indexTextSelected = undefined;
//         }
//       }
//       this.setState({
//         selectedObject,
//         arrayObjectsLayer,
//         indexTextSelected,
//       });
//     };
//     // -------------------IMAGE
//     addNewImage = image => {
//       let { arrayObjectsLayer, newImageObj } = this.state;
//       newImageObj.id = Math.round(Math.random() * 10000);
//       newImageObj.image = image;
//       arrayObjectsLayer.push(newImageObj);
//       saveHistory(arrayObjectsLayer)
//       this.setState({arrayObjectsLayer,});
//     };

//     loadImage = base64 => {
//       var image = new window.Image();
//       image.src = `data:image/png;base64,${base64}`;
//       console.log(image)
//       image.addEventListener("load", this.addNewImage(image));
//       };
 
//     b64toBlob = b64Data => {
//       const contentType = 'image/png';
//       const sliceSize = 512;
//       let byteCharacters = atob(b64Data);
//       const byteArrays = [];
  
//       for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
//         let slice = byteCharacters.slice(offset, offset + sliceSize);
  
//         let byteNumbers = new Array(slice.length);
//         for (let i = 0; i < slice.length; i++) {
//           byteNumbers[i] = slice.charCodeAt(i);
//         }
  
//         const byteArray = new Uint8Array(byteNumbers);
  
//         byteArrays.push(byteArray);
//       }
  
//       const blob = new Blob(byteArrays, { type: contentType });
//       this.savePng(blob)
//     }
//     imageToBlob = () => {
//       const { zoom } = this.state
//       this.setState({
//         selectedObject: {},
//         showBackground: true
//       })
//       setTimeout(() => {
//         const base64Image = this.stageRef.current.getStage().toDataURL({
//           pixelRatio: zoom // qualidade da imagem
//         })
//         // Split the base64 string in data and contentType
//         const block = base64Image.split(";");
//         // Get the content type of the image
//         const contentType = block[0].split(":")[1];// In this case "image/gif"
//         // get the real base64 content of the file
//         const realData = block[1].split(",")[1];// In this case "R0lGODlhPQBEAPeoAJosM...."
//         this.setState({
//           showBackground: false
//         })
//         // Convert it to a blob to upload
//         return this.b64toBlob(realData, contentType);
//       }, 200);
//     }
  
//     savePng = async blob => {
//       var formData = new FormData();
//       formData.append('profile', 'display')
//       // formData.append('uuid', uuidv1())
//       formData.append('filename', `${Math.floor(Math.random() * 1000)}.png`)
//       formData.append('totalfilesize', blob.size)
//       formData.append('file', blob)
//   console.log(...formData)
//       // fetch(process.env.REACT_APP_IMAGE_UPLOAD, {
//       //   method: 'POST',
//       //   body: formData
//       // })
//       //   .then(response => response.json())
//       //   .then(function (json) {
//       //     if (json.success) {
//       //       setTimeout(() => {
//       //         window.open(json.files[0].url, "_blank")
//       //       }, 500);
//       //     }
//       //   },
//       //     error => {
//       //       return error;
//       //     }
//       //   )
//     }
// //--------------COLOR  
// tooglePallet = () => {
//   if (this.state.selectedObject)
//     this.setState({
//       showPallet: !this.state.showPallet
//     });
// };
// setObjColor = color => {
//   let arrayObjectsLayer = this.state.arrayObjectsLayer;
//   let selectedObject = { ...this.state.selectedObject };
// console.log(arrayObjectsLayer)
// console.log(selectedObject)
//   for (let i = 0; i < arrayObjectsLayer.length; i++) {
//     if (selectedObject.id === arrayObjectsLayer[i].id) {
//       if (typeof color === 'string') {
//         arrayObjectsLayer[i].fill = color;
//       } else {

//         arrayObjectsLayer[i].fill = color.hex;
//       }
//     }
//   }
//   saveHistory(arrayObjectsLayer)

//   this.setState({
//     selectedObject,
//     arrayObjectsLayer,
//   });
// };
// handleDrag = (e, ui) => {
//   e.stopPropagation();
//   const { x, y } = this.state.deltaPosition;
//   this.setState({
//     deltaPosition: {
//       x: x + ui.deltaX,
//       y: y + ui.deltaY,
//     }
//   });
// };

// //---------UNDO REDO
// desfazer = () => {
//   POSITION = POSITION === 0 ? POSITION : POSITION - 1
//   const history = revertHistory()
//   this.setState({
//     arrayObjectsLayer: history.slice(0),
//   })
// }

// refazer = () => {
//   POSITION = POSITION < HISTORY.length - 1 ? POSITION + 1 : POSITION
//   const history = revertHistory()
//   this.setState({
//     arrayObjectsLayer: history.slice(0),
//   })
// }
// //ARRAY OBJECT
// setArrayObject = arrayObjectsLayer => {
//   saveHistory(arrayObjectsLayer)

//   this.setState({
//     arrayObjectsLayer,
//   });
// };
//  // functions de arrastar o trem da cor
//  onStart = () => {
//   this.setState({ activeDrags: ++this.state.activeDrags });
// };

// onStop = () => {
//   this.setState({ activeDrags: --this.state.activeDrags });
// };
// backgroundToogle = () => {
//   this.setState({
//     backgroundOn: !this.state.backgroundOn
//   })
// };
// handleChange = (e) => {
//   this.setState({
//     [e.target.name]: e.target.value,
//   });
// };
// handleChangeSmart = (e) => {
//   console.log(e.target.value)
//   this.setState({
//     [e.target.name]: e.target.value,
//   });
// };

//   render() {
//     console.log(this.state)
//       console.log(this.state.arrayObjectsLayer)
//       console.log(this.state.arrayObjectsLayer.item)
//       console.log(this.state.newTextObj.textValue)
//       const {selectedObject, arrayObjectsLayer, indexTextSelected, showPallet, widthKanvas, heightKanvas, backgroundOn, showBackground,zoom } = this.state;
//       const width = (widthKanvas) / zoom// cm to pixel
//       const height = (heightKanvas) / zoom// cm to pixel
  
//       const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
//     return (
//         <div style={{display:"flex"}}>
     
//         <div className="back-div-1">
//          <div className="icon-box-1">
//         <div style={{textAlign:"center"}} onClick={()=>this.setState({number:1})}>
//         {this.state.number === 1 ?  
//         <img src="/images/Tempcolor.png" style={{width:25,height:25}}/>
//         :      <img src="/images/template.png" style={{width:25,height:25}}/>
//         }
//         </div>
//         {this.state.number === 1 ?  
//           <span  className="icon-text-2" >Template</span>
//           :  <span  className="icon-text-1" >Template</span>
//           }
//       </div>
  
//         <div  className="icon-box-1"  >
//         <div style={{textAlign:"center"}} onClick={()=>this.setState({number:2})} >
//         {this.state.number === 2 ?
//           <img src="/images/textcolor.png" style={{width:25,height:25}}/> :
//           <img src="/images/text.png" style={{width:25,height:25}}/>
//        }
//       </div>
//       {this.state.number === 2 ?
//         <span className="icon-text-2" >Text</span> :
//         <span className="icon-text-1">Text</span>
//      }
//       </div>

//         <div  className="icon-box-1"  onClick={()=>this.setState({number:3})}>
//         <div style={{textAlign:"center"}}>
//         {this.state.number === 3 ?
//           <img src="/images/imagecolor.png" style={{width:25,height:25}}/> :
//           <img src="/images/image.png" style={{width:25,height:25}}/>
//             }
//         </div>
//         {this.state.number === 3 ?
//           <span className="icon-text-2">Image</span> :
//           <span className="icon-text-1">Image</span>
//        }
//     </div>

//         <div  className="icon-box-1"  onClick={()=>this.setState({number:4})}>
//         <div style={{textAlign:"center"}}>
//         {this.state.number === 4 ?
//           <img src="/images/qrcolor.png" style={{width:25,height:25}}/> :
//           <img src="/images/qrcode.png" style={{width:25,height:25}}/>
//        }
//       </div>
//         {this.state.number === 4 ?
//           <span  className="icon-text-2">QR Code</span>:
//           <span  className="icon-text-1">QR Code</span>
//        }
//         </div>

//         <div  className="icon-box-1"  onClick={()=>this.setState({number:5})}>
//         <div style={{textAlign:"center"}}>
//         {this.state.number === 5 ?
//           <img src="/images/shapecolor.png" style={{width:25,height:25}}/> :
//           <img src="/images/shapes.png" style={{width:25,height:25}}/>
//        }
//        </div>
//         {this.state.number === 5 ?
//           <span  className="icon-text-2">Shapes</span> :
//           <span  className="icon-text-1">Shapes</span>
//        }
//       </div>

//         <div  className="icon-box-1"  onClick={()=>this.setState({number:6})}>
//         <div style={{textAlign:"center"}}>
//         {this.state.number === 6 ?
//           <img src="/images/smartcolor.png" style={{width:25,height:25}}/> :
//           <img src="/images/smart.png" style={{width:25,height:25}}/>
//        }
//       </div>
//         {this.state.number === 6 ?
//           <span  className="icon-text-2">Smart<br/> Field</span> :
//           <span  className="icon-text-1">Smart<br/> Field</span>
//        }
//       </div>
       
//         <div  className="icon-box-1"  onClick={()=>this.setState({number:7})}>
//         <div style={{textAlign:"center",backgroundColor:"#FF9900",padding:7,borderRadius:90}}>
//         <img src="/images/download.png" style={{width:25,height:25}}/>
//         </div>
//         </div>

//    </div> 

// {/************************************************************************************************************ */}
  
//  {/*********************************TEMPLATE **************************/}
//    {this.state.number === 1 &&
//     <div style={{width:window.screen.width > 600 ? "95%" :"100%"}}>
//     {window.screen.width > 600 ?   <TemplateList /> : <Template/>}
//     </div>
//  }
 
//  {/*********************************TEXT EDITOR **************************/}
//  {this.state.number === 2 &&
//   <div className='text-editor-start'>
//   <div className='text-delete-box'>
//     <span style={{color:"#06A8AE"}} onClick={()=>this.addNewText()}>Text</span>
//     <div className='delete-button-text'>
//     <DeleteForeverOutlinedIcon style={{color:"red"}}/>
//     <span style={{color:"#ffffff"}}>Delete</span>
//     </div>
//     </div>
//     <div className='label-text-text'>
//     <span style={{color:"white"}}>Preview Text</span>
//     </div>
 
//     <div className='input-class-text'>
//   {arrayObjectsLayer &&
//   arrayObjectsLayer.map((item, index) => {
//     return item ? (
//       <textarea
//         key={index}
//         value={item.textValue} 
//         onChange={e => this.handleTextEdit(e, index)}
//         type="text"
//     placeholder='Enter text' rows="6" cols="30"
//     className='text-field-text'
//         />
//         ) : (
//           false
//         );
//     })}
  
//           </div>

//        <div className='input-class-text'>
//        {arrayObjectsLayer[indexTextSelected] ? (
//         <select className='text-field-text-select'
//           disabled={!arrayObjectsLayer[indexTextSelected]}
//           value={arrayObjectsLayer[indexTextSelected].fontFamily}
//           onChange={this.changeFontFamily}
//         >
//         <option value="Arial">Arial</option>
//           {this.state.family.map(
//             (ab, index) =>
//                 <option
//                   key={index}
//                   onClick={() => this.changeFontFamily()}
//                   value={ab}
//                 >
//                   {ab}
//                 </option>
              
//           )}
//         </select>
//        ) : (
//           <select
//             disabled={true}
//             value={"Arial"}
//             onChange={this.changeFontFamily}
//           />
//         )} 
     
//         </div>
       
//         <div style={{display:"flex",justifyContent:"center",marginTop:5}}>
//         <div className='text-editor-icon-box'>
//         <div className="text-editor-box"   onClick={() =>
//           this.changeStyle(
//             arrayObjectsLayer[indexTextSelected] &&
//               arrayObjectsLayer[indexTextSelected].fontStyle == "italic"
//               ? "normal"
//               : "italic"
//           )
//         }
//         style={
//           arrayObjectsLayer[indexTextSelected] &&
//             arrayObjectsLayer[indexTextSelected].fontStyle == "italic"
//             ? { backgroundColor: "grey" }
//             : {}
//         }>
//         <img className='img-text' src="/images/editor/italic.png" />
//         </div>

//         <div className="text-editor-box"  onClick={() =>
//           this.changeStyle(
//             arrayObjectsLayer[indexTextSelected] &&
//               arrayObjectsLayer[indexTextSelected].fontStyle == "bold"
//               ? "normal"
//               : "bold"
//           )
//         }
//         style={
//           arrayObjectsLayer[indexTextSelected] &&
//             arrayObjectsLayer[indexTextSelected].fontStyle == "bold"
//             ? { backgroundColor: "grey" }
//             : {}
//         }>
//         <img className='img-text' src="/images/editor/bold.png" />
//         </div>
        
//         <div className="text-editor-box" onClick={() =>
//           this.setUnderline(
//             arrayObjectsLayer[indexTextSelected] &&
//               arrayObjectsLayer[indexTextSelected].textDecoration == "underline"
//               ? ""
//               : "underline"
//           )
//         }
//         style={
//           arrayObjectsLayer[indexTextSelected] &&
//             arrayObjectsLayer[indexTextSelected].textDecoration == "underline"
//             ? { backgroundColor: "grey" }
//             : {}
//         }>
//         <img className='img-text' src="/images/editor/underline.png" />
//         </div>
    
       
//        {arrayObjectsLayer[indexTextSelected] ? (
//         <select className='text-field-text-select-font-size'
//            disabled={!arrayObjectsLayer[indexTextSelected]}
//            value={arrayObjectsLayer[indexTextSelected].fontSize}
//            onChange={this.changeFontSize}
//          >
//            {[...new Array(100)].map(
//              (i, index) =>
//                index > 5 && (
//                  <option
//                    key={index}
//                    onClick={() => this.changeFontSize(`${index * zoom}px`)}
//                    value={index}
//                  >
//                    {`${index}px`}
//                  </option>
//                )
//            )}
//          </select>
//        ) : (
//         <select className='text-field-text-select-font-size'
//              disabled={true}
//              value={28}
//              onChange={this.changeFontSize}
//            />
//          )}
//   </div>
// </div>

// <div style={{display:"flex",justifyContent:"center",marginTop:5}}>
// <div className='text-editor-icon-box'>
// <div className="text-editor-box"   onClick={() =>
//   this.setTextAlignLeft(
//     arrayObjectsLayer[indexTextSelected] &&
//       arrayObjectsLayer[indexTextSelected].textAlign == "left"
//       ? ""
//       : "left"
//   )
// }
// style={
//   arrayObjectsLayer[indexTextSelected] &&
//     arrayObjectsLayer[indexTextSelected].textAlign == "left"
//     ? { backgroundColor: "grey" }
//     : {}
// }>
// <img className='img-text' src="/images/editor/left.png" />
// </div>

// <div className="text-editor-box"  onClick={() =>
//   this.setTextAlignRight(
//     arrayObjectsLayer[indexTextSelected] &&
//       arrayObjectsLayer[indexTextSelected].textAlign == "right"
//       ? ""
//       : "right"
//   )
// }
// style={
//   arrayObjectsLayer[indexTextSelected] &&
//     arrayObjectsLayer[indexTextSelected].textAlign == "right"
//     ? { backgroundColor: "grey" }
//     : {}
// }>
// <img className='img-text' src="/images/editor/right.png" />
// </div>
// <div className="text-editor-box"
// onClick={() =>
//   this.setTextAlignCenter(
//     arrayObjectsLayer[indexTextSelected] &&
//       arrayObjectsLayer[indexTextSelected].textAlign == "center"
//       ? ""
//       : "center"
//   )
// }
// style={
//   arrayObjectsLayer[indexTextSelected] &&
//     arrayObjectsLayer[indexTextSelected].textAlign == "center"
//     ? { backgroundColor: "grey" }
//     : {}
// }>
// <img className='img-text' src="/images/editor/mig.png" />
// </div>
// <div className="text-editor-box"  onClick={() =>
//   this.setTextAlignJustify(
//     arrayObjectsLayer[indexTextSelected] &&
//       arrayObjectsLayer[indexTextSelected].textAlign == "justify"
//       ? ""
//       : "justify"
//   )
// }
// style={
//   arrayObjectsLayer[indexTextSelected] &&
//     arrayObjectsLayer[indexTextSelected].textAlign == "justify"
//     ? { backgroundColor: "grey" }
//     : {}
// }>
// <img className='img-text' src="/images/editor/center.png" />
// </div>
// <div className="text-editor-box"  onClick={this.tooglePallet}>
// <img className='img-text' src="/images/editor/A.png" />
// </div>
// {showPallet && (
//   <div onClick={this.tooglePallet} className="containerColors">
//     <Draggable onDrag={this.handleDrag} {...dragHandlers} >
//       <div className="containerColorPickerPalette" onClick={e => e.stopPropagation()}>
//         <ColorPickerPalette setObjColor={this.setObjColor} />
//         <div className="containerCirclePicker">
//           <CirclePicker  onChangeComplete={this.setObjColor} onChange={this.setObjColor} />
//         </div>
//         <div>
//         </div>
//       </div>
//     </Draggable>
//   </div>
// )}
// </div>
// </div>


// <div style={{display:"flex",marginTop:5,marginLeft:15}}>
// <div className='text-editor-icon-box-last'>
// <div className="text-editor-box" onClick={() =>
//   this.setTextTransformCapitalize(
//     arrayObjectsLayer[indexTextSelected] &&
//       arrayObjectsLayer[indexTextSelected].textTransform == "capitalize"
//       ? ""
//       : "capitalize"
//   )
// }
// style={
//   arrayObjectsLayer[indexTextSelected] &&
//     arrayObjectsLayer[indexTextSelected].textTransform == "capitalize"
//     ? { backgroundColor: "grey" }
//     : {}
// }>
// <img className='img-text' src="/images/editor/Aac.png" />
// </div>
// <div className="text-editor-box"   onClick={() =>this.setTextTransformLowercase(
//   arrayObjectsLayer[indexTextSelected] &&
//     arrayObjectsLayer[indexTextSelected].textTransform == "lowercase"
//     ? ""
//     : "lowercase"
// )
// }
// style={
// arrayObjectsLayer[indexTextSelected] &&
//   arrayObjectsLayer[indexTextSelected].textTransform == "lowercase"
//   ? { backgroundColor: "grey" }
//   : {}
// }>
// <img className='img-text' src="/images/editor/aau.png" />
// </div>
// <div className="text-editor-box" 
// onClick={() =>
//   this.setTextTransformUppercase(
//     arrayObjectsLayer[indexTextSelected] &&
//       arrayObjectsLayer[indexTextSelected].textTransform == "uppercase"
//       ? ""
//       : "uppercase"
//   )
// }
// style={
//   arrayObjectsLayer[indexTextSelected] &&
//     arrayObjectsLayer[indexTextSelected].textTransform == "uppercase"
//     ? { backgroundColor: "grey" }
//     : {}
// }>
// <img className='img-text' src="/images/editor/AA.png" />
// </div>



// <div className="text-editor-box">
// <img className='img-text' src="/images/editor/A.png" />

// {arrayObjectsLayer[indexTextSelected] ? (
//   <select
//     disabled={!arrayObjectsLayer[indexTextSelected]}
//     value={arrayObjectsLayer[indexTextSelected].lineHeight}
//     onChange={this.changeLineHeight}
//   >
//     {[...new Array(6)].map(
//       (i, index) =>
//         index > 0 && (
//           <option
//             key={index}
//             onClick={() => this.changeLineHeight(`${index * zoom}px`)}
//             value={index}
//           >
//             {`${index}px`}
//           </option>
//         )
//     )}
//   </select>
// ) : (
//     <select
//       disabled={true}
//       value={28}
//       onChange={this.changeLineHeight}
//     />
//   )}
//   </div>



// </div>
// </div>
// <div style={{display:"flex",justifyContent:"center"}}>
// <div className='text-editor-icon-box'>
// <span style={{color:"white",fontSize:14}}>Transparency</span>
// </div>
// </div>

// <div style={{display:"flex",justifyContent:"center"}}>

// <div className='text-editor-icon-box'>
// {arrayObjectsLayer[indexTextSelected] &&
// <Slider
// // defaultValue={30}
// //  getAriaValueText={valuetext}
// step={0.1}
// min={0}
// max={1}
// style={{color:"#ff9900"}}
// disabled={!arrayObjectsLayer[indexTextSelected]}
// value={arrayObjectsLayer[indexTextSelected].opacity}
// onChange={this.changeOpacity}
// />
//    }
// </div>
// </div>

// <div style={{display:"flex",justifyContent:"center",}}>
// <div className='text-editor-icon-box'>
// <div style={{width:"43%"}}>
// <span style={{color:"white",fontSize:14}}>Width</span>
// </div>
// <div style={{width:"45%"}}>
// <span style={{color:"white",fontSize:14}}>Height</span>
// </div>
// </div>
// </div>


// <div style={{display:"flex",justifyContent:"center"}}>
// <div className='text-editor-icon-box'>
// {arrayObjectsLayer[indexTextSelected] &&
//   <input type="number"
//   disabled={!arrayObjectsLayer[indexTextSelected]}
//   value={arrayObjectsLayer[indexTextSelected].width}
//   onChange={this.changeWidth}
//   className='text-field-height'
// />
// }
// {arrayObjectsLayer[indexTextSelected] &&
//   <input type="number"
//   disabled={!arrayObjectsLayer[indexTextSelected]}
//   value={arrayObjectsLayer[indexTextSelected].height}
//   onChange={this.changeHeight}
//   className='text-field-height'
// />
// }
// </div>
// </div>

// <div style={{display:"flex",justifyContent:"center"}}>
// <div className='text-editor-icon-box'>
// <div style={{width:"43%"}}>
// <span style={{color:"white",fontSize:14}}>Top</span>
// </div>
// <div style={{width:"45%"}}>
// <span style={{color:"white",fontSize:14}}>Left</span>
// </div>
// </div>
// </div>


// <div style={{display:"flex",justifyContent:"center"}}>
// <div className='text-editor-icon-box'>
// {arrayObjectsLayer[indexTextSelected] &&
//   <input type="number"
//   disabled={!arrayObjectsLayer[indexTextSelected]}
//   value={arrayObjectsLayer[indexTextSelected].offsetY}
//   onChange={this.changeTop}
//   className='text-field-height'
// />
// }
// {arrayObjectsLayer[indexTextSelected] &&
//   <input type="number"
//   disabled={!arrayObjectsLayer[indexTextSelected]}
//   value={arrayObjectsLayer[indexTextSelected].offsetX}
//   onChange={this.changeLeft}
//   className='text-field-height'
// />
// }

// </div>
// </div>
// <div className='text-editor-button-div'>
// <button className='text-editor-button'>
// <span className='text-editor-button-text'>Apply</span>
// </button>
// </div>
// </div>
// }
//  {/*********************************IMAGE EDITOR **************************/}
// {this.state.number === 3 &&
//   <div className='image-editor-start'>

//   <div className='image-delete-box'>
//   <span style={{color:"#06A8AE"}}>Image</span>
//   <div className='delete-button-image'>
//   <DeleteForeverOutlinedIcon style={{color:"red"}}/>
//   <span style={{color:"#ffffff"}}>Delete</span>
//   </div>
//   </div>
//    <div style={{display:"flex",justifyContent:"center"}}>

//    <button className='upload-image-button-image'>
//    <DropImage getImage={base64 => this.loadImage(base64)}>
//    <span className='upload-image-button-text-image'>Upload Image</span>
//  </DropImage>

//    </button>
//    </div>
// <div style={{height:420,marginTop:10,overflowY:"scroll"}}>
//   <div style={{height:"fit-content",display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-evenly",}}>
//   <img src= "/images/CardDesign/Vertical/Card1.jpg"  className='image2-vertical' />
//       <img src= "/images/CardDesign/Vertical/Card2.jpg"  className='image2-vertical' />
//       <img src= "/images/CardDesign/Vertical/Card3.jpg"  className='image2-vertical' />
//       <img src= "/images/CardDesign/Vertical/Card4.jpg"  className='image2-vertical' />
//       <img src= "/images/CardDesign/Vertical/Card5.jpg"  className='image2-vertical' />
//       <img src= "/images/CardDesign/Vertical/Card6.jpg"  className='image2-vertical' />
//       <img src= "/images/CardDesign/Vertical/Card7.jpg"  className='image2-vertical' />
//       <img src= "/images/CardDesign/Vertical/Card8.jpg"  className='image2-vertical' />
//       <img src= "/images/CardDesign/Vertical/Card9.jpg"  className='image2-vertical' />
//       <img src= "/images/CardDesign/Vertical/card10.jpg"  className='image2-vertical' />
//       <img src= "/images/CardDesign/Vertical/Card11.jpg"  className='image2-vertical' />
//       <img src= "/images/CardDesign/Vertical/Card12.jpg"  className='image2-vertical' />
//       <img src= "/images/CardDesign/Vertical/Card13.jpg"  className='image2-vertical' />
//       <img src= "/images/CardDesign/Vertical/Card14.jpg"  className='image2-vertical' />
//       <img src= "/images/CardDesign/Vertical/Card15.jpg"  className='image2-vertical' />
//       <img src= "/images/CardDesign/Vertical/Card16.jpg"  className='image2-vertical' />
//       <img src= "/images/CardDesign/Vertical/Card17.jpg"  className='image2-vertical' />
//       <img src= "/images/CardDesign/Vertical/Card18.jpg"  className='image2-vertical' />
//       <img src= "/images/CardDesign/Vertical/Card19.jpg"  className='image2-vertical' />
//       <img src= "/images/CardDesign/Vertical/card20.jpg"  className='image2-vertical' />

// </div>
// </div>
// <div className='apply-button-div-image'>
//   <button className='apply-button-image'>
//   <span className='apply-image'>Apply</span>
//   </button>
//   </div>
//   </div>
// }
//  {/*********************************QR CODE **************************/}
//    {this.state.number === 4 &&
//     <div className='qr-editor-start'>
//     <div className='qr-delete-box'>
//     <span style={{color:"#06A8AE"}}>QR Code</span>
//     <div className='delete-button-qr'>
//     <DeleteForeverOutlinedIcon style={{color:"red"}}/>
//     <span style={{color:"#ffffff"}}>Delete</span>
//     </div>
//     </div>

//    <div className='input-class-qr'>
// <select name="selectQr" value={this.state.selectQr}  className='text-field-qr' onChange={this.handleChange} >
//   <option value="1" >Email</option>
//   <option value="2" >Text</option>
//   <option value="3" >Number</option>
//   <option value="4" >URL</option>
//   </select>
//     </div>
// {this.state.selectQr === "1" &&
//     <div className='label-text-qr'>
//     <span style={{color:"white"}}>Email Address</span>
//     </div>
// }
// {this.state.selectQr === "1" &&
//     <div className='input-class-qr'>
//     <input type="email" className='text-field-qr' placeholder='Enter Email Address' name="qremail" value={this.state.qremail} onChange={this.handleChange}/>
//     </div>
// }
// {this.state.selectQr === "2" &&
//   <div className='label-text-qr'>
//   <span style={{color:"white"}}>Text</span>
//   </div>
// }
// {this.state.selectQr === "2" &&
//   <div className='input-class-qr'>
//   <input type="text" className='text-field-qr' placeholder='Enter Text' name="qrtext" value={this.state.qrtext} onChange={this.handleChange}/>
//   </div>
// }
// {this.state.selectQr === "3" &&
//   <div className='label-text-qr'>
//   <span style={{color:"white"}}>Number</span>
//   </div>
// }
// {this.state.selectQr === "3" &&
//   <div className='input-class-qr'>
//   <input type="number" className='text-field-qr' placeholder='Enter Number' name="qrnumber" value={this.state.qrnumber} onChange={this.handleChange}/>
//   </div>
// }
// {this.state.selectQr === "4" &&
//   <div className='label-text-qr'>
//   <span style={{color:"white"}}>URL</span>
//   </div>
// }
// {this.state.selectQr === "4" &&
//   <div className='input-class-qr'>
//   <input type="url" className='text-field-qr' placeholder='Enter Url' name="qrurl" value={this.state.qrurl} onChange={this.handleChange}/>
//   </div>
// }

//     <div className='label-text-qr'>
//     <span style={{color:"white"}}>Subject(Optional)</span>
//     </div>
//     <div className='input-class-qr'>
//     <input type="text" className='text-field-qr' placeholder='Code Subject'/>
//     </div>
//     <div className='label-text-qr'>
//     <span style={{color:"white"}}>Text(Optional)</span>
//     </div>
//     <div className='input-class-qr'>
//     <textarea type="text" className='text-field-qr' placeholder='Enter text' rows="6" cols="50"/>
//     </div>
//     <div className='label-text-qr'>
//     <span style={{color:"white"}}>Nickname</span>
//     </div>
//     <div className='input-class-qr'>
//     <select className='text-field-qr'>
//    <option value="A">NickName</option>
//    <option value="B">Banana</option>
//    <option value="C">Cranberry</option>
//    </select>
//      </div>

// <div className='qr-button-div-qr'>
//     <button className='qr-button-qr'>
//     <span className='qr-qr'>Apply</span>
//     </button>
//     </div>
//     </div>
//  }
//   {/*********************************SHAPES EDITOR **************************/}
//    {this.state.number === 5 &&
//     <div className='shapes-editor-start'>

//     <div className='shapes-delete-box'>
//  <span style={{color:"#06A8AE"}}>Type of Shape</span>
//  <div className='delete-button-shapes'
//   // onClick={()=>setOpen({open:false,open2:false,open3:false,open4:false,open5:false,open6:false})}
//   >
//  <DeleteForeverOutlinedIcon style={{color:"red"}}/>
//  <span style={{color:"#ffffff"}}>Delete</span>
//  </div>
//  </div>

// <div className='icon-box-shape-first-shape'>
// <div className="icon-box-shape" onClick={this.addNewRectangle}>
// <img src="/images/Rectangle70.png" style={{width:40,height:25}}/>
// </div>

// <div className="icon-box-shape"  onClick={this.addNewSquare}>
// <img src="/images/Rectangle73.png" style={{width:30,height:35}}/>
// </div>

// <div className="icon-box-shape" onClick={this.addNewCircle}>
// <CircleOutlinedIcon className="icon-size" style={{color:"white",fontSize:60}}/>
// </div>

// <div className="icon-box-shape" onClick={this.addNewTriangle}>
// <img src="/images/Rectangle71.png" style={{width:40,height:35}}/>
// </div>

// <div className="icon-box-shape" onClick={this.addNewLine}>
// <img src="/images/Line11.png" style={{width:40,height:35}}/>
// </div>

// <div className="icon-box-shape" onClick={this.addNewArrow}>
// <img src="/images/Line2.png" style={{width:40,height:35}}/>
// </div>
// </div>
// </div>
//  }
//  {/*********************************SMART FILED EDITOR **************************/}
//  {this.state.number === 6 &&
     
//      <div className='smartview-editor-start'>
//      <div className='smartview-delete-box'>
//  <span style={{color:"#06A8AE"}}>Smart Field</span>
//  <div className='delete-button-smartview'>
//  <DeleteForeverOutlinedIcon style={{color:"red"}}/>
//  <span style={{color:"#ffffff"}}>Delete</span>
//  </div>
//  </div>
//   <div className='input-class-smart'>
// <select className='text-field-smart' name='choose' value={this.state.choose} onChange={this.handleChangeSmart}>
// <option value="Firstname">First Name</option>
// <option value="LastName">Last Name</option>
// <option value="NickName">Nick Name</option>
// </select>
// <div className='smart-field-icon-right'>
// <AddSharpIcon  style={{color:"white"}}/>
// </div>
//  </div>
//  {/*
//  <div className='input-class-smart'>
//  <input type="text" className='text-field-smart' placeholder='First Name'/>
//  <div className='smart-field-icon-left'>
//  <ClearSharpIcon  style={{color:"white"}}/>
//  </div>
//  </div>

//  <div className='input-class-smart'>
//  <input type="text" className='text-field-smart' placeholder='Last Name'/>
//  <div className='smart-field-icon-left'>
//  <ClearSharpIcon  style={{color:"white"}}/>
//  </div>
//  </div>
//  <div className='input-class-smart'>
//  <input type="text" className='text-field-smart' placeholder='Nickname'/>
//  <div className='smart-field-icon-left'>
//  <ClearSharpIcon  style={{color:"white"}}/>
//  </div>
//  </div>
//  */}
//   </div>
  
//  }

//   {/*********************************DOWNLOAD FILE **************************/}
//  {this.state.number === 7 &&
//      <div style={{width:window.screen.width > 600 ? "95%" :"100%"}}>
//   Download File
//     </div>
//  }


//  {/****************************************************************************************** */}
//  {(this.state.number === 2 || this.state.number === 3 || this.state.number === 4 || this.state.number === 5 || this.state.number === 6 ) &&
//  <div className="right-side-div">
//  <div className='navbar-div'>
 
// <div className='navbar-div-image'>

//      <div className='navbar-div-saved-card-image'    onClick={this.imageToBlob}>
//    <ContactsIcon className='icon-image-navbar'/>
//    <span className='icon-navbar'>Saved Card</span>
//    </div>

//    <div  onClick={this.desfazer} style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:10,flexWrap:"nowrap",cursor:"pointer"}}>
// <UndoIcon  className='icon-image-navbar'        />
// <span className='icon-navbar'>Undo</span>
// </div>

// <div onClick={this.refazer} style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:10,flexWrap:"nowrap",cursor:"pointer"}}>
// <RedoIcon className='icon-image-navbar' />
// <span className='icon-navbar'>Redo</span>
// </div>

// <div  style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:10,flexWrap:"nowrap",cursor:"pointer"}}>
// <TagIcon className='icon-image-navbar'/>
// <span className='icon-navbar'>Guide</span>
// </div>

// <div  style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:10,flexWrap:"nowrap",cursor:"pointer"}}>
// <AddCardIcon className='icon-image-navbar'/>
// <a href='/choose-template' className='icon-navbar'>Create New</a>
// </div>

// <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:10,flexWrap:"nowrap",cursor:"pointer"}}>
// <Crop169Icon className='icon-image-navbar'/>
// <a  href='/horizontal-card' className='icon-navbar'>Horizontal</a>
// </div>

// <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:10,flexWrap:"nowrap",cursor:"pointer"}}>
// <CropPortraitIcon className='icon-image-navbar'/>
// <a href='/vertical-card' className='icon-navbar'>Vertical</a>
// </div>

// </div>

// <div onClick={()=>this.setState({arrayObjectsLayer: []})} style={{display:"flex",justifyContent:"center",alignItems:"center",background: "#FC4646",width:"15%",cursor:"pointer"}}>
// <DeleteForeverOutlinedIcon style={{color:"white"}}/>
// <span className='icon-navbar'>Delete Card</span>
// </div>
// </div>
//  {/*****two buttons*/}
//  <div className='front-image-button-back'>
//  <div className='front-new-image-button-back'  onClick={()=> this.props.history.push("/vertical-card")}>
//  <span className='front-new-text-image-button-back'>Front Side</span>
//  </div>
//  <div className='back-button-back'>
//  <span className='back-template-image-button-back'>Back Side</span>
//  </div>
//  </div>

// {/**************************CANVAS */}
// <div className="containerCanvas" ref={this.containerCanvas} onClick={(e)=>this.setState({new:false})}>
// <div className={`container-area`}>
// <Stage
//   scaleY={1 / zoom}
//   scaleX={1 / zoom}
//   ref={this.stageRef}
//   width={width}
//   height={height}
//   onMouseDown={e => {
//     // deselect when clicked on empty area
//     console.log(e.target)
//     console.log(e.target.getStage())
//     const clickedOnEmpty = e.target === e.target.getStage();
//     if (clickedOnEmpty) {
//       this.selectShape(null);
//     }
//   }}
// >

// <Layer>
// {
//   arrayObjectsLayer &&
//   arrayObjectsLayer.map((item, index) => {
//     return (
//       item.type === 'square' ?
//         <Retangulo
//           key={index}
//           shapeProps={item}
//           isSelected={
//             selectedObject && item.id === selectedObject.id
//           }
//           onSelect={() => {
//             this.selectShape(item);
//           }}
//           onChange={newAttrs => {
//             const item = arrayObjectsLayer.slice();
//             item[index] = newAttrs;
//             this.setArrayObject(item);
//           }}
//         />
//         :
//         item.type === 'triangule' ?
//           <Triangulo
//             key={index}
//             shapeProps={item}
//             isSelected={
//               selectedObject && item.id === selectedObject.id
//             }
//             onSelect={() => {
//               this.selectShape(item);
//             }}
//             onChange={newAttrs => {
//               const item = arrayObjectsLayer.slice();
//               item[index] = newAttrs;
//               this.setArrayObject(item);
//             }}
//           />
//           :
//           item.type === 'line' ?
//           <Lineo
//             key={index}
//             shapeProps={item}
//             isSelected={
//               selectedObject && item.id === selectedObject.id
//             }
//             onSelect={() => {
//               this.selectShape(item);
//             }}
//             onChange={newAttrs => {
//               const item = arrayObjectsLayer.slice();
//               item[index] = newAttrs;
//               this.setArrayObject(item);
//             }}
//           />
//           :
//           item.type === 'circle' ?
//             <Circulo
//               key={index}
//               shapeProps={item}
//               isSelected={
//                 selectedObject && item.id === selectedObject.id
//               }
//               onSelect={() => {
//                 this.selectShape(item);
//               }}
//               onChange={newAttrs => {
//                 const item = arrayObjectsLayer.slice();
//                 item[index] = newAttrs;
//                 this.setArrayObject(item);
//               }}
//             />
//             :
//             item.type === 'arrow' ?
//             <Arrowo
//               key={index}
//               shapeProps={item}
//               isSelected={
//                 selectedObject && item.id === selectedObject.id
//               }
//               onSelect={() => {
//                 this.selectShape(item);
//               }}
//               onChange={newAttrs => {
//                 const item = arrayObjectsLayer.slice();
//                 item[index] = newAttrs;
//                 this.setArrayObject(item);
//               }}
//             />
//             :
//             item.type === 'rectangle' ?
//             <Squareo
//               key={index}
//               shapeProps={item}
//               isSelected={
//                 selectedObject && item.id === selectedObject.id
//               }
//               onSelect={() => {
//                 this.selectShape(item);
//               }}
//               onChange={newAttrs => {
//                 const item = arrayObjectsLayer.slice();
//                 item[index] = newAttrs;
//                 this.setArrayObject(item);
//               }}
//             />
//             :
//             item.type === 'image' ?
//               <Imagem
//                 key={index}
//                 shapeProps={item}
//                 isSelected={
//                   selectedObject && item.id === selectedObject.id
//                 }
//                 onSelect={() => {
//                   this.selectShape(item);
//                 }}
//                 onChange={newAttrs => {
//                   const item = arrayObjectsLayer.slice();
//                   item[index] = newAttrs;
//                   this.setArrayObject(item);
//                 }}
//               />
//               :
//               item.type === 'text' ?
//                 <Texto
//                   key={index}
//                   onSelect={() => {
//                     this.selectShape(item, index + 1);
//                   }}
//                   shapeProps={item}
//                  isSelected={
//                     selectedObject && item.id === selectedObject.id
//                   }
//                   handleTextDblClick={e =>
//                     this.handleTextDblClick(e, index)
//                   }
//                   onChange={newAttrs => {
//                     const item = arrayObjectsLayer.slice();
//                     item[index] = newAttrs;
//                     this.setArrayObject(item);
//                   }}
//                   // onChange={e => this.handleTextEdit(e, index)}
//                 />
//                 :
//                 false
//     )
//   }
//   )
// }

// {/***** 
// <Group ref={this.groupRef} draggable x={50} y={100}>
// <Html divProps={{ style: {} }}>
// <div style={{marginTop:60}}>
//  {this.state.selectQr === "1" && <QRCode value={this.state.qremail} />}
//  {this.state.selectQr === "2" && <QRCode value={this.state.qrtext} />}  
//  {this.state.selectQr === "3" && <QRCode value={this.state.qrnumber} />}  
//  {this.state.selectQr === "4" && <QRCode value={this.state.qrurl} />}  
//    </div>
// </Html>
// <Rect width={280} height={300} fill="" />
// </Group>
// <Transformer ref={this.trRef} />

// <Group ref={this.groupRef} draggable x={50} y={100}>
// <Html divProps={{ style: {} }}>
// <div style={{marginTop:30,border:"2px soild red"}} onClick={(e)=>this.setState({new:true})}>
// <span style={{fontSize:40}}>
// {this.state.choose} 
// </span>
//    </div>
// </Html>
// <Rect width={150} height={50} fill="" />
// </Group>
// <Transformer ref={this.trRef} rotateEnabled={this.state.new === true ? true : false}  resizeEnabled={this.state.new === true ? true : false}/> 
//  */}
// </Layer>

// </Stage>
// </div>
// </div>



// {/**div end */}
//   </div>
//  }




//         </div>
//     )
//   }
// }

// export default BackVerticalCard

import React, { Component } from 'react'
// import './HorizontalCard.css'
import axios from "axios";

import TemplateList from "./TemplateList"
import Template from "./responsiveVerticalCard/Template"

// import TransformerComponent from './TransformerComponent'

import  "./Image.css"
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import ClearSharpIcon from '@mui/icons-material/ClearSharp';
import ContactsIcon from '@mui/icons-material/Contacts';
import AddCardIcon from '@mui/icons-material/AddCard';
import TagIcon from '@mui/icons-material/Tag';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import Crop169Icon from '@mui/icons-material/Crop169';
import CropPortraitIcon from '@mui/icons-material/CropPortrait';
import Slider from '@mui/material/Slider';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import { Stage, Layer,Group, Rect, Transformer,Image,Text} from "react-konva";
import Konva from "konva";
import ColorPickerPalette from './ColorPickerPalette'
import { CirclePicker } from 'react-color'
import { DropImage } from "./DropImage";
import Draggable from 'react-draggable'
import {Retangulo,Triangulo,Texto,Circulo,Imagem,Background,Squareo,Lineo,Arrowo,Transformtext} from "./Formas";
import QRCode from 'react-qr-code'
import { Html } from 'react-konva-utils'



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

function downloadURI(uri, name) {
  var link = document.createElement('a');
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

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
export class BackVerticalCard extends Component {
    constructor(props) {
      super(props)
      this.stageRef = React.createRef();
      this.containerCanvas = React.createRef();
      this.trRef = React.createRef(null);
      this.groupRef = React.createRef(null);
     this.state = {
      selectedShapeName: "",
      selectedId:{},
      fill: "black",
      textX: 0,
      textY: 0,
      textYTextArea: 0,
      textXTextArea: 0,
      textValue: "Two clicks to edit1",
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
      offsetX:0,
      textTransform:"lowercase",
       newData:[],
       bg:`https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fview&psig=AOvVaw2xsxwNQA-WF5qPtK8JIzHl&ust=1650098942557000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPCkrNzXlfcCFQAAAAAdAAAAABAD`,
       qr:false,
       new:true,
       choose:"",
         number:2,
         arrayObjectsLayer: [],
         family:["Tahoma","Verdana","Georgia","Times New Roman","Arial","Helvetica","Impact","Courier New","serif","sans-serif","cursive","fantasy","monospace"],
         kanvasWidth: 18.9,
         kanvasHeight: 10,
         widthKanvas: 700,
         heightKanvas: 850,
         showPallet: false,
         selectedObject: {},
         showBackground: false,
         backgroundOn: true,
         indexTextSelected: 0,
         zoom: 2,
         selectQr : "",
         qremail:"",
        qrtext:"",
        qrnumber:"",
        qrurl:"",
         imgBase64: undefined,
        rectangles: 
          [
            {
              textX: 0,
                fill: "black",
                textY: 0,
                textValue: "double click to edit and enter to finish",
                fontSize: 30,
                width: 400,
                fontStyle: "normal",
                align: "left",
                id:"1",
                offsetY:0,
                offsetX:0,
                textYTextArea: 0,
                textXTextArea: 0,
            },
            {
              textX: 0,
                fill: "black",
                textY: 0,
                textValue: "double cl",
                fontSize: 30,
                width: 400,
                fontStyle: "normal",
                align: "left",
                id:"2",
                offsetY:0,
                offsetX:0,
                textYTextArea: 0,
                textXTextArea: 0,
            }
              ],
        
         newTextObj: {
           textEditVisible: true,
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
           offsetX:0,
           textTransform:"lowercase"
         },
         newCircleObj: {
           y: 100,
           x: 100,
           radius: 50,
          //  fill: "#637EF7",
          stroke:'black',
          tension:1,
        strokeWidth: 1,
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
          //  fill: "#637EF7",
           id: 0,
           stroke:'black',
           tension:1,
         strokeWidth: 1,
           type: 'square',
         },
         newRectangleObj: {
           y: 100,
           x: 100,
           width: 150,
           height: 100,
          //  fill: "#637EF7",
          stroke:'black',
          tension:1,
        strokeWidth: 1,
           id: 0,
           type: 'rectangle',
         },
         newTriangleObj: {
           y: 100,
           x: 100,
           sides: 3,
           radius: 80,
          //  fill: "#637EF7",
          stroke:'black',
          tension:1,
        strokeWidth: 1,
           id: 0,
           type: 'triangule',
         },
     
         newLineObj: {
           y: 100,
           x: 100,
           width: 50,
           height: 5,
          //  points: [10, 10, 10, 10, 10, 10, 100, 100],
          points:[0, 0, 0, 0, 350, 0],
           fill: "black",
           stroke:'black',
          //  tension:0.5,
          strokeWidth:1,
           id: 0,
           type: 'line',
         },
         newArrowObj: {
           y: 100,
           x: 100,
           width: 50,
           height: 50,
          //  points: [10, 10, 10, 10, 10, 10, 100, 100],
          points:[0, 0, 0, 0, 350, 0],
           fill: "black",
           stroke:'black',
           tension:0.5,
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
         },
         imagesrc :[
           {
             id:"1",
             src:"/images/CardDesign/Horizontal/Card1+.jpg"
         },
         {
          id:"2",
          src:"/images/CardDesign/Horizontal/Card1.jpg"
      },
      {
        id:"3",
        src:"/images/CardDesign/Horizontal/Card2.jpg"
    },
    {
      id:"4",
      src:"/images/CardDesign/Horizontal/Card2+.jpg"
  }
         ]
      }
    }
    //  handleSave = async () => {
    //   if (handlers) {
    //     setSaving(true)
    //     const exportedTemplate = handlers.templateHandler.exportTemplate()
    //     const savedTemplate = await api.createTemplate(exportedTemplate)
    //     setTemplates([...templates, savedTemplate])
    //     setSaving(false)
    //   }
    // }


    handleStageMouseDown = e => {
      console.log(e.target.getStage())
      const clickedOnEmpty = e.target === e.target.getStage();
 if (clickedOnEmpty) {
        this.selectShape(null);
      }


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

     handleExport = () => {
      const dataURL  = this.stageRef.current.toDataURL();
      console.log(dataURL);
      downloadURI(dataURL, 'stage.png');
     }
    async componentDidMount() {
    saveHistory(this.state.arrayObjectsLayer)
      await localStorage.setItem("defaultState", JSON.stringify(this.state));
      //for localstorage data in to state data
      const localdata = await localStorage.getItem("stateSaved");
      this.setState({ newData: localdata })
      const state = await localStorage.getItem("stateSaved");
      if (state) this.setState(JSON.parse(state))
      else this.setState({ selectedObject: this.state.arrayObjectsLayer[0] })
  
    }
    
    // TEXT EDITOR FUNCTIONALITY
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
        console.log(event.target.value)
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
    setTextAlignJustify = justify => {
      let { arrayObjectsLayer, indexTextSelected } = this.state;
      if (arrayObjectsLayer[indexTextSelected])
        arrayObjectsLayer[indexTextSelected].textAlign = justify;
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
    addNewText = () => {
      let { arrayObjectsLayer, newTextObj } = this.state;
      newTextObj.id = Math.round(Math.random() * 10000);
      arrayObjectsLayer.push(newTextObj);
      let selectedObject = newTextObj;
      saveHistory(arrayObjectsLayer)
  
      this.setState({
        arrayObjectsLayer, selectedObject,
        number:2
      });
    };
    //-------------------------- SHAPES
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
    // -------------------IMAGE
    addNewImage = image => {
      let { arrayObjectsLayer, newImageObj } = this.state;
      newImageObj.id = Math.round(Math.random() * 10000);
      newImageObj.image = image;
      arrayObjectsLayer.push(newImageObj);
      saveHistory(arrayObjectsLayer)
      this.setState({arrayObjectsLayer,});
    };

    loadImage = base64 => {
      var image = new window.Image();
      image.src = `data:image/png;base64,${base64}`;
      console.log(image)
      image.addEventListener("load", this.addNewImage(image));
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
      console.log(blob)
      this.savePng(blob)
    }
    //if we want to save card in png then use this function
    imageToBlob = () => {
      const { zoom } = this.state
      console.log("clickex")
      console.log(zoom)
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
        console.log(block)
        // Get the content type of the image
        const contentType = block[0].split(":")[1];// In this case "image/gif"
        console.log(contentType)
        // get the real base64 content of the file
        const realData = block[1].split(",")[1];// In this case "R0lGODlhPQBEAPeoAJosM...."
        console.log(realData)
        this.setState({
          showBackground: false
        })
        // Convert it to a blob to upload
        return this.b64toBlob(realData, contentType);
      }, 200);
    }
  
    savePng = async blob => {
      console.log(blob)
      var formData = new FormData();
      formData.append('profile', 'display')
      formData.append('filename', `${Math.floor(Math.random() * 1000)}.png`)
      formData.append('totalfilesize', blob.size)
      formData.append('file', blob)
      formData.append('details', JSON.stringify(this.state.arrayObjectsLayer))
      console.log(...formData)
      localStorage.setItem("formdata", blob);
      // fetch('http://localhost:5000/product', {
      //   method: 'POST',
      //   body:JSON.stringify(formData)
      // })
      //  axios.post(`http://localhost:5000/product`,formData,{ headers: { 'Content-Type':'application/x-www-form-urlencoded'} })
      //  console.log(formData)
      //  .then(response => 
      //     console.log(response))
      //     // response.json())s
      //   .then(function (json) {
        //   console.log(json)
        //   if (json.success) {
        //     setTimeout(() => {
        //       window.open(json.files[0].url, "_blank")
        //     }, 500);
        //   }
        // },
        //   error => {
        //     return error;
        //   }
        // )
   }
//--------------COLOR  
tooglePallet = () => {
  if (this.state.selectedObject)
    this.setState({
      showPallet: !this.state.showPallet
    });
};
setObjColor = color => {
  let arrayObjectsLayer = this.state.arrayObjectsLayer;
  let selectedObject = { ...this.state.selectedObject };
console.log(arrayObjectsLayer)
console.log(selectedObject)
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

//---------UNDO REDO
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
//ARRAY OBJECT
setArrayObject = arrayObjectsLayer => {
  saveHistory(arrayObjectsLayer)

  this.setState({
    arrayObjectsLayer,
  });
};
 // functions de arrastar o trem da cor
 onStart = () => {
  this.setState({ activeDrags: ++this.state.activeDrags });
};

onStop = () => {
  this.setState({ activeDrags: --this.state.activeDrags });
};
backgroundToogle = () => {
  this.setState({
    backgroundOn: !this.state.backgroundOn
  })
};
handleChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value,
  });
};
// handleTextEdit = (e, index) => {
//   let { arrayObjectsLayer } = this.state;
//   arrayObjectsLayer[index].textValue = e.target.value;
//   saveHistory(arrayObjectsLayer)

//   this.setState({
//     arrayObjectsLayer,
//   });
// };
// addNewText = () => {
//   let { arrayObjectsLayer, newTextObj } = this.state;
//   newTextObj.id = Math.round(Math.random() * 10000);
//   arrayObjectsLayer.push(newTextObj);
//   let selectedObject = newTextObj;
//   saveHistory(arrayObjectsLayer)

//   this.setState({
//     arrayObjectsLayer, selectedObject,
//     number:2
//   });
// };
handleChangeSmart = (e) => {
  console.log(e.target.value)
  this.setState({
    [e.target.name]: e.target.value,
  });

};

saveEverything = async () => {
  // const result = JSON.stringify(this.state.arrayObjectsLayer);
  // console.log(result)
  await localStorage.setItem("stateSaved", JSON.stringify(this.state.arrayObjectsLayer));
};

deleteSavedState = async () => {
  console.log("clicked")
  await localStorage.removeItem("stateSaved");
  const state = await localStorage.getItem("defaultState");
  if (state) this.setState(JSON.parse(state));
};

  // -------------------------------------------------------TEXT EDITOR FUNCTIONALITY
  handleTextClick = (e, index) => {
    console.log('selecttext')
    const absPos = e.target.getAbsolutePosition();
    const stageBox = this.stageRef.current.container().getBoundingClientRect();
    let { rectangles } = this.state;
    rectangles[index].textXTextArea =(stageBox.left + absPos.x + this.containerCanvas.current.scrollLeft) / this.state.zoom;
    rectangles[index].textYTextArea =stageBox.bottom + absPos.y - stageBox.height + 40 + this.containerCanvas.current.scrollTop;
    this.setState({
      rectangles,
    });
  };
  selectText = (selectedId, index = undefined) => {
    console.log('selecttext')
    let { rectangles, indexTextSelected } = this.state;
   if (index) {
      indexTextSelected = index - 1;
   } else {
      if (rectangles[indexTextSelected]) {
        indexTextSelected = undefined;
      }
    }
    this.setState({
      selectedId,
      rectangles,
      indexTextSelected,
    });
  };

  setTextObject = rectangles => {
    this.setState({
     rectangles,
   });
 };
 handleTempEdit = (e, index) => {
  let { rectangles } = this.state;
  rectangles[index].textValue = e.target.value;
 this.setState({
    rectangles,
  });
};
  render() {
    console.log( this.state.rectangles)
    console.log(this.state.choose)
      console.log(this.state.arrayObjectsLayer)
     console.log(this.state.newTextObj)
      console.log(this.state.selectedObject)
      console.log(this.state.newData)
      const {selectedObject, arrayObjectsLayer, indexTextSelected, showPallet, widthKanvas, heightKanvas, backgroundOn, showBackground,zoom ,selectedId} = this.state;
      const width = (widthKanvas) / zoom// cm to pixel
      const height = (heightKanvas) / zoom// cm to pixel
  
      const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
   return (
        <div style={{display:"flex"}}>
     
        <div className="back-div-1">
         <div className="icon-box-1">
        <div style={{textAlign:"center"}} onClick={()=>this.setState({number:1})}>
        {this.state.number === 1 ?  
        <img src="/images/Tempcolor.png" style={{width:25,height:25}}/>
        :      <img src="/images/template.png" style={{width:25,height:25}}/>
        }
        </div>
        {this.state.number === 1 ?  
          <span  className="icon-text-2" >Template</span>
          :  <span  className="icon-text-1" >Template</span>
          }
      </div>
  
        <div  className="icon-box-1"  >
        <div style={{textAlign:"center"}} onClick={()=>this.setState({number:2})} >
        {this.state.number === 2 ?
          <img src="/images/textcolor.png" style={{width:25,height:25}}/> :
          <img src="/images/text.png" style={{width:25,height:25}}/>
       }
      </div>
      {this.state.number === 2 ?
        <span className="icon-text-2" >Text</span> :
        <span className="icon-text-1">Text</span>
     }
      </div>

        <div  className="icon-box-1"  onClick={()=>this.setState({number:3})}>
        <div style={{textAlign:"center"}}>
        {this.state.number === 3 ?
          <img src="/images/imagecolor.png" style={{width:25,height:25}}/> :
          <img src="/images/image.png" style={{width:25,height:25}}/>
            }
        </div>
        {this.state.number === 3 ?
          <span className="icon-text-2">Image</span> :
          <span className="icon-text-1">Image</span>
       }
    </div>

        <div  className="icon-box-1"  onClick={()=>this.setState({number:4})}>
        <div style={{textAlign:"center"}}>
        {this.state.number === 4 ?
          <img src="/images/qrcolor.png" style={{width:25,height:25}}/> :
          <img src="/images/qrcode.png" style={{width:25,height:25}}/>
       }
      </div>
        {this.state.number === 4 ?
          <span  className="icon-text-2">QR Code</span>:
          <span  className="icon-text-1">QR Code</span>
       }
        </div>

        <div  className="icon-box-1"  onClick={()=>this.setState({number:5})}>
        <div style={{textAlign:"center"}}>
        {this.state.number === 5 ?
          <img src="/images/shapecolor.png" style={{width:25,height:25}}/> :
          <img src="/images/shapes.png" style={{width:25,height:25}}/>
       }
       </div>
        {this.state.number === 5 ?
          <span  className="icon-text-2">Shapes</span> :
          <span  className="icon-text-1">Shapes</span>
       }
      </div>

        <div  className="icon-box-1"  onClick={()=>this.setState({number:6})}>
        <div style={{textAlign:"center"}}>
        {this.state.number === 6 ?
          <img src="/images/smartcolor.png" style={{width:25,height:25}}/> :
          <img src="/images/smart.png" style={{width:25,height:25}}/>
       }
      </div>
        {this.state.number === 6 ?
          <span  className="icon-text-2">Smart<br/> Field</span> :
          <span  className="icon-text-1">Smart<br/> Field</span>
       }
      </div>
       
        <div  className="icon-box-1"  onClick={()=>this.handleExport()}>
        <div style={{textAlign:"center",backgroundColor:"#FF9900",padding:7,borderRadius:90}}>
        <img src="/images/download.png" style={{width:25,height:25}}/>
        </div>
        </div>

   </div> 

  
 {/*********************************TEMPLATE **************************/}
   {this.state.number === 1 &&
    <div style={{width:window.screen.width > 600 ? "95%" :"100%"}}>
    {window.screen.width > 600 ?   <TemplateList /> : <Template/>}
    </div>
 }
 
 {/*********************************TEXT EDITOR **************************/}
 {this.state.number === 2 &&
  <div className='text-editor-start'>
  <div className='text-delete-box'>
    <span style={{color:"#06A8AE"}} onClick={()=>this.addNewText()}>Text</span>
    <div className='delete-button-text' >
    <DeleteForeverOutlinedIcon style={{color:"red"}}/>
    <span style={{color:"#ffffff"}}>Delete</span>
    </div>
    </div>
    <div className='label-text-text'>
    <span style={{color:"white"}}>Preview Text</span>
    </div>
 
    <div className='input-class-text'>
  {arrayObjectsLayer &&
  arrayObjectsLayer.map((item, index) => {
    return item ? (
      <textarea
        key={index}
        value={item.textValue} 
        onChange={e => this.handleTextEdit(e, index)}
        type="text"
    placeholder='Enter text' rows="6" cols="30"
    className='text-field-text'
        />
        ) : (
          false
        );
    })}
  
          </div>

       <div className='input-class-text'>
       {arrayObjectsLayer[indexTextSelected] ? (
        <select className='text-field-text-select'
          disabled={!arrayObjectsLayer[indexTextSelected]}
          value={arrayObjectsLayer[indexTextSelected].fontFamily}
          onChange={this.changeFontFamily}
        >
        <option value="Arial">Arial</option>
          {this.state.family.map(
            (ab, index) =>
                <option
                  key={index}
                  onClick={() => this.changeFontFamily()}
                  value={ab}
                >
                  {ab}
                </option>
              
          )}
        </select>
       ) : (
          <select
            disabled={true}
            value={"Arial"}
            onChange={this.changeFontFamily}
          />
        )} 
     
        </div>
       
        <div style={{display:"flex",justifyContent:"center",marginTop:5}}>
        <div className='text-editor-icon-box'>
        <div className="text-editor-box"   onClick={() =>
          this.changeStyle(
            arrayObjectsLayer[indexTextSelected] &&
              arrayObjectsLayer[indexTextSelected].fontStyle == "italic"
              ? "normal"
              : "italic"
          )
        }
        style={
          arrayObjectsLayer[indexTextSelected] &&
            arrayObjectsLayer[indexTextSelected].fontStyle == "italic"
            ? { backgroundColor: "grey" }
            : {}
        }>
        <img className='img-text' src="/images/editor/italic.png" />
        </div>

        <div className="text-editor-box"  onClick={() =>
          this.changeStyle(
            arrayObjectsLayer[indexTextSelected] &&
              arrayObjectsLayer[indexTextSelected].fontStyle == "bold"
              ? "normal"
              : "bold"
          )
        }
        style={
          arrayObjectsLayer[indexTextSelected] &&
            arrayObjectsLayer[indexTextSelected].fontStyle == "bold"
            ? { backgroundColor: "grey" }
            : {}
        }>
        <img className='img-text' src="/images/editor/bold.png" />
        </div>
        
        <div className="text-editor-box" onClick={() =>
          this.setUnderline(
            arrayObjectsLayer[indexTextSelected] &&
              arrayObjectsLayer[indexTextSelected].textDecoration == "underline"
              ? ""
              : "underline"
          )
        }
        style={
          arrayObjectsLayer[indexTextSelected] &&
            arrayObjectsLayer[indexTextSelected].textDecoration == "underline"
            ? { backgroundColor: "grey" }
            : {}
        }>
        <img className='img-text' src="/images/editor/underline.png" />
        </div>
    
       
       {arrayObjectsLayer[indexTextSelected] ? (
        <select className='text-field-text-select-font-size'
           disabled={!arrayObjectsLayer[indexTextSelected]}
           value={arrayObjectsLayer[indexTextSelected].fontSize}
           onChange={this.changeFontSize}
         >
           {[...new Array(100)].map(
             (i, index) =>
               index > 5 && (
                 <option
                   key={index}
                   onClick={() => this.changeFontSize(`${index * zoom}px`)}
                   value={index}
                 >
                   {`${index}px`}
                 </option>
               )
           )}
         </select>
       ) : (
        <select className='text-field-text-select-font-size'
             disabled={true}
             value={28}
             onChange={this.changeFontSize}
           />
         )}
  </div>
</div>

<div style={{display:"flex",justifyContent:"center",marginTop:5}}>
<div className='text-editor-icon-box'>
<div className="text-editor-box"   onClick={() =>
  this.setTextAlignLeft(
    arrayObjectsLayer[indexTextSelected] &&
      arrayObjectsLayer[indexTextSelected].textAlign == "left"
      ? ""
      : "left"
  )
}
style={
  arrayObjectsLayer[indexTextSelected] &&
    arrayObjectsLayer[indexTextSelected].textAlign == "left"
    ? { backgroundColor: "grey" }
    : {}
}>
<img className='img-text' src="/images/editor/left.png" />
</div>

<div className="text-editor-box"  onClick={() =>
  this.setTextAlignRight(
    arrayObjectsLayer[indexTextSelected] &&
      arrayObjectsLayer[indexTextSelected].textAlign == "right"
      ? ""
      : "right"
  )
}
style={
  arrayObjectsLayer[indexTextSelected] &&
    arrayObjectsLayer[indexTextSelected].textAlign == "right"
    ? { backgroundColor: "grey" }
    : {}
}>
<img className='img-text' src="/images/editor/right.png" />
</div>
<div className="text-editor-box"
onClick={() =>
  this.setTextAlignCenter(
    arrayObjectsLayer[indexTextSelected] &&
      arrayObjectsLayer[indexTextSelected].textAlign == "center"
      ? ""
      : "center"
  )
}
style={
  arrayObjectsLayer[indexTextSelected] &&
    arrayObjectsLayer[indexTextSelected].textAlign == "center"
    ? { backgroundColor: "grey" }
    : {}
}>
<img className='img-text' src="/images/editor/mig.png" />
</div>
<div className="text-editor-box"  onClick={() =>
  this.setTextAlignJustify(
    arrayObjectsLayer[indexTextSelected] &&
      arrayObjectsLayer[indexTextSelected].textAlign == "justify"
      ? ""
      : "justify"
  )
}
style={
  arrayObjectsLayer[indexTextSelected] &&
    arrayObjectsLayer[indexTextSelected].textAlign == "justify"
    ? { backgroundColor: "grey" }
    : {}
}>
<img className='img-text' src="/images/editor/center.png" />
</div>
<div className="text-editor-box"  onClick={this.tooglePallet}>
<img className='img-text' src="/images/editor/A.png" />
</div>
{showPallet && (
  <div onClick={this.tooglePallet} className="containerColors">
    <Draggable onDrag={this.handleDrag} {...dragHandlers} >
      <div className="containerColorPickerPalette" onClick={e => e.stopPropagation()}>
        <ColorPickerPalette setObjColor={this.setObjColor} />
        <div className="containerCirclePicker">
          <CirclePicker  onChangeComplete={this.setObjColor} onChange={this.setObjColor} />
        </div>
        <div>
        </div>
      </div>
    </Draggable>
  </div>
)}
</div>
</div>


<div style={{display:"flex",marginTop:5,marginLeft:15}}>
<div className='text-editor-icon-box-last'>
<div className="text-editor-box" onClick={() =>
  this.setTextTransformCapitalize(
    arrayObjectsLayer[indexTextSelected] &&
      arrayObjectsLayer[indexTextSelected].textTransform == "capitalize"
      ? ""
      : "capitalize"
  )
}
style={
  arrayObjectsLayer[indexTextSelected] &&
    arrayObjectsLayer[indexTextSelected].textTransform == "capitalize"
    ? { backgroundColor: "grey" }
    : {}
}>
<img className='img-text' src="/images/editor/Aac.png" />
</div>
<div className="text-editor-box"   onClick={() =>this.setTextTransformLowercase(
  arrayObjectsLayer[indexTextSelected] &&
    arrayObjectsLayer[indexTextSelected].textTransform == "lowercase"
    ? ""
    : "lowercase"
)
}
style={
arrayObjectsLayer[indexTextSelected] &&
  arrayObjectsLayer[indexTextSelected].textTransform == "lowercase"
  ? { backgroundColor: "grey" }
  : {}
}>
<img className='img-text' src="/images/editor/aau.png" />
</div>
<div className="text-editor-box" 
onClick={() =>
  this.setTextTransformUppercase(
    arrayObjectsLayer[indexTextSelected] &&
      arrayObjectsLayer[indexTextSelected].textTransform == "uppercase"
      ? ""
      : "uppercase"
  )
}
style={
  arrayObjectsLayer[indexTextSelected] &&
    arrayObjectsLayer[indexTextSelected].textTransform == "uppercase"
    ? { backgroundColor: "grey" }
    : {}
}>
<img className='img-text' src="/images/editor/AA.png" />
</div>



<div className="text-editor-box-line-height">
<img className='img-text' src="/images/editor/A.png" />

{arrayObjectsLayer[indexTextSelected] ? (
  <select className='line-height'
    disabled={!arrayObjectsLayer[indexTextSelected]}
    value={arrayObjectsLayer[indexTextSelected].lineHeight}
    onChange={this.changeLineHeight}
  >
    {[...new Array(6)].map(
      (i, index) =>
        index > 0 && (
          <option
            key={index}
            onClick={() => this.changeLineHeight(`${index * zoom}px`)}
            value={index}
          >
            {`${index}px`}
          </option>
        )
    )}
  </select>
) : (
    <select
      disabled={true}
      value={28}
      onChange={this.changeLineHeight}
    />
  )}
  </div>



</div>
</div>
<div style={{display:"flex",justifyContent:"center"}}>
<div className='text-editor-icon-box'>
<span style={{color:"white",fontSize:14}}>Transparency</span>
</div>
</div>

<div style={{display:"flex",justifyContent:"center"}}>

<div className='text-editor-icon-box'>
{arrayObjectsLayer[indexTextSelected] &&
<Slider
// defaultValue={30}
//  getAriaValueText={valuetext}
step={0.1}
min={0}
max={1}
style={{color:"#ff9900"}}
disabled={!arrayObjectsLayer[indexTextSelected]}
value={arrayObjectsLayer[indexTextSelected].opacity}
onChange={this.changeOpacity}
/>
   }
</div>
</div>

<div style={{display:"flex",justifyContent:"center",}}>
<div className='text-editor-icon-box'>
<div style={{width:"43%"}}>
<span style={{color:"white",fontSize:14}}>Width</span>
</div>
<div style={{width:"45%"}}>
<span style={{color:"white",fontSize:14}}>Height</span>
</div>
</div>
</div>


<div style={{display:"flex",justifyContent:"center"}}>
<div className='text-editor-icon-box'>
{arrayObjectsLayer[indexTextSelected] &&
  <input type="number"
  disabled={!arrayObjectsLayer[indexTextSelected]}
  value={arrayObjectsLayer[indexTextSelected].width}
  onChange={this.changeWidth}
  className='text-field-height'
/>
}
{arrayObjectsLayer[indexTextSelected] &&
  <input type="number"
  disabled={!arrayObjectsLayer[indexTextSelected]}
  value={arrayObjectsLayer[indexTextSelected].height}
  onChange={this.changeHeight}
  className='text-field-height'
/>
}
</div>
</div>

<div style={{display:"flex",justifyContent:"center"}}>
<div className='text-editor-icon-box'>
<div style={{width:"43%"}}>
<span style={{color:"white",fontSize:14}}>Top</span>
</div>
<div style={{width:"45%"}}>
<span style={{color:"white",fontSize:14}}>Left</span>
</div>
</div>
</div>


<div style={{display:"flex",justifyContent:"center"}}>
<div className='text-editor-icon-box'>
{arrayObjectsLayer[indexTextSelected] &&
  <input type="number"
  disabled={!arrayObjectsLayer[indexTextSelected]}
  value={arrayObjectsLayer[indexTextSelected].offsetY}
  onChange={this.changeTop}
  className='text-field-height'
/>
}
{arrayObjectsLayer[indexTextSelected] &&
  <input type="number"
  disabled={!arrayObjectsLayer[indexTextSelected]}
  value={arrayObjectsLayer[indexTextSelected].offsetX}
  onChange={this.changeLeft}
  className='text-field-height'
/>
}

</div>
</div>
<div className='text-editor-button-div'>
<button className='text-editor-button'>
<span className='text-editor-button-text'>Apply</span>
</button>
</div>
</div>
}
 {/*********************************IMAGE EDITOR **************************/}
{this.state.number === 3 &&
  <div className='image-editor-start'>

  <div className='image-delete-box'>
  <span style={{color:"#06A8AE"}}>Image</span>
  <div className='delete-button-image' onClick={()=>this.setState({selectedObject:""})}>
  <DeleteForeverOutlinedIcon style={{color:"red"}}/>
  <span style={{color:"#ffffff"}}>Delete</span>
  </div>
  </div>
   <div style={{display:"flex",justifyContent:"center"}}>

   <button className='upload-image-button-image'>
   <DropImage getImage={base64 => this.loadImage(base64)}>
   <span className='upload-image-button-text-image'>Upload Image</span>
 </DropImage>

   </button>
   </div>
<div style={{height:420,marginTop:10,overflowY:"scroll"}}>
  <div style={{height:"fit-content",display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-between",}}>
  {this.state.imagesrc.map(image=> (
  <img key={image.id} src= {image.src}  className="image1" />
 
  ))}
</div>
</div>
<div className='apply-button-div-image'>
  <button className='apply-button-image'>
  <span className='apply-image'>Apply</span>
  </button>
  </div>
  </div>
}
 {/*********************************QR CODE **************************/}
   {this.state.number === 4 &&
    <div className='qr-editor-start'>
    <div className='qr-delete-box'>
    <span style={{color:"#06A8AE"}} onClick={()=>this.setState({selectQr:"0"})}>QR Code</span>
    <div className='delete-button-qr'>
    <DeleteForeverOutlinedIcon style={{color:"red"}}/>
    <span style={{color:"#ffffff"}}>Delete</span>
    </div>
    </div>

   <div className='input-class-qr'>
<select name="selectQr" value={this.state.selectQr}  className='text-field-qr' onChange={this.handleChange} >
  <option value="1" >Email</option>
  <option value="2" >Text</option>
  <option value="3" >Number</option>
  <option value="4" >URL</option>
  </select>
    </div>
{this.state.selectQr === "1" &&
    <div className='label-text-qr'>
    <span style={{color:"white"}}>Email Address</span>
    </div>
}
{this.state.selectQr === "1" &&
    <div className='input-class-qr'>
    <input type="email" className='text-field-qr' placeholder='Enter Email Address' name="qremail" value={this.state.qremail} onChange={this.handleChange}/>
    </div>
}
{this.state.selectQr === "2" &&
  <div className='label-text-qr'>
  <span style={{color:"white"}}>Text</span>
  </div>
}
{this.state.selectQr === "2" &&
  <div className='input-class-qr'>
  <input type="text" className='text-field-qr' placeholder='Enter Text' name="qrtext" value={this.state.qrtext} onChange={this.handleChange}/>
  </div>
}
{this.state.selectQr === "3" &&
  <div className='label-text-qr'>
  <span style={{color:"white"}}>Number</span>
  </div>
}
{this.state.selectQr === "3" &&
  <div className='input-class-qr'>
  <input type="number" className='text-field-qr' placeholder='Enter Number' name="qrnumber" value={this.state.qrnumber} onChange={this.handleChange}/>
  </div>
}
{this.state.selectQr === "4" &&
  <div className='label-text-qr'>
  <span style={{color:"white"}}>URL</span>
  </div>
}
{this.state.selectQr === "4" &&
  <div className='input-class-qr'>
  <input type="url" className='text-field-qr' placeholder='Enter Url' name="qrurl" value={this.state.qrurl} onChange={this.handleChange}/>
  </div>
}

    <div className='label-text-qr'>
    <span style={{color:"white"}}>Subject(Optional)</span>
    </div>
    <div className='input-class-qr'>
    <input type="text" className='text-field-qr' placeholder='Code Subject'/>
    </div>
    <div className='label-text-qr'>
    <span style={{color:"white"}}>Text(Optional)</span>
    </div>
    <div className='input-class-qr'>
    <textarea type="text" className='text-field-qr' placeholder='Enter text' rows="6" cols="50"/>
    </div>
    <div className='label-text-qr'>
    <span style={{color:"white"}}>Nickname</span>
    </div>
    <div className='input-class-qr'>
    <select className='text-field-qr'>
   <option value="A">NickName</option>
   <option value="B">Banana</option>
   <option value="C">Cranberry</option>
   </select>
     </div>

<div className='qr-button-div-qr'>
    <button className='qr-button-qr'>
    <span className='qr-qr'>Apply</span>
    </button>
    </div>
    </div>
 }
  {/*********************************SHAPES EDITOR **************************/}
   {this.state.number === 5 &&
    <div className='shapes-editor-start'>

    <div className='shapes-delete-box'>
 <span style={{color:"#06A8AE"}}>Type of Shape</span>
 <div className='delete-button-shapes'
  // onClick={()=>setOpen({open:false,open2:false,open3:false,open4:false,open5:false,open6:false})}
  >
 <DeleteForeverOutlinedIcon style={{color:"red"}}/>
 <span style={{color:"#ffffff"}}>Delete</span>
 </div>
 </div>

<div className='icon-box-shape-first-shape'>
<div className="icon-box-shape" onClick={this.addNewRectangle}>
<img src="/images/Rectangle70.png" style={{width:40,height:25}}/>
</div>

<div className="icon-box-shape"  onClick={this.addNewSquare}>
<img src="/images/Rectangle73.png" style={{width:30,height:35}}/>
</div>

<div className="icon-box-shape" onClick={this.addNewCircle}>
<CircleOutlinedIcon className="icon-size" style={{color:"white",fontSize:60}}/>
</div>

<div className="icon-box-shape" onClick={this.addNewTriangle}>
<img src="/images/Rectangle71.png" style={{width:40,height:35}}/>
</div>

<div className="icon-box-shape" onClick={this.addNewLine}>
<img src="/images/Line11.png" style={{width:40,height:35}}/>
</div>

<div className="icon-box-shape" onClick={this.addNewArrow}>
<img src="/images/Line2.png" style={{width:40,height:35}}/>
</div>
</div>
</div>
 }
 {/*********************************SMART FILED EDITOR **************************/}
 {this.state.number === 6 &&
     
     <div className='smartview-editor-start'>
     <div className='smartview-delete-box'>
 <span style={{color:"#06A8AE"}}>Smart Field</span>
 <div className='delete-button-smartview'>
 <DeleteForeverOutlinedIcon style={{color:"red"}}/>
 <span style={{color:"#ffffff"}}>Delete</span>
 </div>
 </div>
  <div className='input-class-smart'>
<select className='text-field-smart' name='choose' value={this.state.choose} onChange={this.handleChangeSmart}>
<option value="{Fname}">First Name</option>
<option value="{Lname}">Last Name</option>
<option value="{Nname}">Nick Name</option>
<option value="{empId}">Employee Id</option>
</select>
<div className='smart-field-icon-right'>
<AddSharpIcon  style={{color:"white"}}/>
</div>
 </div>
 {/*
 <div className='input-class-smart'>
 <input type="text" className='text-field-smart' placeholder='First Name'/>
 <div className='smart-field-icon-left'>
 <ClearSharpIcon  style={{color:"white"}}/>
 </div>
 </div>

 <div className='input-class-smart'>
 <input type="text" className='text-field-smart' placeholder='Last Name'/>
 <div className='smart-field-icon-left'>
 <ClearSharpIcon  style={{color:"white"}}/>
 </div>
 </div>
 <div className='input-class-smart'>
 <input type="text" className='text-field-smart' placeholder='Nickname'/>
 <div className='smart-field-icon-left'>
 <ClearSharpIcon  style={{color:"white"}}/>
 </div>
 </div>
 */}
  </div>
  
 }

  {/*********************************DOWNLOAD FILE **************************/}
 {this.state.number === 7 &&
     <div style={{width:window.screen.width > 600 ? "95%" :"100%"}}>
  Download File
    </div>
 }


 {/****************************************************************************************** */}
 {(this.state.number === 2 || this.state.number === 3 || this.state.number === 4 || this.state.number === 5 || this.state.number === 6 ) &&
 <div className="right-side-div">
 <div className='navbar-div'>
 
<div className='navbar-div-image'>

  <div className='navbar-div-saved-card-image'    onClick={this.imageToBlob}>
   <ContactsIcon className='icon-image-navbar'/>
   <span className='icon-navbar'>Saved Card</span>
   </div>

   <div  onClick={this.desfazer} style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:10,flexWrap:"nowrap",cursor:"pointer"}}>
<UndoIcon  className='icon-image-navbar'        />
<span className='icon-navbar'>Undo</span>
</div>

<div onClick={this.refazer} style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:10,flexWrap:"nowrap",cursor:"pointer"}}>
<RedoIcon className='icon-image-navbar' />
<span className='icon-navbar'>Redo</span>
</div>

<div  style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:10,flexWrap:"nowrap",cursor:"pointer"}}>
<TagIcon className='icon-image-navbar'/>
<span className='icon-navbar'  onClick={this.deleteSavedState}>Guide</span>
</div>

<div  style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:10,flexWrap:"nowrap",cursor:"pointer"}}>
<AddCardIcon className='icon-image-navbar'/>
<a href='/choose-template' className='icon-navbar'>Create New</a>
</div>

<div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:10,flexWrap:"nowrap",cursor:"pointer"}}>
<Crop169Icon className='icon-image-navbar'/>
<a  href='/horizontal-card' className='icon-navbar'>Horizontal</a>
</div>

<div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:10,flexWrap:"nowrap",cursor:"pointer"}}>
<CropPortraitIcon className='icon-image-navbar'/>
<a href='/vertical-card' className='icon-navbar'>Vertical</a>
</div>

</div>

<div onClick={()=>this.setState({arrayObjectsLayer: [],qremail:"",qrnumber:"",qrtext:"",qrurl:"",selectQr:"",choose:""})} style={{display:"flex",justifyContent:"center",alignItems:"center",background: "#FC4646",width:"15%",cursor:"pointer"}}>
<DeleteForeverOutlinedIcon style={{color:"white"}}/>
<span className='icon-navbar'>Delete Card</span>
</div>
</div>
 {/*****two buttons*/}
  <div className='front-image-button-back'>
 <div className='front-new-image-button-back'  onClick={()=> this.props.history.push("/vertical-card")}>
 <span className='front-new-text-image-button-back'>Front Side</span>
 </div>
 <div className='back-button-back'>
 <span className='back-template-image-button-back'>Back Side</span>
 </div>
 </div>


{/**************************CANVAS */}
<div className="containerCanvas" ref={this.containerCanvas} >
<div className={`container-area`}>
{/***
<textarea
// key={index}
value={this.state.rectangles.textValue} 
onChange={e => this.handleTempEdit(e)}
type="text"
placeholder='Enter text' rows="6" cols="30"
className='text-field-text'
/>
* */}


<Stage
  scaleY={1 / zoom}
  scaleX={1 / zoom}
  ref={this.stageRef}
  width={width}
  height={height}
  onMouseDown={this.handleStageMouseDown}
>

<Layer>

          <Group
            name="group"
            x={225}
            y={295}
            width={110}
            height={400}
            fill="red"
            draggable
          >
       
          <Text
              name="text"
              fontSize={30}
              fontFamily="Calibri"
              fill="#555"
              width={100}
              padding={15}
              align="center"
              text={this.state.choose}
            />
            <Html divProps={{ style: { pointerEvents: "none" } }}>
            <div style={{marginTop:20}}>
            {this.state.selectQr === "0" && <QRCode value={this.state.qremail} size="90"/>}
            {this.state.selectQr === "1" && <QRCode value={this.state.qremail} size="90"/>}
            {this.state.selectQr === "2" && <QRCode value={this.state.qrtext} size="90"/>}  
            {this.state.selectQr === "3" && <QRCode value={this.state.qrnumber} size="90"/>}  
            {this.state.selectQr === "4" && <QRCode value={this.state.qrurl} size="90"/>}  
            </div>
            </Html>
        </Group>
          <TransformerComponent
          selectedShapeName={this.state.selectedShapeName}
        />   
        
  

{/****** 
{  
  
  this.state.rectangles && this.state.rectangles.map((rect, index) => {
  return (
   <Transformtext
      key={index}
       onSelect={() => {
        this.selectText(rect.id);
      }}
      shapeProps={rect}
      isSelected={rect.id === selectedId}
      handleTextDblClick={e =>
      this.handleTextClick(e, index)
        }
       onChange={(newAttrs) => {
        const rects = this.state.rectangles.slice();
        rects[index] = newAttrs;
        // this.ectangles(rects);
        this.setArrayObject(rects);
      }}
     
    />
  );
})}
*/}
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
                  this.selectShape(item, index + 1)
                }}
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


 



 {/*********
 <Group ref={this.groupRef} draggable x={50} y={100}>
<Html divProps={{ style: {} }}>

<div style={{marginTop:60 }}>
 {this.state.selectQr === "1" && <QRCode value={this.state.qremail} />}
 {this.state.selectQr === "2" && <QRCode value={this.state.qrtext} />}  
 {this.state.selectQr === "3" && <QRCode value={this.state.qrnumber} />}  
 {this.state.selectQr === "4" && <QRCode value={this.state.qrurl} />}  
   </div>
</Html>
<Rect width={280} height={300} fill="" />
</Group>

 <Transformer ref={this.trRef} />
<Group ref={this.groupRef} draggable x={50} y={100}>
<Html divProps={{ style: {} }}>
<div style={{marginTop:30,border:"2px soild red"}} onClick={(e)=>this.setState({new:true})}>
<span style={{fontSize:40}}>
{this.state.choose} 
</span>
   </div>
</Html>
<Rect width={150} height={50} fill="" />
</Group>
<Transformer ref={this.trRef} rotateEnabled={this.state.new === true ? true : false}  resizeEnabled={this.state.new === true ? true : false}/> 
  */}
</Layer>

</Stage>
</div>
</div>

{/**div end */}
  </div>
 }
  </div>
    )
  }
}

export default BackVerticalCard