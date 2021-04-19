import React, { Fragment } from 'react';
import styles from './Footer.module.scss';
import facebookIcon from '../../assets/img/facebook.svg';
import instagramIcon from '../../assets/img/instagram.svg';
import twitterIcon from '../../assets/img/twitter.svg';
import linkedinIcon from '../../assets/img/linkedin.svg';
import uuid from 'react-uuid';

const Footer = () => {

    const socialIcons = [
        {
            href: "https://www.facebook.com/lasiguanasuk/",
            src: `${facebookIcon}`,
            alt: "facebook-logo"
        },
        {
            href: "https://www.instagram.com/lasiguanas/?hl=en",
            src: `${instagramIcon}`,
            alt: "instagram-logo"
        },
        {
            href: "https://twitter.com/lasiguanas",
            src: `${twitterIcon}`,
            alt: "twitter-logo"
        },
        {
            href: "https://www.linkedin.com/company/las-iguanas/",
            src: `${linkedinIcon}`,
            alt: "linkedin-logo"
        }
    ];

    const renderSocialLinks = socialIcons.map(icon => {
        return <a href={icon.href} target="_blank" rel="noreferrer" key={uuid()}>
            <img src={icon.src} alt={icon.alt} />
        </a>
    })

    const copyright = <Fragment>&#169;</Fragment>

    return (
        <footer className={styles.footer}>
            <div className={styles.footer__container}>
                <div className={styles.footer__socialIcons}>
                    {renderSocialLinks}
                </div>
                <p className={styles.copyright}>Privacy Policy {copyright} Las Iguanas 2019</p>
            </div>    
        </footer>
    )
}

export default Footer;
