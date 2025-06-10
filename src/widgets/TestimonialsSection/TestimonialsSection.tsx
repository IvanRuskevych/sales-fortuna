import {cloudinaryUrl} from "../../shared/lib";
import {TestimonialSlider} from "../../features";
import {Title} from "../../shared/ui";
import styles from "./TestimonialsSection.module.scss";

// Cloudinary URL
const backgroundUrl = cloudinaryUrl("background.jpg");

export const TestimonialsSection = () => {
    return (
        <section className={styles.section} style={{backgroundImage: `url(${backgroundUrl})`}}>
            <Title className={styles.title}>Voices of Success with Sales Fortuna</Title>
            <TestimonialSlider />
        </section>
    );
};
