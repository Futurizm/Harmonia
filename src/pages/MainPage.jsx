import { NavLink } from "react-router-dom";
import styles from "./UI/MainPage.module.css"


const MainPage = () => {
    return ( 
        <div className={styles.wrapper}>
            <div className={styles.first__block}>
                <header className={styles.header}>
                    <div className={`${styles._container} ${styles.header__container}`}>
                        <div className={styles.header__logo}>Harmonia</div>
                    </div>
                </header>

                <section className={styles.information}>
                    <div className={`${styles._container} ${styles.information__container}`}>
                        <h2 className={styles.information__header}>Why living with stress is dangerous?</h2>
                        <div className={styles.information__block}>
                            <div className={styles.information__card}>
                                <div className={styles.information__card__container}>
                                    <h4>INCIDENCE</h4>
                                    <p>Too much stress is associated with numerous physical and mental disturbances, for example of appetite, sleep, energy level, self esteem, memory, decision-making, concentration, as well as clinical mental and physical conditions. Neurosis, depression and anxiety disorders are aggravated by stress.</p>
                                </div>
                            </div>
                            <div className={styles.information__card}>
                                <div className={styles.information__card__container}>
                                    <h4>CAUSE</h4>
                                    <p>Numerous studies attest that stressful life events such as death of a spouse or parent, marriage, divorce, desertion, loss of employment, birth of a handicapped child, etc, often precipitate physical as well as emotional illnesses.</p>
                                </div>
                            </div>
                            <div className={styles.information__card}>
                                <div className={styles.information__card__container}>
                                    <h4>EFFECT</h4>
                                    <p>Stress affects various organs in the body, disrupting their normal functions and potentially leading to adverse health effects. The brain is highly sensitive to stress, which can impair cognitive function and contribute to mental health disorders. Stress hormones can strain the cardiovascular system, increasing the risk of heart disease and stroke.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.extra}>
                    <div className={`${styles.extra__container} ${styles._container}`}>
                        <h2 className={`${styles.extra__header}`}>What Harmonia offers</h2>
                        <div className={styles.extra__block}>
                            <div className={styles.extra__block__container}>
                                <h3>Get psychical help using our
                                    very new AI Harmonia</h3>
                                <p>Our Harmonia utilizes advanced algorithms and natural language processing to engage users in meaningful conversations tailored to their unique needs.</p>
                                <NavLink to="/harmonia">
                                    <button className={styles.extra__button}>Get started</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            
        </div>
    );
}
 
export default MainPage;