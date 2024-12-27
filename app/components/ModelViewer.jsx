'use client'
import { Canvas } from '@react-three/fiber'

import { OrbitControls, useGLTF } from '@react-three/drei'

const ModelViewer = () => {
  const earth = useGLTF('/polaroid_camera/scene.gltf')

  return (
    <Canvas
      className='cursor-pointer'
      frameloop='demand'
      camera={{ position: [-4, 7, -9], fov: 45, near: 1, far: 100 }}
    >
      <OrbitControls
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        enablePan={false}
      />
      <ambientLight />
      <pointLight position={[10, 10, 10]} intensity={5000} color='#fff' />
      <primitive object={earth.scene} scale={1} />
    </Canvas>
  )
}

export default ModelViewer
