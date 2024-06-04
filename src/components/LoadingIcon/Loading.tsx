import React, { useEffect, useState } from 'react'
import styles from './styles'
import theme from '../../assets/theme'

const colors = [theme.colors.purple[100], theme.colors.red[100], theme.colors.green[100], theme.colors.yellow[100]]

const Loading: React.FC = () => {
  const [colorIndex, setColorIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div style={styles.loaderContainer}>
      <div style={styles.loader(colors[colorIndex])}></div>
    </div>
  )
}

export default Loading