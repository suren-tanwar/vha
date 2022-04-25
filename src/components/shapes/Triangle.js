
// import React, { Component } from "react";
// import { Stage, Layer, Arrow, Transformer } from "react-konva";

// class Rectangle extends React.Component {
//   render() {
//     return (
//       <Arrow
//         x={this.props.x}
//         y={this.props.y}

//         name={this.props.name}
//         pointerWidth={this.props.width}
//         pointerLength={this.props.height}
//         strokeWidth={this.props.strokeWidth} // border width
//         stroke={this.props.stroke} // border color
//         draggable
//       />
//     );
//   }
// }



// class TransformerComponent extends React.Component {
//   componentDidMount() {
//     this.checkNode();
//   }
//   componentDidUpdate() {
//     this.checkNode();
//   }
//   checkNode() {
//     // here we need to manually attach or detach Transformer node
//     const stage = this.transformer.getStage();
//     const { selectedShapeName } = this.props;

//     const selectedNode = stage.findOne("." + selectedShapeName);
//     // do nothing if selected node is already attached
//     if (selectedNode === this.transformer.node()) {
//       return;
//     }

//     if (selectedNode) {
//       // attach to another node
//       this.transformer.attachTo(selectedNode);
//     } else {
//       // remove transformer
//       this.transformer.detach();
//     }
//     this.transformer.getLayer().batchDraw();
//   }
//   render() {
//     return (
//       <Transformer
//         ref={node => {
//           this.transformer = node;
//         }}
//       />
//     );
//   }
// }

// class TriangleApp extends Component {
//   state = {
//     open:false,
//     rectangles: [

//         {
//         x: 400,
//         y: 200,
//         width: 200,
//         height: 200,
//         name: "arrow2",
//         stroke:'black',
//         tension:1,
//   strokeWidth: 1,
//       }
//     ],
 
//     selectedShapeName: ""
//   };
//   handleStageMouseDown = e => {
//     // clicked on stage - cler selection
//     if (e.target === e.target.getStage()) {
//       this.setState({
//         selectedShapeName: ""
//       });
//       return;
//     }
//     // clicked on transformer - do nothing
//     const clickedOnTransformer =
//       e.target.getParent().className === "Transformer";
//     if (clickedOnTransformer) {
//       return;
//     }

//     // find clicked rect by its name
//     const name = e.target.name();
//     const shapes = [...this.state.rectangles];
//     const shape = shapes.find(shape => shape.name === name);
//     if (shape) {
//       this.setState({
//         selectedShapeName: name
//       });
//     } else {
//       this.setState({
//         selectedShapeName: ""
//       });
//     }
//   };
//   render() {
//     return (
//       <div>

//       <Stage
//         width={window.innerWidth}
//         height={window.innerHeight}
//         onMouseDown={this.handleStageMouseDown}
//       >
//         <Layer>
//           {this.state.rectangles.map((rect, i) => (
//             <Rectangle key={i} {...rect} />
//           ))}

//           <TransformerComponent
//             selectedShapeName={this.state.selectedShapeName}
//           />
//         </Layer>
//       </Stage>
        
//       </div>
//     );
//   }
// }

// export default TriangleApp;

// import React from "react";
// import { Arrow, Transformer } from "react-konva";

// const Triangle = ({ shapeProps, isSelected, onSelect, onChange }) => {
//   const shapeRef = React.useRef();
//   const trRef = React.useRef();
//   React.useEffect(() => {
//     if (isSelected) {
//       // we need to attach transformer manually
//       trRef.current.setNode(shapeRef.current);
//       trRef.current.getLayer().batchDraw();
//     }
//   }, [isSelected]);
//   return (
//     <React.Fragment>
//       <Arrow
//         onClick={onSelect}
//         ref={shapeRef}
//         {...shapeProps}
//         draggable
//         onDragEnd={e => {
//           onChange({
//             ...shapeProps,
//             x: e.target.x(),
//             y: e.target.y(),
//             z: e.target.z(),
//           });
//         }}
//         onTransformEnd={e => {
//           // transformer is changing scale
//           const node = shapeRef.current;
//           const scaleX = node.scaleX();
//           const scaleY = node.scaleY();
//           const scaleZ = node.scaleZ();
//           node.scaleZ(1)
//           node.scaleX(1);
//           node.scaleY(1);
//           onChange({
//             ...shapeProps,
//             x: node.x(),
//             y: node.y(),
//             z: node.z(),
//             width: node.width() * scaleX,
//             height: node.height() * scaleY,
//           });
//         }}
//       />
//       {isSelected && <Transformer ref={trRef} />}
//     </React.Fragment>
//   );
// };
// export default Triangle;


import React from "react";
import { Arrow, Transformer } from "react-konva";

const Triangle = ({ shapeProps, isSelected, onSelect, onChange }) => {
  const shapeRef = React.useRef();
  const trRef = React.useRef();
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
export default Triangle;