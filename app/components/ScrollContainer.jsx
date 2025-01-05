import React from 'react'
import HomePage from './HomePage'

export function ScrollContainer({ children }) {
  return (
    // <div className='h-[300vh]'>
    //   <div className='sticky top-0 h-screen'>{children}</div>
    //   <div className='px-4 py-8 space-y-96'>
    //     <div className='max-w-2xl mx-auto'>
    //       <h2 className='text-4xl font-bold text-white'>Dynamic Movement</h2>
    //       <p className='mt-4 text-lg text-gray-300'>
    //         Watch as the object flows smoothly from side to side as you scroll.
    //       </p>
    //     </div>
    //     <div className='max-w-2xl mx-auto'>
    //       <h2 className='text-4xl font-bold text-white'>Fluid Animation</h2>
    //       <p className='mt-4 text-lg text-gray-300'>
    //         The object dances through space with synchronized rotations and movements.
    //       </p>
    //     </div>
    //     <div className='max-w-2xl mx-auto'>
    //       <h2 className='text-4xl font-bold text-white'>Color Transitions</h2>
    //       <p className='mt-4 text-lg text-gray-300'>
    //         Experience smooth color transitions as the object moves through its path.
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <HomePage />
  )
}
