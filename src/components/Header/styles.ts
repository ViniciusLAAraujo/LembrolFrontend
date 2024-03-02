import React from "react"
import theme from "../../assets/theme"

type Styles = {
    header: React.CSSProperties
    imgDiv: React.CSSProperties
    imgCenter: React.CSSProperties
    navDivs: React.CSSProperties
    btnDiv: React.CSSProperties
    nav: React.CSSProperties
    upperUl: React.CSSProperties
    lowerUl: React.CSSProperties
    navlink: React.CSSProperties
    btn: React.CSSProperties
    navlinkactive : React.CSSProperties
}

const styles:Styles  = {
    header: {
        display:'flex',
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        marginTop:2
    },
    imgDiv:{
        width:100
    },
    imgCenter:{
        position:'absolute',
        width:80,
        transform: 'translateY(-30%)',
    },
    navDivs: {
        display: 'flex',
        flex: 1,
        flexDirection:"column",
        gap:'0.5rem'
    },
    btnDiv: {
        display:"flex",
        flexDirection:"row",
        gap:"1rem"
    },
    nav:{
        display: 'flex',
        flex: 1,
        justifyContent:'center',
        backgroundColor: theme.colors.purple[200],
        borderRadius:80,
        minWidth: 155,
    },
    upperUl: {
        display:'flex',
        listStyleType:"none",
        paddingLeft:0,
    },
    lowerUl: {
        display:'flex',
        listStyleType:"none",
        paddingLeft:0,
        justifyContent: "center",
    },
    navlink: {
        textDecoration: 'none',
        color: theme.colors.singleton.white,
    },
    btn: {
        flex:1,
        border: `solid ${theme.colors.singleton.black}`,
        borderWidth: 1
    },
    navlinkactive: {
        color: theme.colors.gray[100],
        fontWeight: "bold"
    },
}
  
export default styles
