import React from "react"

type Styles = {
    mainDiv: React.CSSProperties
    listDiv: React.CSSProperties
    btn: React.CSSProperties
    btnDiv: React.CSSProperties
    colorCircle: React.CSSProperties
}

const styles:Styles  = {
    mainDiv: {
        display: 'flex',
        flex: 1,
        width:'60%',
    },
    listDiv: {
        display: 'flex',
        width:"100%",
        flexDirection:'column',
        padding:16,
        gap:8
    },
    btn: {
        width: '100%'
    },
    btnDiv: {
        display: 'flex',
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        gap:16
    },
    colorCircle: {
        borderRadius:'50%',
        width:'2rem',
        height:'2rem'
    }
}

export default styles
