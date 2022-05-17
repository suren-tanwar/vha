import React from 'react';
import './TextTray.css';

function TextTray(props) {
    return (
        <div className="text-tray">
            <div onClick={() => props.handleAddElement({type: "Text", value: undefined})}>
                <h1>Sample Text</h1>
            </div>
        </div>
    );
}

export default TextTray;