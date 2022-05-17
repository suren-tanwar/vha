import React, {useEffect} from 'react';
import './EditableDiv.css';
import { Stage, Layer, Transformer } from 'react-konva';
import EditOptions from './EditOptions/EditOptions'

const Element = ({ shapeProps, isSelected, onSelect, onChange, layerRef, stageRef, setShapeRef }) => {
  const shapeRef = React.useRef();
  const trRef = React.useRef();

  useEffect(() => {
    if(shapeRef.current.attrs.type === "Text") {
      shapeRef.current.on('click touchstart', () => {
        if(trRef.current && layerRef.current && stageRef.current) {
          // hide text node and transformer:
          shapeRef.current.hide();
          trRef.current.hide();
          layerRef.current.draw();

          // create textarea over canvas with absolute position
        // first we need to find position for textarea
        // how to find it?

        // at first lets find position of text node relative to the stage:
        var textPosition = shapeRef.current.absolutePosition();

        // then lets find position of stage container on the page:
        var stageBox = stageRef.current.container().getBoundingClientRect();

        // so position of textarea will be the sum of positions above:
        var areaPosition = {
          x: stageBox.left + textPosition.x,
          y: stageBox.top + textPosition.y
        };

         // create textarea and style it
         var textarea = document.createElement('textarea');
         document.body.appendChild(textarea);

         // apply many styles to match text on canvas as close as possible
        // remember that text rendering on canvas and on the textarea can be different
        // and sometimes it is hard to make it 100% the same. But we will try...
        textarea.value = shapeRef.current.text();
        textarea.style.position = 'absolute';
        textarea.style.top = areaPosition.y + 'px';
        textarea.style.left = areaPosition.x + 'px';
        textarea.style.width = shapeRef.current.width() - shapeRef.current.padding() * 2 + 'px';
        textarea.style.height =
        shapeRef.current.height() - shapeRef.current.padding() * 2 + 5 + 'px';
        textarea.style.fontSize = shapeRef.current.fontSize() + 'px';
        textarea.style.border = 'none';
        textarea.style.padding = '0px';
        textarea.style.margin = '0px';
        textarea.style.overflow = 'hidden';
        textarea.style.background = 'none';
        textarea.style.outline = 'none';
        textarea.style.resize = 'none';
        textarea.style.lineHeight = shapeRef.current.lineHeight();
        textarea.style.fontFamily = shapeRef.current.fontFamily();
        textarea.style.transformOrigin = 'left top';
        textarea.style.textAlign = shapeRef.current.align();
        textarea.style.color = shapeRef.current.fill();
        var rotation = shapeRef.current.rotation();
        var transform = '';
        if (rotation) {
          transform += 'rotateZ(' + rotation + 'deg)';
        }

        var px = 0;
        // also we need to slightly move textarea on firefox
        // because it jumps a bit
        var isFirefox =
          navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
        if (isFirefox) {
          px += 2 + Math.round(shapeRef.current.fontSize() / 20);
        }
        transform += 'translateY(-' + px + 'px)';

        textarea.style.transform = transform;

        // reset height
        textarea.style.height = 'auto';
        // after browsers resized it we can set actual value
        textarea.style.height = textarea.scrollHeight + 3 + 'px';

        textarea.focus();

        var layerReference = {...layerRef};

        function removeTextarea() {
          var layer = {...shapeProps};
          layer.text = textarea.value;
          textarea.parentNode.removeChild(textarea);
          window.removeEventListener('click', handleOutsideClick);
          shapeRef.current.show();
          if(trRef.current) {
            trRef.current.show();
            trRef.current.forceUpdate();
          }
          if(layerReference.current) {
            layerReference.current.draw();
          }
          onChange(layer);
        }

        function setTextareaWidth(newWidth) {
          if (!newWidth) {
            // set width for placeholder
            newWidth = shapeRef.current.placeholder.length * shapeRef.current.fontSize();
          }
          // some extra fixes on different browsers
          var isSafari = /^((?!chrome|android).)*safari/i.test(
            navigator.userAgent
          );
          var isFirefox =
            navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
          if (isSafari || isFirefox) {
            newWidth = Math.ceil(newWidth);
          }

          var isEdge =
            document.documentMode || /Edge/.test(navigator.userAgent);
          if (isEdge) {
            newWidth += 1;
          }
          textarea.style.width = newWidth + 'px';
        }

        textarea.addEventListener('keydown', function(e) {
          // hide on enter
          // but don't hide on shift + enter
          if (e.keyCode === 13 && !e.shiftKey) {
            shapeRef.current.text(textarea.value);
            removeTextarea();
          }
          // on esc do not set value back to node
          if (e.keyCode === 27) {
            removeTextarea();
          }
        });

        textarea.addEventListener('keydown', function(e) {
          var scale = shapeRef.current.getAbsoluteScale().x;
          setTextareaWidth(shapeRef.current.width() * scale);
          textarea.style.height = 'auto';
          textarea.style.height =
            textarea.scrollHeight + shapeRef.current.fontSize() + 'px';
        });

        function handleOutsideClick(e) {
          if (e.target !== textarea) {
            removeTextarea();
          }
        }
        setTimeout(() => {
          window.addEventListener('click', handleOutsideClick);
        });
        }
      });
    }
  },[layerRef, stageRef, onChange, shapeProps]);

  React.useEffect(() => {
    if (isSelected) {
      // we need to attach transformer manually
      trRef.current.setNode(shapeRef.current);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <React.Fragment>
      {React.createElement(shapeProps.type, {
        onTap: () => {
          onSelect();
          setShapeRef(shapeRef);
        },
        // onClick: onSelect,
        ref: shapeRef,
        ...shapeProps,
        draggable: true,
        onClick: () => {
          onSelect();
          setShapeRef(shapeRef);
        },
        onDragEnd: e => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y()
          });
        },
        onTransformEnd: e => {
          // transformer is changing scale
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
            width: node.width() * scaleX,
            height: node.height() * scaleY,
            rotation: node.rotation()
          });
        }
      })}
      {isSelected && <Transformer ref={trRef} />}
    </React.Fragment>
  );
};

function EditableDiv(props) {
  const [selectedId, selectShape] = React.useState(null);
  const [shapeRef, setShapeRef] = React.useState(null);
  const stageRef = React.createRef(); 
  const layerRef = React.createRef(); 

  function handleDeselect() {
    selectShape(null);
    setShapeRef(null);
  }

  return (
    <div className={'editable-div-wrapper ' + (props.selectedElement ? 'editable-div-wrapper-shrink' : 'editable-div-wrapper-expand')}>
      <EditOptions layer={props.layer} onChange={(layer) => props.handleLayerChange(layer)} shapeRef={shapeRef} onDeselect={() => handleDeselect()} />
      <div className="editable-div">
        <Stage
          ref={stageRef}
          width={250}
          height={400}
          onMouseDown={e => {
            // deselect when clicked on empty area
            const clickedOnEmpty = e.target === e.target.getStage();
            if (clickedOnEmpty) {
              handleDeselect();
            }
          }}
        >
          <Layer ref={layerRef}>
            {props.layer.map((element, i) => {
              return (
                <Element
                  key={i}
                  shapeProps={element}
                  isSelected={element.id === selectedId}
                  onSelect={() => {
                    selectShape(element.id);
                  }}
                  onChange={newAttrs => {
                    const layer = props.layer.slice();
                    layer[i] = newAttrs;
                    props.handleLayerChange(layer);
                  }}
                  layerRef={layerRef}
                  stageRef={stageRef}
                  setShapeRef={shapeRef => setShapeRef(shapeRef)}
                />
              );
            })}
          </Layer>
        </Stage>
      </div>
    </div>
  )
}

export default EditableDiv;