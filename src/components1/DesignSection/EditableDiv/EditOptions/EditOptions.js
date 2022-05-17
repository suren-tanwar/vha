import React from 'react';
import './EditOptions.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort, faBold, faItalic, faUnderline, faTrash, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'


function EditOptions(props) {
    function handleFlip(direction) {
        var layer = [...props.layer];
        var index = layer.findIndex(obj => obj.id === props.shapeRef.current.attrs.id);
        if(direction === "vertical") {
            layer[index].scaleY = -(layer[index].scaleY);
        } else if(direction === "horizontal") {
            layer[index].scaleX = -(layer[index].scaleX);
        }
        props.onChange(layer);
    }

    function handleFontStyle(style) {
        var layer = [...props.layer];
        var index = layer.findIndex(obj => obj.id === props.shapeRef.current.attrs.id);
        if(layer[index].fontStyle) {
            var stylesArr = layer[index].fontStyle.split(" ");
            var styleIndex = stylesArr.indexOf(style)
            if(styleIndex !== -1) {
                stylesArr.splice(styleIndex, 1);
            } else {
                stylesArr.push(" " + style);
            }
            layer[index].fontStyle = stylesArr.join(" ");
        } else {
            layer[index].fontStyle = style;
        }
        props.onChange(layer);
    }

    function handleTextDecoration(decoration) {
        var layer = [...props.layer];
        var index = layer.findIndex(obj => obj.id === props.shapeRef.current.attrs.id);
        if(layer[index].textDecoration) {
            layer[index].textDecoration = "";
        } else {
            layer[index].textDecoration = decoration;
        }
        props.onChange(layer);
    }

    function handleDeleteLayer() {
        var layer = [...props.layer];
        var index = layer.findIndex(obj => obj.id === props.shapeRef.current.attrs.id);
        layer.splice(index, 1);
        props.onChange(layer);
    }

    function handleZindex(dir) {
        var layer = [...props.layer];
        var obj = layer.find(obj => obj.id === props.shapeRef.current.attrs.id);
        var index = layer.findIndex(obj => obj.id === props.shapeRef.current.attrs.id);
        layer.splice(index, 1);
        if(dir === "up") {
            layer.splice(index+1, 0, obj);
        } else if(dir === "down") {
            layer.splice(index-1, 0, obj);
        }
        props.onDeselect();
        props.onChange(layer);
    }

    return (
        <div className="edit-options">
            {
                props.shapeRef && props.shapeRef.current && 
                <div className="options-wrapper">
                  <div onClick={() => handleZindex("up")}>
                    <FontAwesomeIcon icon={faChevronUp} size="2x" />
                  </div>
                  <div onClick={() => handleZindex("down")}>
                    <FontAwesomeIcon icon={faChevronDown} size="2x" />
                  </div>
                  <div onClick={() => handleFlip("vertical")}>
                    <FontAwesomeIcon icon={faSort} size="2x" />
                  </div>
                  <div onClick={() => handleFlip("horizontal")}>
                    <FontAwesomeIcon icon={faSort} size="2x" rotation={90} />
                  </div>
                  {props.shapeRef.current.attrs.type === "Text" && 
                    <div onClick={() => handleFontStyle("bold")}>
                      <FontAwesomeIcon icon={faBold} size="2x" />
                    </div>
                  }
                  {props.shapeRef.current.attrs.type === "Text" && 
                    <div onClick={() => handleFontStyle("italic")}>
                      <FontAwesomeIcon icon={faItalic} size="2x" />
                    </div>
                  }
                  {props.shapeRef.current.attrs.type === "Text" && 
                    <div onClick={() => handleTextDecoration("underline")}>
                      <FontAwesomeIcon icon={faUnderline} size="2x" />
                    </div>
                  }
                  <div onClick={() => handleDeleteLayer()}>
                    <FontAwesomeIcon icon={faTrash} size="2x" />
                  </div>
                </div>
            }
        </div>
    )
}

export default EditOptions;