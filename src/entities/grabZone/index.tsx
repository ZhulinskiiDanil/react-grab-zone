import styles from './main.module.scss'
import { PropsWithChildren, useRef, useState } from 'react'
import { Transformer } from './transformer'
import { Controls } from './controls'

// Hooks
import { useTransformer } from './useTransformer'

interface GrabZoneProps extends PropsWithChildren {
  maxScale?: number
  minScale?: number
  power?: number
}

export function GrabZone({
  children, minScale = 0.125, maxScale = 3, power = .2
}: GrabZoneProps) {
  const [scale, setScale] = useState<number>(1)
  const transformerRef = useRef<HTMLDivElement | null>(null)
  const canvasRef = useRef<HTMLDivElement | null>(null)
  useTransformer(transformerRef, canvasRef)

  return <div ref={canvasRef} className={styles.grabZone}>
    <Transformer
      transformerRef={transformerRef}
      scale={scale}
      children={children}
    />
    <Controls
      scale={scale}
      power={1 + power}
      minScale={minScale}
      maxScale={maxScale}
      onScale={setScale}
    />
  </div>
}