import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";

import {SwiperNavButtons} from "../../../shared/ui";
import {Card} from "../../../entities/Card/Card.tsx";
import {testimonials} from "../../../data/testimonials";
import {swiperBreakpoints} from "../lib/swiperHelpers.ts";
import styles from "../styles/TestimonialsSlider.module.scss";

export const TestimonialSlider = () => {
    return (
        <div className={styles.wrapper}>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={16}
                slidesPerView={1}
                slidesPerGroup={1}
                pagination={{clickable: true}}
                breakpoints={swiperBreakpoints}
                className={styles.swiper}
            >
                {/* Slides */}
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <div className={styles.cardWrapper}>
                            <Card testimonial={testimonial}/>
                        </div>
                    </SwiperSlide>
                ))}

                {/* Custom nav buttons (inside Swiper! for using useSwiper() in SwiperNavButtons) */}
                <div className={styles.navLeft}>
                    <SwiperNavButtons direction="prev"/>
                </div>
                <div className={styles.navRight}>
                    <SwiperNavButtons direction="next"/>
                </div>
            </Swiper>
        </div>
    );
};
