import React from "react"
import theme from "../../assets/theme"

type LoaderStyles = {
  loaderContainer: React.CSSProperties
  loader: (color: string) => React.CSSProperties
}

const loaderStyles: LoaderStyles = {
  loaderContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80vh',
    width: '100%',
  },
  loader: (color: string) => ({
    border: `8px solid ${theme.colors.gray[100]}`,
    borderTop: `8px solid ${color}`,
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    animation: 'spin 1s linear infinite',
  }),
}

const animationStyles = `
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`

const styleElement = document.createElement('style')
styleElement.innerHTML = animationStyles
document.head.appendChild(styleElement)

export default loaderStyles

