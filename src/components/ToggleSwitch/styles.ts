import React from "react"
import theme from "../../assets/theme"

type Styles = {
    input: React.CSSProperties
    slider: React.CSSProperties
    track: React.CSSProperties
}

const styles:Styles  = {
    input: {
        display: 'none'
    },
    slider: {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '24px',
        height: '24px',
        borderRadius: '50%',
        transition: 'left 0.3s ease',
    },
    track: {
        width: '40px',
        height: '20px',
        borderRadius: '10px',
        position: 'relative',
    }
}
  
export default styles
