import { Html, useProgress } from '@react-three/drei'

export default function Loader () {
  const { progress } = useProgress()
  return (
    <Html center>
      <div className="loading-indicator" style={{ willChange: 'transform' }}>
        {progress.toFixed(0)}% loaded
      </div>
    </Html>
  )
}
