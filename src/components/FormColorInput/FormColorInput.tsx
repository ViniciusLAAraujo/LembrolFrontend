import React from 'react'
import { FormColorInputProps } from './types'
import styles from './styles'

const FormColorInput: React.FC<FormColorInputProps> = ({ label, value, onChange, error }) => {
    return (
        <label>
            {label}
            <br />
            <input
                style={styles.colorInput}
                type="color"
                value={value}
                onChange={onChange}
            />
            <span style={ {...styles.colorSpan, color: value} }>{value}</span>
            {error && <span style={styles.errorColor}>{error}</span>}
        </label>
    )
}

export default FormColorInput
