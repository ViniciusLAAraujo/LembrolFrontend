import React from 'react'
import Button from '../Button'
import DefaultIcon from '../DefaultIcon'
import { daysStringSlash } from '../../utils/dateUtils'
import { EditTagModalProps } from './types'
import styles from './styles'

const EditTagModal : React.FC<EditTagModalProps> = ({selectedTag}) => {
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
                        onClick={()=>{}} 
                        type='button' 
                        label={  
                        <DefaultIcon  imgStyle={styles.iconImg} imagePath='edit'  />
                        }
                    /> 
                    </div> 
                </div>
            <div style={styles.centerText}>
                {`id: ${selectedTag.id}`}
            </div>
            {selectedTag.daysOfWeek.length > 0 && 
                <div style={styles.borderDiv}>
                {daysStringSlash(selectedTag.daysOfWeek)}
                </div>
            }
            {selectedTag.specificDates.length > 0 && 
                <div style={styles.borderDiv}>
                {selectedTag.specificDates[0]}
                </div>
            }
            </div>
        </div>
    )
}

export default EditTagModal
