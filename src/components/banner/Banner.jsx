import React from 'react';

const Banner = () => {
  return (
    <div className='w-full flex justify-center items-center  min-h-screen' 
    style={
    {
    backgroundImage: 'url(https://i.ibb.co.com/SmYcfLs/mahim03.jpg)',
    backgroundSize: 'cover',
    backgroundPosition:'center',
    }
    }
    >
     <div className=' z-30'>
     <h1 className=' text-7xl text-white font-black'>Golden <span className=' text-yellow-500'>Utamn</span> offeR</h1>
     <h2 className=' text-center items-center text-3xl text-white  mt-4'>20% off</h2>
     </div>
    </div>
  );
};

export default Banner;