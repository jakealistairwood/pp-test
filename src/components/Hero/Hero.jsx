import React from 'react';
import styles from './Hero.module.scss';
import starIcon from '../../assets/img/star.svg';

const Hero = () => {

    const messages = ['Best-In-Class Benefits', 'Climb The Career Ladder', 'A Sunday Times Best Company To Work For', 'Made From Scratch', '#1 Casual Dining Group Brand With Over 10 Restuarants'];

    const renderMessages = messages.map(message => {
        return <li className={styles.ticker__message}>
            <div className={styles.ticker__messageWrapper}>
                <img src={starIcon} alt="star-icon" />
                <span>{message}</span>
            </div>
        </li>
    });

    return (
        <>
        <header className={styles.hero}>
            <button className={styles.cta__btn}>Find Your Job</button>    
        </header>
        <section className={styles.ticker}>
            <div className={styles.ticker__wrapper}>
                <ul className={styles.ticker__messages}>
                    {renderMessages}
                </ul>
            </div>
        </section>
        </>
    )
}

export default Hero;
