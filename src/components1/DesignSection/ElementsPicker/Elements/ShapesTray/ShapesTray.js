import React from 'react';
import './ShapesTray.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFull, faCircle } from '@fortawesome/free-solid-svg-icons';

function ShapesTray(props) {
    return (
        <div className="elements-tray">
            <div onClick={() => props.handleAddElement({type: "Rect", value: undefined})}>
                <FontAwesomeIcon icon={faSquareFull} size="8x" />
            </div>
            <div onClick={() => props.handleAddElement({type: "Circle", value: undefined})}>
                <FontAwesomeIcon icon={faCircle} size="8x" />
            </div>
        </div>
    );
}

export default ShapesTray;