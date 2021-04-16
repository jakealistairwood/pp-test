import React from 'react';
import styles from './News.module.scss';

const News = () => {
    return (
        <section className={styles.news}>
            <h2>Straight from the source</h2>
            <p>You heard it here first - From the people that get the job done, while having fun!</p>
            <div className={styles.news__articles}>
                <div className={styles.news__article}>
                    <p>News Article Title That Can Run Over Two Lines With Darkened Bg</p>
                    <button className={styles.primary__btn}>Find Out More</button>
                </div>
                <div className={styles.news__article}>
                    <p>News Article Title That Can Run Over Two Lines With Darkened Bg</p>
                    <button className={styles.primary__btn}>Find Out More</button>
                </div>
            </div>    
        </section>
    )
}

export default News;
