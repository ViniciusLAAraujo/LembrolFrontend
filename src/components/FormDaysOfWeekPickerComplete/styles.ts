import React from "react"
import theme from "../../assets/theme"
import { hexToRgbA } from "../../utils/colorUtils"

type Styles = {
    inputOuterDiv: React.CSSProperties
    btn: React.CSSProperties
    imgIcon: React.CSSProperties
    popoverDiv: React.CSSProperties
}

const styles:Styles  = {
    inputOuterDiv: {
        display: 'flex',
        flexDirection: 'row'
    },
    btn: {
        backgroundColor: 'inherit',
    },
    imgIcon: {
        width:"90%"
    },
    popoverDiv: {
        display: "flex",
        flexDirection: "column",
        backgroundColor:hexToRgbA(theme.colors.gray[200],0.3),
        padding:"2em", 
        borderRadius:"20px",
    }
}
  
export default styles