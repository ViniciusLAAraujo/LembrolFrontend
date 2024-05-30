import React from "react"

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
        width: '1.4em',
        height: '1.4em',
        borderRadius: '50%',
        transition: 'left 0.3s ease',
    },
        track: {
        width: '2.5em',
        height: '1.1em',
        borderRadius: 8,
        position: 'relative',
    }
}
  
export default styles
