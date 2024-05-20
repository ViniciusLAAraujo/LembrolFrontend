import React from "react"
import { DaysOfWeekListProps } from "./types"
import { daysOfWeekSimplify } from "../../utils/dateUtils"
import styles from "./styles"

const DaysOfWeekSimpList: React.FC<DaysOfWeekListProps> = ({ days }) => {
    return (
        <div style={styles.daysDiv}>
        {days.map((day, index) => (
            <div
            key={index}
            style={styles.dateCard}
            >
            {daysOfWeekSimplify[day]}
            </div>
        ))}
        </div>
    )
}

export default DaysOfWeekSimpList