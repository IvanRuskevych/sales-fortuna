import {cloudinaryUrl} from "../../lib";

interface OptimizedImageProps {
    imageName: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
}

export const OptimizedImage = ({
                                   imageName,
                                   alt,
                                   width,
                                   height,
                                   className,
                               }: OptimizedImageProps) => {
    return (
        <img
            src={cloudinaryUrl(imageName)}
            alt={alt}
            loading="lazy"
            decoding="async"
            width={width}
            height={height}
            className={className}
        />
    );
};