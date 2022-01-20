import styles from './css/NavTool.module.css'

// export default function NavTool(props){

//     const menu = [
//         {label: 'Home', url: '/home'},
//         {label: 'Contact Us', url: '/contact-us'}
//     ];
//     return (
        // <nav className="navTool">
        //     <a href="../MasterProfile/UsersList.tsx" value="UsersList" className={styles.userList}>Lista de Usuarios</a>
        //     <a href="../MastesProfile/Notif.tsx" value="Incidents" className={styles.incidents}>Incidencias</a>
        // </nav>
//     )
// }


const NavTool = props => {

    const items = props.items.map(item => (
        <div>
            <li className={styles.itemList}>
                <a className={styles.itemlink} href={item.url}>
                {item.label}
                </a>
            </li>
            <div>{item.content}</div>
        </div>
    ));

    return (
        <nav className={styles.navTool}>
            <ul className={styles.navList}>{items}</ul>
        </nav>
    );
};

export default NavTool;
