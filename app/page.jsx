'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

import HomePage from '@/components/HomePage'
// const Scene = dynamic(() => import('@/components/Scene'), { ssr: false })
import ModelViewer from '@/components/ModelViewer'

import { Canvas } from '@react-three/fiber'
import { ScrollControls, Scroll } from '@react-three/drei'
import { Scene } from './components/Scene'
import { ScrollContainer } from './components/ScrollContainer'

export default function Home() {
  // return (
  //   <main className='w-full h-[300vh]'>
  //     <div className='fixed top-0 left-0 w-full h-screen'>
  //       <Suspense fallback={<div className='text-white'>Loading...</div>}>
  //         <Scene />
  //       </Suspense>
  //     </div>
  //     {/* <div className='absolute top-0 left-0 w-full p-4  z-10'>
  //       <HomePage />
  //     </div> */}

  //     {/*  return <ModelViewer />; */}
  //   </main>
  // )

  return (
    <div className='w-full h-screen'>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }} className='w-full h-full'>
        <ScrollControls pages={3} damping={0.1}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Scene />
          <Scroll html className='w-full'>
            <ScrollContainer>{/* <div className='absolute inset-0 pointer-events-none' /> */}</ScrollContainer>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  )
}
