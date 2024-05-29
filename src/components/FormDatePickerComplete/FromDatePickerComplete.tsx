import React from 'react'
import Button from '../Button'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import DefaultIcon from '../DefaultIcon'
import styles from './styles'
import { FormDatePickerCompleteProps } from './types'
import { SpecificDatesResponse } from '../../modules/tag/types'
import DateListComplete from '../DateListComplete/DateListComplete'

const FormDatePickerComplete : React.FC<FormDatePickerCompleteProps> = ({ specificDates, onSpecificDatesChange, handleClearDates }) => {

  const handleDateChange = (date: Date | null) => {
    if(date){
      const formattedDate = date.toISOString().split('T')[0]
      const selectedDate = specificDates.find(d => d.date.split('T')[0] ==  formattedDate)
      let updatedDates: SpecificDatesResponse[]

      if (selectedDate) {
        updatedDates = specificDates.filter((d) => d.date.split('T')[0] !== formattedDate)
      } else {
        updatedDates = [...specificDates, {date: formattedDate , active: 1}]
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
      <DateListComplete dates={specificDates} />
      <div>
        <Button style={styles.btn} type='button' label={<DefaultIcon imgStyle={styles.imgIcon} imagePath='broom'/>} onClick={handleClearDates} />
      </div>
    </div>
    )
  }

export default FormDatePickerComplete