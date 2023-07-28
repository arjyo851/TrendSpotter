import React, { useState } from 'react';

const Card: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const imageURL =
    'https://images.unsplash.com/photo-1497997092403-f091fcf5b6c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTQ2MDUyOA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080';

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

//   <button type="button" class="bg-indigo-500 ..." disabled>
//   <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
//     <!-- ... -->
//   </svg>
//   Processing...
// </button>

  return (
    <div className="p-4 rounded-lg shadow-lg bg-white overflow-hidden transform transition-transform hover:scale-105">
      <img
        src={imageURL}
        alt="Beautiful Card"
        className={`w-full h-48 object-cover rounded-lg ${
          imageLoaded ? '' : 'animate-pulse'
        }`}
        onLoad={handleImageLoad}
        loading="lazy" // Native lazy-loading attribute
      />
    </div>
  );
};

export default Card;
