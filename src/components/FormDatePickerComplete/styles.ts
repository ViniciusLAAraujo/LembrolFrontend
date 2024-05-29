import React from "react"

type Styles = {
    outerDiv: React.CSSProperties
    btn: React.CSSProperties
    imgIcon: React.CSSProperties
}

const styles:Styles  = {
    outerDiv: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        backgroundColor: 'inherit',
    },
    imgIcon: {
        width:"90%"
    },
}
  
export default styles