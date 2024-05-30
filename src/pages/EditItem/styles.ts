import React from "react"
import theme from "../../assets/theme"

type Styles = {
    pageDiv: React.CSSProperties
    form: React.CSSProperties
    formControl: React.CSSProperties
    formContent: React.CSSProperties
    divSide: React.CSSProperties
    tagName: React.CSSProperties
    saveBtn: React.CSSProperties
    itemImgDiv: React.CSSProperties
    itemImg: React.CSSProperties
    hs: React.CSSProperties
    textInput: React.CSSProperties
    errorColor: React.CSSProperties
}

const styles:Styles  = {
    pageDiv: {
        display:'flex',
        flex:1,  
    },
    form: {
        display:'flex',
        flex: 1,
        flexDirection:'column',
        paddingRight: '6em' ,
        paddingLeft: '6em' ,
        paddingTop: '2em'
    },
    formControl: {
        display:'flex',
        flexDirection: "row",
        paddingBottom:'1em'
    },
    formContent: {
        display:'flex',
        flexDirection: "row",
        flex: 1,
    },
    divSide: {
        display:'flex',
        flexDirection: "column",
        flex: 1,
    },
    tagName: {
        display:'flex',
        flexDirection: "row",
        gap: 16,
        alignItems: 'center' 
    },
    saveBtn: {
        flex: 1,
        alignSelf: "flex-end",
        color: theme.colors.singleton.white,
        backgroundColor: theme.colors.purple[200]
    },
    itemImgDiv: {
        display: 'flex',
        justifyContent: "center"
    },
    itemImg: {
        maxWidth:'60%'
    },
    hs: {
        margin: 0,
        padding:0
    },
    textInput: {
        width:'100%',
        border: 'none',
        borderRadius:8,
        background: theme.background
    },
    errorColor: {
        color: theme.colors.red[200]
    },
}
  
export default styles
