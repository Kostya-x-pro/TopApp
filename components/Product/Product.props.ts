import { ProductModel } from "@/interfaces/product.interface";
import { DetailedHTMLProps, ParamHTMLAttributes } from "react";

export interface ProductProps extends DetailedHTMLProps<
    ParamHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
    product: ProductModel;
}