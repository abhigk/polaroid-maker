'use client'

import dynamic from 'next/dynamic'
import { Suspense, useRef } from 'react'

import HomePage from '@/components/HomePage'
// const Scene = dynamic(() => import('@/components/Scene'), { ssr: false })
import ModelViewer from '@/components/ModelViewer'
import { useEffect } from 'react'
import { Canvas, useThree, useLoader, useFrame } from '@react-three/fiber'
import { ScrollControls, Scroll, Html, Plane } from '@react-three/drei'
import { TextureLoader } from 'three'
import { Scene } from './components/Scene'
import { ScrollContainer } from './components/ScrollContainer'
import bgImg from './components/local-img/polaroid-bg.png'
import useSectionInView from './components/useSectionInView'

// Component for DOM elements with positioning control
const BackgroundElements = () => {
  return (
    <Html
      className='w-full h-full'
      prepend // This ensures the DOM elements render behind the 3D scene
      portal={null} // Prevents the creation of a new portal
      transform={false} // Disables 3D transformations
      zIndexRange={[0, 0]} // Forces elements to stay behind
    >
      <div className='absolute left-1/4 top-1/4 p-4 bg-white/80 rounded'>
        <h2 className='text-xl font-bold'>Behind Model</h2>
        <p>This content stays behind the 3D model</p>
      </div>

      <div className='absolute right-1/4 bottom-1/4 p-4 bg-white/80 rounded'>
        <h2 className='text-xl font-bold'>Also Behind</h2>
        <p>Another element behind the model</p>
      </div>
    </Html>
  )
}

// function BackgroundTexture() {
//   const { scene, gl, events } = useThree()
//   const texture = useLoader(TextureLoader, '/images/polaroid-bg.png')

//   useEffect(() => {
//     const scrollHandler = (e) => {
//       const scrollY = window.scrollY
//       const viewportHeight = window.innerHeight
//       const thirdPageStart = 2 * viewportHeight // Adjust based on your pages

//       if (scrollY >= thirdPageStart) {
//         scene.background = texture
//       } else {
//         scene.background = null // Or a default background color
//       }
//     }

//     window.addEventListener('scroll', scrollHandler)
//     return () => {
//       window.removeEventListener('scroll', scrollHandler)
//     }
//   }, [scene, texture])

//   return null // This component doesn't render anything visually
// }

// function BackgroundImage() {
//   const { viewport } = useThree()
//   const texture = useLoader(TextureLoader, '/images/polaroid-bg.png')
//   const mesh = useRef()
//   const scroll = useThree((state) => state.scroll)

//   useFrame(() => {
//     console.log('scroll', scroll)

//     if (mesh.current) {
//       // Adjust visibility based on scroll (optional)
//       const scrollProgress = window.scrollY / (document.body.scrollHeight - window.innerHeight)
//       // console.log('window.scrollY', window.scrollY)

//       // console.log('scrollProgress', scrollProgress)

//       if (scrollProgress > 6) {
//         // Adjust this threshold for your third page
//         mesh.current.visible = true
//       } else {
//         mesh.current.visible = false
//       }
//     }
//   })

//   return (
//     <Plane ref={mesh} position={[0, 0, -10]} args={[viewport.width * 2, viewport.height * 2]}>
//       <meshBasicMaterial map={texture} side={'FrontSide'} />
//     </Plane>
//   )
// }

const HtmlContent = () => {
  const { gl } = useThree()
  return (
    <>
      <h1 style={{ top: '100vh', position: 'relative' }}>html in here (optional)</h1>
      <h1 style={{ top: '200vh', position: 'relative' }}>second page</h1>

      {/* I want this img dom shown as background behind the model*/}
      <h1 style={{ top: '100vh', position: 'relative' }} id='third-page'>
        third page
        <img src={'/images/polaroid-bg.png'} style={{ width: '100%', height: '100%' }} />
      </h1>

      <Html transform portal={{ current: gl.domElement.parentNode }}>
        Test
      </Html>
    </>
  )
}

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
  const isAboutInView = useSectionInView('third-page', 10) // 100px offset
  console.log('isAboutInView', isAboutInView)

  return (
    <div className='w-full h-screen'>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }} className='w-full h-full'>
        {/* <BackgroundTexture /> */}
        {/* <BackgroundImage /> */}
        <ScrollControls pages={3} damping={0.1}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Scene />
          <Scroll html className='w-full'>
            <h1 style={{ top: '100vh', position: 'relative' }}>html in here (optional)</h1>
            <h1 style={{ top: '200vh', position: 'relative' }}>second page</h1>

            {/* I want this img dom shown as background behind the model*/}
            <h1 style={{ top: '100vh', position: 'relative' }} id='third-page'>
              third page
              <img src={'/images/polaroid-bg.png'} style={{ width: '100%', height: '100%' }} />
            </h1>

            {/* <ScrollContainer>
              <div className='absolute inset-0 pointer-events-none' />
            </ScrollContainer> */}

            {/* Background image as a plane */}
            {/* <mesh position={[0, viewport.height * 2, -5]}>
              <planeGeometry args={[viewport.width, viewport.height]} />
              <meshBasicMaterial
                map={useLoader(THREE.TextureLoader, './components/local-img/polaroid-bg.png')}
                transparent={true}
              />
            </mesh> */}
          </Scroll>
          {/* <BackgroundElements /> */}
        </ScrollControls>
      </Canvas>
    </div>
  )
}
