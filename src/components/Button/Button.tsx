import React from 'react'
import styles from './styles'
import { ButtonProps } from './types'



const Button:React.FC<ButtonProps> = ({label,style,onClick,type}) => {
  return (
    <button type={type} style={{...styles.defaultStyles,...style}} onClick={onClick}>{label}</button>
  )
}

export default Button
