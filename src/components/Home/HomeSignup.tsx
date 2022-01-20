import styles from './css/Home.module.css';
import { Icon } from '@iconify/react';
import TextCarousel from './TextCarousel';
import SignUp from '../SignUp/Signup';
import FooterHomeS from '../Footer/FooterHomeS';

const HomeSignup = ({ onSignup, onGoHomeLog }) => {
return (
    <div className={styles.pageContainer}>
        <div className={styles.navBar}>
            <Icon className= {styles.iconNavBar} icon="noto:house-with-garden" />
            <div className= {styles.navBarContent}></div>
            <div className={styles.langNav} >
                <Icon className={styles.flag} icon="emojione:flag-for-spain" />
                <Icon className={styles.flag} icon="emojione:flag-for-united-kingdom" />
            </div>
        </div>
        <div className={styles.homeContainer}>
            <div className={styles.welcomeContainer}>
                <h1 className={styles.welcome}>Bienvenidos a la web de iHood!</h1>

                <div className={styles.textCarousel}>
                    <TextCarousel />
                </div>

                <Icon className= {styles.icon} icon="noto:house-with-garden" />
                
                <p className={styles.textFormat}>Entra y descubre una nueva forma de comunicarte con tus vecinos!</p>
            </div>
            <div className={styles.decoLinesContainer}>
                <div className={styles.decoLine1}></div>
                <div className={styles.decoLine2}></div>
                <div className={styles.decoLine3}></div>
                <div className={styles.decoLine4}></div>
                <div className={styles.decoLine5}></div>
            </div>
            <div className={styles.signinContainer}>
            <SignUp onSignup={onSignup} onGoHomeLog={onGoHomeLog}/>
            </div>
        </div>
        <FooterHomeS />
    </div>
    
)
}
export default HomeSignup;