import React from 'react';

const Slider = ({ posterPath, imgPath, handleClick, id, handleOpen }) => {
  return (
    <>
      <img
        onClick={() => handleClick(id)}
        src={imgPath + posterPath}
        alt=''
        className='h-full w-full object-contain transform scale-100 hover:scale-110 transition duration-500 ease-in-out'
      />
    </>
  );
};

export default Slider;
