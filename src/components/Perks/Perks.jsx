import React from 'react';
import styles from './Perks.module.scss';

const Perks = () => {

    return (
        <section className={styles.whyUs}>
            <div className={styles.perks}>
                <div className={`${styles.perks__content} ${styles.content}`}>
                    <h3>100 reasons to work <br></br> at Las Iguanas</h3>
                    <p>People Love It Here</p>
                    <a href="https://www.iguanas.co.uk/careers/perks" target="_blank" rel="noreferrer">
                        <button className={styles.primary__btn}>Find Out Why</button>
                    </a>
                </div>
                <div className={`${styles.perks__img} ${styles.imgContainer}`}>
                </div>
            </div>    
            <div className={`${styles.benefits} ${styles.section__container}`}>
                <div className={`${styles.benefits__content} ${styles.content}`}>
                    <h3>Perks on a plate</h3>
                    <p>The Perks of Working Here</p>
                    <a href="https://www.iguanas.co.uk/careers/perks" target="_blank" rel="noreferrer">
                        <button className={styles.primary__btn}>Explore Our Perks</button>
                    </a>
                </div>
                <div className={`${styles.benefits__img} ${styles.imgContainer}`}>
                </div>
            </div>    
        </section>
    )
}

export default Perks;
