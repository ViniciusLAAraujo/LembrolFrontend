import React from "react"
import theme from "../../assets/theme"

type Styles = {
    colorInput: React.CSSProperties
    colorSpan: React.CSSProperties
    errorColor: React.CSSProperties
}

const styles:Styles  = {
    colorInput: {
        appearance: 'none',
        backgroundColor: 'transparent',
        width: "10%",
        border: 'none',
        cursor: 'pointer',
        borderRadius: '50%'
    },
    colorSpan: {
        marginLeft: '10px'
    },
    errorColor: {
        color: theme.colors.red[200]
    },
}
  
export default styles