const CLOUDINARY_URL = import.meta.env.VITE_CLOUDINARY_URL

export const cloudinaryUrl = (
    image: string,
) => {
    return `${CLOUDINARY_URL}/c_fill,q_auto,f_auto/${image}`;
};
