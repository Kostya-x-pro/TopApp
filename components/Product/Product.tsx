import { JSX } from "react";

import { ProductProps } from "./Product.props";

import styles from './Paragraph.module.css';
import cn from "classnames";

export const Product = (props: ProductProps): JSX.Element => {
    const { 
        product,
        className,
        ...otherProps 
    } = props;

    return (
        <div>
            {product.title}
        </div>
    );
};