import styles from './css/NavBarNeighbor.module.css'
import { Icon } from '@iconify/react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


const NavBarNeghbor = () => {

    return(
        <div className={styles.navBar}>
            <Icon className= {styles.iconNavBar} icon="noto:house-with-garden" />
            <div className= {styles.navBarContent}>
                <div>
                    <UncontrolledDropdown>
                        <DropdownToggle tag="span" className= {styles.navBarText}> Notificaciones </DropdownToggle>
                        <DropdownMenu className= {styles.dropdownNavMenu}>
                            <DropdownItem className= {styles.dropdownNavItem}>Bandeja de entrada</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </div>
                <div>
                    <UncontrolledDropdown>
                        <DropdownToggle tag="span" className= {styles.navBarText}> Incidencias </DropdownToggle>
                            <DropdownMenu className= {styles.dropdownNavMenu}>
                                <DropdownItem className= {styles.dropdownNavItem}>Mis Incidencias</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem className= {styles.dropdownNavItem}>Abrir nueva Incidencia</DropdownItem>
                            </DropdownMenu>
                    </UncontrolledDropdown>
                </div>
                <div>
                    <UncontrolledDropdown>
                        <DropdownToggle tag="span" className= {styles.navBarText}> Pagos </DropdownToggle>
                            <DropdownMenu className= {styles.dropdownNavMenu}>
                                <DropdownItem className= {styles.dropdownNavItem}>Mis pagos</DropdownItem>
                            </DropdownMenu>
                    </UncontrolledDropdown>
                </div>
                <div>
                    <UncontrolledDropdown>
                        <DropdownToggle tag="span" className= {styles.navBarText}> Eventos </DropdownToggle>
                            <DropdownMenu className= {styles.dropdownNavMenu}>
                                <DropdownItem className= {styles.dropdownNavItem}>Gestionar eventos</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem className= {styles.dropdownNavItem}>Añadir al Calendario</DropdownItem>
                            </DropdownMenu>
                    </UncontrolledDropdown>
                </div>
                <div>
                    <UncontrolledDropdown>
                        <DropdownToggle tag="span" className= {styles.navBarText}> Mi perfil </DropdownToggle>
                            <DropdownMenu className= {styles.dropdownNavMenu}>
                                <DropdownItem className= {styles.dropdownNavItem}>Editar perfil</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem className= {styles.dropdownNavItem} tag="a" href="../Home/HomeSignup">Cerrar sesion</DropdownItem>
                            </DropdownMenu>
                    </UncontrolledDropdown>
                </div>
            </div>
            <div className={styles.langNav} >
                <Icon className={styles.flag} icon="emojione:flag-for-spain" />
                <Icon className={styles.flag} icon="emojione:flag-for-united-kingdom" />
            </div>
        </div>
    )
}

export default NavBarNeghbor