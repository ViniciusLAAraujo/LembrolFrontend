import React, { CSSProperties, ReactNode, forwardRef } from 'react'
import styles from './styles'

type ButtonProps = {
    label: ReactNode
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    style?: CSSProperties
    type?: "button" | "submit" | "reset"
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ label, style, onClick, type }, ref) => {
      return (
          <button
              ref={ref}
              type={type}
              style={{ ...styles.defaultStyles, ...style }}
              onClick={onClick}
          >
              {label}
          </button>
      )
  }
)

export default Button