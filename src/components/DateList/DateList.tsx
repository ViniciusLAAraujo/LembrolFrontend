import React from 'react'
import styles from './styles'
import { DateListProps } from './types'

const DateList: React.FC<DateListProps> = ({ dates }) => {
    return (
      <div style={styles.datesDiv}>
        {dates.map((date, index) => (
          <div
            key={index}
            style={styles.dateCard}
          >
            {date}
          </div>
        ))}
      </div>
    )
}

export default DateList
