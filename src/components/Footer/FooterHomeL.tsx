import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import styles from './css/FooterHomeL.module.css'

const FooterHomeL = () => {
    return(
        <div className={styles.footer}>
            <div>
                <UncontrolledDropdown direction="up">
                    <DropdownToggle tag="span" className={styles.footerText}> Contacto </DropdownToggle>
                        <DropdownMenu className= {styles.dropdownFooterMenu}>
                            <DropdownItem className= {styles.dropdownFooterItem}>Equipo iHood</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem className= {styles.dropdownFooterItem}>GitHub</DropdownItem>
                            <DropdownItem className= {styles.dropdownFooterItem}>Linkedin</DropdownItem>
                        </DropdownMenu>
                </UncontrolledDropdown>
            </div>
            <div>
                <UncontrolledDropdown direction="up">
                    <DropdownToggle tag="span" className={styles.footerText}> Documentacion </DropdownToggle>
                        <DropdownMenu className= {styles.dropdownFooterMenu}>
                            <DropdownItem className= {styles.dropdownFooterItem}>Estudio Accesibilidad</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem className= {styles.dropdownFooterItem}>Linea temporal del proyecto</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem className= {styles.dropdownFooterItem}>Tecnologías</DropdownItem>
                        </DropdownMenu>
                </UncontrolledDropdown>
            </div>
        </div>
    )
}

export default FooterHomeL