import React from "react"

type Styles = {
    mainDiv: React.CSSProperties
    listDiv: React.CSSProperties
    listTitle: React.CSSProperties
    btn: React.CSSProperties
    btnDiv: React.CSSProperties
    colorCircle: React.CSSProperties
}

const styles:Styles  = {
    mainDiv: {
        display: 'flex',
        flex: 1
    },
    listDiv: {
        display: 'flex',
        width:"100%",
        flexDirection:'column',
        padding:16,
        gap:8
    },
    listTitle: {
        alignSelf: 'center'
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
