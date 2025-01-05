import * as THREE from 'three';

export function calculateRotation(scrollOffset: number): THREE.Euler {
  return new THREE.Euler(
    scrollOffset * Math.PI * 4,
    scrollOffset * Math.PI * 2,
    0
  );
}

export function calculatePosition(scrollOffset: number): THREE.Vector3 {
  return new THREE.Vector3(
    Math.sin(scrollOffset * Math.PI * 2) * 8, // Left-right movement
    Math.cos(scrollOffset * Math.PI) * 0.5,   // Slight up-down movement
    0
  );
}

export function calculateScale(scrollOffset: number): number {
  return 1 + scrollOffset * 0.5;
}

export function calculateColor(scrollOffset: number): THREE.Color {
  const hue = (scrollOffset * 0.5) % 1;
  const color = new THREE.Color();
  color.setHSL(hue, 0.8, 0.5);
  return color;
}