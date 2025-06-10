import styles from './Title.module.scss';

export interface TitleProps {
    children: string;
    className?: string;
}

export const Title: React.FC<TitleProps> = ({children}) => {

    return (
        <h1 className={(styles.title)}>
            {children}
        </h1>
    );
};
