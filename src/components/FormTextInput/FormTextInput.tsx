import React from 'react'
import styles from './styles'
import { FormTextInputProps } from './types'

const FormTextInput: React.FC<FormTextInputProps> = ({ label, name, value, onChange, error }) => {
    return (
        <label>
            {label}
            <br />
            <br />
            <input
                style={styles.textInput}
                type="text"
                value={value}
                onChange={onChange}
                name={name}
            />
            {error && <span style={styles.errorColor}>{error}</span>}
        </label>
    )
}

export default FormTextInput
