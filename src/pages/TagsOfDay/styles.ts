import React from "react"

type Styles = {
    mainDiv: React.CSSProperties
    titleDiv: React.CSSProperties
    title: React.CSSProperties
}

const styles:Styles  = {
    mainDiv: {
        display: 'flex',
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        alignItems:'center'
    },
    titleDiv: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    title: {
        margin: 0 ,
        padding: 0
    },
}
  
export default styles
