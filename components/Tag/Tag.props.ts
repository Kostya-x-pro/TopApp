import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    size?: 's' | 'm' | 'l';
    color: 'ghost' | 'red' | 'grey' | 'green' | 'primary' | 'white';
    href?: string; 
    children: ReactNode
}