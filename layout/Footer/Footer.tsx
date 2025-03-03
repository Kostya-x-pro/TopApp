import { JSX } from "react";

import { FooterProps } from "./Footer.props";

import styles from './Footer.module.css';
import cn from "classnames";

export const Footer = (props: FooterProps): JSX.Element => {
    const { ...otherProps } = props;

    return (
        <div {...otherProps}>
            Footer
        </div>
    );
};