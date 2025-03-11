import { JSX } from "react";

import { DividerProps } from "./Divider.props";

import styles from './Divider.module.css';
import cn from "classnames";

export const Divider = (props: DividerProps): JSX.Element => {
    const { 
        className,
        ...otherProps 
    } = props;

    return <hr className={cn(className, styles.hr)} {...otherProps} />;
};