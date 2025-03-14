import { ReviewModel } from "@/interfaces/product.interface";
import { DetailedHTMLProps, ParamHTMLAttributes } from "react";

export interface ReviewProps extends DetailedHTMLProps<
    ParamHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
    review: ReviewModel
}