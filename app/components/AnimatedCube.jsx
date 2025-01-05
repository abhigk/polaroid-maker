'use client'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'
import * as THREE from 'three'

export default function AnimatedCube() {
  const mesh = useRef(null)
  const data = useScroll()

  useFrame((state, delta) => {
    const scrollOffset = data.offset

    // Rotate the cube based on scroll position
    mesh.current.rotation.x = scrollOffset * Math.PI * 2
    mesh.current.rotation.y = scrollOffset * Math.PI * 4

    // Change the cube's color based on scroll position
    const hue = scrollOffset * 360
    mesh.current.material.color.setHSL(hue / 360, 1, 0.5)

    // Scale the cube based on scroll position
    const scale = 1 + scrollOffset * 0.5
    mesh.current.scale.setScalar(scale)

    // Move the cube vertically based on scroll position
    mesh.current.position.y = scrollOffset * 4 - 2 // This will move the cube from -2 to 2 on the y-axis

    // Move the cube horizontally based on scroll position
    mesh.current.position.x = Math.sin(scrollOffset * Math.PI * 2) * 3 // This will move the cube left and right in a sinusoidal pattern
  })

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial />
    </mesh>
  )
}
