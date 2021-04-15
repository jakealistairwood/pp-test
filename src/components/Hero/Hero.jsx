import React from 'react';
import styles from './Hero.module.scss';
import starIcon from '../../assets/img/star.svg';

const Hero = () => {

    const messages = ['Best-In-Class Benefits', 'Climb The Career Ladder', 'A Sunday Times Best Company To Work For', 'Made From Scratch', '#1 Casual Dining Group Brand With Over 10 Restuarants'];
    
    const renderMessages = messages.map(message => {
        return <li className={styles.message}>
            <div className={styles.svg__container}>
                <img src={starIcon} alt="star-icon" />
            </div>
            <span>{message}</span>
        </li>
    })

    return (
        <>
        <section className={styles.hero}>
            <button className={styles.cta__btn}>Find Your Job</button>    
        </section>
        <section className={styles.keyMessages}>
            <ul className={styles.messages}>
                {renderMessages}
            </ul>
        </section>
        </>
    )
}

export default Hero;
