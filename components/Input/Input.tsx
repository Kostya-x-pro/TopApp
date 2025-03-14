import { ForwardedRef, forwardRef, JSX } from "react";

import {InputProps } from "./Input.props";

import styles from './Input.module.css';
import cn from "classnames";

export const Input = forwardRef((
    props: InputProps, 
    ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
        
    const { 
        className,
        placeholder,
        error,
        ...otherProps 
    } = props;

    return (
        <div className={cn(className, styles.inputWrapper)}>
            <input 
            placeholder={placeholder}
            ref={ref}
            className={cn( styles.input, {
                [styles.error]: error
            })} 
            {...otherProps}/>
            {error && <span role="alert" className={styles.errorMessage}>{error.message}</span>}
        </div>
    );
});