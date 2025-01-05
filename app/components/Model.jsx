import { useGLTF } from '@react-three/drei'
import { useEffect } from 'react'
import { Mesh } from 'three'
import { GLTF } from 'three-stdlib'

export function Model({ url, scale = 1, position = [0, 0, 0] }) {
  const { scene } = useGLTF(url)

  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof Mesh) {
        child.castShadow = true
        child.receiveShadow = true
      }
    })
  }, [scene])

  return <primitive object={scene} scale={scale} position={position} />
}
