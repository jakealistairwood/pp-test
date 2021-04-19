import React from 'react';
import styles from './About.module.scss';

const About = () => {
    return (
        <section className={styles.about}>
            <div className={styles.about__container}>
                <h3>We make work an everyday celebration</h3>
                <p>Hola! We're Las Iguanas & we love giving people reasons to celebrate... starting with our employees.</p>
                <p>
                    That's why everyone here gets great perks, inside work & out. We put our people first, we're like a big family.
                    In fact, lots of our top people have worked their way up through promotion. Turns out, it really does pay to play!
                </p>
                <p>
                    Add in a vibrant workplace where we make from scratch & its no surprise we're one of the <span className={styles.italic}>
                    Sunday Times 100 Best Companies to Work For</span> in 2019. 
                </p>
                <p>
                    If you're looking for a job in hospitality or catering, whether as a chef, waiter or waitress, bar staff, host or
                    manager, we'd love to meet you. But first, find out why jobs at Las Iguanas are something to celebrate.
                </p>
                <a href="https://www.iguanas.co.uk/careers/job-search" target="_blank" rel="noreferrer">
                    <button className={styles.secondary__btn}>Find Your Job</button>
                </a>
            </div>
        </section>
    )
}

export default About;
