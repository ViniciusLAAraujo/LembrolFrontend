import React from 'react'
import Button from '../Button'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import DefaultIcon from '../DefaultIcon'
import DateList from '../DateList/DateList'
import { FormDatePickerProps } from './types'
import styles from './styles'

const FormDatePicker : React.FC<FormDatePickerProps> = ({ specificDates, onSpecificDatesChange, handleClearDates }) => {

  const handleDateChange = (date: Date | null) => {
    if(date){
      const formattedDate = date.toISOString().split('T')[0]
      const existingIndex = specificDates.indexOf(formattedDate)
      let updatedDates: string[]

      if (existingIndex === -1) {
        updatedDates = [...specificDates, formattedDate]
      } else {
        updatedDates = specificDates.filter((d) => d !== formattedDate)
      }
      onSpecificDatesChange(updatedDates)
    }
  }
  
    return (
    <div style={styles.outerDiv}>
      <DatePicker
      onChange={handleDateChange}
      dateFormat="yyyy-MM-dd"
      showPopperArrow={false}
      popperPlacement="left"
      customInput={<Button style={styles.btn} type='button' label={<DefaultIcon imgStyle={styles.imgIcon} imagePath='calendar'/>}/>}
      />
      <DateList dates={specificDates} />
      <div>
        <Button style={styles.btn} type='button' label={<DefaultIcon imgStyle={styles.imgIcon} imagePath='broom'/>} onClick={handleClearDates} />
      </div>
    </div>
    )
  }

export default FormDatePicker