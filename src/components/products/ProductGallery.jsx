import { useState } from "react";

const ProductGallery = ({ images }) => {
  const [activeImage, setActiveImage] =
    useState(images[0]);

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
      
      {/* Main Image */}
      <div className="h-125 bg-[#f5f7fb] rounded-3xl flex items-center justify-center p-6">
        <img
          src={activeImage}
          alt="Product"
          className="h-full object-contain"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-4 mt-5 overflow-x-auto">
        
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() =>
              setActiveImage(image)
            }
            className={`w-24 h-24 rounded-2xl overflow-hidden border-2 transition-all
            ${
              activeImage === image
                ? "border-[#7c3aed]"
                : "border-transparent"
            }`}
          >
            <img
              src={image}
              alt=""
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;