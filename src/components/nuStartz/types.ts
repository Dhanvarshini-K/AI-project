export interface NavItemProps {
    text: string;
    isActive?: boolean;
}

export interface ButtonProps {
    children: React.ReactNode;
    icon?: string;
    onClick?: () => void;
}