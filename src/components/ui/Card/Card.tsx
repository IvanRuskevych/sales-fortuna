import {cloudinaryUrl} from "../../../utils";
import type {Testimonial} from "../../../types";
import styles from "./Card.module.scss"

interface CardProps {
    testimonial: Testimonial;
}

const initTestimonial = {
    company: "Serene Living Products",
    logo: "serene-logo.jpg",
    text: "Sales Fortuna made managing sales easier and helped us focus on customers. Its tools have been crucial for our growth and client satisfaction.",
    name: "Ethan Morgan",
    title: "Founder and CEO, Serene Living Products",
    avatar: "ethan_morgan.jpg",
}

export const Card = ({testimonial = initTestimonial}: CardProps) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardLogo}>
                <img src={cloudinaryUrl(testimonial.logo)} alt={testimonial.company} />
            </div>
            <p className={styles.cardText}>{testimonial.text}</p>
            <p className={styles.cardQuoteMark}>”</p>
            <div className={styles.cardClient}>
                <img
                    src={cloudinaryUrl(testimonial.avatar)}
                    alt={testimonial.name}
                    className={styles.cardClientAvatar}
                />
                <div className={styles.cardClientInfo}>
                    <p className={styles.cardClientName}>{testimonial.name}</p>
                    <p className={styles.cardClientTitle}>{testimonial.title}</p>
                </div>
            </div>
        </div>
    );
};
