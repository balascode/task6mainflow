import React, { useState } from 'react';
import ImageItem from './ImageItem';
import ImageModal from './ImageModal';
import './Gallery.css';

import category1Image1 from '../assets/category1/image1.jpg';
import category1Image2 from '../assets/category1/image2.jpg';
import category1Image3 from '../assets/category1/image3.jpg';
import category1Image4 from '../assets/category1/image4.jpg';
import category1Image5 from '../assets/category1/image5.jpg';
import category1Image6 from '../assets/category1/image6.jpg';

import category2Image1 from '../assets/category2/image1.jpg';
import category2Image2 from '../assets/category2/image2.jpg';
import category2Image3 from '../assets/category2/image3.jpg';
import category2Image4 from '../assets/category2/image4.jpg';
import category2Image5 from '../assets/category2/image5.jpg';
import category2Image6 from '../assets/category2/image6.jpg';

import category3Image1 from '../assets/category3/image1.jpg';
import category3Image2 from '../assets/category3/image2.jpg';
import category3Image3 from '../assets/category3/image3.jpg';
import category3Image4 from '../assets/category3/image4.jpg';
import category3Image5 from '../assets/category3/image5.jpg';
import category3Image6 from '../assets/category3/image6.jpg';

const categories = [
  {
    name: 'Nature',
    images: [category1Image1, category1Image2, category1Image3, category1Image4, category1Image5, category1Image6]
  },
  {
    name: 'Animals',
    images: [category2Image1, category2Image2, category2Image3, category2Image4, category2Image5, category2Image6]
  },
  {
    name: 'Vehicles',
    images: [category3Image1, category3Image2, category3Image3, category3Image4, category3Image5, category3Image6]
  }
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery">
      {categories.map((category, index) => (
        <div key={index} className="category">
          <h2>{category.name}</h2>
          <div className="image-grid">
            {category.images.map((image, idx) => (
              <ImageItem key={idx} src={image} onClick={() => openModal(image)} />
            ))}
          </div>
        </div>
      ))}
      {selectedImage && <ImageModal src={selectedImage} onClose={closeModal} />}
    </div>
  );
}

export default Gallery;
