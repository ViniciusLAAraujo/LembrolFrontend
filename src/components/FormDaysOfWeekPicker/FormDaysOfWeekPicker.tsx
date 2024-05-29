import React, { useState } from 'react'
import { usePopper } from 'react-popper'
import Button from '../Button'
import DaysOfWeekSimpList from '../DaysOfWeekSimpList/DaysOfWeekSimpList'
import DefaultIcon from '../DefaultIcon'
import { FormDaysOfWeekPickerProps } from './types'
import { daysOfWeekSimplify } from '../../utils/dateUtils'
import styles from './styles'


const FormDaysOfWeekPicker : React.FC<FormDaysOfWeekPickerProps> = ({ daysOfWeek, onSpecificDayChange /*, handleClearDays*/ }) => {
  
  const [dayPopover,setDayPopover] = useState<boolean>(false)
  const [referenceElement, setReferenceElement] = useState<HTMLButtonElement | null>(null)
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null)
  const { styles: popperStyles, attributes: popperAttributes } = usePopper(referenceElement, popperElement, {placement: 'left'})

  const handleDayChange = ( checked: boolean, index: number ) => {
    let updatedDays: number[]

    if (checked) updatedDays = [...daysOfWeek, index].sort()
    else updatedDays = daysOfWeek.filter((dayIndex) => dayIndex !== index).sort()
    onSpecificDayChange(updatedDays) 
  }

    return (
      <>
        <div style={styles.inputOuterDiv}>
            <div>
                <Button onClick={() => setDayPopover(!dayPopover)} style={styles.btn} type='button' ref={setReferenceElement} label={<DefaultIcon imgStyle={styles.imgIcon} imagePath='cycle' />} />
            </div>
            <DaysOfWeekSimpList handleClick={handleDayChange} days={daysOfWeek} />
        </div>
        {dayPopover && <div ref={setPopperElement} style={popperStyles.popper} {...popperAttributes} >
              <div style={styles.popoverDiv}>
              {daysOfWeekSimplify.map((day, index) => (
                <label key={index}>
                    <input
                      type="checkbox"
                      checked={daysOfWeek.includes(index)}
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

export default FormDaysOfWeekPicker