import React from 'react';
import './ImageItem.css';

function ImageItem({ src, onClick }) {
    return (
        <div className="image-item" onClick={onClick}>
            <img src={src} alt="Gallery" />
        </div>
    );
}

export default ImageItem;
