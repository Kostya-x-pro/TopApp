import { JSX } from "react";

import { HeaderProps } from "./Header.props";

import styles from './Header.module.css';
import cn from "classnames";

export const Header = (props: HeaderProps): JSX.Element => {
    const { ...otherProps } = props;

    return (
        <div {...otherProps}>
            Header
        </div>
    );
};