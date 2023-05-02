import React from 'react';

export default function Images({ images }: { images: string[] }) {
  return (
    <div>
      <h1 className='font-bold text-3xl mt-10 mb-7 border-b pb-5'>
        {images.length} photo{images.length > 1 ? 's' : ''}
      </h1>
      <div className='flex flex-wrap'>
        {images.map((image) => (
          <img className='w-56 h-44 mr-1 mb-1' src={image} alt='' key={image} />
        ))}
        {/* <img
          className='w-56 h-44 mr-1 mb-1'
          src='https://resizer.otstatic.com/v2/photos/xlarge/3/41701449.jpg'
          alt=''
        />
        <img
          className='w-56 h-44 mr-1 mb-1'
          src='https://resizer.otstatic.com/v2/photos/xlarge/2/41701450.jpg'
          alt=''
        />
        <img
          className='w-56 h-44 mr-1 mb-1'
          src='https://resizer.otstatic.com/v2/photos/xlarge/2/41701452.jpg'
          alt=''
        />
        <img
          className='w-56 h-44 mr-1 mb-1'
          src='https://resizer.otstatic.com/v2/photos/xlarge/2/41701453.jpg'
          alt=''
        />
        <img
          className='w-56 h-44 mr-1 mb-1'
          src='https://resizer.otstatic.com/v2/photos/xlarge/2/41701454.jpg'
          alt=''
        /> */}
      </div>
    </div>
  );
}
