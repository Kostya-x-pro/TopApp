import { DetailedHTMLProps, ParamHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export interface RatingProps extends DetailedHTMLProps<
    ParamHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
    isEditable?: boolean;
    rating: number;
    error?: FieldError;
    setRating?: (rating: number) => void;
}