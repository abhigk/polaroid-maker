// import { Canvas } from '@react-three/fiber'
// import { OrbitControls, ScrollControls, Scroll } from '@react-three/drei'
// import AnimatedCube from './AnimatedCube'
// import HomePage from './HomePage'

// export default function Scene() {
//   return (
//     <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
//       <ambientLight intensity={0.5} />
//       <pointLight position={[10, 10, 10]} />
//       <ScrollControls pages={2} damping={0.25}>
//         <AnimatedCube />
//         <Scroll html>
//           <HomePage />
//           {/* DOM contents in here will scroll along */}
//           {/* <h1>html in here (optional)</h1>
//           <h1 className='h-screen'>second page</h1>
//           <h1 className='h-screen'>third page</h1> */}
//         </Scroll>
//       </ScrollControls>
//       <OrbitControls enableZoom={false} enablePan={false} />
//     </Canvas>
//   )
// }

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useScroll, Environment, PerspectiveCamera } from '@react-three/drei'
import { calculatePosition, calculateRotation } from '../lib/animations'
import { Group, Mesh } from 'three'
import { Model } from './Model'

export function Scene() {
  const modelRef = useRef(null)
  const meshRef = useRef(null)
  const scroll = useScroll()

  useFrame((state) => {
    if (!modelRef.current || !meshRef.current) return

    const scrollOffset = scroll.offset
    const newPosition = calculatePosition(scrollOffset)
    const newRotation = calculateRotation(scrollOffset, state.clock.elapsedTime)

    modelRef.current.position.copy(newPosition)
    meshRef.current.rotation.copy(newRotation)
  })

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 20]} />
      <Environment preset='sunset' />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />

      <group ref={modelRef}>
        <mesh ref={meshRef} castShadow receiveShadow>
          {/* <torusKnotGeometry args={[1, 0.3, 128, 16]} />
          <meshStandardMaterial color='#4f46e5' metalness={0.5} roughness={0.2} /> */}
          <Model url='/polaroid_camera/scene.gltf' position={[0, -3, 0]} />
        </mesh>
      </group>
    </>
  )
}
