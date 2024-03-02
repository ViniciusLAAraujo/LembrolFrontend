type Styles = {
    divDefault: React.CSSProperties
    imgDefault: React.CSSProperties
}

const styles: Styles = {
    divDefault: {
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    imgDefault: {
        width:"100%",
        maxWidth:"100%",
        overflowClipMargin:'content-box',
        overflow:'clip'
    }
}
  
 export default styles