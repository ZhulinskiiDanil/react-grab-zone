import styles from './styles/main.module.css'
import { GrabZone } from '../entities/grabZone'
import { PropsWithChildren } from 'react'

export default function App() {
  return <GrabZone minScale={0.5} maxScale={6} power={.2}>
    <table className={styles.container}>
      <CreateTds count={10} row={1} tdsCount={10} />
      <CreateTds count={10} row={2} tdsCount={10} />
      <CreateTds count={14} row={3} tdsCount={10} />
      <CreateTds count={14} row={4} tdsCount={10} />
      <CreateTds count={14} row={5} tdsCount={10} />
    </table>
  </GrabZone>
}

function DialogWindow({ children }: PropsWithChildren) {
  return <div className={styles.dialogWindow}>
    { children }
  </div>
}

interface ICreateTdsProps {
  count?: number
  row?: number
  tdsCount?: number
}

function CreateTds({
  count, row = 1, tdsCount = 10
}: ICreateTdsProps) {
  if (!count) return <></>

  return <tr className={styles.tr}>
    {Array(count).fill(null).map((_, index) => (
      <td className={styles.td} key={index + row}>
        { index + 1 + row * tdsCount }
        <DialogWindow>
          <div className={styles.dialogRow}>
            Row: { row + 1 }
          </div>
          <div className={styles.dialogRow}>
            Column: { index + 1 + row * tdsCount }
          </div>
        </DialogWindow>
      </td>
    ))}
  </tr>
}