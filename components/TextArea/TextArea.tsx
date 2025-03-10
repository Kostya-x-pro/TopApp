import { JSX } from "react";

import {TextareaProps } from "./TextArea.props";

import styles from './TextArea.module.css';
import cn from "classnames";

export const TextArea = (props: TextareaProps): JSX.Element => {
    const { 
        className,
        ...otherProps 
    } = props;

    return (
        <textarea 
            className={cn(className, styles.textarea)} 
            {...otherProps}/>
    );
};