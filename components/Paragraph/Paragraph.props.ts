import { DetailedHTMLProps, ParamHTMLAttributes, ReactNode } from "react";

export interface ParagraphProps extends DetailedHTMLProps<
    ParamHTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
    children: ReactNode;
    size?: 's' | 'm' | 'l';
}