import styles from './styles/main.module.css'
import { GrabZone } from '../entities/grabZone'
import { PropsWithChildren } from 'react'

export default function App() {
  return <GrabZone minScale={0.5} maxScale={6} power={.2}>
    <table className={styles.container}>
      <Cells count={10} countFrom={1} />
      <Cells count={10} countFrom={11} />
      <Cells count={14} countFrom={21} />
      <Cells count={14} countFrom={35} />
      <Cells count={14} countFrom={49} />
    </table>
  </GrabZone>
}

function DialogWindow({ children }: PropsWithChildren) {
  return <div className={styles.dialogWindow}>
    { children }
  </div>
}

interface ICellsProps {
  count?: number
  tdsCount?: number
  countFrom?: number
}

function Cells({
  count, countFrom = 1
}: ICellsProps) {
  if (!count) return <></>

  return <tr className={styles.tr}>
    {Array(count).fill(null).map((_, index) => (
      <td className={styles.td} key={index + countFrom}>
        { index + countFrom }
        <DialogWindow>
          <div className={styles.dialogRow}>
            Row: { countFrom }
          </div>
          <div className={styles.dialogRow}>
            Place: { index + countFrom }
          </div>
        </DialogWindow>
      </td>
    ))}
  </tr>
}