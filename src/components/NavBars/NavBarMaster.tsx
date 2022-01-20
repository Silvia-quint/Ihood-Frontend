import React from 'react';
import styles from './css/NavBarMaster.module.css'
import { Icon } from '@iconify/react';
import { Navbar, Nav, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown } from 'reactstrap';

const NavBarMaster = () => {

    return(
        <Navbar className={styles.navBar}>
            <Icon className= {styles.iconNavBar} icon="noto:house-with-garden" />
            <Nav className= {styles.navBarContent} navbar>
            <div>
                <UncontrolledDropdown>
                    <DropdownToggle tag="span" className= {styles.navBarText}> Comunidad </DropdownToggle>
                    <DropdownMenu className= {styles.dropdownNavMenu}>
                        <DropdownItem className= {styles.dropdownNavItem}>Usuarios</DropdownItem>
                        <DropdownItem className= {styles.dropdownNavItem}>Link de Invitacion</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem className= {styles.dropdownNavItem}>Editar Comunidad</DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </div>
            <div>
                <UncontrolledDropdown>
                    <DropdownToggle tag="span" className= {styles.navBarText}> Notificaciones </DropdownToggle>
                    <DropdownMenu className= {styles.dropdownNavMenu}>
                        <DropdownItem className= {styles.dropdownNavItem}>Bandeja de entrada</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem className= {styles.dropdownNavItem}>Crear Notificación</DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </div>
            <div>
                <UncontrolledDropdown>
                    <DropdownToggle tag="span" className= {styles.navBarText}> Incidencias </DropdownToggle>
                    <DropdownMenu className= {styles.dropdownNavMenu}>
                        <DropdownItem className= {styles.dropdownNavItem}>Bandeja de entrada</DropdownItem>
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
                        <DropdownItem divider />
                        <DropdownItem className= {styles.dropdownNavItem}>Añadir nuevo pago</DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </div>
            <div>
                <UncontrolledDropdown> 
                    <DropdownToggle tag="span" className= {styles.navBarText}> Eventos </DropdownToggle>
                    <DropdownMenu className= {styles.dropdownNavMenu}>
                        <DropdownItem className= {styles.dropdownNavItem}>Gestionar eventos</DropdownItem>
                        <DropdownItem className= {styles.dropdownNavItem}>Crear evento</DropdownItem>
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
            </Nav>
            <div className={styles.langNav} >
                <Icon className={styles.flag} icon="emojione:flag-for-spain" />
                <Icon className={styles.flag} icon="emojione:flag-for-united-kingdom" />
            </div>
        </Navbar>
    )
}
export default NavBarMaster