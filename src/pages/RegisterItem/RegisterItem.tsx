import React, { useState, FormEvent } from 'react'
import FormDatePicker from '../../components/FormDatePicker/FromDatePicker'
import Button from '../../components/Button'
import styles from './styles'
import DefaultIcon from '../../components/DefaultIcon'
import { FormErrors, FormData } from './types'
import FormTextInput from '../../components/FormTextInput/FormTextInput'
import FormColorInput from '../../components/FormColorInput/FormColorInput'
import FormDaysOfWeekPicker from '../../components/FormDaysOfWeekPicker/FormDaysOfWeekPicker'
import { createTag } from '../../modules/tag/tagService'


const RegisterItem: React.FC = () => {

  const [formData, setFormData] = useState<FormData>({
    tagId: '',
    name: '',
    color: '#ffffff',
    daysOfWeek: [],
    specificDates: [],
  })

  const handleSpecificDayChange = (days: number[]) => {
    setFormData({ ...formData, daysOfWeek: days })
  }

  const handleSpecificDatesChange = (dates: string[]) => {
    setFormData({ ...formData, specificDates: dates })
  }

  const handleClearDates = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      setFormData({ ...formData, specificDates: [] })
  }

  const [errors, setErrors] = useState<FormErrors>({})

  const handleSubmit =async  (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const newErrors: FormErrors = {}
    if (!formData.tagId.trim()) newErrors.tagId = 'Tag ID is required'
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.color.trim()) newErrors.color = 'Color is required'
    else if (!/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(formData.color))
      newErrors.color = 'Invalid color format'
    if (!(formData.daysOfWeek.length || formData.specificDates.length))
      newErrors.days = 'At least one day of the week or specific date is required'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    
    await createTag(formData)

    setFormData({
      tagId: '',
      name: '',
      color: '#ffffff',
      daysOfWeek: [],
      specificDates: [],
    })
    setErrors({})
  }

  return (
    <div style={styles.pageDiv}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <div style={styles.formControl}>
          <div style={styles.divSide}>   
            <h1 style={styles.hs}>Register Item</h1>
          </div>
          <div style={styles.divSide}>   
            <Button style={styles.saveBtn} label='Save' type='submit'/>
          </div>
        </div>
        <div style={styles.formContent}>
          <div style={styles.divSide}>
              <DefaultIcon divStyle={styles.itemImgDiv} imgStyle={styles.itemImg} imagePath='defaultItemImage'/>  
          </div>
          <div style={styles.divSide}>
              <FormTextInput
                  label="Tag ID:"
                  name="tagId"
                  value={formData.tagId}
                  onChange={(e) => setFormData({ ...formData, tagId: e.target.value })}
                  error={errors.tagId}
              />
              <br/>
              <FormTextInput
                  label="Name:"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  error={errors.name}
              />
              <br />
              <FormColorInput
                  label="Color:"
                  value={formData.color}
                  onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                  error={errors.color}
              />
              <br />
              <FormDaysOfWeekPicker 
                daysOfWeek={formData.daysOfWeek}
                onSpecificDayChange={handleSpecificDayChange}
              />
              <br/>
              <br />
              <FormDatePicker onSpecificDatesChange={handleSpecificDatesChange} handleClearDates={handleClearDates} specificDates={formData.specificDates}/>
              <br />
              {errors.days && <span style={styles.errorColor}>{errors.days}</span>}
          </div>
        </div>
      </form>
    </div>
  )
}

export default RegisterItem
