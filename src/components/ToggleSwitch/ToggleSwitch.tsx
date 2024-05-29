import React, { useState } from 'react'
import styles from './styles'
import { ToggleSwitchProps } from './types'
import theme from '../../assets/theme'

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ isChecked = false, onChange }) => {
  const [checked, setChecked] = useState(isChecked)

  const handleToggle = () => {
    setChecked(!checked)
    onChange?.(!checked)
  }

  return (
    <label>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleToggle}
        style={styles.input}
      />
      <div style={{...styles.track, backgroundColor: checked ? theme.colors.green[100] : theme.colors.gray[100],}}>
        <div style={{...styles.slider, left: checked ? 'calc(70% - 12px)' : '2px', backgroundColor: checked ? theme.colors.green[200] : theme.colors.gray[200],}} className="slider" />
      </div>
    </label>
  )
}

export default ToggleSwitch