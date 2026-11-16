import { useState, useEffect, useMemo } from 'react'
import Snowfall from 'react-snowfall'
import { useSeason } from '@context/SeasonContext'

export default function SeasonalAtmosphere() {
  const { season } = useSeason()
  const [leafImages, setLeafImages] = useState<HTMLImageElement[]>([])
  const [petalImages, setPetalImages] = useState<HTMLImageElement[]>([])

  // Preload leaf images for autumn
  useEffect(() => {
    const urls = [
      '/images/particles/leaf-maple.svg',
      '/images/particles/leaf-oak.svg',
      '/images/particles/leaf-gold.svg',
    ]

    const loaded: HTMLImageElement[] = []
    let count = 0

    urls.forEach((url) => {
      const img = new Image()
      img.src = url
      img.onload = () => {
        loaded.push(img)
        count++
        if (count === urls.length) {
          setLeafImages([...loaded])
        }
      }
    })
  }, [])

  // Preload sakura petal images for spring
  useEffect(() => {
    const img = new Image()
    img.src = '/images/particles/petal-sakura.svg'
    img.onload = () => {
      setPetalImages([img])
    }
  }, [])

  const containerStyle = useMemo<React.CSSProperties>(
    () => ({
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 20,
      pointerEvents: 'none',
    }),
    []
  )

  // 1. Winter: Crisp realistic falling snowflakes
  if (season === 'winter') {
    return (
      <Snowfall
        color="#ffffff"
        snowflakeCount={80}
        radius={[0.8, 3.2]}
        speed={[0.6, 2.0]}
        wind={[-0.5, 1.2]}
        opacity={[0.3, 0.85]}
        style={containerStyle}
      />
    )
  }

  // 2. Autumn: 3D falling & tumbling leaves using react-snowfall
  if (season === 'autumn') {
    if (leafImages.length === 0) {
      // Fallback while images load
      return (
        <Snowfall
          color="#f59e0b"
          snowflakeCount={40}
          radius={[2.5, 5]}
          speed={[1.0, 2.2]}
          wind={[-0.5, 1.8]}
          enable3DRotation={true}
          style={containerStyle}
        />
      )
    }

    return (
      <Snowfall
        images={leafImages}
        enable3DRotation={true}
        snowflakeCount={35}
        radius={[12, 22]}
        speed={[1.0, 2.6]}
        wind={[-0.5, 2.0]}
        rotationSpeed={[-1.2, 1.2]}
        style={containerStyle}
      />
    )
  }

  // 3. Spring: Sakura petals
  if (season === 'spring') {
    if (petalImages.length === 0) {
      return (
        <Snowfall
          color="#f472b6"
          snowflakeCount={45}
          radius={[2, 4]}
          speed={[0.8, 2.0]}
          wind={[0.2, 1.8]}
          enable3DRotation={true}
          style={containerStyle}
        />
      )
    }

    return (
      <Snowfall
        images={petalImages}
        enable3DRotation={true}
        snowflakeCount={40}
        radius={[10, 18]}
        speed={[0.8, 2.2]}
        wind={[0.2, 2.0]}
        rotationSpeed={[-1.0, 1.0]}
        style={containerStyle}
      />
    )
  }

  // 4. Summer: Ambient glowing fireflies
  return (
    <Snowfall
      color="#fde047"
      snowflakeCount={40}
      radius={[1.0, 2.8]}
      speed={[0.2, 1.0]}
      wind={[-0.6, 0.6]}
      opacity={[0.25, 0.8]}
      style={containerStyle}
    />
  )
}
