import React from 'react'
import Button from '../Button'
import DefaultIcon from '../DefaultIcon'
import { daysStringSlash } from '../../utils/dateUtils'
import { EditTagModalProps } from './types'
import styles from './styles'

const EditTagModal : React.FC<EditTagModalProps> = ({selectedTag, handleEditClick}) => {
    const days:number[] = selectedTag.daysOfWeek.reduce((acc: number[], d) => {
        if(d.active) acc.push(d.day)
        return acc
    }, [])
    const dates:string[] = selectedTag.specificDates.reduce((acc: string[], d) => {
        if(d.active) acc.push(d.date.split('T')[0])
        return acc
    }, [])
    return (
        <div style={styles.mainDiv}>
            <div style={{...styles.colorCircle, background: selectedTag.color}}></div>
            <div style={styles.rightDiv}>
                <div style={styles.firstRow}>
                    <div>
                    <span>
                        {selectedTag.name}
                    </span>
                    </div>
                    <div style={styles.iconDiv}>
                    <Button 
                        style={styles.btn}
                        onClick={() => handleEditClick(selectedTag.tagId)} 
                        type='button' 
                        label={  
                        <DefaultIcon  imgStyle={styles.iconImg} imagePath='edit'  />
                        }
                    /> 
                    </div> 
                </div>
            <div style={styles.centerText}>
                {`id: ${selectedTag.tagId}`}
            </div>
            {selectedTag.daysOfWeek.length > 0 && 
                <div style={styles.borderDiv}>
                {daysStringSlash(days)}
                </div>
            }
            {selectedTag.specificDates.length > 0 && 
                <div style={styles.borderDiv}>
                {dates[0].toString()}
                </div>
            }
            </div>
        </div>
    )
}

export default EditTagModal
