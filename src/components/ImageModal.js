import React from 'react';
import './ImageModal.css';

function ImageModal({ src, onClose }) {
    return (
        <div className="modal" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="close" onClick={onClose}>&times;</span>
                <img src={src} alt="Gallery" className="modal-image" />
            </div>
        </div>
    );
}

export default ImageModal;
