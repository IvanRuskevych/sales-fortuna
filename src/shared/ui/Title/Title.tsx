import styles from './Title.module.scss';
import * as React from "react";

export interface TitleProps {
    children: string;
    className?: string;
}

export const Title: React.FC<TitleProps> = ({children, className}) => {

    return (
        <h1 className={(`${styles.title} ${className}`)}>
            {children}
        </h1>
    );
};
