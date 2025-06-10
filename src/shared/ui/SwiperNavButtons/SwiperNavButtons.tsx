import {useSwiper} from "swiper/react";
import {Button} from "../Button/Button.tsx";

interface SwiperNavButtonsProps {
    direction: "prev" | "next";
}

export const SwiperNavButtons = ({direction}: SwiperNavButtonsProps) => {
    const swiper = useSwiper();
    console.log("swiper.isBeginning: ", swiper.isBeginning)
    console.log("swiper.isEnd: ", swiper.isEnd)

    const handleClick = () => {
        if (direction === "prev") {
            swiper.slidePrev();
        } else {
            swiper.slideNext();
        }
    };

    return (
        <Button
            onClick={handleClick}
            iconType={direction === "prev" ? "prev" : "next"}
        />
    );
};
