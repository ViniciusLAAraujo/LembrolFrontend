import React from "react"
import { TagsListProps } from "./types"
import Button from "../Button"
import styles from "./styles"

const TagsList: React.FC<TagsListProps> = ({tags, handleTagClick}) => {
    return (
        <div style={styles.mainDiv}>
            <div style={styles.listDiv}>
                <h3 style={styles.listTitle}>Items</h3>
                {tags.map((tag) => (
                <Button 
                    key={tag.tagId} 
                    style={styles.btn}
                    onClick={() => handleTagClick(tag)} 
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

export default TagsList
