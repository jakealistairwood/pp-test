import React from 'react';
import styles from './Jobs.module.scss';
import rolesImg from '../../assets/img/explorejobs-img.png';

const Jobs = () => {
    return (
        <section className={styles.jobs}>
            <div className={styles.jobs__roles}>
                <div className={styles.jobs__rolesLeft}>
                    <h2>Life's a carnival <br></br>& you're invited!</h2>
                    <p>Whatever Makes You <span class={styles.italic}>You, </span>Your Perfect Role Starts Here.</p>
                    <button className={styles.primary__btn}>Explore Roles</button>
                </div>
                <div className={styles.jobs__rolesRight}>
                    {/* <img src={rolesImg} alt="photo-of-las-iguanas-bartender"/> */}
                </div>
            </div>    
            <div className={styles.jobs__featured}>
                <div className={styles.jobs__featuredContent}>
                    <h2>Work time?<br></br> More like show time</h2>
                    <p>Head Chef Jobs <br></br>At Las Iguanas</p>
                    <button className={styles.primary__btn}>Explore Role</button>
                </div>
                <div className={styles.jobs__featuredImg}>
                    {/* <img src={rolesImg} alt="photo-of-las-iguanas-bartender"/> */}
                </div>    
            </div>    
            <div className={styles.jobs__vacancies}>
                <div className={styles.jobs__vacanciesContent}>
                    <h2>Join the celebration</h2>
                    <p>Find A Job With More Sizzle <br></br>At Las Iguanas</p>
                    <button className={styles.secondary__btn}>Find Jobs Near You</button>
                </div>
                <div className={styles.jobs__vacanciesImg}>
                    {/* <img src={rolesImg} alt="photo-of-las-iguanas-bartender"/> */}
                </div>
            </div>    
        </section>
    )
}

export default Jobs;
