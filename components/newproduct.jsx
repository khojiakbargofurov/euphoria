'use client';

import Link from 'next/link';
import CustomImage from './image';

const NewProduct = ({ product }) => {

  return (
    <Link
      href={`/${product.id}`}
      className='h-96 flex flex-col p-6 rounded-lg group hover:scale-105 transition-transform ease-out duration-200 border'
    >
      <div className='relative max-h-80 flex-1'>
        <CustomImage product={product} fill />
      </div>

      <div className='font-semibold flex items-center justify-between mt-4 mb-1'>
        <p className='w-44 truncate'>{product.title}</p>
      </div>
    </Link>
  );
};

export default NewProduct;