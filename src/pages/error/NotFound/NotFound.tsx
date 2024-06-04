import React from 'react'
import styles from '../styles'

const NotFound : React.FC = () => {
  return (
    <div style={styles.errorContainer}>
      <h1 style={styles.h1}>404 - Not Found</h1>
      <p style={styles.p}>The page you are looking for does not exist.</p>
    </div>
  )
}

export default NotFound
