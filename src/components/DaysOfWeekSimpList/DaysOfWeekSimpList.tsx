import React from "react"
import { DaysOfWeekListProps } from "./types"
import styles from "./styles"
import Button from "../Button"
import { daysOfWeekSimplify } from "../../utils/dateUtils"

const DaysOfWeekSimpList: React.FC<DaysOfWeekListProps> = ({ days, handleClick }) => {

    return (
        <div style={styles.daysDiv}>
            { days.sort().map((day, index) => (
                <Button
                    key={index}
                    style={styles.dateCard}
                    onClick={()=>handleClick(false, day)}
                    type='button'
                    label={daysOfWeekSimplify[day]}
                />
            ))}
        </div>
    )
}

export default DaysOfWeekSimpList