import React, { useState } from 'react';
import './UploadsTray.css';

const generateKey = (() => {
    var key = 0;
    return () => key += 1;
})();

function UploadsTray(props) {
    const [images, setImage] = useState([]);

    function handleImageUpload(e) {
        if (e.target.files && e.target.files[0]) {
            var fileName = e.target.files[0].name;
            var reader = new FileReader();
            reader.onload = function (data) {
                setImage(prev => {
                    var imagesArr = [...prev];
                    imagesArr.push(
                        <div
                            key={generateKey()}
                            onClick={() => props.handleAddElement({ type: "Image", value: data.target.result })}
                        >
                            <img src={data.target.result} alt={fileName}></img>
                        </div>);
                    return imagesArr;
                });
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    }

    return (
        <div>
            <div className="upload-image-btn-wrapper">
                <input id="upload-image-btn" type="file" accept="images/*" onChange={(e) => handleImageUpload(e)} />
                <label className="upload-image-btn-label" htmlFor="upload-image-btn">Upload Image</label>
            </div>
            <div className="uploads-tray">
                {images}
            </div>
        </div>
    );
}

export default UploadsTray;