import styles from './main.module.scss'
import { PropsWithChildren, useEffect } from 'react'

interface ITransformerProps extends PropsWithChildren {
  scale: number
  transformerRef: React.RefObject<HTMLDivElement>
}

export function Transformer({ children, transformerRef, scale = 1 }: ITransformerProps) {
  useEffect(() => {
    if (transformerRef.current) {
      transformerRef.current.style.scale = scale.toString()
    }
  }, [transformerRef, scale])

  return <div
    ref={transformerRef}
    className={styles.transformer}
    style={{
      transform: `translate3d(-50%, -50%, 0) scale(${scale})`
    }}
    children={children}
  />
}