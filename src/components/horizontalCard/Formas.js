import React from "react";
import {Text,Rect,Circle,Line,Image,Arrow,RegularPolygon,Transformer} from "react-konva";

{/************************RECTANGLE *************************************/}
export const Retangulo = ({ shapeProps, isSelected, onSelect, onChange }) => {
  const shapeRef = React.useRef();
  const trRef = React.useRef();

  React.useEffect(() => {
    if (isSelected) {
      trRef.current.setNode(shapeRef.current);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <React.Fragment>
      <Rect
        onClick={onSelect}
        ref={shapeRef}
        {...shapeProps}
        draggable
        onDragEnd={e => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y()
          });
        }}
        onTransformEnd={e => {
          // transformer is changing scale
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();
          // we will reset it back
          node.scaleX(1);
          node.scaleY(1);
          onChange({
            ...shapeProps,
            rotation: node.rotation(),
            x: node.x(),
            y: node.y(),
            width: node.width() * scaleX,
            height: node.height() * scaleY
          });
        }}
      />
      {isSelected && <Transformer ref={trRef} />}
    </React.Fragment>
  );
};

{/************************ TRIANGLE *************************************/}
export const Triangulo = ({ shapeProps, isSelected, onSelect, onChange }) => {
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
      <RegularPolygon
        onClick={onSelect}
        ref={shapeRef}
        {...shapeProps}
        draggable
        onDragEnd={e => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y()
          });
        }}
        onTransformEnd={e => {
          // transformer is changing scale
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();
          // we will reset it back
          node.scaleX(1);
          node.scaleY(1);
          onChange({
            ...shapeProps,
            rotation: node.rotation(),
            x: node.x(),
            y: node.y(),
            width: node.width() * scaleX,
            height: node.height() * scaleY
          });
        }}
      />
      {isSelected && <Transformer ref={trRef} />}
    </React.Fragment>
  );
};

{/************************ CIRCLE *************************************/}
export const Circulo = ({ shapeProps, isSelected, onSelect, onChange }) => {
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
      <Circle
        onClick={onSelect}
        ref={shapeRef}
        {...shapeProps}
        draggable
        onDragEnd={e => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y()
          });
        }}
        onTransformEnd={e => {
          // transformer is changing scale
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();
          // we will reset it back
          node.scaleX(1);
          node.scaleY(1);
          onChange({
            ...shapeProps,
            rotation: node.rotation(),
            x: node.x(),
            y: node.y(),
            width: node.width() * scaleX,
            height: node.height() * scaleY
          });
        }}
      />
      {isSelected && <Transformer ref={trRef} />}
    </React.Fragment>
  );
};
{/************************ IMAGE *************************************/}
export const Imagem = ({ shapeProps, isSelected, onSelect, onChange ,handleTextDblClick}) => {
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
      <Image
        onClick={onSelect}
        ref={shapeRef}
        {...shapeProps}
        draggable
        onDblClick={e => handleTextDblClick(e)}
        onDragEnd={e => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y()
          });
        }}
        onTransformEnd={e => {
          // transformer is changing scale
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();
          // we will reset it back
          node.scaleX(1);
          node.scaleY(1);
          onChange({
            enabledAnchors: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
            keepRatio: true,
            ...shapeProps,
            rotation: node.rotation(),
            x: node.x(),
            y: node.y(),
            width: node.width() * scaleX,
            height: node.height() * scaleY
          });
        }}
      />
      {isSelected && <Transformer ref={trRef} enabledAnchors={['top-left', 'top-right', 'bottom-left', 'bottom-right']} />}
    </React.Fragment>
  );
};

export const Background = ({ height, width }) => {
  return (
    <React.Fragment>
      <Rect
        height={height}
        width={width}
        x={0}
        y={0}
        fill={'white'}
      />
    </React.Fragment>
  );
};

{/************************ SQUARE *************************************/}
export const Squareo = ({ shapeProps, isSelected, onSelect, onChange }) => {
  const shapeRef = React.useRef();
  const trRef = React.useRef();

  React.useEffect(() => {
    if (isSelected) {
      trRef.current.setNode(shapeRef.current);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <React.Fragment>
      <Rect
        onClick={onSelect}
        ref={shapeRef}
        {...shapeProps}
        draggable
        onDragEnd={e => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y()
          });
        }}
        onTransformEnd={e => {
          // transformer is changing scale
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();
          // we will reset it back
          node.scaleX(1);
          node.scaleY(1);
          onChange({
            ...shapeProps,
            rotation: node.rotation(),
            x: node.x(),
            y: node.y(),
            width: node.width() * scaleX,
            height: node.height() * scaleY
          });
        }}
      />
      {isSelected && <Transformer ref={trRef} />}
    </React.Fragment>
  );
};

{/************************ LINE *************************************/}
export const Lineo = ({ shapeProps, isSelected, onSelect, onChange }) => {
  const shapeRef = React.useRef();
  const trRef = React.useRef();

  React.useEffect(() => {
    if (isSelected) {
      trRef.current.setNode(shapeRef.current);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <React.Fragment>
    <Line
    onClick={onSelect}
    ref={shapeRef}
    {...shapeProps}
    draggable
    onDragEnd={e => {
      onChange({
        ...shapeProps,
        x: e.target.x(),
        y: e.target.y()
      });
    }}
    onTransformEnd={e => {
      // transformer is changing scale
      const node = shapeRef.current;
      const scaleX = node.scaleX();
      const scaleY = node.scaleY();
      // we will reset it back
      node.scaleX(1);
      node.scaleY(1);
      onChange({
        ...shapeProps,
        rotation: node.rotation(),
        x: node.x(),
        y: node.y(),
        width: node.width() * scaleX,
        height: node.height() * scaleY
      });
    }}
  />
  {isSelected && <Transformer ref={trRef} />}
</React.Fragment>
  );
};


{/************************ ARROW*************************************/}

export const Arrowo = ({ shapeProps, isSelected, onSelect, onChange }) => {
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
            // z: e.target.z(),
          });
        }}
        onTransformEnd={e => {
          // transformer is changing scale
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();
          // we will reset it back
          // const scaleZ = node.scaleZ();
          node.scaleZ(1)
          node.scaleX(1);
          node.scaleY(1);
          onChange({
            ...shapeProps,
            rotation: node.rotation(),
            x: node.x(),
            y: node.y(),
            // z: node.z(),
            width: node.width() * scaleX,
            height: node.height() * scaleY
          });
        }}
      />
      {isSelected && <Transformer ref={trRef} />}
    </React.Fragment>
  );
};

{/************************ TEXT *************************************/}
export const Texto = ({
  shapeProps,
  isSelected,
  onSelect,
  onChange,
  index,
  handleTextDblClick
}) => {
  const shapeRef = React.useRef();
  const trRef = React.useRef();
  
  React.useEffect(() => {
  if (isSelected) {
      // we need to attach transformer manually
      trRef.current.setNode(shapeRef.current);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

if(shapeProps.textTransform === "lowercase"){
  return (
    <React.Fragment>
      <Text
        {...shapeProps}
        ref={shapeRef}
        textDecoration={shapeProps.textDecoration}
         fontSize={shapeProps.fontSize}
        align={shapeProps.textAlign}
        fontStyle={shapeProps.fontStyle}
        verticalAlign={shapeProps.verticalAlign}
        draggable
        text={shapeProps.textValue.toLowerCase()}
        x={shapeProps.x}
        y={shapeProps.y}
        // wrap="word"
        width={shapeProps.width}
        onDblClick={e => handleTextDblClick(e, index)}
        onClick={() =>  onSelect(index)}
        onDragEnd={e => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y()
          });
        }}
        onTransformEnd={e => {
          // transformer is changing scale
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();
          // we will reset it back
          node.scaleX(1);
          node.scaleY(1);
          onChange({
            ...shapeProps,
            rotation: node.rotation(),
            x: node.x(),
            y: node.y(),
            width: node.width() * scaleX,
            height: node.height() * scaleY
          });
        }}
      />
      {isSelected && <Transformer ref={trRef} />}
    </React.Fragment>
  )
}
 else if(shapeProps.textTransform === "uppercase"){
  return (
    <React.Fragment>
      <Text
        {...shapeProps}
        ref={shapeRef}
        textDecoration={shapeProps.textDecoration}
        fontSize={shapeProps.fontSize}
        align={shapeProps.textAlign}
        fontStyle={shapeProps.fontStyle}
        verticalAlign={shapeProps.verticalAlign}
        draggable
        text={shapeProps.textValue.toUpperCase()}
        x={shapeProps.x}
        y={shapeProps.y}
        wrap="word"
        width={shapeProps.width}
        onDblClick={e => handleTextDblClick(e, index)}
        onClick={() => onSelect(index)}
        onDragEnd={e => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y()
          });
        }}
        onTransformEnd={e => {
          // transformer is changing scale
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();
          // we will reset it back
          node.scaleX(1);
          node.scaleY(1);
          onChange({
            ...shapeProps,
            rotation: node.rotation(),
            x: node.x(),
            y: node.y(),
            width: node.width() * scaleX,
            height: node.height() * scaleY
          });
        }}
      />
      {isSelected && <Transformer ref={trRef} />}
    </React.Fragment>
  )
 }
 else{
  return (
    <React.Fragment>
      <Text
        {...shapeProps}
        ref={shapeRef}
        textDecoration={shapeProps.textDecoration}
       fontSize={shapeProps.fontSize}
        align={shapeProps.textAlign}
        fontStyle={shapeProps.fontStyle}
        verticalAlign={shapeProps.verticalAlign}
        draggable
        text={shapeProps.textValue.charAt(0).toUpperCase() + shapeProps.textValue.slice(1)}
        x={shapeProps.x}
        y={shapeProps.y}
        wrap="word"
        width={shapeProps.width}
        onDblClick={e => handleTextDblClick(e, index)}
        onClick={() => onSelect(index)}
        onDragEnd={e => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y()
          });
        }}
        onTransformEnd={e => {
          // transformer is changing scale
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();
          // we will reset it back
          node.scaleX(1);
          node.scaleY(1);
          onChange({
            ...shapeProps,
            rotation: node.rotation(),
            x: node.x(),
            y: node.y(),
            width: node.width() * scaleX,
            height: node.height() * scaleY
          });
        }}
      />
      {isSelected && <Transformer ref={trRef} />}
    </React.Fragment>
  )
 }
};


{/************************ SMART FIELD*************************************/}

export const Smarteo = ({  shapeProps,
  isSelected,
  onSelect,
  onChange,
  index,
  handleTextDblClick1}) => {
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
    <Text
    {...shapeProps}
    ref={shapeRef}
     draggable
    text={shapeProps.choose}
    x={shapeProps.x}
    y={shapeProps.y}
    wrap="word"
    width={shapeProps.width}
    // onDblClick={e => handleTextDblClick1(e)}
    // onClick={() => onSelect()}
    onDragEnd={e => {
      onChange({
        ...shapeProps,
        x: e.target.x(),
        y: e.target.y()
      });
    }}
    onTransformEnd={e => {
      // transformer is changing scale
      const node = shapeRef.current;
      const scaleX = node.scaleX();
      const scaleY = node.scaleY();
      // we will reset it back
      node.scaleX(1);
      node.scaleY(1);
      onChange({
        ...shapeProps,
        rotation: node.rotation(),
        x: node.x(),
        y: node.y(),
        width: node.width() * scaleX,
        height: node.height() * scaleY
      });
    }}
  />
  {isSelected && <Transformer ref={trRef} />}
</React.Fragment>
  );
};







export const Transformtext = ({ shapeProps, isSelected, onSelect, onChange }) => {
  const shapeRef = React.useRef();
  const trRef = React.useRef();

  React.useEffect(() => {
    if (isSelected) {
      // we need to attach transformer manually
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <React.Fragment>
     <Text
        text={shapeProps.textValue}
        onClick={onSelect}
        // onClick={() => onSelect(index)}
        onTap={onSelect}
        ref={shapeRef}
        {...shapeProps}
        draggable
        onDragEnd={(e) => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        onTransformEnd={(e) => {
          // transformer is changing scale of the node
          // and NOT its width or height
          // but in the store we have only width and height
          // to match the data better we will reset scale on transform end
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();

          // we will reset it back
          node.scaleX(1);
          node.scaleY(1);
          onChange({
            ...shapeProps,
            x: node.x(),
            y: node.y(),
            // set minimal value
            width: Math.max(5, node.width() * scaleX),
            height: Math.max(node.height() * scaleY),
          });
        }}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </React.Fragment>
  );
};