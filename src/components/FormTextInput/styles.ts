import React from "react"
import theme from "../../assets/theme"

type Styles = {
    textInput: React.CSSProperties
    errorColor: React.CSSProperties
}

const styles:Styles  = {
    textInput: {
        width:'100%',
        height: '1.8em',
        border: 'none',
        borderRadius:'20px',
        background: theme.colors.gray[100]
    },
    errorColor: {
        color: theme.colors.red[200]
    }
}
  
export default styles
