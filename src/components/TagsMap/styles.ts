import React from "react"

type Styles = {
    defaultFlex: React.CSSProperties
    mapDiv: React.CSSProperties
}

const styles:Styles  = {
    defaultFlex: {
        display: 'flex',
        flex: 1
    },
    mapDiv: {
        display: 'flex',
        flex: 5 ,
        padding: 16,
        borderRadius:8
    }
}
  
export default styles
