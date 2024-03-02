import React from 'react'
import getAsset from '../../assets/getAsset'
import { IconProps } from './type'
import styles from './styles'


const DefaultIcon: React.FC<IconProps> = ({ imagePath, external, divStyle, imgStyle}) => {

  return (
    <div style={{...styles.divDefault,...divStyle}}>
        <img style={{...styles.imgDefault,...imgStyle}} src={external ? `${imagePath}` : getAsset({asset: imagePath})} />
    </div>
  )
}

export default DefaultIcon