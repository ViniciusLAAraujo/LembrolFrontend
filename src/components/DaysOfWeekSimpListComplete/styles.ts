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
        color: theme.colors.singleton.white,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '20px',
        width: '8em', 
        height: '2.8em', 
        padding: '1em',
    },
}
  
export default styles
