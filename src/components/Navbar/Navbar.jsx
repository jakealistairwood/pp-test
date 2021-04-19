import React, { useState } from 'react';
import styles from './Navbar.module.scss';
import logo from '../../assets/img/logo.png';
import uuid from 'react-uuid';

const Navbar = () => {

    const [ isOpen, setIsOpen ] = useState(false);

    const toggleDropdown = isOpen ? styles.menuOpen : '';
    const toggleLine1 = isOpen ? styles.line__1 : '';
    const toggleLine2 = isOpen ? styles.line__2 : '';
    const toggleLine3 = isOpen ? styles.line__3 : '';

    const links = [
        {
            name: 'About Us',
            href: 'https://www.iguanas.co.uk/careers/about-us'
        },
        {
            name: 'News',
            href: 'https://www.iguanas.co.uk/career-news'
        },
        {
            name: 'Our Roles',
            href: 'https://www.iguanas.co.uk/roles/roles'
        },
        {
            name: 'Perks',
            href: 'https://www.iguanas.co.uk/careers/perks'
        }
    ];

    const renderLinks = links.map(link => {
        return <a className={styles.navbar__linkWrapper} href={link.href} key={uuid()} target="_blank" rel="noreferrer">
            <li className={styles.navbar__menuItem}>{link.name}</li>
        </a>
    })

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar__logo}>
                <div className={styles.logo__container}>
                    <img src={logo} alt="las-iguanas-logo"/>
                </div>
                <p>People</p>
            </div>    
            <ul className={`${styles.navbar__menu} ${toggleDropdown}`}>
                {renderLinks}
                <a href="https://www.iguanas.co.uk/careers/job-search" target="_blank" rel="noreferrer">
                    <button className={styles.navbar__btn}>Find Your Job</button>
                </a>
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
