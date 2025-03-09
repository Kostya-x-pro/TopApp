import { DetailedHTMLProps, ParamHTMLAttributes, ReactNode } from "react";

export interface CardProps extends DetailedHTMLProps<
    ParamHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
    color?: 'white' | 'blue';
    children: ReactNode;
}