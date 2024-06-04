import React from "react"
import theme from "../../assets/theme"

type Styles = {
    errorContainer: React.CSSProperties
    h1: React.CSSProperties
    p: React.CSSProperties
}

const styles:Styles  = {
    errorContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: theme.colors.singleton.white
    },
    h1: {
        fontSize: '3rem',
        marginBottom: '1rem'
    },
    p: {
        fontSize: '1.5rem'
    },
}
  
export default styles
