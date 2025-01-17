export interface SectionProps {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    isReversed?: boolean;
    dotPosition?: 'start' | 'end';
}

export interface DeliveryData {
    title: string;
    sections: SectionProps[];
}