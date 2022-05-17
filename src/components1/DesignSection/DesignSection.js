import React, { useState, useEffect } from 'react';
import './DesignSection.css';
import ElementsPicker from './ElementsPicker/ElementsPicker';
import EditableDiv from './EditableDiv/EditableDiv';
// import Konva from 'konva';
import useImage from 'use-image';
import { shapesConfig } from './shapesConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const generateKey = (() => {
    var key = 0;
    return () => key += 1;
})();

function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return width;
}

function DesignSection() {
    const width = useWindowWidth();
    const [elementsPickerOpen, setElementsPickerState] = useState(false);
    const [selectedElement, setElement] = useState(null);
    const [imgUrl, setImage] = useState({ type: undefined, value: undefined });
    const [image] = useImage(imgUrl.value);

    const [layer, setLayer] = useState([]);

    useEffect(() => {
        setLayer(prev => {
            var layerArr = [...prev];
            if (imgUrl.type === 'background') {
                if (image && image.naturalWidth && image.naturalHeight) {
                    layerArr[0].image = image;
                    layerArr[0].width = 0;
                    layerArr[0].x = -((image.naturalWidth - 250) / 2);
                    layerArr[0].height = 0;
                    layerArr[0].y = -((image.naturalHeight - 400) / 2);
                }
            }
            else if (imgUrl.type === 'image') {
                layerArr[layerArr.length - 1].image = image;
                if (image && image.naturalWidth && image.naturalHeight) {
                    if (image.naturalWidth <= image.naturalHeight) {
                        layerArr[layerArr.length - 1].width = 100;
                        layerArr[layerArr.length - 1].x = 75;
                        layerArr[layerArr.length - 1].height = (100 / image.naturalWidth) * image.naturalHeight;
                        layerArr[layerArr.length - 1].y = (400 - layerArr[layerArr.length - 1].height) / 2;
                    } else {
                        layerArr[layerArr.length - 1].height = 100;
                        layerArr[layerArr.length - 1].y = 150;
                        layerArr[layerArr.length - 1].width = (100 / image.naturalHeight) * image.naturalWidth;
                        layerArr[layerArr.length - 1].x = (250 - layerArr[layerArr.length - 1].width) / 2;
                    }
                }
            }
            return layerArr;
        });
    }, [image, imgUrl]);

    function handleElementClick(element) {
        setElement(element);
        if(width <= 720 && !element) {
            setElementsPickerState(false);
            setElement(1);
        }
    }

    function handleAddElement(element) {
        setLayer(prev => {
            var layerArr = [...prev];
            var obj = { ...shapesConfig[element.type] };
            obj["type"] = element.type;
            obj["key"] = String(generateKey());
            obj["id"] = obj["key"];
            if (element.type === 'Image') {
                obj["image"] = image;
                if (selectedElement === 5) {
                    obj["background"] = true;
                    setImage({ type: "background", value: element.value });
                    if (layerArr[0] && layerArr[0].background) {
                        layerArr[0] = obj;
                    } else {
                        layerArr.unshift(obj);
                    }
                } else {
                    setImage({ type: "image", value: element.value });
                    layerArr.push(obj);
                }
            } else {
                layerArr.push(obj);
            }
            return layerArr;
        });
        if(width <= 720) {
            setElementsPickerState(false);
        }
    };

    function handlesElementsPickerState() {
        setElementsPickerState(prev => !prev);
    }

    useEffect(() => {
        if(width > 720) {
            setElementsPickerState(true);
        } else {
            setElementsPickerState(false);
            setElement(1);
        }
    },[width]);

    function handleLayerChange(updatedLayer) {
        setLayer(updatedLayer);
    }

    return (
        <div className="design-section">
            {elementsPickerOpen && <ElementsPicker
                selectedElement={selectedElement}
                handleElementClick={(i) => handleElementClick(i)}
                handleAddElement={(element) => handleAddElement(element)}
            />}
            <EditableDiv selectedElement={selectedElement} layer={layer} className="editable-div" handleLayerChange={(updatedLayer) => handleLayerChange(updatedLayer)} />
            {!elementsPickerOpen && <button onClick={() => handlesElementsPickerState()}><FontAwesomeIcon icon={faPlus} size="2x"></FontAwesomeIcon></button>}
        </div>
    );
}

export default DesignSection;