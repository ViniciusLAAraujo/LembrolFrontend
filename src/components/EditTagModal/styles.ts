import React from "react"

type Styles = {
    mainDiv: React.CSSProperties
    colorCircle: React.CSSProperties
    rightDiv: React.CSSProperties
    firstRow: React.CSSProperties
    iconDiv: React.CSSProperties
    btn: React.CSSProperties
    iconImg: React.CSSProperties
    centerText: React.CSSProperties
    borderDiv: React.CSSProperties
}

const styles:Styles  = {
    mainDiv: {
        display: 'flex',
        flexDirection: 'row',
        gap: 8
    },
    colorCircle: { 
        borderRadius:'50%',
        width:'4rem',
        height:'4rem',
        alignSelf:'center'
    },
    rightDiv: {
        display: 'flex',
        flexDirection: 'column',
        gap: 4
    },
    firstRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent:'space-around',
        gap: 4
    },
    iconDiv: {
        display: 'flex',
        flex: 1,
        justifyContent:'flex-end'
    },
    btn: {
        padding: 0,
        background: 'inherit'
    },
    iconImg: {
        width:"60%"
    },
    centerText: {
        textAlign: 'center'
    },
    borderDiv: {
        borderStyle:'solid',
        borderWidth:2,
        borderColor:'green',
        borderRadius: 16,
        textAlign: 'center',
        padding: 4
    }        
}

export default styles
