import React, { useState } from "react";

interface CardProps {
  id: number;
}

const Card: React.FC<CardProps> = ({ id }) => {
  const imageURL =
    "https://res.cloudinary.com/da3qf0dys/image/upload/v1690302352/fashion_small/" +
    id +
    ".jpg";

  // eslint-disable-next-line
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageClasses, setImageClasses] = useState(
    `p-4 m-4 rounded-lg shadow-lg bg-white overflow-hidden transform transition-transform hover:scale-105`
  );

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageClasses(imageClasses + " hidden");
  };

  return (
    <div className={imageClasses}>
      <img
        src={imageURL}
        onError={handleImageError}
        alt="Recommended Result"
        className="w-full h-48 object-cover rounded-lg"
        onLoad={handleImageLoad}
        loading="lazy"
      />
    </div>
  );
};

export default Card;
