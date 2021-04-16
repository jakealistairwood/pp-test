import React from 'react';
import styles from './Perks.module.scss';
import sundayTimesImg from '../../assets/img/sunday-times.png';

const Perks = () => {

    return (
        <section className={styles.whyUs}>
            <div className={styles.perks}>
                <div className={`${styles.perks__content} ${styles.content}`}>
                    <h3>100 reasons to work <br></br> at Las Iguanas</h3>
                    <p>People Love It Here</p>
                    <button className={styles.primary__btn}>Find Out Why</button>
                </div>
                <div className={`${styles.perks__img} ${styles.imgContainer}`}>
                    <img src={sundayTimesImg} alt="sunday-times-best-company-advert"/>
                </div>
            </div>    
            <div className={styles.benefits}>
                <div className={`${styles.benefits__content} ${styles.content}`}>
                    <h3>Perks on a plate</h3>
                    <p>The Perks of Working Here</p>
                    <button className={styles.primary__btn}>Explore Our Perks</button>
                </div>
                <div className={`${styles.benefits__img} ${styles.imgContainer}`}>
                </div>
            </div>    
        </section>
    )
}

export default Perks;