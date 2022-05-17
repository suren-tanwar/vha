import React from 'react';
import './ElementsPicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBorderAll, faShapes, faSquareFull, faCloudUploadAlt, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faImage, faKeyboard } from '@fortawesome/free-regular-svg-icons'
import PhotosTray from './Elements/PhotosTray/PhotosTray';
import ShapesTray from './Elements/ShapesTray/ShapesTray';
import TextTray from './Elements/TextTray/TextTray';
import BackgroundsTray from './Elements/BackgroundsTray/BackgroundsTray';
import UploadsTray from './Elements/UploadsTray/UploadsTray';

function ItemsTray(props) {
    function handleAddElement(element) {
        props.handleAddElement(element);
    }
    var tray;
    switch (props.selectedElement) {
        case 2: tray = <PhotosTray handleAddElement={(element) => handleAddElement(element)} />; break;
        case 3: tray = <ShapesTray handleAddElement={(element) => handleAddElement(element)} />; break;
        case 4: tray = <TextTray handleAddElement={(element) => handleAddElement(element)} />; break;
        case 5: tray = <BackgroundsTray handleAddElement={(element) => handleAddElement(element)} />; break;
        case 6: tray = <UploadsTray handleAddElement={(element) => handleAddElement(element)} />; break;
        default: tray = <h1>{props.selectedElement} Works!!</h1>
    }
    return (
        <div className="items-tray">
            {tray}
        </div>
    )
}

function ElementsPicker(props) {
    function selectClassNames(i) {
        var classNames = "";
        props.selectedElement === i ? classNames += "element-selected" : classNames += "element-unselected";
        props.selectedElement === i - 1 ? classNames += " border-tr-radius-15" : classNames += "";
        props.selectedElement === i + 1 ? classNames += " border-br-radius-15" : classNames += "";
        return classNames;
    }

    function handleAddElement(element) {
        props.handleAddElement(element);
    }

    return (
        <aside className={props.selectedElement ? "aside-expanded" : ""}>
            <div className={'element-picker-tray ' + (props.selectedElement ? 'element-picker-tray-expanded' : '')}>
                <div className="elements-ul-container">
                    <ul>
                        <li onClick={() => props.handleElementClick(1)} className={selectClassNames(1)}>
                            <FontAwesomeIcon icon={faBorderAll} size="2x" /><br></br>Templates
                    </li>
                        <li onClick={() => props.handleElementClick(2)} className={selectClassNames(2)}>
                            <FontAwesomeIcon icon={faImage} size="2x" /><br></br>Photos
                    </li>
                        <li onClick={() => props.handleElementClick(3)} className={selectClassNames(3)}>
                            <FontAwesomeIcon icon={faShapes} size="2x" /><br></br>Elements
                    </li>
                        <li onClick={() => props.handleElementClick(4)} className={selectClassNames(4)}>
                            <FontAwesomeIcon icon={faKeyboard} size="2x" /><br></br>Text
                    </li>
                        <li onClick={() => props.handleElementClick(5)} className={selectClassNames(5)}>
                            <FontAwesomeIcon icon={faSquareFull} size="2x" /><br></br>Background
                    </li>
                        <li onClick={() => props.handleElementClick(6)} className={selectClassNames(6)}>
                            <FontAwesomeIcon icon={faCloudUploadAlt} size="2x" /><br></br>Uploads
                    </li>
                        <li className={selectClassNames(7)}></li>
                    </ul>
                </div>

                {props.selectedElement && <ItemsTray selectedElement={props.selectedElement} handleAddElement={(element) => handleAddElement(element)} />}
            </div>
            {props.selectedElement && <div className="collapse-btn" onClick={() => props.handleElementClick(null)}><FontAwesomeIcon icon={faAngleLeft} /></div>}
        </aside>
    )
}

export default ElementsPicker;