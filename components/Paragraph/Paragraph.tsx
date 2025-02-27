import { JSX } from "react";

import { ParagraphProps } from "./Paragraph.props";

import styles from './Paragraph.module.css';
import cn from "classnames";

export const Paragraph = (props: ParagraphProps): JSX.Element => {
    const { 
        children, 
        size = 'm',
        className,
        ...otherProps 
    } = props;

    return (
        <p 
            className={cn(styles.paragraph, className, {
            [styles.s]: size === 's',
            [styles.m]: size === 'm',
            [styles.l]: size === 'l',
        })}
        {...otherProps}
        >
            { children }
        </p>
    );
};