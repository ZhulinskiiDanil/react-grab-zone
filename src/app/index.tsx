import styles from './styles/main.module.scss'
import { GrabZone } from '../entities/grabZone'

export default function App() {
  return <div className={styles.app}>
    <GrabZone minScale={0.5} maxScale={6} power={.2}>
      <div className={styles.container}>
        GrabZone
      </div>
    </GrabZone>
  </div>
}