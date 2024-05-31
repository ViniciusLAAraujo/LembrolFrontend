import React from "react"
import Button from "../Button"
import styles from "./styles"
import { TagsOfDayListProps } from "./types"

const TagsOfDayList: React.FC<TagsOfDayListProps> = ({tags}) => {
    return (
        <div style={styles.mainDiv}>
            <div style={styles.listDiv}>
                {tags.map((tag) => (
                <Button 
                    key={tag.tagId} 
                    style={styles.btn}
                    type='button' 
                    label=
                    {
                        <div style={styles.btnDiv}>
                            <div style={{...styles.colorCircle, background: tag.color}}></div>
                            {tag.name}
                        </div>
                    } 
                    />
                ))}
            </div>
        </div>
    )
}

export default TagsOfDayList
