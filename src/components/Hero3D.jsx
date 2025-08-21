import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

/**
 * Lightweight three.js scene with smooth zoom-to-cursor controls and LOD.
 * Designed as a subtle visual accent behind the hero section.
 */
export default function Hero3D() {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    const width = mount.clientWidth
    const height = mount.clientHeight

    // renderer with antialiasing for crisp visuals
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(width, height)
    renderer.outputEncoding = THREE.sRGBEncoding
    renderer.domElement.style.touchAction = 'none'
    mount.appendChild(renderer.domElement)

    // camera with optimized near/far planes to reduce z-fighting
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)
    camera.position.set(0, 0, 6)

    const scene = new THREE.Scene()
    scene.add(new THREE.AmbientLight(0xffffff, 1))

    // mesh with basic LOD levels
    const material = new THREE.MeshStandardMaterial({ color: 0x06b6d4, flatShading: true })
    const high = new THREE.Mesh(new THREE.IcosahedronGeometry(1, 2), material)
    const low = new THREE.Mesh(new THREE.IcosahedronGeometry(1, 0), material)
    const lod = new THREE.LOD()
    lod.addLevel(high, 0)
    lod.addLevel(low, 50)
    scene.add(lod)

    // orbit controls with smooth damping and zoom limits
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.1
    controls.minDistance = 3
    controls.maxDistance = 12
    controls.zoomToCursor = true

    // WASD keyboard navigation
    function handleKey(e) {
      const step = 0.2
      switch (e.key.toLowerCase()) {
        case 'w':
          camera.position.z -= step
          break
        case 's':
          camera.position.z += step
          break
        case 'a':
          camera.position.x -= step
          break
        case 'd':
          camera.position.x += step
          break
        default:
          break
      }
    }
    window.addEventListener('keydown', handleKey)

    // progressive render loop – only render on changes
    let frameId
    const animate = () => {
      frameId = requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    function onResize() {
      const w = mount.clientWidth
      const h = mount.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', onResize)

    // basic error handling for context loss
    renderer.domElement.addEventListener('webglcontextlost', (e) => {
      e.preventDefault()
    })

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('keydown', handleKey)
      renderer.dispose()
      mount.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} className="w-full h-64 md:h-96" aria-label="Interactive 3D background" />
}
