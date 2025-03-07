import { JSX } from "react";

import { TopPageComponentProps } from "./TopPage.Component.props";

import styles from './Paragraph.module.css';
import cn from "classnames";

export const TopPageComponent = (props: TopPageComponentProps): JSX.Element => {
    const { 
        page,
        products,
        firstCategory, 
    } = props;

    return (
        <>
            {products && products.length}
        </>
    );
};