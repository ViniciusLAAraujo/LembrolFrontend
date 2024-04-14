import React from "react"
import theme from "../../assets/theme"

type Styles = {
    footer: React.CSSProperties
    a: React.CSSProperties
}

const styles:Styles  = {
    footer: {
        display:'flex',
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:theme.colors.purple[200]
    },
    a: {
        all: "unset",
        color: theme.colors.singleton.white,
        padding: 8
    }
}
  
export default styles
