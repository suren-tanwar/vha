import React,  { useState ,useEffect} from 'react'
import  "./Image.css"
import ContactsIcon from '@mui/icons-material/Contacts';
import AddCardIcon from '@mui/icons-material/AddCard';
import TagIcon from '@mui/icons-material/Tag';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import Crop169Icon from '@mui/icons-material/Crop169';
import CropPortraitIcon from '@mui/icons-material/CropPortrait';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import { Stage, Layer } from "react-konva";
import Circ from ".././shapes/Circle"
import ArrowApp from ".././shapes/Arrow"
import LineApp from ".././shapes/Line"
import Rectangle from ".././shapes/Rectangle"
import SquareApp from ".././shapes/Square"
import Triangle from ".././shapes/Triangle"

function Typesofshape() {
 const [open, setOpen] = useState(false);
const [open2, setOpen2] = useState(false);
const [open3, setOpen3] = useState(false);
const [open4, setOpen4] = useState(false);
const [open5, setOpen5] = useState(false);
const [open6, setOpen6] = useState(false);
const [triangles, setTriangles] = useState([]);
const [squares, setSquares] = useState([]);
const [rectangles, setRectangles] = useState([]);
const [circles, setCircles] = useState([]);
const [arrows, setArrows] = useState([]);
const [lines, setLines] = useState([]);
const [images, setImages] = useState([]);
const [selectedId, selectShape] = useState(null);
const [shapes, setShapes] = useState([]);
const [state, updateState] = React.useState();
const stageEl = React.createRef();
const layerEl = React.createRef();

const getRandomInt = max => {
      return Math.floor(Math.random() * Math.floor(max));
    };
    const addLines = () => {
      const lin = {
        x: getRandomInt(100),
        y: getRandomInt(100),
      //   z: getRandomInt(100),
        width: 50,
        height: 50,
        points:[0, 0, 0, 0, 350, 0],
        fill: "black",
        stroke:'black',
        tension:0.5,
       strokeWidth:0.7,
        id: `lin${lines.length + 1}`,
      };
      const lint = lines.concat([lin]);
      console.log(lint)
      setLines(lint);
      const shs = shapes.concat([`lin${lines.length + 1}`]);
      console.log(shs)
      setShapes(shs);
    };
    useEffect(()=>{console.log(lines);},[lines]);

    const addArrow = () => {
      const aro = {
        x: getRandomInt(100),
        y: getRandomInt(100),
         width: 50,
        height: 50,
        points:[0, 0, 0, 0, 350, 0],
        fill: "black",
        stroke:'black',
        tension:0.5,
       strokeWidth:0.7,
        id: `aro${arrows.length + 1}`,
      };
      const aros = arrows.concat([aro]);
      setArrows(aros);
      const shs = shapes.concat([`aro${arrows.length + 1}`]);
      setShapes(shs);
    };

    const addTriangle = () => {
      const tri = {
        x: getRandomInt(100),
        y: getRandomInt(100),
        width: 900,
        height: 700,
        // fill: "red",
        stroke:'black',
        tension:0.1,
       strokeWidth: 0.5,
        id: `tri${triangles.length + 1}`,
      };
      const tris = triangles.concat([tri]);
      setTriangles(tris);
      const shs = shapes.concat([`tri${triangles.length + 1}`]);
      setShapes(shs);
    };
  
    const addRectangle = () => {
      const rect = {
        x: getRandomInt(100),
        y: getRandomInt(100),
        width: 100,
        height: 100,
        // fill: "red",
        stroke:'black',
        tension:1,
      strokeWidth: 1,
        id: `rect${rectangles.length + 1}`,
      };
      const rects = rectangles.concat([rect]);
      setRectangles(rects);
      const shs = shapes.concat([`rect${rectangles.length + 1}`]);
      setShapes(shs);
    };
    const addSquare = () => {
      const rect = {
        x: getRandomInt(100),
        y: getRandomInt(100),
        width: 100,
        height: 150,
        // fill: "red",
        stroke:'black',
        tension:1,
      strokeWidth: 1,
        id: `sqt${squares.length + 1}`,
      };
      const sqrs = squares.concat([rect]);
      setSquares(sqrs);
      const shs = shapes.concat([`sqt${squares.length + 1}`]);
      setShapes(shs);
    };
    const addCircle = () => {
      const circ = {
        x: getRandomInt(100),
        y: getRandomInt(100),
        width: 100,
        height: 100,
      //   fill: "red",
      stroke:'black',
      tension:1,
    strokeWidth: 1,
        id: `circ${circles.length + 1}`,
      };
      const circs = circles.concat([circ]);
      setCircles(circs);
      const shs = shapes.concat([`circ${circles.length + 1}`]);
      setShapes(shs);
    };
//   const drawLine = () => {
//       addLine(stageEl.current.getStage(), layerEl.current);
//     };
    const forceUpdate = React.useCallback(() => updateState({}), []);

    const undo = () => {
      const lastId = shapes[shapes.length - 1];
      console.log(shapes)
      console.log(lastId)
      let index = circles.findIndex(c => c.id == lastId);
      if (index != -1) {
        circles.splice(index, 1);
        setCircles(circles);
      }
      index = rectangles.findIndex(r => r.id == lastId);
      if (index != -1) {
        rectangles.splice(index, 1);
        setRectangles(rectangles);
      }
      index = triangles.findIndex(r => r.id == lastId);
      if (index != -1) {
        triangles.splice(index, 1);
        setTriangles(triangles);
      }
      index = squares.findIndex(r => r.id == lastId);
      if (index != -1) {
        squares.splice(index, 1);
        setSquares(squares);
      }
      index = arrows.findIndex(r => r.id == lastId);
      if (index != -1) {
        arrows.splice(index, 1);
        setArrows(arrows);
      }
      index = lines.findIndex(r => r.id == lastId);
      if (index != -1) {
        lines.splice(index, 1);
        setLines(lines);
      }
      shapes.pop();
      setShapes(shapes);
      forceUpdate();
    };
    const redo = () => {
      console.log(shapes)
      const lastId = shapes[shapes.length + 1];
        console.log(lastId)
      let index = circles.findIndex(c => c.id == lastId);
      if (index != +1) {
        circles.splice(index, 1);
        setCircles(circles);
      }
      shapes.push();
      setShapes(shapes);
      forceUpdate();
    };
    document.addEventListener("keydown", ev => {
      if (ev.code == "Delete") {
        let index = circles.findIndex(c => c.id == selectedId);
        if (index != -1) {
          circles.splice(index, 1);
          setCircles(circles);
        }
        index = rectangles.findIndex(r => r.id == selectedId);
        if (index != -1) {
          rectangles.splice(index, 1);
          setRectangles(rectangles);
        }
        index = triangles.findIndex(r => r.id == selectedId);
        if (index != -1) {
          triangles.splice(index, 1);
          setTriangles(triangles);
        }
        index = squares.findIndex(r => r.id == selectedId);
        if (index != -1) {
            squares.splice(index, 1);
            setSquares(squares);
        }  
        index = arrows.findIndex(r => r.id == selectedId);
        if (index != -1) {
            arrows.splice(index, 1);
            setArrows(arrows);
        }  
        index = lines.findIndex(r => r.id == selectedId);
        if (index != -1) {
            lines.splice(index, 1);
            setLines(lines);
        }  
        forceUpdate();
      }
    });
    return (
        <div style={{minheight:400,display:"flex"}}>
     
           {/*****IMAGE UPLOAD SIDE */}
           <div className='shapes-editor-start'>

           <div className='shapes-delete-box'>
        <span style={{color:"#06A8AE"}}>Type of Shape</span>
        <div className='delete-button-shapes' onClick={()=>setOpen({open:false,open2:false,open3:false,open4:false,open5:false,open6:false})}>
        <DeleteForeverOutlinedIcon style={{color:"red"}}/>
        <span style={{color:"#ffffff"}}>Delete</span>
        </div>
        </div>

<div className='icon-box-shape-first-shape'>
<div className="icon-box-shape" onClick={addRectangle}>
<img src="/images/Rectangle70.png" style={{width:40,height:25}}/>
</div>

<div className="icon-box-shape" onClick={addSquare}>
<img src="/images/Rectangle73.png" style={{width:30,height:35}}/>
</div>

<div className="icon-box-shape" onClick={addCircle}>
<CircleOutlinedIcon className="icon-size" style={{color:"white",fontSize:60}}/>
</div>

<div className="icon-box-shape" onClick={addTriangle}>
<img src="/images/Rectangle71.png" style={{width:40,height:35}}/>
</div>

<div className="icon-box-shape" onClick={addLines}>
<img src="/images/Line11.png" style={{width:40,height:35}}/>
</div>

<div className="icon-box-shape" onClick={addArrow}>
<img src="/images/Line2.png" style={{width:40,height:35}}/>
</div>
</div>
 </div>

          {/*****TASKBAR*/}
          <div className="main-image">

          <div className='task-bar-image'>

          <div className='task-bar-box-image'>
        <div className='task-bar-box-saved-card-image'>
          <ContactsIcon className='icon-color-image'/>
          <span className='icon-text-image'>Saved Card</span>
          </div>

          <div  onClick={undo} style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:10,flexWrap:"nowrap"}}>
<UndoIcon  className='icon-color-image'/>
<span className='icon-text-image'>Undo</span>
</div>

<div   onClick={redo} style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:10,flexWrap:"nowrap"}}>
<RedoIcon className='icon-color-image'/>
<span className='icon-text-image'>Redo</span>
</div>

      <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:10,flexWrap:"nowrap"}}>
<TagIcon className='icon-color-image'/>
<span className='icon-text-image'>Guide</span>
</div>

      <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:10,flexWrap:"nowrap"}}>
<AddCardIcon className='icon-color-image'/>
<span className='icon-text-image'>Create New</span>
</div>

      <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:10,flexWrap:"nowrap"}}>
<Crop169Icon className='icon-color-image'/>
<span className='icon-text-image'>Horizontal</span>
</div>

      <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:10,flexWrap:"nowrap"}}>
<CropPortraitIcon className='icon-color-image'/>
<span className='icon-text-image'>Vertical</span>
</div>

</div>

<div style={{display:"flex",justifyContent:"center",alignItems:"center",background: "#FC4646",
width:"15%"}}>
<DeleteForeverOutlinedIcon style={{color:"white"}}/>
<span className='icon-text-image'>Delete Card</span>
</div>

 </div>
  
      {/*****two buttons*/}
      <div>
      <div className='front-image'>
      <div className='front-new-image'>
      <span className='front-new-text-image'>Front Side</span>
      </div>
      <div className='back'>
      <span className='back-template-image'>Back Side</span>
      </div>
      </div>
      </div>
  {/*****white paper*/}
  <div style={{padding:30,display:"flex",justifyContent:"center"}}>
  <div className='white-paper-image'>
  <Stage
  width={window.innerWidth * 0.9}
  height={window.innerHeight - 150}
  ref={stageEl}
  onMouseDown={e => {
    // deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape(null);
    }
  }}
>
  <Layer ref={layerEl}>

    {rectangles.map((rect, i) => {
      return (
        <Rectangle
          key={i}
          shapeProps={rect}
          isSelected={rect.id === selectedId}
          onSelect={() => {
            selectShape(rect.id);
          }}
          onChange={newAttrs => {
            const rects = rectangles.slice();
            rects[i] = newAttrs;
            setRectangles(rects);
          }}
        />
      );
    })}
 
    {circles.map((circle, i) => {
      return (
        <Circ
          key={i}
          shapeProps={circle}
          isSelected={circle.id === selectedId}
          onSelect={() => {
            selectShape(circle.id);
          }}
          onChange={newAttrs => {
            const circs = circles.slice();
            circs[i] = newAttrs;
            setCircles(circs);
          }}
        />
      );
    })}
    {squares.map((square, i) => {
      return (
        <SquareApp
          key={i}
          shapeProps={square}
          isSelected={square.id === selectedId}
          onSelect={() => {
            selectShape(square.id);
          }}
          onChange={newAttrs => {
            const sqrs = squares.slice();
            sqrs[i] = newAttrs;
            setSquares(sqrs);
          }}
        />
      );
    })}
        {triangles.map((triangle, i) => {
            return (
              <Triangle
                key={i}
                shapeProps={triangle}
                isSelected={triangle.id === selectedId}
                onSelect={() => {
                  selectShape(triangle.id);
                }}
                onChange={newAttrs => {
                  const tris = triangles.slice();
                  tris[i] = newAttrs;
                  setTriangles(tris);
                }}
              />
            );
          })}
          {arrows.map((arrow, i) => {
            return (
              <ArrowApp
                key={i}
                shapeProps={arrow}
                isSelected={arrow.id === selectedId}
                onSelect={() => {
                  selectShape(arrow.id);
                }}
                onChange={newAttrs => {
                  const aros = arrows.slice();
                  aros[i] = newAttrs;
                  setArrows(aros);
                }}
              />
            );
          })}

          {lines.map((line, i) => {
            return (
              <LineApp
                key={i}
                shapeProps={line}
                isSelected={line.id === selectedId}
                onSelect={() => {
                  selectShape(line.id);
                }}
                onChange={newAttrs => {
                  const lint = lines.slice();
                  lint[i] = newAttrs;
                  setLines(lint);
                }}
              />
            );
          })}
    </Layer>
    </Stage>
  </div>
  </div>
  
        </div>
  
  
  
        </div>
    )
  }


export default Typesofshape