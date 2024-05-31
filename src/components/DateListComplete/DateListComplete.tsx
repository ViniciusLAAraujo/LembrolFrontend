import React from 'react'
import styles from './styles'
import { DateListCompleteProps } from './types'

const DateListComplete: React.FC<DateListCompleteProps> = ({ dates }) => {
    return (
      <div style={styles.datesDiv}>
        {dates.map((date, index) => (
          <div
            key={index}
            style={styles.dateCard}
          >
            {date.date.split('T')[0]}
          </div>
        ))}
      </div>
    )
}

export default DateListComplete
