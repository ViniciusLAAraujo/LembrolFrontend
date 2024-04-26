import React from "react"
import theme from "../../assets/theme"

type Styles = {
    daysDiv: React.CSSProperties
    dateCard: React.CSSProperties
}

const styles:Styles  = {
    daysDiv: {
        display: 'flex',
        flex: 1,
        flexWrap: 'wrap',
        alignItems:'center',
        gap: 8,
    },
    dateCard: {
        backgroundColor: theme.colors.green[300],
        color: theme.colors.singleton.white,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '20px',
        width: '6em', 
        height: '1.5em', 
        padding: '0.5em',
    },
}
  
export default styles