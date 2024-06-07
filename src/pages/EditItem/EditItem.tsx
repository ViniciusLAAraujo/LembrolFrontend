import React, { FormEvent, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { DaysOfWeekResponse, SpecificDatesResponse, TagResponse } from '../../modules/tag/types'
import { FormEditData, FormEditErrors } from './types'
import styles from './styles'
import Button from '../../components/Button'
import DefaultIcon from '../../components/DefaultIcon'
import FormTextInput from '../../components/FormTextInput/FormTextInput'
import FormColorInput from '../../components/FormColorInput/FormColorInput'
import ToggleSwitch from '../../components/ToggleSwitch/ToggleSwitch'
import FormDaysOfWeekPickerComplete from '../../components/FormDaysOfWeekPickerComplete/FormDaysOfWeekPickerComplete'
import FormDatePickerComplete from '../../components/FormDatePickerComplete/FromDatePickerComplete'
import { updateTag } from '../../modules/tag/tagService'
import toast from 'react-hot-toast'

const EditItem: React.FC = () => {
    const tagData = useLoaderData() as TagResponse
    const [formData, setFormData] = useState<FormEditData>({
        name: tagData.name,
        color: tagData.color,
        active: tagData.active,
        daysOfWeek: tagData.daysOfWeek,
        specificDates: tagData.specificDates,
    })
    
    const handleToggleActive = () => {
        setFormData((prevData) => ({ ...prevData, active: prevData.active == 0 ? 1 : 0 }))
    }
    
    const handleSpecificDayChange = (days: DaysOfWeekResponse[]) => {
        setFormData({ ...formData, daysOfWeek: days })
    }

    const handleSpecificDatesChange = (dates: SpecificDatesResponse[]) => {
        setFormData({ ...formData, specificDates: dates })
    }

    const handleClearDates = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setFormData({ ...formData, specificDates: [] })
    }

    const [errors, setErrors] = useState<FormEditErrors>({})

    const handleSubmit =async  (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const newErrors: FormEditErrors = {}
        if (!tagData.tagId.trim()) newErrors.tagId = 'Tag ID is required'
        if (!formData.name.trim()) newErrors.name = 'Name is required'
        if (!formData.color.trim()) newErrors.color = 'Color is required'
        else if (!/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(formData.color))
            newErrors.color = 'Invalid color format'
        if (!(formData.daysOfWeek.length || formData.specificDates.length))
            newErrors.days = 'At least one day of the week or specific date is required'
        if (!(formData.daysOfWeek.length || formData.specificDates.length))
            newErrors.days = 'At least one day of the week or specific date is required'

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }
        try {
          const encodedId = encodeURIComponent(tagData.tagId)
          await updateTag(encodedId,formData)
          toast.success(`Tag ${tagData.tagId} updated`)
        } catch (error) {
          toast.error("Failed to update Tag")
        }
        setErrors({})
    }

    return (
        <div style={styles.pageDiv}>
          <form style={styles.form} onSubmit={handleSubmit}>
            <div style={styles.formControl}>
              <div style={styles.divSide}>
                <h1 style={styles.hs}>Update Item</h1>
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
                <div style={styles.tagName}>
                  <h2 style={styles.hs}>{tagData.tagId}</h2>
                  <ToggleSwitch isChecked={formData.active} onChange={handleToggleActive}/>
                </div>
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
                  <FormDaysOfWeekPickerComplete 
                    daysOfWeek={formData.daysOfWeek}
                    onSpecificDayChange={handleSpecificDayChange}
                  />
                  <br/>
                  <br />
                  <FormDatePickerComplete onSpecificDatesChange={handleSpecificDatesChange} handleClearDates={handleClearDates} specificDates={formData.specificDates}/>
                  <br />
                  {errors.days && <span style={styles.errorColor}>{errors.days}</span>}
              </div>
            </div>
          </form>
        </div>
    )
}

export default EditItem
