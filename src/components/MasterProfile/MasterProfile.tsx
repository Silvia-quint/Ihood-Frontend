import styles from './css/MasterProfile.module.css'
import { Icon } from '@iconify/react';
import {CalendarEvents} from './CalendarEvents';
import UserInfo from './UserMasterInfo';
// import NotificView from './NotifMasterView';
import UsersList from './UsersList';
import FooterMasterProf from '../Footer/FooterMasterProf';
import NavBarMaster from '../NavBars/NavBarMaster';




const MasterProfile = () => {

  return(
      <div className={styles.pageContainer}>

          <NavBarMaster />

          <div className={styles.profileContainer}>

            <div className={styles.calendar}>
              <p className={styles.title}>"¡Hola, Nombre-Usuario!"</p>
              <div className={styles.calendarBox}>
              <CalendarEvents />
              </div>
              <div className={styles.iconBox}>
                <Icon className= {styles.iconHouse} icon="noto:house-with-garden" />
              </div>
            </div>

            <div className={styles.decoSingleLine}></div>

            <div className={styles.userInfo}>
              <UserInfo />
            </div>

            <div className={styles.decoSingleLine}></div>

            <div className={styles.userslistandNotifContainer}>
            {/* <NavTool items={menu}/> */}
            <UsersList />
            {/* <NotificView /> */}
            </div>

            <div className={styles.decoLinesContainer}>
              <div className={styles.decoLine1}></div>
              <div className={styles.decoLine2}></div>
              <div className={styles.decoLine3}></div>
              <div className={styles.decoLine4}></div>
              <div className={styles.decoLine5}></div>
            </div>

          </div>

          <FooterMasterProf />
      </div>
  )
}

export default MasterProfile