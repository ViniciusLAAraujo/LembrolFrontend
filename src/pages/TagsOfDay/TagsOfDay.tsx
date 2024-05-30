import React from "react"
import TagsOfDayList from "../../components/TagsOfDayList/TagsOfDayList"
import { useLoaderData } from "react-router-dom"
import styles from "./styles"
import { TagOfDay } from "../../modules/tag/types"

const TagsOfDay : React.FC = () => {
    const tagData = useLoaderData() as TagOfDay[]
    
    return (
        <div style={styles.mainDiv}>
            <div style={styles.titleDiv}>
                <h1 style={styles.title}>Current Day Tags:</h1>
            </div>
            {tagData ? <TagsOfDayList tags={tagData}/> : <p>No tags tracked today</p>}
        </div>
    )
}

export default TagsOfDay