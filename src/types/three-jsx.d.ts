import { ReactThreeFiber } from '@react-three/fiber'
import * as THREE from 'three'

declare module '@react-three/fiber' {
  interface ThreeElements {
    group: ReactThreeFiber.Object3DNode<THREE.Group, typeof THREE.Group>
    mesh: ReactThreeFiber.Object3DNode<THREE.Mesh, typeof THREE.Mesh>
    boxGeometry: ReactThreeFiber.BufferGeometryNode<THREE.BoxGeometry, typeof THREE.BoxGeometry>
    sphereGeometry: ReactThreeFiber.BufferGeometryNode<THREE.SphereGeometry, typeof THREE.SphereGeometry>
    circleGeometry: ReactThreeFiber.BufferGeometryNode<THREE.CircleGeometry, typeof THREE.CircleGeometry>
    planeGeometry: ReactThreeFiber.BufferGeometryNode<THREE.PlaneGeometry, typeof THREE.PlaneGeometry>
    meshBasicMaterial: ReactThreeFiber.MaterialNode<THREE.MeshBasicMaterial, typeof THREE.MeshBasicMaterial>
    meshStandardMaterial: ReactThreeFiber.MaterialNode<THREE.MeshStandardMaterial, typeof THREE.MeshStandardMaterial>
    ambientLight: ReactThreeFiber.LightNode<THREE.AmbientLight, typeof THREE.AmbientLight>
    spotLight: ReactThreeFiber.LightNode<THREE.SpotLight, typeof THREE.SpotLight>
    pointLight: ReactThreeFiber.LightNode<THREE.PointLight, typeof THREE.PointLight>
  }
}

export {}