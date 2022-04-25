import "./styles.css";
import { Stage, Layer, Transformer, Line } from "react-konva";
import React, { useRef, useState } from "react";

export default function App() {
  const initPoints = [10, 20, 100, 20, 100, 100, 10, 100];

  const [linePoint, setLinePoint] = useState(
    () => JSON.parse(localStorage.getItem("testKonvaLineData")) || initPoints
  );
  const lineRef = useRef();
  const transformerRef = useRef();

  function clearEffects() {
    lineRef.current.x(0);
    lineRef.current.y(0);
    lineRef.current.scaleX(1);
    lineRef.current.scaleY(1);
    lineRef.current.rotation(0);
  }

  function changePoints(e) {
    const endLinePoint = [];
    const xlinePoint = linePoint.filter((_, index) => index % 2 === 0);
    const ylinePoint = linePoint.filter((_, index) => index % 2 !== 0);
    xlinePoint.forEach((item, index) => {
      const point = e.target
        .getAbsoluteTransform()
        .point({ x: item, y: ylinePoint[index] });
      endLinePoint.push(point.x);
      endLinePoint.push(point.y);
    });
    setLinePoint(endLinePoint);

    localStorage.setItem("testKonvaLineData", JSON.stringify(endLinePoint));
    clearEffects();
  }

  function dragLine(e) {
    changePoints(e);
  }

  function transformLine(e) {
    changePoints(e);
  }

  function clickLine(e) {
    e.cancelBubble = true;
    transformerRef.current.nodes([e.target]);
  }

  function clickStage() {
    transformerRef.current.nodes([]);
  }

  return (
    <div className="App">
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        onClick={clickStage}
      >
        <Layer>
          <Line
            ref={lineRef}
            points={linePoint}
            fill="red"
            closed={true}
            draggable={true}
            onDragEnd={dragLine}
            onClick={clickLine}
            onTransformEnd={transformLine}
          />
          <Transformer ref={transformerRef} useSingleNodeRotation={false} />
        </Layer>
      </Stage>
    </div>
  );
}
