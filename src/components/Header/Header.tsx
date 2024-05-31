import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import styles from './styles'
import { headerNavLinks } from './navlinks'
import DefaultIcon from '../DefaultIcon'
import Button from '../Button'
import theme from '../../assets/theme'

const Header: React.FC = () => {
    const navigate = useNavigate()

    const handleButtonClick = (path: string) => {
        navigate(path)
    }
    
  return (
    <header style={styles.header}>
        <DefaultIcon divStyle={styles.imgDiv} imagePath='gryffindor'/>
        <DefaultIcon  divStyle={styles.imgDiv}  imagePath='hufflepuff'/>
        <div style={styles.navDivs}>
            <nav style={styles.nav}>
                <ul style={styles.upperUl}>
                    <li>
                    <NavLink
                        to={headerNavLinks.About.to}
                        style={({ isActive }) => ({
                            
                        ...styles.navlink,
                        ...(isActive ? styles.navlinkactive : {}),
                        })}
                        end={headerNavLinks.About.end}
                    >
                        {headerNavLinks.About.label}
                    </NavLink>
                    </li>
                    <li>
                        <DefaultIcon divStyle={styles.imgCenter}  imagePath='lembrolFull'/>
                    </li>
                </ul>
            </nav>
            <div style={styles.btnDiv}>
                <Button onClick={()=>  handleButtonClick(headerNavLinks.New.to)} style={{...styles.btn,color: theme.colors.green[100], cursor: 'pointer'}} label={headerNavLinks.New.label}/>
                <Button onClick={()=>  handleButtonClick(headerNavLinks.GPS.to)} style={{...styles.btn,color: theme.colors.red[100], cursor: 'pointer'}} label={headerNavLinks.GPS.label}/>
            </div>          
        </div>
        <DefaultIcon divStyle={styles.imgDiv}  imagePath='ravenclaw'/>
        <DefaultIcon divStyle={styles.imgDiv}  imagePath='slytherin'/>
    </header>
  )
}

export default Header
