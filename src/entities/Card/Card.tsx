import type {Testimonial} from "../../shared/types";
import {OptimizedImage} from "../../shared/ui";
import styles from "./Card.module.scss"

interface CardProps {
    testimonial: Testimonial;
}

export const Card = ({testimonial}: CardProps) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardLogo}>
                <OptimizedImage imageName={testimonial.logo} alt={testimonial.company}/>
            </div>
            <p className={styles.cardText}>{testimonial.text}</p>
            <p className={styles.cardQuoteMark}>”</p>
            <div className={styles.cardClient}>
                <OptimizedImage imageName={testimonial.avatar} alt={testimonial.name} width={60} height={60}/>
                <div className={styles.cardClientInfo}>
                    <p className={styles.cardClientName}>{testimonial.name}</p>
                    <p>{testimonial.title}</p>
                </div>
            </div>
        </div>
    );
};
