import React from 'react'
import { OppsProps } from './types'
import styles from '../styles'

const Oops : React.FC<OppsProps> = ({ error }) => {
  return (
    <div style={styles.errorContainer}>
      <h1 style={styles.h1}>Oops, something went wrong</h1>
      <p style={styles.p}>{error?.message}</p>
    </div>
  )
}

export default Oops
