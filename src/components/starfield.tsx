'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

function Stars({ count = 2000 }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null)
  
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const idx = i * 3
      const r1 = seededRandom(idx)
      const r2 = seededRandom(idx + 1)
      const r3 = seededRandom(idx + 2)
      pos[idx] = (r1 - 0.5) * 10
      pos[idx + 1] = (r2 - 0.5) * 10
      pos[idx + 2] = (r3 - 0.5) * 10
    }
    return pos
  }, [count])

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.015
      ref.current.rotation.x += delta * 0.005
    }
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#82cbff"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.9}
      />
    </Points>
  )
}

function BackgroundGlow() {
  return (
    <mesh position={[0, 0, -5]}>
      <planeGeometry args={[20, 20]} />
      <meshBasicMaterial color="#030712" transparent opacity={0.6} />
    </mesh>
  )
}

export function Starfield() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1.5] }}>
        <BackgroundGlow />
        <Stars count={2000} />
      </Canvas>
    </div>
  )
}