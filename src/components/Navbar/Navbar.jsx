import React from 'react';
import styles from './Navbar.module.scss';
import logo from '../../assets/img/logo.png';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar__logo}>
                <div className={styles.logo__container}>
                    <img src={logo} alt="las-iguanas-logo"/>
                </div>
                <p>People</p>
            </div>    
            <ul className={styles.navbar__menu}>
                <li className={styles.navbar__menuItem}>About Us</li>
                <li className={styles.navbar__menuItem}>News</li>
                <li className={styles.navbar__menuItem}>Our Roles</li>
                <li className={styles.navbar__menuItem}>Perks</li>
                <button className={styles.navbar__btn}>Find Your Job</button>
            </ul>    
        </nav>
    )
}

export default Navbar;
