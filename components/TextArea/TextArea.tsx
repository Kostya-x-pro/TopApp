import { ForwardedRef, JSX, forwardRef } from "react";

import {TextareaProps } from "./TextArea.props";

import styles from './TextArea.module.css';
import cn from "classnames";

export const TextArea = forwardRef((props: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
    const { 
        className,
        error,
        ...otherProps 
    } = props;

    return (
        <div className={cn(styles.textAreaWrapper, className)}>
            <textarea 
            ref={ref}
            className={cn(styles.textarea, {
                [styles.error]: error
            })} 
            {...otherProps}/>
            {error && <span className={styles.errorMessage}>{error.message}</span>}
        </div>
    );
});