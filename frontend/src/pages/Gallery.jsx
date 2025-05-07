import React from 'react';
import Navbar from '../Components/Navbar';
import Menu from '../Components/Menu';

import photo1 from '../assets/gallery/1.png';
import photo2 from '../assets/gallery/2.JPG';
import photo3 from '../assets/gallery/3.JPG';
import photo4 from '../assets/gallery/4.JPG';
import photo5 from '../assets/gallery/5.HEIC'


const Gallery = () => {

const gallery = [
  {
    id:img1,
    src:photo1
  },
  {
    id:img2,
    src:photo2
  },
  {
    id:img3,
    src:photo3
  },
  {
    id:img4,
    src:photo4
  },
  {
    id:img5,
    src:photo5
  }
];

  return (
    <div className='h-full w-full flex flex-col justify-center items-center'>
        <Navbar/>
        <Menu/>
        <div className='w-full min-h-screen h-auto flex flex-col justify-center items-center'>
          {

          }
        </div>
    </div>
  )
}

export default Gallery;