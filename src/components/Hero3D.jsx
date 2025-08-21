import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Effects, Float, Html, Stars, PresentationControls } from '@react-three/drei'
import * as THREE from 'three'
import { useMemo, useRef } from 'react'

function TwistedKnot() {
  const mesh = useRef()
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    mesh.current.rotation.x = t * 0.2
    mesh.current.rotation.y = t * 0.35
  })
  return (
    <Float floatIntensity={1.6} rotationIntensity={0.6}>
      <mesh ref={mesh}>
        <torusKnotGeometry args={[1.1, 0.32, 196, 24, 2, 5]} />
        <meshStandardMaterial metalness={0.85} roughness={0.2} color={new THREE.Color('#1f9fff')} envMapIntensity={1.2} />
      </mesh>
    </Float>
  )
}

function Particles({ count = 1200 }) {
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 14 * Math.cbrt(Math.random())
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const x = r * Math.sin(phi) * Math.cos(theta)
      const y = r * Math.sin(phi) * Math.sin(theta)
      const z = r * Math.cos(phi)
      arr.set([x, y, z], i * 3)
    }
    return arr
  }, [count])
  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.02} sizeAttenuation depthWrite={false} transparent opacity={0.6} color={new THREE.Color('#9ae6ff')} />
    </points>
  )
}

export default function Hero3D({ headline, subline, primaryCta, secondaryCta }) {
  return (
    <div className="relative h-full">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 40 }} dpr={[1, 2]} aria-hidden="true">
        <ambientLight intensity={0.5} />
        <directionalLight position={[6, 6, 6]} intensity={1.2} />
        <TwistedKnot />
        <Particles />
        <Stars radius={80} depth={50} count={1500} factor={4} saturation={0} fade speed={0.6} />
        <Effects disableGamma>
          {/* default bloom from drei's Effects (postprocessing) */}
        </Effects>
        <OrbitControls enablePan={false} enableZoom={false} />
        <Html center distanceFactor={6} transform>
          <div className="text-center max-w-xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-snug">
              <span className="gradient-text">{headline}</span>
            </h1>
            <p className="text-gray-700 dark:text-white/90 mt-3 md:text-lg">
              {subline}
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={primaryCta.href} className="btn-primary" aria-label={primaryCta.label}>
                {primaryCta.label}
              </a>
              {secondaryCta && (
                <a
                  href={secondaryCta.href}
                  className="px-6 py-3 rounded-2xl border border-brand-500 text-brand-500 hover:bg-brand-500 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-brand-300"
                  aria-label={secondaryCta.label}
                  target={secondaryCta.target}
                  rel={secondaryCta.target ? 'noreferrer' : undefined}
                >
                  {secondaryCta.label}
                </a>
              )}
            </div>
          </div>
        </Html>
      </Canvas>
      <div className="absolute inset-x-0 bottom-6 text-center text-gray-600 dark:text-white/70 text-sm">Scroll to explore ↓</div>
    </div>
  )
}