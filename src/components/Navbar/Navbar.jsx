import React, { useState } from 'react';
import styles from './Navbar.module.scss';
import logo from '../../assets/img/logo.png';

const Navbar = () => {

    const [ isOpen, setIsOpen ] = useState(false);

    const toggleDropdown = isOpen ? styles.menuOpen : '';
    const toggleLine1 = isOpen ? styles.line__1 : '';
    const toggleLine2 = isOpen ? styles.line__2 : '';
    const toggleLine3 = isOpen ? styles.line__3 : '';

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar__logo}>
                <div className={styles.logo__container}>
                    <img src={logo} alt="las-iguanas-logo"/>
                </div>
                <p>People</p>
            </div>    
            <ul className={`${styles.navbar__menu} ${toggleDropdown}`}>
                <a href="">
                    <li className={styles.navbar__menuItem}>About Us</li>
                </a>
                <a href="">
                    <li className={styles.navbar__menuItem}>News</li>
                </a>
                <a href="">
                    <li className={styles.navbar__menuItem}>Our Roles</li>
                </a>
                <a href="">
                    <li className={styles.navbar__menuItem}>Perks</li>
                </a>
                <button className={styles.navbar__btn}>Find Your Job</button>
            </ul>
            <div className={styles.navbar__hamburgerMenu} onClick={() => {
                setIsOpen(!isOpen)
            }}>
                <div className={`${styles.lines} ${toggleLine1}`}></div>
                <div className={`${styles.lines} ${toggleLine2}`}></div>
                <div className={`${styles.lines} ${toggleLine3}`}></div>
            </div>   
        </nav>
    )
}

export default Navbar;
