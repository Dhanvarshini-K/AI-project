export interface ImageProps {
    src: string;
    alt: string;
    className: string;
}

export interface GalleryImageProps extends ImageProps {
    width: string;
    aspectRatio: string;
}