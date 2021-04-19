import React from 'react';
import styles from './CTA.module.scss';
import detailIcon1 from '../../assets/img/detail-left-top.svg';
import detailIcon2 from '../../assets/img/detail-left-bottom.svg';
import detailIcon3 from '../../assets/img/detail-right-top.svg';
import detailIcon4 from '../../assets/img/detail-right-bottom.svg';

const CTA = () => {
    return (
        <section className={styles.cta}>
            <div className={styles.cta__container}>
                <div className={styles.cta__header}>
                    <div className={styles.cta__headerDetail}>
                        <img className={styles.detailTop} src={detailIcon1} alt="design-detail"/>
                        <img src={detailIcon2} alt="design-detail"/>
                    </div>
                    <h1>Join The Celebration</h1>
                    <div className={styles.cta__headerDetail}>
                        <img className={styles.detailTop} src={detailIcon3} alt="design-detail"/>
                        <img src={detailIcon4} alt="design-detail"/>
                    </div>
                </div>
                <p>Find A Job With More Life At Las Iguanas</p>
                <a href="https://www.iguanas.co.uk/careers/job-search" target="_blank">
                    <button className={styles.primary__btn}>Find Your Job</button>
                </a>
            </div>    
        </section>
    )
}

export default CTA;
