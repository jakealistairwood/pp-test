import React from 'react';
import styles from './Jobs.module.scss';

const Jobs = () => {
    return (
        <section className={styles.jobs}>
            <div className={`${styles.jobs__roles} ${styles.section__container}`}>
                <div className={`${styles.jobs__rolesContent} ${styles.content}`}>
                    <h3>Life's a carnival <br></br>& you're invited!</h3>
                    <p>Whatever Makes You <span class={styles.italic}>You, </span>Your Perfect Role Starts Here.</p>
                    <button className={styles.primary__btn}>Explore Roles</button>
                </div>
                <div className={`${styles.jobs__rolesImg} ${styles.imgContainer}`}>
                </div>
            </div>    
            <div className={styles.jobs__featured}>
                <div className={`${styles.jobs__featuredContent} ${styles.content}`}>
                    <h3>Work time?<br></br> More like show time</h3>
                    <p>Head Chef Jobs <br></br>At Las Iguanas</p>
                    <button className={styles.primary__btn}>Explore Role</button>
                </div>
                <div className={`${styles.jobs__featuredImg} ${styles.imgContainer}`}>
                </div>    
            </div>    
            <div className={`${styles.jobs__vacancies} ${styles.section__container}`}>
                <div className={`${styles.jobs__vacanciesContent} ${styles.content}`}>
                    <h3>Join the celebration</h3>
                    <p>Find A Job With More Sizzle <br></br>At Las Iguanas</p>
                    <button className={styles.secondary__btn}>Find Jobs Near You</button>
                </div>
                <div className={`${styles.jobs__vacanciesImg} ${styles.imgContainer}`}>
                </div>
            </div>    
        </section>
    )
}

export default Jobs;
