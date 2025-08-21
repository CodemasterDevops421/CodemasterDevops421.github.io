import { useThree, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useRef, useEffect } from 'react'
import * as THREE from 'three'

// Custom camera controls with smooth zooming and keyboard/touch support
export default function CameraControls () {
  const { camera, gl, size } = useThree()
  const controls = useRef()
  const target = useRef(camera.position.clone())
  const keys = useRef({})
  const raycaster = useRef(new THREE.Raycaster())

  // Smoothly interpolate camera position towards target
  useFrame(() => {
    camera.position.lerp(target.current, 0.1)
    controls.current?.update()
    const dir = new THREE.Vector3()
    if (keys.current['KeyW']) target.current.add(camera.getWorldDirection(dir).multiplyScalar(0.1))
    if (keys.current['KeyS']) target.current.add(camera.getWorldDirection(dir).multiplyScalar(-0.1))
    if (keys.current['KeyA']) target.current.add(new THREE.Vector3().crossVectors(camera.up, camera.getWorldDirection(dir)).normalize().multiplyScalar(0.1))
    if (keys.current['KeyD']) target.current.add(new THREE.Vector3().crossVectors(camera.getWorldDirection(dir), camera.up).normalize().multiplyScalar(0.1))
  })

  useEffect(() => {
    const dom = gl.domElement

    const handleWheel = (e) => {
      e.preventDefault()
      const delta = -e.deltaY * 0.005
      const mouse = new THREE.Vector2((e.clientX / size.width) * 2 - 1, -(e.clientY / size.height) * 2 + 1)
      raycaster.current.setFromCamera(mouse, camera)
      const offset = raycaster.current.ray.direction.multiplyScalar(delta)
      const newPos = target.current.clone().add(offset)
      const dist = newPos.length()
      if (dist > 2 && dist < 10) target.current.copy(newPos)
    }

    let touchDistance = 0
    const getTouchDist = (e) => Math.hypot(
      e.touches[0].clientX - e.touches[1].clientX,
      e.touches[0].clientY - e.touches[1].clientY
    )
    const handleTouchStart = (e) => {
      if (e.touches.length === 2) touchDistance = getTouchDist(e)
    }
    const handleTouchMove = (e) => {
      if (e.touches.length === 2) {
        e.preventDefault()
        const newDist = getTouchDist(e)
        const delta = (touchDistance - newDist) * 0.01
        touchDistance = newDist
        const rect = dom.getBoundingClientRect()
        const midX = (e.touches[0].clientX + e.touches[1].clientX) / 2 - rect.left
        const midY = (e.touches[0].clientY + e.touches[1].clientY) / 2 - rect.top
        const mouse = new THREE.Vector2((midX / size.width) * 2 - 1, -(midY / size.height) * 2 + 1)
        raycaster.current.setFromCamera(mouse, camera)
        const offset = raycaster.current.ray.direction.multiplyScalar(delta)
        const newPos = target.current.clone().add(offset)
        const dist = newPos.length()
        if (dist > 2 && dist < 10) target.current.copy(newPos)
      }
    }

    const handleKeyDown = (e) => (keys.current[e.code] = true)
    const handleKeyUp = (e) => (keys.current[e.code] = false)

    dom.addEventListener('wheel', handleWheel, { passive: false })
    dom.addEventListener('touchstart', handleTouchStart, { passive: false })
    dom.addEventListener('touchmove', handleTouchMove, { passive: false })
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    const handleContextLost = (e) => {
      e.preventDefault()
      console.error('WebGL context lost')
    }
    const handleContextRestored = () => console.log('WebGL context restored')
    dom.addEventListener('webglcontextlost', handleContextLost)
    dom.addEventListener('webglcontextrestored', handleContextRestored)

    return () => {
      dom.removeEventListener('wheel', handleWheel)
      dom.removeEventListener('touchstart', handleTouchStart)
      dom.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
      dom.removeEventListener('webglcontextlost', handleContextLost)
      dom.removeEventListener('webglcontextrestored', handleContextRestored)
    }
  }, [camera, gl, size])

  return (
    <OrbitControls
      ref={controls}
      enablePan={false}
      enableZoom={false}
      minDistance={2}
      maxDistance={10}
      enableDamping
      dampingFactor={0.1}
    />
  )
}

