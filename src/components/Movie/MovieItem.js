import React from 'react';

const Slider = ({ posterPath, imgPath, backdropPath }) => {
  return (
    <div className=" ">
      <img
        src={imgPath + posterPath}
        alt=""
        className="h-full w-full object-contain transform scale-100 hover:scale-110 transition duration-500 ease-in-out"
      />
    </div>
  );
};

export default Slider;
