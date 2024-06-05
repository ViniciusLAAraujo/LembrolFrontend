import React, { useState } from 'react'
import { usePopper } from 'react-popper'
import Button from '../Button'
import DefaultIcon from '../DefaultIcon'
import { daysOfWeekSimplify } from '../../utils/dateUtils'
import styles from './styles'
import { DaysOfWeekResponse } from '../../modules/tag/types'
import {FormDaysOfWeekPickerCompleteProps} from './types'
import DaysOfWeekSimpListComplete from '../DaysOfWeekSimpListComplete/DaysOfWeekSimpListComplete'
import toast from 'react-hot-toast'


const FormDaysOfWeekPickerComplete : React.FC<FormDaysOfWeekPickerCompleteProps> = ({ daysOfWeek, onSpecificDayChange /*, handleClearDays*/ }) => {
  
  const [dayPopover,setDayPopover] = useState<boolean>(false)
  const [referenceElement, setReferenceElement] = useState<HTMLButtonElement | null>(null)
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null)
  const { styles: popperStyles, attributes: popperAttributes } = usePopper(referenceElement, popperElement, {placement: 'left'})

  const handleDayChange = ( checked: boolean, index: number ) => {
    let updatedDays: DaysOfWeekResponse[]
    if (checked) updatedDays = [...daysOfWeek, {day: index, active: 1} as DaysOfWeekResponse].sort((a,b)=>a.day-b.day) 
    else updatedDays = daysOfWeek.filter((dayOfWeek) => dayOfWeek.day !== index).sort((a,b)=>a.day-b.day) 
    onSpecificDayChange(updatedDays)
  }

  const getCheckedStatus = (index: number) => {
      const day = daysOfWeek.find(d => d.day === index)
      return day ? true : false
  }

  const handleDayState = (index: number) => {
    let newDaysOfWeek = daysOfWeek
    const day = newDaysOfWeek.find(d => d.day === index)
    if (day) {
      day.active == 0 ?  day.active = 1 : day.active = 0
      onSpecificDayChange(newDaysOfWeek)
    } else {
      toast.error(`Day with index ${index} not found in daysOfWeek`)
    }
  }
  
    return (
      <>
        <div style={styles.inputOuterDiv}>
            <div>
                <Button onClick={() => setDayPopover(!dayPopover)} style={styles.btn} type='button' ref={setReferenceElement} label={<DefaultIcon imgStyle={styles.imgIcon} imagePath='cycle' />} />
            </div>
            <DaysOfWeekSimpListComplete handleDayState={handleDayState} days={daysOfWeek} />
        </div>
        {dayPopover && <div ref={setPopperElement} style={popperStyles.popper} {...popperAttributes} >
              <div style={styles.popoverDiv}>
              {daysOfWeekSimplify.map((day, index) => (
                <label key={index}>
                    <input
                      type="checkbox"
                      checked={getCheckedStatus(index)}
                      onChange={(e) => {handleDayChange(e.target.checked,index)}}
                    />
                    {day}
                  </label>
              ))}
              </div>
            </div>}
      </>
    )
}

export default FormDaysOfWeekPickerComplete