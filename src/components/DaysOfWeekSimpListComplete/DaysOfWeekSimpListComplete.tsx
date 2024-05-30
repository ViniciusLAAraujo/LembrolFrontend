import React from "react"
import styles from "./styles"
import Button from "../Button"
import { daysOfWeekSimplify } from "../../utils/dateUtils"
import { DaysOfWeekSimpListCompleteProps } from "./types"
import theme from "../../assets/theme"

const DaysOfWeekSimpListComplete: React.FC<DaysOfWeekSimpListCompleteProps> = ({ days, handleDayState }) => {

    return (
        <div style={styles.daysDiv}>
            { days.sort().map((day, index) => (
                <Button
                    key={index}
                    style={{...styles.dateCard, backgroundColor : day.active ? theme.colors.green[300] : theme.colors.gray[100]}}
                    onClick={()=>handleDayState(day.day)}
                    type='button'
                    label={daysOfWeekSimplify[day.day]}
                />
            ))}
        </div>
    )
}

export default DaysOfWeekSimpListComplete