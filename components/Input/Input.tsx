import { JSX } from "react";

import {InputProps } from "./Input.props";

import styles from './Input.module.css';
import cn from "classnames";

export const Input = (props: InputProps): JSX.Element => {
    const { 
        className,
        placeholder,
        ...otherProps 
    } = props;

    return (
        <input 
            placeholder={placeholder}
            className={cn(className, styles.input)} 
            {...otherProps}/>
    );
};