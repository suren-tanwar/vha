
// import React, { Component } from "react";
// import { Stage, Layer, Arrow } from "react-konva";


// class Drawable {
//   constructor(startx, starty) {
//     this.startx = startx;
//     this.starty = starty;
//   }
// }

// class ArrowDrawable extends Drawable {
//   constructor(startx, starty) {
//     super(startx, starty);
//     this.x = startx;
//     this.y = starty;
//   }
//   registerMovement(x, y) {
//     this.x = x;
//     this.y = y;
//   }
//   render() {
//     const points = [this.startx, this.starty, this.x, this.y];
//     return <Arrow points={points} fill="black" stroke="black" />;
//   }
// }


// class ArrowApp extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       drawables: [],
//       newDrawable: [],
//     };
//   }

//   getNewDrawableBasedOnType = (x, y, type) => {
//     const drawableClasses = { ArrowDrawable };
//     return new drawableClasses[type](x, y);
//   };

//   handleMouseDown = e => {
//     const { newDrawable } = this.state;
//     if (newDrawable.length === 0) {
//       const { x, y } = e.target.getStage().getPointerPosition();
//       const newDrawable = this.getNewDrawableBasedOnType(
//         x,
//         y,
//         "ArrowDrawable"
//       );
//       this.setState({
//         newDrawable: [newDrawable]
//       });
//     }
//   };

//   handleMouseUp = e => {
//     const { newDrawable, drawables } = this.state;
//     if (newDrawable.length === 1) {
//       const { x, y } = e.target.getStage().getPointerPosition();
//       const drawableToAdd = newDrawable[0];
//       drawableToAdd.registerMovement(x, y);
//       drawables.push(drawableToAdd);
//       this.setState({
//         newDrawable: [],
//         drawables
//       });
//     }
//   };

//   handleMouseMove = e => {
//     const { newDrawable } = this.state;
//     if (newDrawable.length === 1) {
//       const { x, y } = e.target.getStage().getPointerPosition();
//       const updatedNewDrawable = newDrawable[0];
//       updatedNewDrawable.registerMovement(x, y);
//       this.setState({
//         newDrawable: [updatedNewDrawable]
//       });
//     }
//   };

//   render() {
//     const drawables = [...this.state.drawables, ...this.state.newDrawable];
//     console.log(this.state)
//     return (
//       <div>
      
      
//         <Stage
//           onMouseDown={this.handleMouseDown}
//           onMouseUp={this.handleMouseUp}
//           onMouseMove={this.handleMouseMove}
//           width={900}
//           height={700}
//         >
//           <Layer>
//             {drawables.map(drawable => {
//               return drawable.render();
//             })}
//           </Layer>
//         </Stage>
//       </div>
//     );
//   }
// }

// export default ArrowApp;




import React from "react";
import { Arrow, Transformer } from "react-konva";

const ArrowApp = ({ shapeProps, isSelected, onSelect, onChange }) => {
  const shapeRef = React.useRef();
  const trRef = React.useRef();
  console.log(trRef)
  React.useEffect(() => {
    if (isSelected) {
      // we need to attach transformer manually
      trRef.current.setNode(shapeRef.current);
      trRef.current.getLayer().batchDraw();
     
    }
  }, [isSelected]);
  return (
    <React.Fragment>
      <Arrow
        onClick={onSelect}
        ref={shapeRef}
        {...shapeProps}
        draggable
        onDragEnd={e => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y(),
            z: e.target.z(),
          });
        }}
        onTransformEnd={e => {
          // transformer is changing scale
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();
          const scaleZ = node.scaleZ();
          node.scaleZ(1)
          node.scaleX(1);
          node.scaleY(1);
          onChange({
            ...shapeProps,
            x: node.x(),
            y: node.y(),
            z: node.z(),
            width: node.width() * scaleX,
            height: node.height() * scaleY,
          });
        }}
      />
      {isSelected && <Transformer ref={trRef} />}
    </React.Fragment>
  );
};
export default ArrowApp;