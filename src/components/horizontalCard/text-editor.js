// // import React from 'react';
// // import { Html } from 'react-konva-utils'

// //  const TextEditor = ({
// //   textNodeRef,
// //   value,
// //   onBlur,
// //   onChange,
// //   cursorPosition,
// // }) => {


// //   return (
// //     <Html>
// //       <textarea
// //         className="polotno-input"
// //         style={{
// //            position: "absolute",
// //           top:100,
// //           left:100,
// //           width: 100,
// //           height: 100,
// //           fontSize: 28,
// //           color: "black",
      
// //         }}
// //         value={value}
// //         onChange={(e) => {
// //           onChange(e.target.value);
// //         }}
// //         onBlur={onBlur}
// //       />
// //     </Html>
// //   );
// // };

// // export default TextEditor;


// import React, { Component } from 'react'
// import { Html } from 'react-konva-utils'

// export class TextEditor extends Component {
//   constructor(props) {
//     super(props)
 
//   }

//   onChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };
//   render() {
//     return (
//       <div>
//       <Html>
//       <textarea
//         className="polotno-input"
         
//         style={{
//            position: "absolute",
//           top:100,
//           left:100,
//           width: 100,
//           height: 100,
//           fontSize: 28,
//           color: "black",
      
//         }}
//         value={this.props.value}
//         onChange={() => this.onChange()}
//         onBlur={() => this.onBlur()}
//       />
//     </Html>
      
//       </div>
//     )
//   }
// }

// export default TextEditor

import React from "react";
import { Html } from "react-konva-utils";

export const TextEditor = ({
  textNodeRef,
  value,
  onBlur,
  onChange,
  cursorPosition,
}) => {
  const [style, setStyle] = React.useState();
  React.useLayoutEffect(() => {
    const textNode = textNodeRef.current;

    // apply many styles to match text on canvas as close as possible
    // remember that text rendering on canvas and on the textarea can be different
    // and sometimes it is hard to make it 100% the same. But we will try...
    const newStyle = {};
    newStyle.width = textNode.width() - textNode.padding() * 2 + "px";
    newStyle.height = textNode.height() - textNode.padding() * 2 + 10 + "px";
    newStyle.fontSize = textNode.fontSize() + "px";
    newStyle.border = "none";
    newStyle.padding = "0px";
    newStyle.overflow = "hidden";
    newStyle.background = "none";
    newStyle.outline = "none";
    newStyle.resize = "none";
    newStyle.lineHeight = textNode.lineHeight() + 0.01;
    newStyle.fontFamily = '"' + textNode.fontFamily() + '"';
    newStyle.transformOrigin = "left top";
    newStyle.textAlign = textNode.align();
    newStyle.color = textNode.fill();
    newStyle.overflowWrap = "break-word";
    newStyle.whiteSpace = "normal";
    newStyle.userSelect = "text";
    newStyle.wordBreak = "normal";

    if (JSON.stringify(newStyle) !== JSON.stringify(style)) {
      setStyle(newStyle);
    }
  });

  return (
    <Html>
      <textarea
        className="polotno-input"
        style={{
          ...style,
          position: "absolute",
          top: `${cursorPosition.y}px`,
          left: `${cursorPosition.x}px`,
        }}
        rotateEnabled={false}
        flipEnabled={false}
        enabledAnchors={["middle-left", "middle-right"]}
        value={value}
        onChange={(e) => {
          onChange({
            ...value,
            text: e.target.value,
            x: cursorPosition.x,
            y: cursorPosition.y,
            fontSize: textNodeRef.current.fontSize(),
          });
        }}
        onBlur={onBlur}
      />
    </Html>
  );
};