import React from 'react';
import './BackgroundsTray.css';

function BackgroundsTray(props) {
    const url = "https://app-smb2.web.app/static/media/";
    let images = ["2.c8375519.jpg", "4.08884bd0.jpg", "6.0a044c95.jpg", "8.cfad3e66.jpg", "10.cca6b46a.jpg", "11.7dd90c79.jpg", "12.7c2db6ac.jpg", "13.d71a53ec.jpg", "14.82a82f5c.jpg", "1.d2ee7156.jpg", "5.476c9bfc.jpg"];
    images = images.map(img => {
        return (<div key={img} onClick={() => props.handleAddElement({type: "Image", value: url + img})}>
            <img src={url + img} alt={img}></img>
        </div>)
    });

    return (
        <div className="backgrounds-tray">
            {images}
        </div>
    );
}

export default BackgroundsTray;