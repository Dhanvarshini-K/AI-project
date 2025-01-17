export interface NavItem {
    label: string;
    isActive?: boolean;
}

export interface TestimonialType {
    quote: string;
    author: string;
    company: string;
}

export interface SocialLink {
    icon: string;
    url: string;
    alt: string;
}

export interface FooterLink {
    label: string;
    url: string;
}

export interface DeliveryStepProps {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    isReversed?: boolean;
}

export interface ValuePropProps {
    icon: string;
    title: string;
    alt: string;
}