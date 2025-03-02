import { DetailedHTMLProps, ParamHTMLAttributes } from "react";

export interface RatingProps extends DetailedHTMLProps<
    ParamHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
    isEditable?: boolean;
    rating: number;
    setRating?: (rating: number) => void;
}