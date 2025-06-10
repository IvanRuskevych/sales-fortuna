import ChevronLeftIcon from "../../../assets/svg/chevron_left.svg?react";
import ChevronRightIcon from "../../../assets/svg/chevron_right.svg?react";

import styles from "./Button.module.scss";

interface ButtonProps {
    onClick?: () => void;
    disabled?: boolean;
    iconType?: "left" | "right";
}

export const Button = ({onClick, disabled, iconType = "left"}: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={styles.wrapper}
            aria-label={iconType === "left" ? "Previous" : "Next"}
        >
            {iconType === "left" ? (
                <ChevronLeftIcon className={styles.icon} />
            ) : (
                <ChevronRightIcon className={styles.icon} />
            )}
        </button>
    );
};

