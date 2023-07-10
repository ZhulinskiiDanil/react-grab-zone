import styles from './main.module.css'

interface IControlsProps {
  scale: number
  minScale: number
  maxScale: number
  power: number
  onScale: (scale: number) => void
}

export function Controls({
  scale, minScale = 0, maxScale = 0,
  power = 1.2, onScale
}: IControlsProps) {
  function increment() {
    const val = scale * power

    if (val <= maxScale) {
      onScale(val)
    }
  }

  function decrement() {
    const val = scale / power

    if (val >= minScale) {
      onScale(val)
    }
  }

  return <div className={styles.controls}>
    <div onClick={increment} className={styles.button}>+</div>
    <div onClick={decrement} className={styles.button}>-</div>
  </div>
}