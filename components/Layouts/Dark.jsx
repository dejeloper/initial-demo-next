import styles from './Dark.module.css'

export const Dark = ({ children }) => {
  return (
    <div className={styles.container}>
      <h3> Dark Layouts</h3>
      <div>
        {children}
      </div>
    </div>
  )
}
